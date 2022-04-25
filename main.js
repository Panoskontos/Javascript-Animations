var red_kunai = gsap.from('#red',{
    rotation: 3027,duration:10,x:600,y:100,
    ease: "none", 
    paused: true,
});
var blue_kunai = gsap.to('#blue',{
    rotation: '+=360',
    // repeat:-1,
    // transformOrigin: '100% 0%',

    // what will look like inthe end
    width: '60px',
    height: '60px',
    borderRadius:'50%',
    opacity:0,
    background:'aqua',
    delay:2,
    yoyo: true,
    repeat:1,
    
    duration:3,
    x:600,y:100,
    ease: "none", 
    paused: true,

    onStart:() => {
        console.log('Les goooo')
    }
});
var green_kunai = gsap.fromTo('#green',{x:0,y:0},{x:600,y:-50, duration:10, paused: true,});

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