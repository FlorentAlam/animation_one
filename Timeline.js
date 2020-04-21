export default class Timeline{
    constructor(element){
        this.timeline = gsap.timeline();
        this.el = element;
    }
    to(values){
        this.timeline.to(this.el, values)
    }
}