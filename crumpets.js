class Crumpets{
    constructor(){
        var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'densiy':1.2
        }
    }
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

    }
}   