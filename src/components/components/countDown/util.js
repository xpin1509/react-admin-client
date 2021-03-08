export function parseNumToDoubleStr (num) {
    return num >= 10 ? `${num}` : num >= 0 ? `0${num}` : `${num}`
}

export function getFloorNum (num) {
    return Math.floor(num)
}
