$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".dark-navbar").toggleClass("scrolled", $(this).scrollTop() > 50);
            $(".dark-navbar").removeClass("container-lg");
            $(".brandImg").attr("src", "./assets/images/logo/Logo-light.png");
        }
        else {
            $(".dark-navbar").addClass("container-lg");
            $(".dark-navbar").toggleClass("scrolled", $(this).scrollTop() > 50);
            $(".brandImg").attr("src", "./assets/images/logo/Logo-dark.png");
        }
    });
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $(".dark-navbar").addClass("scrolled");
            $(".brandImg").attr("src", "./assets/images/logo/Logo-dark.png");
        } else {
            $(".dark-navbar").removeClass("scrolled");
            $(".brandImg").attr("src", "./assets/images/logo/Logo-light.png");
        }
    });
    if ($(window).width() < 768) {
        $(".dark-navbar").addClass("scrolled");
        $(".brandImg").attr("src", "./assets/images/logo/Logo-dark.png");
    }
    else {
        $(".dark-navbar").removeClass("scrolled");
        $(".brandImg").attr("src", "./assets/images/logo/Logo-light.png");
    } 
 
    
});

// maltipel imgs

$(document).ready(function() {
    $('#file-input').on('change', function() {
      var files = $(this).get(0).files;
      for (var i = 0; i < files.length; i++) {
        var image = $('<img>').addClass('uploaded-image').attr('src', URL.createObjectURL(files[i]));
        var div = $('<div>').addClass('upload-property-image').append('<div class="del-icon"><img src="./assets/images/icons/delete.png" alt=""></div>');
        var  main = div.append(image);
        // append(image)
        $('.image-container').append(main);
      }
      $(this).val('');
  });
  }); 
//  delete icon

$('.del-icon').click(function(){
    $(this).siblings('img').attr('src', './assets/images/icons/delete.png');
});



$('.amanities-checks').change(function () {
    if ($(this).is(':checked')) {

      $(this).siblings('.form-check-label').css('color', '#f30a11');
    //   $(this).closest('li').find('.general-features').css('color', '#222222');
    } else {
      $(this).siblings('.form-check-label').css('color', '');
 
    }
  });

//   <!-- ************======((( FULL- WIDTH IMGES SLIDER, IMG SLDER OF SUITE JAVASCRIPT)))======********** -->
// 
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}
// // Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].setAttribute("style", "display:block;");
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
let currentSlideIndex = 1;
function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex > document.querySelectorAll(".demo").length) {
        currentSlideIndex = 1;
    }
    currentSlide(currentSlideIndex);
    window.scrollBy({
        top: 0,
        left: window.innerWidth,
        behavior: "smooth", // Replace with your valid behavior value
    });
}
// Add auto slide and scroll features
// setInterval(nextSlide, 3000);