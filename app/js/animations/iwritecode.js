(function () {

  var counter = 1;
  var text = "I write code";

  var interval = setInterval( function () {
   if (++counter <= text.length){
     if (!!document.querySelector) {
       document.querySelector('h1').innerHTML = text.substring(0, counter);
     } else {
       document.getElementsByTagName('h1')[0].innerHTML = text.substring(0, counter);
     }
   } else {
    clearInterval(interval);
   }
  }, 100)

}())
