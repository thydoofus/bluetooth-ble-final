function on_button_pressed_a () {
    basic.showIcon(IconNames.Yes)
    keyboard.sendString("v")
    control.waitMicros(50)
    basic.showIcon(IconNames.Heart)
}
function off () {
    basic.showIcon(IconNames.Yes)
    keyboard.sendString("v")
    control.waitMicros(50)
    basic.showIcon(IconNames.Heart)
}
function on () {
    basic.showIcon(IconNames.Yes)
    keyboard.sendString("v")
    control.waitMicros(50)
    basic.showIcon(IconNames.Heart)
}
input.onButtonPressed(Button.A, on_button_pressed_a)
keyboard.startKeyboardService()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (pins.pulseIn(DigitalPin.P0, PulseValue.High) >= 500) {
        on_button_pressed_a()
        if (pins.pulseIn(DigitalPin.P0, PulseValue.Low) >= 500) {
            on_button_pressed_a()
            return
        }
    }
})
