input.onButtonPressed(Button.A, function () {
    radio.sendString(Hello)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == Hello) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # # # .
            # # # # #
            `)
    }
    if (receivedString == animate) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # . . . .
                # # . . .
                # # # . .
                # # # # .
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                . . . # #
                . . # # #
                . # # # #
                # # # # #
                `)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString(animate)
})
let animate = ""
let Hello = ""
Hello = "Hello"
animate = "animate"
radio.setGroup(77)
