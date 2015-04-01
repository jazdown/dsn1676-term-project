var $imgFirstShow = $('.art-image');
var $btnArtShowHide = $('.art-btn');

var $imgSecondShow = $('.prem-image');
var $btnPremShowHide = $('.prem-btn');

var $imgThirdShow = $('.proph-image');
var $btnProphShowHide = $('.proph-btn');

$btnArtShowHide.on('click', function () {
  $imgSecondShow.removeClass('js-toggle-show');
  $imgThirdShow.removeClass('js-toggle-show');
  $imgFirstShow.toggleClass('js-toggle-show');
});

$btnPremShowHide.on('click', function () {
  $imgFirstShow.removeClass('js-toggle-show');
  $imgThirdShow.removeClass('js-toggle-show');
  $imgSecondShow.toggleClass('js-toggle-show');
});

$btnProphShowHide.on('click', function () {
  $imgFirstShow.removeClass('js-toggle-show');
  $imgSecondShow.removeClass('js-toggle-show');
  $imgThirdShow.toggleClass('js-toggle-show');
});

$('.nav').localScroll();

$('.learn-button').localScroll();

$('.back-top-button').localScroll();