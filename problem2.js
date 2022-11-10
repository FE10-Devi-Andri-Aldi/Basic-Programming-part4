/* 
CASE:
Penjelasan: barisan ini berawal dari 0 dan 1, 
kemudian angka berikutnya didapat dengan cara menambahkan kedua bilangan yang berurutan sebelumnya. 
Dengan aturan ini, maka barisan bilangan Fibonacci yang pertama adalah:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946...

Diberi nomor n, cetak Nomor Fibonacci ke-n.

*/
    
    function fibonacci(number){
       let fibs = [0,1];

       for(i = 0; i < number; i++){
         fibs.push(fibs[0] + fibs[1]);
         fibs.shift();
       }
       return fibs [0]
    }
   
    
  console.log(fibonacci(0))  // 0
  console.log(fibonacci(2))  // 1
  console.log(fibonacci(9))  // 34
  console.log(fibonacci(10)) // 55
  console.log(fibonacci(12)) // 144

