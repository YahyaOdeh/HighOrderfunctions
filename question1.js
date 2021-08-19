let products = [
    { category: "cars", name : "bmw" },
    { category: "phones", name : "iphone" },
    { category: "laptops", name : "maacbook pro" },
    { category: "phones", name : "oneplus 8t" },
    { category: "phones", name : "samsung s21" },
    { category: "cars", name : "kia" },
    { category: "cars", name : "honda" }, 
  ]

  // write single line code to print only cars products using high order functions 

// ++ your code print all products :|
    products.forEach(function (pName){ console.log(pName.name)})

    
/*
expected output 
[
    { category: "cars", name : "bmw" },
    { category: "cars", name : "kia" },
    { category: "cars", name : "honda" }, 
  ]
*/
 
