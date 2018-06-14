//twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');



$(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');

  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');

    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }

    return false;
  });

  // parallax effect
  $.stellar();

  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  //submit button
  $('#button').on('click', function() {
    var comment = $('.message-box').val();
    $('#visible-comment').html(comment);
    if ('comment' == '')
      $('comment').css("border", "red");
    else { $('comment').hide();
    };

    return true;
  });

  //character count
  $(".message-box").on("keyup", function() {
    var charCount = $(".message-box").val().length;
    console.log(charCount);
    $("#char-count").html(charCount);
    if (charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "black");
    }
  });

  // work section
  for(var i = 0; i < works.length; ++i ) {
    $("#work").append("\
    <div class='col-sm-6 col-md-3'>\
      <a href='" + works[i].url +"' class='work-img'>\
        <img class='img-responsive' src='" + works[i].pic + "'>\
        <span class='info'>\
          <p class="proj-title">" + works[i].title + "</p>\ 
        </span>\ 
      </a>\
    </div>\
    ")
  }

  $(".work-img").mouseenter( function() {
    $(".info", this).show();
  }).mouseleave(function(){
    $(".info", this).hide();
  });

  var images = $("#work img");
  console.log(images); //checking code

  if(i%2 === 0){
    $(images[i]).css("border", "3px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "3px solid salmon")
  };

  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
});