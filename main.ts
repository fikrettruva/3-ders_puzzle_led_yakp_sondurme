/**
 * sondur(0,1)
 * 
 * yak(1,1)
 * 
 * yak(3,1)
 * 
 * sondur(1,3)
 * 
 * sondur(0,4)
 * 
 * yak(3,4)
 */
/**
 * Led yakıp sondurme
 */
basic.showLeds(`
    . . . . .
    # . . . .
    . . . . .
    # # . . #
    # # # . .
    `)
basic.pause(500)
led.unplot(0, 1)
basic.pause(500)
led.plot(1, 1)
basic.pause(500)
led.plot(3, 1)
basic.pause(500)
led.unplot(1, 3)
basic.pause(500)
led.unplot(0, 4)
basic.pause(500)
led.plot(3, 4)
