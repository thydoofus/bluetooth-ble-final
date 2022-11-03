input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    keyboard.sendString("v")
    control.waitMicros(50)
    basic.showIcon(IconNames.Heart)
})
keyboard.startKeyboardService()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 50) {
        basic.showIcon(IconNames.Happy)
        keyboard.sendString("v")
    } else {
        basic.showIcon(IconNames.Sad)
        keyboard.sendString("v")
    }
})
