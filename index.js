const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')

import {body} from "./db.js"
import {skinColours} from "./db.js"


function searchByName(name, data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === name) {
            return data[i].path
        }
    }
    return null;
}

const shirt = searchByName('shirt', body)
const head = searchByName('head', body)
const arms = searchByName('arms', body)

function drawPath(ctx, path, x, y, scale = 1, color = '#fffff') {
    const path2D = new Path2D(path)
    ctx.save()
    ctx.translate(x, y)
    ctx.scale(scale, scale)
    ctx.fillStyle = color
    ctx.fill(path2D)
    ctx.restore()
}

function drawCharacter(x, y, scale = 1, skin) {
    const colour = skinColours[skin]
    drawPath(ctx, head, x, y, scale, colour)
    drawPath(ctx, arms, x + (90 * scale), y + (320 * scale), scale, colour)
    drawPath(ctx, shirt, x + (85 * scale), y + (250 * scale), scale, '#ed1c24')
}



drawCharacter(10, 50, 2.2, 3)