def on_button_pressed_a():
    basic.show_icon(IconNames.YES)
    keyboard.send_string("v")
    control.wait_micros(50)
    basic.show_icon(IconNames.HEART)
def off():
    basic.show_icon(IconNames.SAD)
    keyboard.send_string("v")
    control.wait_micros(50)
    basic.show_icon(IconNames.HEART)
def on():
    basic.show_icon(IconNames.HAPPY)
    keyboard.send_string("v")
    control.wait_micros(50)
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.A, on_button_pressed_a)
keyboard.start_keyboard_service()
basic.show_icon(IconNames.HEART)

def on_forever():
    if pins.pulse_in(DigitalPin.P0, PulseValue.HIGH) >= 500:
        on()
        if pins.pulse_in(DigitalPin.P0, PulseValue.LOW) >= 500:
            off()
            return
basic.forever(on_forever)
