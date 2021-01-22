while (true) {
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 90 && input.soundLevel() < 4) {
        music.siren.playUntilDone()
    }
    
    music.stopAllSounds()
    if (input.temperature(TemperatureUnit.Fahrenheit) <= 80 && input.soundLevel() < 4) {
        music.wawawawaa.playUntilDone()
    }
    
    music.stopAllSounds()
}
