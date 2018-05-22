function theBeatlesPlay(musArr, insArr) {
  var newArr = [];
  for(var i = 0; i < musArr.length && insArr.length; i++){
    newArr.push(`${musArr[i]} plays ${insArr[i]}`)
  }
  return newArr;
}

function johnLennonFacts(arr){
  let i = 0;
  while(i < arr.length){
    arr[i] = `${arr[i]} !!!`
  }
  return arr;
}