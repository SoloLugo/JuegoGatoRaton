/*
const gato = document.getElementById("gato");
const velocidad = 100;
let mTop = 0;
let mLeft =0;

document.addEventListener('keydown', function(e) {
    if (e.keyCode == "39"){
        movimientoDerecha();
    }
    if (e.keyCode == "37"){
        movimientoIzquierda();
    }
    if (e.keyCode == "38"){
        movimientoArriba();
    }
    if (e.keyCode == "40"){
        movimientoAbajo();
    }
}, false);

function movimientoDerecha(){
    mLeft += velocidad;
    gato.style.marginLeft = mLeft +"px";

}
function movimientoArriba(){
    mTop -= velocidad;
    gato.style.marginTop = mTop +"px";

}
function movimientoIzquierda(){
    mLeft -= velocidad;
    gato.style.marginLeft = mLeft +"px";

}
function movimientoAbajo(){
    mTop += velocidad;
    gato.style.marginTop = mTop +"px";
 
} */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const canvas = document.querySelector('canvas')
canvas.width = 300
canvas.height = 300
const ctx = canvas.getContext('2d')

//ctx.fillRect(0, 0, canvas.width, canvas.height)

const getPaddle = ({x=0,color='orange'}) => ({
    x,
    y: 0,
    w: 10,
    h: 10,
    color,
    speed: 10,
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    },
    moveUp(){
        if(this.y<1) {return}
        this.y -=this.speed
    },
    moveDown(){
        if(this.y>canvas.height-this.h-1) {return}
        this.y +=this.speed
    },
    moveLeft(){
        if(this.x<1) {return}
        this.x -=this.speed
    },
    moveRight(){
        if(this.x>canvas.width-this.w-1) {return}
        this.x +=this.speed
    },
    move(){
            const a = getRandomInt(4)
        if(a===0){
            if(this.y<1) {return}
            this.y -=this.speed
        } else if (a===1){
            if(this.y>canvas.height-this.h-1) {return}
            this.y +=this.speed
        } else if (a===2) {
            if(this.x<1) {return}
            this.x -=this.speed 
        } else if (a===3) {
            if(this.x>canvas.width-this.w-1) {return}
            this.x +=this.speed
        }
    }})

const getBall = () => ({
    x:145,
    y:0,
    w:10,
    h:10,
    color:'blue',
    direction: 'right',
    draw(){
        if(this.direction === 'right'){
            this.x++
        } else {
            this.x--
        }
        if(this.x > canvas.width-20) {
            this.direction='left'
        } else if (this.x < 10) {
            this.direction= 'right'
        }
        ctx.fillStyle= this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
})

const paddleLeft = getPaddle({})
const paddleRight = getPaddle({
    x:canvas.width-10,
    color:'red'
})
const ball= getBall()

const update = () => {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ball.draw()
    paddleLeft.draw()
    paddleRight.draw()
    requestAnimationFrame(update)
}

addEventListener('keydown', e => {
    switch (e.keyCode){
        case 37: //left
            paddleLeft.moveLeft()
            paddleRight.move()
            break;
        case 38: //up
            paddleLeft.moveUp()
            paddleRight.move()
            break;
        case 39: //right
            paddleLeft.moveRight()
            paddleRight.move()
            break;
        case 40: //down
            paddleLeft.moveDown()
            paddleRight.move()
            break;
    }
})

requestAnimationFrame(update)