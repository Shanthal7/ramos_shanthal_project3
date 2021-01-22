while True:
    if input.temperature(TemperatureUnit.FAHRENHEIT) >= 90 and input.sound_level() < 4:
        music.siren.play_until_done()
    music.stop_all_sounds()
    if input.temperature(TemperatureUnit.FAHRENHEIT) <= 80 and input.sound_level() < 4: 
        music.wawawawaa.play_until_done() 
    music.stop_all_sounds()    