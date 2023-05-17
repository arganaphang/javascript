//    index   |  stop  | increment
for (let i = 0; i < 5; i++) {
  console.log(`Loop i -> ${i}`);
}

// i+=1 === i++

console.log("lanjut");

// i = 0 -> print "Loop i -> 0"
// i = 0+1
// i = 1 -> print "Loop i -> 1"
// i = 1+1
// i = 2 -> print "Loop i -> 2"
// i = 2+1
// i = 3 -> print "Loop i -> 3"
// i = 3+1
// i = 4 -> print "Loop i -> 4"
// i = 4+1 = 5

cart = [200_000, 3_000_000];

let total = 0;
for (let index = 0; index < cart.length; index++) {
  total = total + cart[index];
}

// total = total + cart[0]
// total = total + cart[1]

console.log(total);
