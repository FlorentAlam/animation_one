import Particule from "./Particule.js";

// const cursor = document.querySelector('.cursor');
// window.addEventListener('mousemove', (event) => {
//     gsap.to(cursor, {x: event.clientX - 7, y: event.clientY - 7, duration: 1.5, ease: 'Elastic.easeOut'});
// });


// const name = document.querySelector('.name');
// name.addEventListener('mouseover', () => {
//     gsap.to(cursor, {scale: 5, duration: .4});
// });
// name.addEventListener('mouseleave', () => {
//     gsap.to(cursor, {scale: 1, duration: .4});
// });

// const slogan = document.querySelector('.slogan');
// gsap.to(slogan, {y: 0, opacity: 1, duration: 0.5, delay: 0.4});
// const btn = document.querySelector('button');
// gsap.to(btn, {y: 0, opacity: 1, duration: 0.5, delay: 0.8});

const name = document.querySelector('.name');
const position = name.getBoundingClientRect();
console.log(position);

const perturbator = document.getElementById('perturbator');
perturbator.style.transform = `translateX(${-position.left - 120}px)`;
const f = document.getElementById('f');
f.style.transform = `translateX(${-position.left - 100}px)`;



const t1 = gsap.timeline();
t1.to(perturbator, {x: -position.left / 2, duration: 0.6})
t1.to(perturbator, {x: -position.left / 4, duration: 0.4, delay: 0.2})
t1.to(perturbator, {x: -20, duration: 0.4, delay: 0.2});
t1.to(perturbator, {x: -60, duration: .3, ease: 'Expo.easeOut'});
t1.to(perturbator, {scaleY: 0.2, scaleX: 1.8, duration: 0.1, ease: 'Bounce.easeOut'})
t1.to(perturbator, {scaleY: 1, scaleX: 1, duration: 0.1, delay: 0.1, ease: 'Bounce.easeIn'})
t1.to(perturbator, {x: 0, y: -100, scaleY: 1, scaleX: 1, duration: 0.4, ease: 'Circ.easeOut'});
t1.to(perturbator, {x: 30, y: -58, duration: 0.3, ease: 'Circ.easeIn'});
t1.to(perturbator, {scaleY: 0.4, scaleX: 1.6, duration: 0.1, ease: 'Bounce.easeOut'})
t1.to(perturbator, {scaleY: 1, scaleX: 1, duration: 0.1, delay: 0.1, ease: 'Bounce.easeIn'})
t1.to(perturbator, {x: 150, y: -200, scaleX: 1, scaleY: 1, duration: 0.6, ease: 'Circ.easeOut'});
t1.to(perturbator, {x: 250, y: -58, duration: 0.3, ease: 'Circ.easeIn'});
t1.to(perturbator, {scaleY: 0.4, scaleX: 1.6, duration: 0.1, ease: 'Bounce.easeOut'})
t1.to(perturbator, {scaleY: 1, scaleX: 1, duration: 0.1, delay: 0.1, ease: 'Bounce.easeOut'})
t1.to(perturbator, {x: 360, y: -120, duration: 0.3, ease: 'Circ.easeOut'});
t1.to(perturbator, {x: 460, y: 0, duration: 0.2, ease: 'Circ.easeIn'});
t1.to(perturbator, {scaleY: 0.4, scaleX: 1.6, duration: 0.1, ease: 'Bounce.easeOut'})
t1.to(perturbator, {scaleY: 1, scaleX: 1, duration: 0.1, delay: 0.1, ease: 'Bounce.easeOut'})
t1.to(perturbator, {x: 375, y: 0, duration: 0.3, ease: 'Expo.easeOut', delay: 0.1, onComplete: revealSlogan});

const t2 = gsap.timeline();
t2.to(f, {x: -position.left / 2 + 20, duration: 0.6})
t2.to(f, {x: -position.left / 4 + 20, duration: 0.4, delay: 0.2})
t2.to(f, {x: 0, duration: 0.4, delay: 0.2});

function revealSlogan(){
    const slogan = document.querySelector('.slogan');
    gsap.to(slogan, {y: 0, opacity: 1, duration: .5, ease: 'Expo.easeOut'});
}