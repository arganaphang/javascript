const num = 23;

// [out] "Odd"
switch (num % 2) {
  case 0: {
    console.log("Even");
    break;
  }
  default: {
    console.log("Odd");
    break;
  }
}
