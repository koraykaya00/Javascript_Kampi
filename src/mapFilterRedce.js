
// MAP

let cart = [
    {id:1, productName: "Telefon", quantity: 3, unitPrice:4000},
    {id:2, productName: "Bilgisayar", quantity: 2, unitPrice:11000},
    {id:3, productName: "Şarj Aleti", quantity: 4, unitPrice:270},
    {id:4, productName: "Süpürge", quantity: 1, unitPrice:5260},
    {id:5, productName: "Televizyon", quantity: 2, unitPrice:7100},
    {id:6, productName: "Çanta", quantity: 3, unitPrice:450},
]


// cart.map(product => console.log(product));  // obje değerlerini getirir.
cart.map(product => {
    console.log(product.productName + " : " + product.unitPrice * product.quantity);
})

console.log("<ul>")
cart.map (product => {
    console.log("<li>"+product.productName + " : "
    + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>");


// Filter

let quantityOver3 = cart.filter(product => product.quantity >= 3)  // 3 ve 3'ten fazla olan ürünleri getir
console.log(quantityOver3);


// Reduce

let total = cart.reduce((acc,product) => acc + product.unitPrice*product.quantity, 0);  // acc kısaltma (accumilator)

// ()acc çağırılıyor + productın ünitpricesi * productın quantitisi, acc'nin başlangıç sayısı (0)) 
console.log(total);


// Reference Type

function addToCart(sepet) {
    sepet.push({id: 7, productName: "Metre", quantity: 12, unitPrice: 40});
}

addToCart(cart);
console.log(cart);


// Value Type

let sayi = 10;

function sayiTopla(number) {
    number += 1;
}

sayiTopla(sayi);
console.log(sayi);
