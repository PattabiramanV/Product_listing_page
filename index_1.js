"use strict";



let Left_img=document.getElementById("left_img");
let Back_to_Home_btn=document.getElementById("back_to_home_btn");
let tabel_head=document.getElementById("tabel_head");
let tabel_brand=document.getElementById("tabel_brand");
let para=document.getElementById("para");
let tabel_Rate=document.getElementById("Rate");

let obj=localStorage.getItem("obj");
let obj_Parse=JSON.parse(obj);


Left_img.src=obj_Parse.src;
tabel_head.innerHTML=obj_Parse.Product;
tabel_brand.innerHTML=obj_Parse.Brand;
para.innerHTML=obj_Parse.Para_raph;
tabel_Rate.innerHTML=obj_Parse.Rate;

Back_to_Home_btn.addEventListener("click",()=>{

    window.open("index.html","_parent");
    window.d
});
