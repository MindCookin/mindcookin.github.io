MenuClass = Class.extend ({
	
	list : null,
	maxLevel : 0,
	
	setup : function()
	{
		gMenu.list = $("#levelsList");
//		$("#levelsList a").click( gMenu.clickHandler );
	},
	
	update : function( levelId ){
		
		if( gMenu.maxLevel < levelId )
			gMenu.maxLevel = levelId;
		
		gMenu.list.children().each( function( index ) {
			
			index++;
			
			if( index == levelId )
			{
				$(this).removeClass('passed');
				$(this).addClass('active');
			}	
			else if( index < gMenu.maxLevel )
			{
				$(this).removeClass('active');
				$(this).addClass('passed');
			} else 
			{
				$(this).removeClass('passed');
				$(this).removeClass('active');
			}
		});
		
		Cufon.refresh();
	},
	
	clickHandler : function( ){
		var lvl = $(this).attr('href').substr(1, 2);
		gInitializer.changeLevel( lvl );
	},
	
	enableSwitch : function(){
		$("#levelsList a").click( gMenu.clickHandler );
		$("#levelsList a").css('cursor', 'pointer');
	}
});

gMenu = new MenuClass();
