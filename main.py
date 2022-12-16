# This checks your code.
def CodeCheck():
    if len(Current_code) == 6:
        if Current_code == Combo:
            basic.show_number(Secret)
            serial.write_line("Here's the password:" + ("" + str(Secret)))
        else:
            basic.show_icon(IconNames.NO)
            control.reset()

def on_button_pressed_a():
    global Temporary, Current_code
    Temporary = "" + Current_code + "A"
    Current_code = Temporary
    serial.write_line("" + (Current_code))
    CodeCheck()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Temporary, Current_code
    Temporary = "" + Current_code + "B"
    Current_code = Temporary
    serial.write_line("" + (Current_code))
    CodeCheck()
input.on_button_pressed(Button.B, on_button_pressed_b)

Temporary = ""
Current_code = ""
Combo = ""
Secret = 0
basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
""")
# Your secret goes here
Secret = 3385
basic.show_leds("""
    . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
""")
basic.show_leds("""
    . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
""")
# The password needed; make sure it is only a's and b's.
Combo = "BAABAA"
basic.pause(1000)
basic.show_leds("""
    . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
""")
Current_code = ""
basic.pause(1000)
basic.show_leds("""
    . . . . .
        . . . . .
        # # # # .
        . . . . .
        . . . . .
""")
basic.show_leds("""
    . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
""")
basic.show_leds("""
    . . # . .
        . # . # .
        . # . # .
        . # # # .
        . # # # .
""")
basic.pause(5000)
basic.show_string("Captain Awesome Jnr’s MICROBIT CODE LOCKER")
basic.pause(1000)