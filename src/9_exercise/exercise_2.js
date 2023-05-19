/* FizzBuzz
input = n = 5
3 = Fizz
5 = Buzz
15 = FizzBuzz

Operasi Matematika
Penjumlahan (+)
Pengurangan (-)
Perkalian (*)
Pembagian (/)
Modulo/Modulus (%) -> Sisa Hasil Bagi

Ganjil -> Tidak habis dibagi 2
Genap -> Habis dibagi 2
*/

const n = 30;

// Ganjil Genap
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(`${i} Genap`);
  } else {
    console.log(`${i} Ganjil`);
  }
}

// FizzBuzz
for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

const x = 15;
//  true             true
if (x % 3 === 0 && x % 5 === 0) {
  // x % 15 === 0
  console.log("Benar");
} else {
  console.log("Salah");
}
