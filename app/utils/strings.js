function toTitleCase (str = '') {
  const smallWords = ['the']
  let words = str.split(' ')
  words = words.map(word => {
    if (smallWords.indexOf(word) >= 0) {
      return word.toLowerCase()
    }
    return word.replace(/(^|\s)[a-z]/g, (f) => f.toUpperCase())
  })

  return words.join(' ')
}

export {
  toTitleCase
}
