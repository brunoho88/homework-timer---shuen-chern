input.onButtonPressed(Button.A, function () {
    HOMEWORK += 1
    basic.showNumber(HOMEWORK)
})
input.onButtonPressed(Button.AB, function () {
    if (HOMEWORK > 0) {
        while (minutes > 0) {
            minutes += -1
            basic.showNumber(minutes)
            basic.pause(100)
        }
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        basic.showString("time's up")
        HOMEWORK += -1
        minutes = minutes_1
        if (HOMEWORK > 0) {
            basic.showString("Homework left:")
            basic.showNumber(HOMEWORK)
        } else {
            music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
            basic.showString("all is done")
        }
    } else {
        basic.showString("No more homework :]")
    }
})
input.onButtonPressed(Button.B, function () {
    minutes += 1
    basic.showNumber(minutes)
    minutes_1 = minutes
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Reset. Homework left:")
    HOMEWORK = 1
    basic.showNumber(HOMEWORK)
    minutes = 1
})
let minutes_1 = 0
let minutes = 0
let HOMEWORK = 0
basic.showString("welcome to the homework timer")
