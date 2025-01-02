const optInput=document.querySelectorAll('.opt-input');
optInput.forEach((input,index)=>{
    input.addEventListener('input',()=>{
        if(input.value.length===1 && index<optInput.length-1){
            optInput[index+1].focus();
        }
    })
    input.addEventListener('keydown',(e)=>{
        if(e.value='Backspace' && input.value=='' && index>0){
            optInput[index-1].focus();
        }
    })
})

/*
for (let index = 0; index < optInput.length; index++) {
    const element = optInput[index];
    element.addEventListener('input',()=>{
        if(element.value.length===1 && index<optInput.length-1){
            optInput[index+1].focus();
        }
    })
    
}*/