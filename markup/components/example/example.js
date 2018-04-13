var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
    triggerElement: '#promo',
    triggerHook: 0.2,
    duration: '300px'
})
.setClassToggle('#promo', 'fade-in')
.addIndicators({
    name: 'fade scene',
    colorTrigger: 'black',
    colorStart: 'green',
    colorEnd: 'red'
})
.addTo(controller);
