// create box2D definitions
 var   	b2Vec2 		= Box2D.Common.Math.b2Vec2
    ,  	b2AABB 		= Box2D.Collision.b2AABB
 	,	b2BodyDef 	= Box2D.Dynamics.b2BodyDef
 	,	b2Body 		= Box2D.Dynamics.b2Body
 	,	b2FixtureDef= Box2D.Dynamics.b2FixtureDef
 	,	b2Fixture 	= Box2D.Dynamics.b2Fixture
 	,	b2World 	= Box2D.Dynamics.b2World
 	,	b2MassData 	= Box2D.Collision.Shapes.b2MassData
 	,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
 	,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
 	,	b2DebugDraw = Box2D.Dynamics.b2DebugDraw
    ,  	b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef
    ,	b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef
    ,	b2WeldJointDef = Box2D.Dynamics.Joints.b2WeldJointDef
    ;
    
    // create our global variables
    var images		= [ 'images/atlas.png', 'images/earth_circle.png' ];
    var levelURLs	= [ 'data/level1.json', 'data/level2.json', 'data/level3.json', 'data/level4.json', 'data/level5.json', 'data/level6.json', 'data/level7.json', 'data/level8.json', 'data/level9.json', 'data/level10.json' ];
    var spriteURLs	= [ 'images/atlas.json' ];

	var canvas 	= null;
	var context = null;
	var body 	= null;

	var world	= new WorldClass(),


InitializerClass = Class.extend({    
	
	finished	: false,
	firstLoad	: true,
	paused		: true,
	actualLevel : 1,

	setup : function() 
	{
		gGameEngine.setup();
		
		gInitializer.nextLevel = 1;
		gInitializer.goNextLevel();
	
		gInitializer.animate();
		
		$('#canvas').fadeIn();
	},
	
	goNextLevel : function(){
		
		gInitializer.paused = true;
		gInitializer.actualLevel = gInitializer.nextLevel;
		
		$('#canvas').fadeOut(
			400, 
			function(){
				
			createScenario( gInitializer.actualLevel );
			
			gMenu.update( gInitializer.actualLevel );
			
			$('#canvas').fadeIn( 400, function(){
				
				if(!gInitializer.firstLoad )
					gInitializer.paused = false;
				else
					gInitializer.firstLoad = false;
			});
		});
	},
	
	completedLevel : function(){
		gInitializer.nextLevel = parseInt(gInitializer.actualLevel) + 1;
	},
	
	changeLevel : function( level ){
		
//		if( level >= gInitializer.actualLevel )
//			return;
		
		world.setDestroy 		= true;
		gInitializer.nextLevel 	= level;
	},
		
    // Gameloop
    animate : function () {
    	
		gInitializer.loop();	
      		
      	requestAnimFrame( gInitializer.animate );
    },

	loop : function()
	{
		// Store the current transformation matrix
		context.save();
		
		// Use the identity matrix while clearing the canvas
		context.setTransform(1, 0, 0, 1, 0, 0);
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		// Restore the transform
		context.restore();
		
		if( gMap.fullyLoaded && gBackground.fullyLoaded )
		{
    		if( !gInitializer.paused )
				world.update();	// world.DebugDraw clears canvas!
			
			gGameEngine.update();
			
	        var angle = gGameEngine.getEntity("Roller").body.GetAngle();
	        
			context.translate( canvas.width/2, canvas.height/2 );
			context.rotate(	angle );
		
			gBackground.drawBackground();
			gMap.draw( context );
		
	    	// we unrotate context after draw
			context.rotate(	-angle );
			context.translate( -canvas.width/2, -canvas.height/2 );
			
			gGameEngine.draw();
		}	
		
		updateFPS();
	},

	parseSprite : function( mapJSON, atlasImage ){
		
		var parsedJSON = JSON.parse(mapJSON);
		
		var spritesheet = new SpriteSheetClass();
		spritesheet.load( "images/" + parsedJSON.meta.image, atlasImage );
		spritesheet.parseAtlasDefinition( mapJSON );
	},

	parseLevel : function( mapJSON, id, atlasImage ){
		
		var parsedJSON = JSON.parse(mapJSON);
		
		var level = new LevelClass();
		
		level.load( id, mapJSON, atlasImage );
	}, 
	
	loadJSONs : function( atlasImage ){
		var urls 	= levelURLs.concat( spriteURLs );
		var count 	= 0;
		
		for ( var i = 0; i < urls.length; i++ )
		{
			$.ajax({
			type : 'GET',
			url : urls[i],
			dataType : 'json',
			complete : function( jqXHR, textStatus ){
				
					if( levelURLs.indexOf( this.url ) >= 0 )
					{
						gInitializer.parseLevel( jqXHR.responseText, levelURLs.indexOf( this.url ) + 1, atlasImage );
					}
					else 
						gInitializer.parseSprite( jqXHR.responseText, atlasImage );
					
					count++;
					
					if( count == urls.length )
						gInitializer.setup();
				}
			});
		}
	}, 
	
	loadImages : function(){
		var imgCount = 0;
		var diccImages = {};
		
		for ( var i = 0; i < images.length; i++ )
		{
			var img = new Image();
			diccImages[ images[i] ] = img;
		    
		    img.onload 	= function(){
		    	imgCount++;
		    	
		    	if ( imgCount == images.length )
	    		{
					gInitializer.loadJSONs( diccImages[ images[0] ] );
					gBackground.load( diccImages[ images[1] ] );
	    		}
		    };
		    
		 	img.src = images[i];
		}
	}
});

gInitializer = new InitializerClass();

$(document).ready(function(){
	
	$('#canvas').fadeOut(0);
	
	$("body").queryLoader2( { 
		backgroundColor : "#7ec122", 
		barColor : '#000000', 
		barHeight : '20', 
		minimumTime : 1000,
        completeAnimation: "grow",
		onComplete : gInitializer.loadImages 
	} );
	
	body 	= document.getElementById('body');
	canvas 	= document.getElementById('canvas');

	
	if(typeof G_vmlCanvasManager != 'undefined') {
		canvas = G_vmlCanvasManager.initElement(canvas);
	}
	
	context = canvas.getContext("2d"); // Grab the 2d canvas context
	// Note: The above code is a workaround for IE 8and lower. Otherwise we could have used:
	//     context = document.getElementById('canvas').getContext("2d");
	
	world.createWorld();

	gButtons.setup();
	gMenu.setup();		

	setFPS()
	updateFPS();
		
	gSM.create();
	playSoundInstance("sounds/background.mp3", true);
//	$(window).resize( centerCanvas ); 
});


