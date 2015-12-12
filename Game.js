$( document ).ready(function() {
    
    $(document).on('mousemove',function(e) {
        
    
        var xPos = e.clientX; 
        $('#player').css({'left':xPos*.95})


   
     }); 
     
    function replaceImage(clickedId) {
        document.getElementById(clickedId).style.opacity = 0.0;
    }
    
    var fighter = document.getElementById('fighter');
    fighter.addEventListener('click', function() {
       replaceImage('fighter');
    });
    
    var fighter2 = document.getElementById('fighter2');
    fighter.addEventListener('click', function() {
       replaceImage('fighter2');
    });
     // create a variable and grab id of tie fighter
     // when div is clicked, fire off the following function:
     // inner html of div = explosion image
     
     
});
