console.log("Merhaba Kodlama.io");


// JS type safe değildir. 

let dolarBugun = 9.30;

// console.log(dolarDun);

let dolarDun = 9.20;
// kodlar yukardan aşağıya çalışır. Bundan dolayı dolarDun değeri undifined (tanımlanmamış) olarak console yazar.

{
    let dolarDun = 9.10;  
    console.log(dolarDun);      // blok dışındaki dolarDun 9.10 blok dışındaki dolarDun 9.20
}

console.log(dolarDun);

// const sabit demektir. const değerleri değişmez.
const euroDun = 11.20;
console.log(euroDun);

// Array (Diziler)
//camelCasing   (değişken tanımı, fonksiyon tanım yazım şekli)
//PasccalCasing (c++ da kullanım yazım şekli)

// Birden fazla arrayi birden farklı değişkende kullanmak için arraylerden faydalanırız.
let konutKredileri = ["Konut kredisi", "Emlak Konut Kredisi","Kamu Konut Kredisi"];

console.log("<ul>")
for (let i = 0; i < 3; i++) {
    console.log("<li>" + konutKredileri [i] + "</li>");
    
}
console.log("</ul>")

// console.log(konutKredileri);
