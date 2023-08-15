document.getElementById('btnsub').addEventListener('click',function(){
    const input = document.getElementById('input')
    const inputvalue = input.value;
    const inputvaluenum = parseFloat(inputvalue);
    const span = document.getElementById('span');
    const spanvalue = span.innerText;
    input.value ="";

    if(isNaN(inputvaluenum )){
        alert('it is not a number');
        return;
       }
    const spanvaluenum = parseFloat(spanvalue);
    const all = inputvaluenum +spanvaluenum
    span.innerText = all;
   
   


    const spantow = document.getElementById('spantow')
    const spantowvalue = spantow.innerText
    const spantownum = parseFloat(spantowvalue)
    const spanSum = inputvaluenum + spantownum;
    spantow.innerText = spanSum;

})

document.getElementById('btntow').addEventListener("click",function(){
    
   const inputtow = document.getElementById('inputtow');
   const inputtowvalue = inputtow.value;
   const inputtowNum = parseFloat(inputtowvalue)
   const trespan = document.getElementById('3span');
   const  trespanvalue = trespan.innerText;
   const trespanNum = parseFloat(trespanvalue);
   
   inputtow.value =""

   if(isNaN(inputtowNum)){
    alert('it is not a number');
    return;
   }

  
   
   const spantow = document.getElementById('spantow')
   const spantowvalue = spantow.innerText
   const spantownum = parseFloat(spantowvalue)
  
   if(inputtowNum > spantownum){
     alert('it is not amout')
     return;
   }
   const sumall = inputtowNum + trespanNum;
   trespan.innerText = sumall;
   const maines = spantownum - inputtowNum;
   spantow.innerText = maines;
  

   
})