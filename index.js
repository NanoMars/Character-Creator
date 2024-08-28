var canvas = document.createElement('canvas')

canvas.id = "CursorLayer"
canvas.width = 1224
canvas.height = 768
canvas.style.zIndex = 8
canvas.style.position = "absolute"

var body = document.getElementsByTagName("body")[0]
body.appendChild(canvas)
cursorLayer = document.getElementById("CursorLayer")
var ctx = canvas.getContext("2d")

function drawSVG(ctx, x, y, size, img, colour = undefined) {
    console.log("1")
    img.onload = function() {
        console.log("2")
        ctx.drawImage(img, x, y, img.width * size, img.height * size)
        if (colour !== undefined) {
            ctx.globalCompositeOperation = "source-in"
            ctx.fillStyle = colour
            ctx.fillRect(x, y, img.width * size, img.height * size)
        }
    }
    console.log("3")
}

var shirt = new Image()
shirt.src = "./character/body/shirt.svg"

var head = new Image()
head.src = "./character/body/head.svg"

drawSVG(ctx, 0, 0, 5, head, "blue")
