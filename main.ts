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
input.onPinPressed(TouchPin.P1, function () {
    if (pins.pulseIn(DigitalPin.P1, PulseValue.High) == 1) {
        on()
    }
})
input.onPinReleased(TouchPin.P1, function () {
    off()
})
keyboard.startKeyboardService()
basic.showIcon(IconNames.Heart)
pins.digitalWritePin(DigitalPin.P1, 1)
