/*
  Dalam matematika, bilangan prima adalah bilangan asli yang lebih besar dari angka 1, 
  yang faktor pembaginya adalah 1 dan bilangan itu sendiri. 
  Angka 2 dan 3 adalah bilangan prima. Angka 4 bukan bilangan prima karena 4 bisa dibagi 2. 
  Sepuluh deret bilangan prima yang pertama adalah [2, 3, 5, 7, 11, 13, 17, 19, 23 dan 29]

  CASE 1
  ========
  input: 1
  output: 2
  
  proses:
  angka 1 bukan prima
  angka 2 adalah prima -> deret ke-1 bilangan prima
  angka 3 adalah prima -> deret ke-2 bilangan prima
  angka 4 bukan prima
  angka 5 adalah prima -> deret ke-3 bilangan prima
  maka output adalah 5 karena merupakan bilangan deret ke-3 prima
  
  CASE 2
  =========
  input: 5
  output: 11
  proses:
    angka 1 bukan bilangan prima
    angka 2 adalah bilangan prima -> deret ke-1 bilangan prima
    angka 3 adalah bilangan prima -> deret ke-2 bilangan prima
    angka 4 bukan bilangan prima
    angka 5 adalah bilangan prima -> deret ke-3 bilangan prima
    angka 6 bukan bilangan prima
    angka 7 adalah bilangan prima -> deret ke-4 bilangan prima
    angka 8 bukan bilangan prima
    angka 9 bukan bilangan prima
    angka 10 bukan bilangan prima
    angka 11 adalah bilangan prima -> deret ke-5 bilangan prima
    angka 12 bukan bilangan prima
    angka 13 adalah bilangan prima -> deret ke-6 bilangan prima
  maka output adalah 13 karena merupakan bilangan deret ke-6 prima
*/




function prime(number) {
   for (let i = 2; i < number; i++){
    if (number == 1){
      return false;
    }
    if (number == 2){
      return true;
    }
    if(number % i == 0){
      return false;
    }
   }
   return true
}


function primeX(number){
  let deret = [];
  let angka = 2;
  let counter = 0;

  while(counter < number){ // counter adalah untuk isi angka deret
    if(prime(angka)){
      deret.push(angka)
      counter ++ // index diisi oleh angka
    }
    angka++ // cek bilangan prima
  }
  
  return deret[deret.length -1]

}



console.log(primeX(1))  // 2
console.log(primeX(5))  // 11
console.log(primeX(10))  // 29
console.log(primeX(15))  // 47
console.log(primeX(20)) // 71

