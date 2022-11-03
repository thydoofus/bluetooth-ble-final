input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    keyboard.sendString("v")
    control.waitMicros(50)
    basic.showIcon(IconNames.Heart)
})
function off () {
    basic.showIcon(IconNames.Sad)
    keyboard.sendString("v")
    control.waitMicros(100)
    basic.showIcon(IconNames.Heart)
}
function on () {
    basic.showIcon(IconNames.Happy)
    keyboard.sendString("x")
    control.waitMicros(100)
    basic.showIcon(IconNames.Heart)
}
input.onPinReleased(TouchPin.P1, function () {
    off()
})
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
keyboard.startKeyboardService()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (pins.pulseIn(DigitalPin.P0, PulseValue.High) >= 500) {
        on()
    }
})
