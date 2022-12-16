// This checks your code.
function CodeCheck () {
    if (Current_code.length == 6) {
        if (Current_code == Combo) {
            basic.showNumber(Secret)
            serial.writeLine("Here's the password:" + ("" + Secret))
        } else {
            basic.showIcon(IconNames.No)
            control.reset()
        }
    }
}
input.onButtonPressed(Button.A, function () {
    Temporary = "" + Current_code + "A"
    Current_code = Temporary
    serial.writeLine("" + (Current_code))
    CodeCheck()
})
input.onButtonPressed(Button.B, function () {
    Temporary = "" + Current_code + "B"
    Current_code = Temporary
    serial.writeLine("" + (Current_code))
    CodeCheck()
})
let Temporary = ""
let Current_code = ""
let Combo = ""
let Secret = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
// Your secret goes here
Secret = 3385
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # . . .
    . . . . .
    . . . . .
    `)
// The password needed; make sure it is only a's and b's.
Combo = "BAABAA"
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # . .
    . . . . .
    . . . . .
    `)
Current_code = ""
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    . # . # .
    . # # # .
    . # # # .
    `)
basic.pause(5000)
basic.showString("Captain Awesome Jnr’s MICROBIT CODE LOCKER")
basic.pause(1000)
