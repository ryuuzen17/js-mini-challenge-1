function pizzaMozarella(score) {
  // Tulis kodingan dibawah ini
 let result = '';
  for(let i=1; i<=score; i++){
    if(i%3==0&&i%5==0){
      result+="PizzaMozarella"
    }else if(i%3==0){
      result+="Pizza"
    }else if(i%5==0){
      result+="Mozarella"
    }else{
      result+=i
    }result+='\n'
  }
  console.log(result.slice(0,-1))
}

// Test Case
pizzaMozarella(35);
// 1
// 2
// Pizza
// 4
// Mozarella
// Pizza
// 7
// 8
// Pizza
// Mozarella
// 11
// Pizza
// 13 
// 14
// PizzaMozarella
