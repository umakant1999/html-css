// const city ="delhi"

// console.log(city)

// let score =0;
// console.log(score)
//  score=100;
// console.log(score)

// city  = "mumbai";


// console.log(city) ///Assignment to constant variable.


//2

// let number =10;
// let string = "hello";
// let boolean =true;

// let nul = null;
// let undefined  ;

// console.log(number)
// console.log(string)
// console.log(boolean)
// console.log(nul)
// console.log(undefined)

// // output[10,hello,true,undefined]


// console.log(typeof []) 
// output [object]

// console.log(5 +"5")
// output 55


// console.log(5+5) 
// output [10]

// if( 17 % 2 == 0){  17%2 =8 is Quotient and 1Remainder
// console.log("even")

// }
// else{
//     console.log("odd")
// }

// // output[odd]
// let age =18
// let hasLicense = true;

// if( age >=18 && hasLicense){
    
// }

// let x =10

// x += 9
// console.log(x)
// x -= 8
// console.log(x)



// 3.conditons

// let n  =-1

// if(n >= 0 ){
//     console.log("positive")
// }
// else{
//        console.log("negetive") 
// }

// let n =79
// if(n >= 90){
//     console.log("A Grade")

// }
// else if(n >=80){
//  console.log("b Grade")
// }
// else{
//      console.log("F Grade")

// }


// let numb =-1;


//  console.log( numb  >=0 ?"positive" :"negative")



// let age =18
// let citizen = false;

// if( age >=18 && citizen){
//     console.log("you can vote")
    
// }
// else{
//     console.log("you cant vote")
// }

//loops

// for (let i = 1; i <= 100; i++) {
//   console.log(i)
    
// }


// for (let i = 1; i <= 20; i++) {
//  if(i % 2 ==0){
//     console.log(i)
//  }
    
// }


// let fruits = ["apple","banana" ,"kiwi","orange","grapes"]

// for(fruit of fruits){
//     console.log(fruit)
// }

// let n =10

// while(n>=1){
//     console.log(n)
//     n--

// }


// for(let i =1; i<=20; i++){
//     if(i == 7){
//         console.log(i)
//         break 
//     }
// }

//  for(let i =1; i<=20; i++){
//     if(i % 3 ==0){
      
//         continue 
//     }
//       console.log(i)
// }


//  for(let i =1; i<=3; i++){
    


//     for(let i =1; i<=3; i++){
// console.log("*")
       
   
// }
    


   
// }

//functions 

// function sqrt (n){
//     return n*n
// }

// let b =sqrt(6);
// console.log(b)


// function even (n){
//    if(  n%2 == 0){
//     return true
//    }
//    else{
//     return false
//    }
   
// }

// let c =even(1);
// console.log(c)


// function greet(name = "friend") {
//   console.log(`hello ,${name}`)

    
// }

// let d = greet()


// function max(a,b,c) {

// if(a>b && a >c ){
//     return a
// }
// else if(b>a && b>c){
//     return b
// }
// else{
//     return c
// }
    
// }

// let x =max(5,4,2)
// console.log(x) 


// const name = (n)=>{
//     return n*3

// }

// const nm = name(10);
// console.log(nm)


// const larg = (a,b)=>{
//   if(a > b){
//     return a
//   }
//   else if(b > a){
//     return b
//   }
    
// }

// const c = larg(600,50)
// console.log(c);

// const load =()=>{
//     console.log("loading...")
// }

// load()

//array

// let movies = [
//     "Inception",
//     "Interstellar",
//     "Avatar",
//     "Titanic",
//     "Joker",
//     "Dangal",
//     "Pathaan",
//     "KGF",
//     "3 Idiots",
//     "Bahubali"
// ];

// console.log(movies[3]);

// movies.push("spiderman")
// console.log(movies)

// movies.pop()

// console.log(movies)

// const idx = movies.indexOf("KGF")
// console.log(idx);


// console.log(
// (movies.includes("Interstellar")))

// let arr = [1,2,3,4,5];

// console.log( arr.slice(1,4));
// console.log( arr.splice(1,2));
// console.log(arr)



//   let a = [1,2,3,4]
//   let b =[5,6,7,8]

//   let combine= [...a,...b]
//   console.log(combine);

//   let arr =["hello","world"]

//   console.log(arr.join(" "))


  //map

//   let arr = [0, 10, 20, 30];

// let map = arr.map((n)=>n * 9 /5  +32)

// console.log(map)


// let arr = ["john" , "spider" ,"hulk" ,"ninja"]

// const filtered = arr.filter((n) => {
//   return n.length > 4;
// });

// console.log(filtered);

// let n =[1,2,3,4,5,6,7,8,9,10,16]
// let m = n.filter((ni)=>{
//     return ni> 10
// }).map((np)=>{

//     return np*2

// })
  

// console.log(m);


//  let arr = ["john" , "spider" ,"hulk" ,"ninja"]

//  let b =arr.map((c)=>{
//     return c.concat("!")
//  })

//  console.log(b);
 


// let price = [10,20,30,40,50]
// let p =price.reduce((acc,n)=>{

//     return acc+n

// },0)

// console.log(p);
// 0 + 10 =10;
// 10+20 =30;
// 30+30=60
// 60 +40 =100
// 100+50=150


// let max = [10, 2, 4, 5, 6, 1];

// let a =max.reduce((acc,n)=>{
//    if(acc > n){
//     return acc
//    }
//    else{
//     return n
//    }
// },0)

// console.log(a)


// let name = ["john" ,"janam","ja"]

// let b =name.find((n)=>{
//     return n.includes("j")
// })

// console.log(b)