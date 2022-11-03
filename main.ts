function off() {
    basic.showIcon(IconNames.Sad)
    keyboard.sendString("v")
    control.waitMicros(50)
    basic.showIcon(IconNames.Heart)
}

function on() {
    basic.showIcon(IconNames.Happy)
    keyboard.sendString("v")
    control.waitMicros(50)
    basic.showIcon(IconNames.Heart)
}

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
        on()
        if (pins.pulseIn(DigitalPin.P0, PulseValue.Low) >= 500) {
            off()
            return
        }
        
    }
    
})
