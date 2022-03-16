function anagram(a, b) {
  var checkA = a.toLowerCase().split("").sort().join("");
  var checkB = b.toLowerCase().split("").sort().join("");
  return checkA == checkB ? true : false;
}

console.log(anagram("apa", "Paa"));
