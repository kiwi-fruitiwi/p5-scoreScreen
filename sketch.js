/**
 * @author kiwi
 * @date 2022.02.17
 *
 * placeholder project for the score screen of TyperC, so I can get rid of
 * the planning mp4 and screenshot from my desktop :p
 */
let font

function preload() {
    font = loadFont('data/meiryo.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
}

function draw() {    
    background(234, 34, 24)
}