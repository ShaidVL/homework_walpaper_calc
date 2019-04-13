import {wallpaperCalc} from "../lib.js";

test('should return 7 rolls', () => {
    const roomWidth = 500;
    const roomLength = 600;
    const roomHeight = 275;
    const wallpaperWidth = 106;
    const wallpaperLength = 1000;
    const firstDockingRatio = 0;
    const secondDockingRatio = 0;
    const  expected = 7;

    const result = wallpaperCalc(roomWidth,roomLength,roomHeight,wallpaperWidth,wallpaperLength,
        firstDockingRatio,secondDockingRatio);

    expect(result).toBe(expected);
})

