export function wallpaperCalc(roomWidth, roomLength, roomHeight, wallpaperWidth, wallpaperLength,
                              firstDockingRatio, secondDockingRatio) {
    const addRoomHeight = roomHeight + 10;
    const perimeter = 2 * roomWidth + 2 * roomLength;
    const numberOfCanvas = Math.ceil(perimeter / wallpaperWidth);
    let canvasInRolls;
    if (firstDockingRatio === 0) {
        canvasInRolls = Math.floor(wallpaperLength / addRoomHeight);
    } else {
        let canvasLength = Math.ceil(addRoomHeight / firstDockingRatio) * firstDockingRatio;
        if (secondDockingRatio > 0) {
            if (addRoomHeight < canvasLength - secondDockingRatio) {
                canvasLength = canvasLength - secondDockingRatio;
            } else {
                canvasLength = canvasLength + secondDockingRatio;
            }
        }
        canvasInRolls = Math.floor(wallpaperLength / canvasLength);
    }
    return Math.ceil(numberOfCanvas / canvasInRolls);
}