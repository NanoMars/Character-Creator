const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')


import {character} from "./db.js"

function searchByName(name) {
    for (let i = 0; i < character.length; i++) {
        if (character[i].name === name) {
            return character[i].path
        }
    }
    return null
}

const shirt = searchByName('shirt')

function drawPath(ctx, path, x, y, scale = 1, color = '#fffff') {
    const path2D = new Path2D(path)
    ctx.save()
    ctx.translate(x, y)
    ctx.scale(scale, scale)
    ctx.fillStyle = color
    ctx.fill(path2D)
    ctx.restore()
}

const pathPosition = { x: 100, y: 100, scale: 1, color: '#ed1c24' }

drawPath(ctx, shirt, pathPosition.x, pathPosition.y, pathPosition.scale, pathPosition.color)
