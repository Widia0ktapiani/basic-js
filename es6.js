//ES6 adalah versi javascript terbaru
/**mengapa harus ES6
 * 1. syntac update
 * 2. codingan singkat
 * 3. framework terkini menggunakan ES6
 */

// ada 3 cara deklarasi function

//1. function declaration
// function hello() {
//     console.log("hello");  
// }


//2. function expression
// const hello = function (){
//     console.log("hello");
// }


//3. function arrow (ES6)
// const hello = () => {
//     console.log("hello");
// }


//ES5
// function tambah(a,b) {
//     return a+b;   
// }

// let numbers = [1,2,3]
// for(let i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }
//ES6
// const tambah = (a,b) => a + b;
// numbers.forEach(element => {
//     console.log(element);
// })


//ES6

// console.log(number)
// var number = 10;

let angka = 10;
angka = 5;
// console.log(angka)

const pi = 3.14;
// pi = 5;
// console.log(pi)

//template literal

let kata1 = "buka";
let kata2 = "puasa";
let kata3 = "segar";
//Result: buka puasa segar

//ES5
// console.log(kata1 + " " + kata2 + " " + kata3);

//ES6
// console.log(`${kata1} ${kata2} ${kata3}`)

//function declaration
function hello() {
    console.log("hello");
}
// hello()

//function expression
const helloExpression = function(){
    console.log("hello expression");
}
// helloExpression()

//function arrow
const helloArrow = () => {
    console.log("hello Arrow");
}
helloArrow()

//high order function
 let scores = [7, 2, 3, 5, 1]

 scores.forEach((score) => {
    console.log(score)
 });

 let powerScores = scores.map((score) => score ** 2);

 let filterScores = powerScores.filter((score) => score > 10);

//  console.log(powerScores);
 console.log(filterScores);

 //Destructuring

 //array

 let students = ["vincent", 3.21, true];

 //ES5
//  let name = students[0]
//  let gpa = students[1]
//  let isGraduated = students[2]

 //ES6
 let [name, gpa, isGraduated] = students;

//study case: buat sebuah inventory management

let carts = [
    {
        id: 1,
        name: "Dell i5-12700",
        type: "laptop",
        price: 10000000,
        stock: 5,
        status: true,
    },
    {
        id: 2,
        name: "Hp i5-12700",
        type: "laptop",
        price: 7000000,
        stock: 5,
        status: true,
    },
    {
        id: 3,
        name: "Razor Gaming Mouse",
        type: "mouse",
        price: 175000,
        stock: 3,
        status: false,
    },
];

const showCarts = () => {
    console.log("Carts list: ");
    carts.forEach((cart) => {
        const { id, name, type, price, status, stock } = cart;
        if (status === true) {
            console.log(`${id}. [x] ${name} - Rp. ${price}.`);
            console.log(`${type} - Stocks: ${stock} pcs`);
        } else {
            console.log(`${id}. [ ] ${name} - Rp. ${price}.`);
            console.log(`${type} - Stocks: ${stock} pcs`);

        }
    });
};

const addItem = (name, type, price, stock) => {
    const id = carts[carts.length - 1].id + 1;
    const status = true;

    carts.push({
        id,
        name,
        type,
        price,
        status,
        stock,
    });
};

const getCartById = (id) => {
    let temp = {}
    carts.forEach(cart => {
        if (cart.id === id){
            temp = cart
        }
    })
    console.log(temp)
}

const deleteCart = id => {
    carts = carts.filter(cart => cart.id !== id)
}

const updateCart = (id,name,type,price,status,stock) => {
    carts = carts.map(cart => {
        if(carts.id === id){
            cart.name = name;
            cart.type = type;
            cart.price = price;
            cart.status = status;
            cart.stock = stock;
        }
        return cart
    })
}
// addItem("Keyboard gaming", "keyboard", 50000, 2);
// showCarts();
// getCartById(1);