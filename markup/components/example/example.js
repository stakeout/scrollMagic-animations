var controller = new ScrollMagic.Controller();


  // build tween
  var tween = TweenMax.to(".promo", 1, {css: {scale: 0}, ease: Linear.easeNone});

var ourScene = new ScrollMagic.Scene({
    triggerElement: '.elem',
    triggerHook: 0.9,
    duration: '100%'
})
.setClassToggle('#promo', 'fade-in')
.setTween(tween)
.addIndicators({
    name: 'fade scene',
    colorTrigger: 'black',
    colorStart: 'green',
    colorEnd: 'red'
})
.addTo(controller);
