function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      var stringOne = "I am 1 strange loop.";
          array = array.push ([stringOne]);
    } else {
      var stringMoreThanOne = "I am ${i} strange loops.";
          array = array.push ([stringMoreThanOne]);
    }
return array;
  }
}