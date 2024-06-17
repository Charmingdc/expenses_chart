// using jQuery

$(document).ready(function() {
 $.ajax({
   url: 'data.json',
   dataType: 'json',
   success: function(data) {
       
      var zero = data[0];
      var one = data[1];
      var two = data[2];
      var three = data[3];
      var four  = data[4];
      var five = data[5];
      var six = data[6];
      
      $('#first').text(zero.day);
      $("#sec").text(one.day);
      $('#third').text(two.day);
      $('#fourth').text(three.day);
      $('#fifth').text(four.day);
      $('#sixth').text(five.day);
      $('#seventh').text(six.day);
           
      $('#bar0').css('height', zero.amount + 2 + '%');
      $('#bar1').css('height', one.amount + 17 + '%');
      $('#bar2').css('height', two.amount + 35 + '%');
      $('#bar3').css('height', three.amount + 14 + '%');
      $('#bar4').css('height', four.amount + 6 + '%');
      $('#bar5').css('height', five.amount + 26 + '%');
      $('#bar6').css('height', six.amount + 8 + '%'); 
     
     const newDay = new Date(); 
     const day = newDay.getDay(); 

     if (day == 1) {
       $('#bar0').css('background', 'hsl(186, 34%, 60%)');
     } else if (day == 2) {
       $('#bar1').css('background', 'hsl(186, 34%, 60%)');
     } else if (day == 3) {
       $('#bar2').css('background', 'hsl(186, 34%, 60%)');
     } else if (day == 4) {
        $('#bar3').css('background', 'hsl(186, 34%, 60%)');
     } else if (day == 5) {
        $('#bar4').css('background', 'hsl(186, 34%, 60%)');
     } else if (day == 6) {
        $('#bar5').css('background', 'hsl(186, 34%, 60%)');
     } else if (day == 0) {
        $('#bar6').css('background', 'hsl(186, 34%, 60%)');
     }    
     

     tippy('#bar0', {
        content: '$' + zero.amount,
        arrow: false,
        animation: 'fade',
        interactive: true,
        allowHTML: true,
     });
     
       tippy('#bar1', {
        content: '$' + one.amount,
        arrow: false,
        animation: 'fade',
        interactive: true,
        allowHTML: true,
     });
     
       tippy('#bar2', {
        content: '$' + two.amount,
        arrow: false,
        animation: 'fade',
        interactive: true,
        allowHTML: true,
     });
     
       tippy('#bar3', {
        content: '$' + three.amount,
        arrow: false,
        animation: 'fade',
        interactive: true,
        allowHTML: true,
     });
     
       tippy('#bar4', {
        content: '$' + four.amount,
        arrow: false,
        animation: 'fade',
        interactive: true,
        allowHTML: true,
     });
     
     tippy('#bar5', {
        content: '$' + five.amount,
        arrow: false,
        animation: 'fade',
        interactive: true,
        allowHTML: true,
     });
     
     tippy('#bar6', {
        content: '$' + six.amount,
        arrow: false,
        animation: 'fade',
        interactive: true,
        allowHTML: true,
     });

    },
    error: function(xhr) {
      console.log('Error loading data' + xhr.statusTxt)
    }
    
   });   
});
