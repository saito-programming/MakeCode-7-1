basic.showIcon(IconNames.Heart)
radio.setGroup(1)
radio.setTransmitPower(0)
basic.forever(function () {
    radio.sendNumber(1)
    basic.pause(2000)
})
