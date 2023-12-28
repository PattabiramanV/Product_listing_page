// new_tab.addEventListener("click",()=>{
"use strict";
let obj=[
    {

        Product: "High Black Beach",
        Brand: "Caresa",
        Rate: "$9.99",
        Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
        src: "product-1.jpeg"
    },
    {
        Product: "Alabeny Table",
        Brand: "Caresa",
        Rate: "2.5$",
        Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
        src: "product-2.jpeg"

    },
    {
        Product: "Acciendent Chai",
        Brand: "Caresa",
        Rate: "$79.99",
        Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
        src: "product-3.jpeg"
    },
    {
        Product: "Woodles Table",
        Brand: "Caresa",
        Rate: "$25.99",
        Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
        src: "product-4.jpeg"
    },
    {
        Product: "Dining Table",
        Brand: "Caresa",
        Rate: "$45.99",
        Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
        src: "product-5.jpeg"
    },
    {
        Product: "Sofa Set",
        Brand: "Caresa",
        Rate: "$69.99",
        Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
        src: "product-6.jpeg"
    },
    {
        Product: "Woodles Table",
        Brand: "Caresa",
        Rate: "$69.99",
        Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
        src: "product-7.jpeg"
    }, {
        Product: "Emperor Bed",
        Brand: "Caresa",
        Rate: "2.5$",
        Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
        src: "product-8.jpeg"
    }, {
        Product: "Ulopio Sofa",
        Brand: "Caresa",
        Rate: "2.5$",
        Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
        src: "product-9.jpeg"
    }
];

    let All_img=document.querySelectorAll("img");
console.log(All_img);

All_img.forEach((img,index) => {
    img.addEventListener("click",my_Fun);

    function my_Fun(){
window.open('index_1.html','_blank');

let jsonObj = JSON.stringify(obj[index]);
console.log(jsonObj);
localStorage.setItem("obj",jsonObj);
};
    })
  
    






//.................Another method.................//

//  let new_tab=   window.open("index_1.html","_blank");
//      img.setAttribute("target","_blank");
//     new_tab.document.write(`<html><head><title></title></head><body><img src=${value}><h1>Hello</h1></body></html>`)


//......................Search_Product_code.....................//


let Product_Search_box=document.getElementById("Product_Search_box");
let All_P_tag=document.querySelectorAll("p");
let h3_no_match_alert_box=document.querySelector(".h3_alert_box");
let value=0;

Product_Search_box.addEventListener("keyup",()=>{

   let Change_Uppercase_value= Product_Search_box.value.toUpperCase();
 
     let str=1;
   
    All_P_tag.forEach((Product_name,index) => {
        value=All_P_tag[index].parentElement;
        value.classList.add("opacity");
        Product_name=Product_name.innerHTML.toUpperCase();

        if(Product_name.includes(Change_Uppercase_value) ){
                value.classList.remove("opacity");
                h3_no_match_alert_box.classList.remove("no_math_product_name");
                str=0;
        }
    });

    if(str){
    h3_no_match_alert_box.classList.add("no_math_product_name");
    }

})



