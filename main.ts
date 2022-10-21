let xvalue = 0
input.onButtonPressed(Button.A, function () {
    xvalue = 0
    for (let index = 0; index < 5; index++) {
        led.plot(xvalue, 0)
        basic.pause(500)
        basic.clearScreen()
        xvalue += 1
    }
    while (xvalue <= 4) {
        led.plot(xvalue, 0)
        basic.pause(500)
        basic.clearScreen()
        xvalue += 1
    }
})
basic.forever(function () {
	
})
