// This checks your code.
function CodeCheck () {
    if (Current_code == Combo) {
        basic.showNumber(Secret)
        serial.writeLine("Here's the password:" + ("" + Secret))
    }
}
input.onButtonPressed(Button.A, function () {
    Temporary = "" + Current_code + "A"
    Current_code = Temporary
    serial.writeLine(Current_code)
    CodeCheck()
})
input.onButtonPressed(Button.B, function () {
    Temporary = "" + Current_code + "B"
    Current_code = Temporary
    serial.writeLine(Current_code)
    CodeCheck()
})
let Temporary = ""
let Current_code = ""
let Combo = ""
let Secret = 0
// Your secret goes here
Secret = 3385
// The password needed; make sure it is only a's and b's.
Combo = "BAABAA"
Current_code = ""
