// 2. DERS - Functions

function addToCart(productName = "Ayva", quantity ) {  // eğer boş değer çağırılırsa ayva default değer olarak atanır.
    console.log("Sepete eklendi : Ürün:" + productName + ", adet: " + quantity);
}
addToCart();
addToCart(23);      // parametreler sırasıyla yerleşir.
addToCart("Elma");
addToCart("Yumurta",10);
addToCart("Karpuz");
addToCart("Xiaomi", 1 );


let sayHello = () => {
    console.log("Hello World !");
}
sayHello();

let sayHello2 = function (){
    console.log("Hellow World 2");
}
sayHello2();


// 1. Mola

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10);
addToCart2("Armut",2,20);
addToCart2("Limon",3,15);



let product1 = {productName: "Elma", unitPrice: 10, quantity:5}


function addToCart3 (product) {
    console.log("Ürün : " + product.productName);
    console.log("Adet : " + product.quantity);
    console.log("Fiyat : " + product.unitPrice)


}



addToCart3(product1)

let product2 = {productName: "Elma", unitPrice: 10, quantity:5};
let product3 = {productName: "Elma", unitPrice: 10, quantity:5};

product2 = product3;
product2.productName = "KARPUZ";
console.log(product3.productName);  // Karpuz olur

// Eğer yukarıdaki gibi obje ise referans tiplidir. Bundan dolayı product3'ün ismi karpuz olarak değişti.
// Eğer aşağıdaki gibi sayısal veri tipi varsa değer tioindedir. Bundan dolayı sayi1'in değeri 20 olarak kaldı. 100 olmadı.

let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2;
sayi2 = 100;
console.log(sayi1); //20

// Değişkenler bellekte tanımlanır. sayısal değerler stack tipinde olur ve değeri atadıktan sonra işiniz biter.

function addToCart4(x) {
    console.log(x);    
}

let products = [
    {productName: "Elma", unitPrice: 10, quantity:5},
    {productName: "Armut", unitPrice: 10, quantity:5},
    {productName: "Karpuz", unitPrice: 10, quantity:5}
];

addToCart4(products);

//////// 2. Mola

function add(number1,number2) {
    console.log(number1+number2);
}

add(30, 20);

function add2(number1,number2,number3) {
    console.log(number1 + number2 + number3);
}

function addNumbers (...numbers){
    console.log(numbers);
}

addNumbers(20,30);
addNumbers(10,20,30,40);
addNumbers(1,2,3,4,5,6,7,8,93,10,20,30,40,50);

// Rest Operatörü

// function addNumbers1(...numbers) {
//     for (let i = 0; i < numbers.length; i++){
//         console.log(numbers[i])
//     }
// }

// addNumbers1(20,30);
// addNumbers1(10,20,30,40);
// addNumbers1(1,2,3,4,5,6,7,8,93,10,20,30,40,50);


function addNum(bisey,...num) {
    let total = 0;
    for(let k = 0; k < num.length; k++) {
        total = total + num [k];
    }
    console.log(total);
    console.log(bisey)
}

addNum(20,30)
// addNum(20,40,60,80);

let numbers1 = [30,50,687,63258,324,02565];
console.log(Math.max(...numbers1)) // gönderdiğin sayılardan en büyüğü onu verir. 

// spread ayrıştırır rest toparlar.


// Destructing

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name: "İç Anadolu",
     population: "20 Milyon"},
    {name :"Marmara",
     population: "30 Milyon"},
     {nemae :"Karadeniz",
      population: "15 Milyon"},
    
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
];

// console.log(icAnadolu.population);
// console.log(marmara.name);
console.log(marmaraSehirleri);
console.log(karadenizSehirleri);
console.log(icAnadoluSehirleri)


let newProductName, newUnitPrice,newQuantity;
({productName:newProductName, unitPrice:newUnitPrice,quantity:newQuantity}= 
    {productName: "Elma", unitPrice: 10, quantity:5});

console.log(newProductName);
console.log(newQuantity);
console.log(newUnitPrice);