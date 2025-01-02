let timeout=null;
function searchItems(query){
    const result=[];
    const searchContainer=document.querySelectorAll('.Best-card');
    searchContainer.forEach((container)=>{
        const items=container.querySelectorAll('.Best-content');
        items.forEach((item)=>{
            const itemName=item.querySelector('h2').innerText.toLowerCase()
            if(itemName.includes(query.toLowerCase())){
                result.push(itemName);
                console.log(result);
            }else{
                item.style.display='none';
            }
        })
    })
}
document.querySelector('.search-input').addEventListener('input',(event)=>{
    const query=event.target.value;
    if(query){
        if(timeout){
            clearTimeout(timeout);
        }
        timeout=setTimeout(()=>{
            searchItems(query)
        },2000)
    }
})