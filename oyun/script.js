let ekran = document.getElementById("table");
let tr="";
let num=0;
let count=1;

Table();
function Table(){
      let arr= [];
      let arr2=[];
      let rdm;
      for (let i=0;i<16;i++){
            arr[i]=i+1;
      }
      for ( let i=0; i<16;i++){
            rdm=Math.floor(Math.random()*arr.length);
            arr2[i]=arr[rdm];
            arr.splice(rdm,1);
      }
      for(let i=0; i<4; i++){
          
              tr += `<tr>`;
            for(let j=0; j<4; j++ ){
                
                   tr += `<td onclick="Click(${arr2[num]})" id="click${arr2[num]}" > ${arr2[num]}</td>`;
                   num++;
                   
             }  
           
                   tr += `</tr>`;
      }
      ekran.innerHTML = tr;
}

function Click(x){
     

      let td =document.getElementById("click"+x);
      if(count==x){
            td.style.backgroundColor="green";
            td.style.color="white";
            if(count==16){
                  alert("Uddun");
            }
            count++;
      }else{
            td.style.backgroundColor="red";
            td.style.color="white";
            alert("Uduzdunuz")
      }
}

      
let saniye=15;  
let set=setInterval(Qalan_vaxt, 1000);
      function Qalan_vaxt() {
           
            document.getElementById("show").innerHTML=`<span style="font-size: 30px; color: blueviolet; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Qalan vaxt:  ${saniye}</span>`;
            if (saniye > 0) {
                  saniye--;
                  console.log(saniye);
                 }else {
                       clearInterval(set);
                       document.getElementById("show").innerHTML = `<span style="font-size: 30px; color: red; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Uduzdunuz!</span>`;
                       
                 }
            }             
    
            Qalan_vaxt()
            
