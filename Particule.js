export default class Particule{
    constructor(container){
        this.particule = document.createElement('div');
        this.particule.classList.add('particule');
        container.appendChild(this.particule);
        this.pos = this.particule.getBoundingClientRect();
    }

    animate(){
        gsap.to(this.particule, {y: 300, duration: Math.random(), opacity: 0, delay: Math.random() * 3});
    }

}