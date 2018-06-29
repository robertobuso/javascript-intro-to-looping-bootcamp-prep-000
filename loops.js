function forLoop (array) {
  for (var i = 1; 1<25; i++) {
    if (i === 1) {
      var stringOne = "I am 1 strange loop.";
          array = array.push (stringOne)
    } else {
      var stringMoreThanOne = "I am ${i} strange loops.";
          array = array.push (stringMoreThanOne)
    }
return array;
  }
}