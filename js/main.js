document.querySelector("#login").addEventListener("click", function () {
  document.getElementById("modal").classList.add("d-flex");
});

document.querySelector("#overlay").addEventListener("click", function () {
  document.getElementById("modal").classList.remove("d-flex");
});

document.querySelector("#exit").addEventListener("click", function () {
  document.getElementById("modal").classList.remove("d-flex");
});

document.querySelector("#return").addEventListener("change", function () {
  document.getElementById("return_date").classList.toggle("d-flex");
});

var today = new Date().toISOString().split("T")[0];

document.getElementById("start_date").setAttribute("min", today);
document.getElementById("start_date").setAttribute("value", today);

document.getElementById("return_date").setAttribute("min", document.getElementById("start_date").value);
var returnDate = new Date(today);
returnDate.setDate(returnDate.getDate() + 3);
returnDate = returnDate.toISOString().split("T")[0];
document.getElementById("return_date").setAttribute("value", returnDate);

document.getElementById("start_date").addEventListener("change", function () {
  document.getElementById("return_date").setAttribute("min", document.getElementById("start_date").value);
  var returnDate = new Date(document.getElementById("start_date").value);
  returnDate.setDate(returnDate.getDate() + 3);
  returnDate = returnDate.toISOString().split("T")[0];
  document.getElementById("return_date").setAttribute("value", returnDate);
})


var quantityElement = document.getElementById("quantity")
var selectQuantityElement = document.getElementById("select_quantity");
var closeQuantityElement = document.getElementById("close_quantity");
var plusQuantityAdultElement = document.getElementById("plus_quantity_adult");
var minusQuantityAdultElement = document.getElementById("minus_quantity_adult");
var plusQuantityChildElement = document.getElementById("plus_quantity_child");
var minusQuantityChildElement = document.getElementById("minus_quantity_child");
var adultQuantityElement = document.getElementById("adult_quantity");
var childQuantityElement = document.getElementById("child_quantity");
var valueInputQuantity = quantityElement.value

quantityElement.addEventListener("click", function (e) {
  selectQuantityElement.classList.add("d-block");
});
closeQuantityElement.addEventListener("click", function (e) {
  document.getElementById("error_quantity").classList.remove("d-block");
  document.getElementById("error_quantity_child").classList.remove("d-block");
  selectQuantityElement.classList.remove("d-block");
});

minusQuantityAdultElement.addEventListener("click", function (e) {
  if (adultQuantityElement.textContent === "1")
    return;
  if (parseInt(valueInputQuantity[0]) + parseInt(valueInputQuantity[13]) <= 7) {
    document.getElementById("error_quantity").classList.remove("d-block");
  }
  if (parseInt(quantityElement.value[0]) <= parseInt(quantityElement.value[13])) {
    document.getElementById("error_quantity_child").classList.add("d-block");
    setTimeout(function () {
      document.getElementById("error_quantity_child").classList.remove("d-block");
    }, 4000)
    return;
  } else {
    document.getElementById("error_quantity_child").classList.remove("d-block");
  }
  var adultQuantity = parseInt(adultQuantityElement.textContent) - 1;
  adultQuantityElement.textContent = adultQuantity;
  valueInputQuantity = adultQuantity + valueInputQuantity.substring(1);
  quantityElement.value = valueInputQuantity
});

plusQuantityAdultElement.addEventListener("click", function (e) {
  if (parseInt(valueInputQuantity[0]) + parseInt(valueInputQuantity[13]) >= 7) {
    document.getElementById("error_quantity").classList.add("d-block");
    setTimeout(function () {
      document.getElementById("error_quantity").classList.remove("d-block");
    }, 4000)
    return;
  } else {
    document.getElementById("error_quantity").classList.remove("d-block");
  }
  if (parseInt(quantityElement.value[0]) >= parseInt(quantityElement.value[13])) {
    document.getElementById("error_quantity_child").classList.remove("d-block");
  }
  var adultQuantity = parseInt(adultQuantityElement.textContent) + 1;
  adultQuantityElement.textContent = adultQuantity;
  valueInputQuantity = adultQuantity + valueInputQuantity.substring(1);
  quantityElement.value = valueInputQuantity
});


minusQuantityChildElement.addEventListener("click", function (e) {
  if (childQuantityElement.textContent === "0")
    return;
  if (parseInt(valueInputQuantity[0]) + parseInt(valueInputQuantity[13]) <= 7) {
    document.getElementById("error_quantity").classList.remove("d-block");
  }
  if (parseInt(quantityElement.value[0]) >= parseInt(quantityElement.value[13])) {
    document.getElementById("error_quantity_child").classList.remove("d-block");
  }
  var childQuantity = parseInt(childQuantityElement.textContent) - 1;
  childQuantityElement.textContent = childQuantity;
  valueInputQuantity = valueInputQuantity.substring(0, 13) + childQuantity + valueInputQuantity.substring(14);
  quantityElement.value = valueInputQuantity;
});

