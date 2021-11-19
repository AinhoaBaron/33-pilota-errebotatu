input.onButtonPressed(Button.A, function () {
    pausa = 200
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
})
input.onButtonPressed(Button.B, function () {
    pausa = 700
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    game.resume()
})
let pausa = 0
let pilota = game.createSprite(3, 2)
pausa = 500
basic.forever(function () {
    pilota.move(1)
    pilota.ifOnEdgeBounce()
    basic.pause(pausa)
})
