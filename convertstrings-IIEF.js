let anonymousFunction1 = (()=>{
    const words = ['guvi', 'zen', 'raghavan', 'anbu'];
  
    const titleCasedWords = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    console.log(titleCasedWords);
})();

// anonymousFunction1();

