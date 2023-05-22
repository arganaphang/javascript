/* Calculator (2 Input/Angka)
- Penjumlahan
- Pengurangan
- Perkalian
- Pembagian
*/

function tambah(angka1, angka2) {
  return angka1 + angka2;
}

function kurang(angka1, angka2) {
  return angka1 - angka2;
}

function kali(angka1, angka2) {
  return angka1 * angka2;
}

function bagi(angka1, angka2) {
  return angka1 / angka2;
}

function hitung(operasi, angka1, angka2) {
  // operasi = "tambah" | "kurang" | "kali" | "bagi"
  switch (operasi) {
    case "tambah": {
      return tambah(angka1, angka2);
    }
    case "kurang": {
      return kurang(angka1, angka2);
    }
    case "kali": {
      return kali(angka1, angka2);
    }
    case "bagi": {
      return bagi(angka1, angka2);
    }
  }
}

console.log(hitung("tambah", 2, 3)); // tambah(2, 3)
console.log(hitung("kurang", 1, 4)); // kurang(1, 4)
console.log(hitung("kali", 4, 6)); // kali(4, 6)
console.log(hitung("bagi", 9, 2)); // bagi(9, 2)
