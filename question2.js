let products = [
    { category: "cars", name : "bmw" },
    { category: "phones", name : "iphone" },
    { category: "laptops", name : "maacbook pro" },
    { category: "phones", name : "oneplus 8t" },
    { category: "phones", name : "samsung s21" },
    { category: "cars", name : "kia" },
    { category: "cars", name : "honda" }, 
  ]


let i =0;

products.forEach((element) => {(element.id = i++)})

console.log(products)