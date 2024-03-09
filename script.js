let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let turnX=true;
let msg=document.querySelector(".msg");
let head=document.querySelector(".head")
let newBtn=document.querySelector(".new")
let winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("button was clicked")
        if(turnX){
            box.innerHTML="X";
            box.style.color="white";
            turnX=false;
        }
        else{
            box.innerHTML="O";
            box.style.color="yellow";
            turnX=true;
            
        }

        checkwinner();
        
        box.disabled=true;
        reset.addEventListener('click',()=>{ 
                box.innerHTML="";
                box.disabled=false;
                turnX=true;
                head.classList.add("hide")
        })
    })
})
 const checkwinner=()=>{
    for(let pattern of winPattern){
        // console.log(winPattern)
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
      let pos1=  boxes[pattern[0]].innerText;
      let pos2= boxes[pattern[1]].innerText;
      let pos3= boxes[pattern[2]].innerText;
      if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2=== pos3){
            showwinner(pos1);
        }
        // if(pos1!==pos2 && pos2!== pos3){
        //     msg.innerText="no one win";
        //     head.classList.remove('hide')
        // }
      }
    }
 }
 const showwinner=(Winner) =>{
    msg.innerText="Congratulation Winner is " + Winner;
    head.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
    }
 }
newBtn.addEventListener('click',()=>{
    for(let box of boxes){
        box.innerHTML="";
        box.disabled=false;
        turnX=true;
        head.classList.add("hide")
    }
})