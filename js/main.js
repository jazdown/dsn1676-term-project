var $imgFirstShow = $('.art-image');
var $btnArtShowHide = $('.art-btn');

var $imgSecondShow = $('.prem-image');
var $btnPremShowHide = $('.prem-btn');

var $imgThirdShow = $('.proph-image');
var $btnProphShowHide = $('.proph-btn');

var $lightningFlash = $('.wave-anim');
var $showLightningOne = $('.lightning-1');
var $showLightningTwo = $('.lightning-2');
var $showLightningThree = $('.lightning-3');

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

$lightningFlash.on('click', function () {
  $showLightningOne.addClass('js-lightning-flash');
  $showLightningTwo.addClass('js-lightning-flash-2');
  $showLightningThree.addClass('js-lightning-flash-3');
});

$lightningFlash.on('webkitAnimationEnd animationend', function () {
  $showLightningOne.removeClass('js-lightning-flash');
  $showLightningTwo.removeClass('js-lightning-flash-2');
  $showLightningThree.removeClass('js-lightning-flash-3');
});