plusQuantityChildElement.addEventListener("click", function (e) {
  if (parseInt(valueInputQuantity[0]) + parseInt(valueInputQuantity[13]) >= 7) {
    document.getElementById("error_quantity").classList.add("d-block");
    setTimeout(function () {
      document.getElementById("error_quantity").classList.remove("d-block");
    }, 4000)
    return;
  } else {
    document.getElementById("error_quantity").classList.remove("d-block");
  }
  if (parseInt(quantityElement.value[0]) <= parseInt(quantityElement.value[13])) {
    document.getElementById("error_quantity_child").classList.add("d-block");
    setTimeout(function () {
      document.getElementById("error_quantity_child").classList.remove("d-block");
    }, 4000)
    return;
  } else {
    document.getElementById("error_quantity_child").classList.remove("d-block");
  }

  var childQuantity = parseInt(childQuantityElement.textContent) + 1;
  childQuantityElement.textContent = childQuantity;
  valueInputQuantity = valueInputQuantity.substring(0, 13) + childQuantity + valueInputQuantity.substring(14);
  quantityElement.value = valueInputQuantity;
});

// validation from_location and to_location
var fromLocationElement = document.getElementById("from_location");
var toLocationElement = document.getElementById("to_location");

fromLocationElement.addEventListener("change", function() {
  var errorLocationElements = document.getElementsByClassName("errorLocation");
  if(fromLocationElement.value === toLocationElement.value) {
    for (var i = 0; i < errorLocationElements.length; i++) {
      errorLocationElements[i].classList.add("d-block");
    }
  } else {
    for (var i = 0; i < errorLocationElements.length; i++) {
      errorLocationElements[i].classList.remove("d-block");
    }
  }
})

toLocationElement.addEventListener("change", function() {
  var errorLocationElements = document.getElementsByClassName("errorLocation");
  if(fromLocationElement.value === toLocationElement.value) {
    for (var i = 0; i < errorLocationElements.length; i++) {
      errorLocationElements[i].classList.add("d-block");
    }
  } else {
    for (var i = 0; i < errorLocationElements.length; i++) {
      errorLocationElements[i].classList.remove("d-block");
    }
  }
})

document.getElementById("searchFlight").addEventListener("submit", function(event) {
  if (fromLocationElement.value === toLocationElement.value) {
    event.preventDefault();
  }
});

// Validation Login email
document.getElementById('email').addEventListener('change', function () {
  if (!validateEmail(this.value)) {
    document.getElementById("emailHelp").classList.add("d-block");
    document.getElementById("email").classList.add("border-danger")
  } else {
    document.getElementById("emailHelp").classList.remove("d-block");
    document.getElementById("email").classList.remove("border-danger")
  }
})

document.getElementById("loginForm").addEventListener("submit", function(event) {
  if (!validateEmail(document.getElementById('email').value)) {
    event.preventDefault();
  }
});

