function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}

function camalize(str) {
    return str
        .replace('-', ' ')
        .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
}

export { getRandomIntInclusive, camalize }
