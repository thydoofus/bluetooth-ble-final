input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showIcon(IconNames.Yes)
    keyboard.sendString("v")
    control.waitMicros(50)
    basic.showIcon(IconNames.Heart)
})
keyboard.startKeyboardService()
basic.showIcon(IconNames.Heart)
basic.forever(function on_forever() {
    if (pins.pulseIn(DigitalPin.P0, PulseValue.High) >= 500) {
        basic.showIcon(IconNames.Happy)
        keyboard.sendString("v")
    } else if (pins.pulseIn(DigitalPin.P0, PulseValue.Low) > 500) {
        basic.showIcon(IconNames.Sad)
        keyboard.sendString("x")
    }
    
})