function validateEmail(email) {
  // Sử dụng biểu thức chính quy để kiểm tra định dạng email
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// 

(function () {

  var $$ = function (selector, context) {
    var context = context || document;
    var elements = context.querySelectorAll(selector);
    return [].slice.call(elements);
  };

  function _fncSliderInit($slider, options) {
    var prefix = ".fnc-";

    var $slider = $slider;
    var $slidesCont = $slider.querySelector(prefix + "slider__slides");
    var $slides = $$(prefix + "slide", $slider);
    var $controls = $$(prefix + "nav__control", $slider);
    var $controlsBgs = $$(prefix + "nav__bg", $slider);
    var $progressAS = $$(prefix + "nav__control-progress", $slider);

    var numOfSlides = $slides.length;
    var curSlide = 1;
    var sliding = false;
    var slidingAT = +parseFloat(getComputedStyle($slidesCont)["transition-duration"]) * 1000;
    var slidingDelay = +parseFloat(getComputedStyle($slidesCont)["transition-delay"]) * 1000;

    var autoSlidingActive = false;
    var autoSlidingTO;
    var autoSlidingDelay = 5000; // default autosliding delay value
    var autoSlidingBlocked = false;

    var $activeSlide;
    var $activeControlsBg;
    var $prevControl;

    function setIDs() {
      $slides.forEach(function ($slide, index) {
        $slide.classList.add("fnc-slide-" + (index + 1));
      });

      $controls.forEach(function ($control, index) {
        $control.setAttribute("data-slide", index + 1);
        $control.classList.add("fnc-nav__control-" + (index + 1));
      });

      $controlsBgs.forEach(function ($bg, index) {
        $bg.classList.add("fnc-nav__bg-" + (index + 1));
      });
    };

    setIDs();

    function afterSlidingHandler() {
      $slider.querySelector(".m--previous-slide").classList.remove("m--active-slide", "m--previous-slide");
      $slider.querySelector(".m--previous-nav-bg").classList.remove("m--active-nav-bg", "m--previous-nav-bg");

      $activeSlide.classList.remove("m--before-sliding");
      $activeControlsBg.classList.remove("m--nav-bg-before");
      $prevControl.classList.remove("m--prev-control");
      $prevControl.classList.add("m--reset-progress");
      var triggerLayout = $prevControl.offsetTop;
      $prevControl.classList.remove("m--reset-progress");

      sliding = false;
      var layoutTrigger = $slider.offsetTop;

      if (autoSlidingActive && !autoSlidingBlocked) {
        setAutoslidingTO();
      }
    };

    function performSliding(slideID) {
      if (sliding) return;
      sliding = true;
      window.clearTimeout(autoSlidingTO);
      curSlide = slideID;

      $prevControl = $slider.querySelector(".m--active-control");
      $prevControl.classList.remove("m--active-control");
      $prevControl.classList.add("m--prev-control");
      $slider.querySelector(prefix + "nav__control-" + slideID).classList.add("m--active-control");

      $activeSlide = $slider.querySelector(prefix + "slide-" + slideID);
      $activeControlsBg = $slider.querySelector(prefix + "nav__bg-" + slideID);

      $slider.querySelector(".m--active-slide").classList.add("m--previous-slide");
      $slider.querySelector(".m--active-nav-bg").classList.add("m--previous-nav-bg");

      $activeSlide.classList.add("m--before-sliding");
      $activeControlsBg.classList.add("m--nav-bg-before");

      var layoutTrigger = $activeSlide.offsetTop;

      $activeSlide.classList.add("m--active-slide");
      $activeControlsBg.classList.add("m--active-nav-bg");

      setTimeout(afterSlidingHandler, slidingAT + slidingDelay);
    };



    function controlClickHandler() {
      if (sliding) return;
      if (this.classList.contains("m--active-control")) return;
      if (options.blockASafterClick) {
        autoSlidingBlocked = true;
        $slider.classList.add("m--autosliding-blocked");
      }

      var slideID = +this.getAttribute("data-slide");

      performSliding(slideID);
    };

    $controls.forEach(function ($control) {
      $control.addEventListener("click", controlClickHandler);
    });

    function setAutoslidingTO() {
      window.clearTimeout(autoSlidingTO);
      var delay = +options.autoSlidingDelay || autoSlidingDelay;
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 1;

      autoSlidingTO = setTimeout(function () {
        performSliding(curSlide);
      }, delay);
    };

    if (options.autoSliding || +options.autoSlidingDelay > 0) {
      if (options.autoSliding === false) return;

      autoSlidingActive = true;
      setAutoslidingTO();

      $slider.classList.add("m--with-autosliding");
      var triggerLayout = $slider.offsetTop;

      var delay = +options.autoSlidingDelay || autoSlidingDelay;
      delay += slidingDelay + slidingAT;

      $progressAS.forEach(function ($progress) {
        $progress.style.transition = "transform " + (delay / 1000) + "s";
      });
    }

    $slider.querySelector(".fnc-nav__control:first-child").classList.add("m--active-control");

  };

  var fncSlider = function (sliderSelector, options) {
    var $sliders = $$(sliderSelector);

    $sliders.forEach(function ($slider) {
      _fncSliderInit($slider, options);
    });
  };

  window.fncSlider = fncSlider;

}());

/* not part of the slider scripts */

/* Slider initialization
options:
autoSliding - boolean
autoSlidingDelay - delay in ms. If audoSliding is on and no value provided, default value is 5000
blockASafterClick - boolean. If user clicked any sliding control, autosliding won't start again
*/
fncSlider(".example-slider", { autoSlidingDelay: 4000 });

var $demoCont = document.querySelector(".demo-cont");

[].slice.call(document.querySelectorAll(".fnc-slide__action-btn")).forEach(function ($btn) {
  $btn.addEventListener("click", function () {
    $demoCont.classList.toggle("credits-active");
  });
});

document.querySelector(".demo-cont__credits-close").addEventListener("click", function () {
  $demoCont.classList.remove("credits-active");
});

document.querySelector(".js-activate-global-blending").addEventListener("click", function () {
  document.querySelector(".example-slider").classList.toggle("m--global-blending-active");
});



