let closeWord = function (data, data2, callback) {
  let word = ['hot', 'dot', 'dog', 'lot', 'log']
  let countWord = []

  if (data == data2) {
    callback(data)
    return 0
  }


  // let data3 = data.split('')
  let z = 0
  let max = 9999
  let first = data
  for (let i = 0; i < word.length; i++) {
    if (data == word[i]) {
      first = word[i]
    }
  }

  let cekHasil = 0
  // while()
  countWord.push(first)
  first = first.split('')
  second = data2.split('')

  for (let a = 0; a < word.length; a++) {
    array = word[a].split('')

    for (let b = 0; b < array.length; b++) {
      // console.log(first, array)
      if (second[b] === array[b]) {
        cekHasil = cekHasil + 1
      }
    }
    if (a == word.length - 1 && cekHasil == 0) {
      callback("Tak Dapat Ditransformasi")
      return 0
    }
  }
  // console.log(first.join(''))
  for (let i = 0; i < word.length; i++) {
    array = word[i].split('')
    let count = 0
    // console.log(first)
    for (j = 0; j < array.length; j++) {
      // console.log(first, array)
      if (first[j] !== array[j]) {
        count = count + 1
      }
    }

    // console.log(word[i], count)
    if (count == 0) {

    } else {
      first = word[i].split('')
      countWord.push(word[i])
    }

    let newSame = 0
    if (word[i] == data2) {

      callback(countWord)
      return 0
    } else {

      for (j = 0; j < array.length; j++) {
        if (first[j] !== second[j]) {
          newSame = newSame + (first[j].charCodeAt(0) - second[j].charCodeAt(0))
        }
      }
      if (newSame <= 5) {
        countWord.push(data2)
        callback(countWord)
        return 0
      }
    }

  }
  callback(countWord)
}


closeWord('hit', 'bot', function (value) {
  console.log(value.join(' '))
})