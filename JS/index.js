
$( "#btn-slide" ).click(function() {
    $( "#navbarslide" ).toggle( "slow", function() {
    
    });
  });



  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  var days =parseInt($("#days").html());
  var houres =parseInt($("#houres").html());
  var minutes =parseInt($("#minutes").html());
  var seconds =parseInt($("#seconds").html());
  setInterval(function(){
if(seconds>0 && seconds<=60){
  seconds=seconds-1;
  $("#seconds").text(seconds);
}
if( seconds==0 && minutes>0){
  minutes--;
  seconds=60;
  $("#seconds").text(seconds);
  $("#minutes").text(minutes)
}
if(minutes==0 && houres>0){
  minutes=60;
  houres--;
  $("#minutes").text(minutes);
  $("#houres").text(houres);
}
if(houres==0 && days>0){
  houres=24;
  days--;
  $("#houres").text(houres);
  $("#days").text(days);
}

    }, 1000);

    $("#lan-change").click(function(){

      if($("#lan-change").val()==="AR"){
        $(".img-lan").attr("src", "./assets/eg.png");
      }
      else if($("#lan-change").val()==="EN"){
        $(".img-lan").attr("src", "./assets/en.png");
      }
     
     
    })


