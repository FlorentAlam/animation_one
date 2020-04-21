import Timeline from "./Timeline.js";

const name = document.querySelector('.name');
const position = name.getBoundingClientRect();

const perturbator = document.getElementById('perturbator');
perturbator.style.transform = `translateX(${-position.left - 120}px)`;
const f = document.getElementById('f');
f.style.transform = `translateX(${-position.left - 100}px)`;


const t1 = new Timeline(perturbator);
t1.to({x: -position.left / 2, duration: 0.6});
if(window.innerWidth > 400){
    t1.to({x: -position.left / 4, duration: 0.4, delay: 0.2});
}
t1.to({x: -20, duration: 0.4, delay: 0.2});
t1.to({x: -60, duration: .3, ease: 'Expo.easeOut'});
t1.to({scaleY: 0.2, scaleX: 1.8, duration: 0.1, ease: 'Bounce.easeOut'})
t1.to({scaleY: 1, scaleX: 1, duration: 0.1, delay: 0.1, ease: 'Bounce.easeIn'})
t1.to({x: 0, y: -100, scaleY: 1, scaleX: 1, duration: 0.4, ease: 'Circ.easeOut'});
t1.to({x: 30, y: -58, duration: 0.3, ease: 'Circ.easeIn'});
t1.to({scaleY: 0.4, scaleX: 1.6, duration: 0.1, ease: 'Bounce.easeOut'})
t1.to({scaleY: 1, scaleX: 1, duration: 0.1, delay: 0.1, ease: 'Bounce.easeIn'})
t1.to({x: position.width - 150, y: -200, scaleX: 1, scaleY: 1, duration: 0.6, ease: 'Circ.easeOut'});
t1.to({x: position.width - 80, y: -58, duration: 0.3, ease: 'Circ.easeIn'});
t1.to({scaleY: 0.4, scaleX: 1.6, duration: 0.1, ease: 'Bounce.easeOut'})
t1.to({scaleY: 1, scaleX: 1, duration: 0.1, delay: 0.1, ease: 'Bounce.easeOut'})
t1.to({x: position.width - 25, y: -120, duration: 0.3, ease: 'Circ.easeOut'});
t1.to({x: position.width + 50, y: 0, duration: 0.2, ease: 'Circ.easeIn'});
t1.to({scaleY: 0.4, scaleX: 1.6, duration: 0.1, ease: 'Bounce.easeOut'})
t1.to({scaleY: 1, scaleX: 1, duration: 0.1, delay: 0.1, ease: 'Bounce.easeOut'})
t1.to({x: position.width, y: 0, duration: 0.3, ease: 'Expo.easeOut', delay: 0.1, onComplete: revealSlogan});

const t2 = new Timeline(f);
t2.to({x: -position.left / 2 + 20, duration: 0.6})
if(window.innerWidth > 400){
    t2.to({x: -position.left / 4 + 20, duration: 0.4, delay: 0.2});
}
t2.to({x: 0, duration: 0.4, delay: 0.2});

function revealSlogan(){
    const slogan = document.querySelector('.slogan');
    gsap.to(slogan, {y: 0, opacity: 1, duration: .5, ease: 'Expo.easeOut', delay: 0.2});
}