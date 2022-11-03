//----input----//
var regex=new RegExp('^[0-9]+(\.[0-9]+)?([Ee][+-]?[0-9]+)?');
let tag=document.getElementsByTagName("input");
[...tag].forEach(val => {
    val.addEventListener("input",()=>{
        if(!regex.test(val.value)){
          val.style.borderColor="red";
        }
        else{
          val.style.borderColor="#0093E9";
        }
    });
})

//-----input_values-----//
let Total_Bags=document.getElementById("a");
let Weight_of_Bag=document.getElementById("b");
let Total_Bird_Weight=document.getElementById("c");
let Total_Birds=document.getElementById("d");
let Bird_Price=document.getElementById("e");
let Feed_Price=document.getElementById("f");

//------FCR and Cost------//
let FCR=document.getElementById("val1");
let Cost=document.getElementById("val2");

//------Button------//
let but=document.getElementsByTagName("button")[0];

but.addEventListener("click",()=>{
    let fcr=Total_Bags.value*Weight_of_Bag.value/Total_Bird_Weight.value;
    let feedcost=(Total_Bags.value*Weight_of_Bag.value*Feed_Price.value)/Total_Bird_Weight.value;
    let cheeckcost=(Total_Birds.value*Bird_Price.value)/Total_Bird_Weight.value;
    if(Total_Bags.value && Weight_of_Bag.value && Total_Bird_Weight.value && Total_Birds.value && Bird_Price.value && Feed_Price.value){    
      FCR.innerText=fcr.toPrecision(5);
      Cost.innerText=(feedcost+cheeckcost).toPrecision(5);
    }
})