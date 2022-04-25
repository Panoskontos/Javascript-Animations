var red_kunai = gsap.from('.red',{
    rotation: 3027,
    duration:1,
    x:600,y:100,
    background:'crimson',
    paused: true,
});
var blue_kunai = gsap.to('#blue',{
    rotation: '+=360',
    // repeat:-1,
    // transformOrigin: '100% 0%',

    // what will look like inthe end
    stagger: 0.1,
    width: '60px',
    height: '60px',
    borderRadius:'50%',
    // opacity:0,
    background:'aqua',
    delay:1,
    yoyo: true,
    repeat:1,
    
    duration:4,
    x:600,y:100,
    ease: "bounce.out", 
    paused: true,

    onStart:() => {
        console.log('Les goooo')
    }
});
var green_kunai = gsap.fromTo('#green',
{x:0,y:0},
{   
    x:600,y:-50,
    ease:'bounce.out',
    duration:2,
    paused: true,});

document.querySelector("#play").onclick = () => {
    blue_kunai.play();
    red_kunai.play();
    green_kunai.play();
} 
document.querySelector("#reverse").onclick = () => 
{

    red_kunai.reverse();
    blue_kunai.reverse();
    green_kunai.reverse();
}

let boxesT = gsap.timeline({repeat:-1})

    boxesT.to('#blue')