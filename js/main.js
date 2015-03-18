var $imgFirstShow = $('.art-image');
var $btnArtShowHide = $('.art-btn');

var $imgSecondShow = $('.prem-image');
var $btnPremShowHide = $('.prem-btn');

var $imgThirdShow = $('.proph-image');
var $btnProphShowHide = $('.proph-btn');

$btnArtShowHide.on('click', function () {
  $imgFirstShow.toggleClass('js-toggle-show');
});

$btnPremShowHide.on('click', function () {
  $imgSecondShow.toggleClass('js-toggle-show');
});

$btnProphShowHide.on('click', function () {
  $imgThirdShow.toggleClass('js-toggle-show');
});