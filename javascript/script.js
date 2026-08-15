let name = "umakant";
// let sitename ="google";
// console.log(`hello ${name} welcome to ${sitename}`)

// let price =100;
// let qty = 10;
// console.log(`total :${price*qty}`);

// let qty =0

// console.log(`${qty>0  ? "stock" :"out of stock"}`);

// let greet = "Welcome! Have a great day."

// console.log(`Hello ${name}
//     ${greet}
//     Keep learning JavaScript
//     `);

// console.log(a);

// var a ;  // undefined

// // console.log(a);Cannot access 'a' before initialization
// let a;

// if(true){
//     let a = 10
// }

// console.log(a)

//  if(true){
//     var a = 10
// }

// console.log(a)

//   function counter(){
//     let count = 0;

//     function inner (){
//    count++
//    console.log(count)
//     }
//     return inner
//   }

//   let b =counter()
//   let c =counter()

//   console.log(b());
//     console.log(b());
//         console.log(b());

//     console.log(c());
//         console.log(c());
//             console.log(c());
//                 console.log(c());

//   function multiplier(x) {

//     function inner(n) {

//       return x* n

//     }

//     return inner

//   }

//  let num = multiplier(12)

//  console.log(num(12))
//   console.log(num(10))
//     console.log(num(5))

function balance() {

  let bal = 1000;

  function deposit(d) {
    return (bal += d);
  }

  function withdrawal(d){
    return bal -=d
  }
 


  return  {deposit,withdrawal} ;
}

let b = balance();

console.log(`Dear Customer, your A/c XX1234 has been credited with INR ${b.deposit(1000)} on 15-Aug-2026. Available Balance: INR 25,000.00. BOI`)
console.log(b.withdrawal(20));

console.log(`${2*2}`)