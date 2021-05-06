$(function() {

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price__from').text('$' + data.from + '.00');
      $('.filter-price__to').text('$' + data.to + '.00');
    },
    onChange: function (data) {
      $('.filter-price__from').text('$' + data.from + '.00');
      $('.filter-price__to').text('$' + data.to + '.00');
    },
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".filter-recent__star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "6px",
    readOnly: true
  });

  var mixer = mixitup('.products__item');

  var mixer = mixitup('.products-design__item');
  
});