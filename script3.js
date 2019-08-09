let closeWord = function (data, callback) {
  let max = 0

  for(let i = 0; i < data.length; i++){
    for(j = 0; j < i; j++){
      if(data[i] > data[j]){
        total = data[i] - data[j]
        if(total > max){
          max = total 
        }
      }  
    }
  }

  if(max == 0){
    max = 'tidak dapat membeli'
  }
  callback(max)
}

const data = [5, 6, 15, 3, 10, 22, 15]

closeWord(data, function (value) {
  console.log(value)
})