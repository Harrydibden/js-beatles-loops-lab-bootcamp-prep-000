function theBeatlesPlay(musArr, insArr) {
  var newArr = [];
  for(i = 0; i < musArr.length && insArr.length; i++){
    newArr.push(`${musArr[i]} plays ${insArr[i]}`)
  }
}