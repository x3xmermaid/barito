let anagram = function (data, callback) {
  dataNew = []


  for (let i = 0; i < data.length; i++) {
    let dataText = []
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].length == data[j].length) {
        let A = data[i].split("");
        let B = data[j].split("");
        A.sort()
        B.sort()
        if (A.join('') == B.join('')) {
          dataText = [...dataText, data[j]]
          dataNew[i] = dataText
        }

      }
    }
  }

  let max = 0
  for (let z = 0; z < dataNew.length; z++) {
    if (dataNew[z] !== undefined) {
      if (dataNew[z].length >= 2) {
        if (dataNew[z].length > max) {
          max = dataNew[z].lengths
          dataText = [data[z], ...dataNew[z]]
        }
      }
    }
  }

  callback(dataText)
}

let data = ['bat', 'code', 'deco', 'act', 'cab', 'edoc', 'tac', 'doce']

anagram(data, function (value) {
  console.log(value.join(' '))
})