def on_pin_pressed_p0():
    on()
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_button_pressed_a():
    basic.show_icon(IconNames.YES)
    keyboard.send_string("v")
    control.wait_micros(50)
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.A, on_button_pressed_a)

def off():
    basic.show_icon(IconNames.SAD)
    keyboard.send_string("v")
    control.wait_micros(100)
    basic.show_icon(IconNames.HEART)
def on():
    basic.show_icon(IconNames.HAPPY)
    keyboard.send_string("x")
    control.wait_micros(100)
    basic.show_icon(IconNames.HEART)

def on_pin_released_p1():
    off()
input.on_pin_released(TouchPin.P1, on_pin_released_p1)

keyboard.start_keyboard_service()
basic.show_icon(IconNames.HEART)

def on_forever():
    pass
basic.forever(on_forever)
