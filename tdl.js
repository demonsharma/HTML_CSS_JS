const arr = [] ;
const listEl = document.getElementsByClassName('list')[0]
const refereshList = function(){
    listEl.innerHTML = "" ;
    for(let i = 0 ;i<arr.length ; i++){
        let todoitem = document.createElement('li');
        todoitem.setAttribute('class',"list-item");
        todoitem.innerText = arr[i] ;
        todoitem.innerHTML+=`<span class = "deleteItem">&#10008;</span>`
        todoitem.innerHTML+=`<span class = "editItem">&#x270D;</span>`
        listEl.insertAdjacentElement('beforeend',todoitem);

    }
    addEventListeners() ;
}

const SubmitInputEl = document.getElementById('submitInput') ;
SubmitInputEl.addEventListener('keyup',(e)=>{
    if(e.keyCode===13){
        const val = e.target.value ;
        e.target.value = "" ;
        arr.push(val) ;
        refereshList() ;
    }
    
})
refereshList() ;
function addEventListeners(){
    const deleteItemEls = Array.from(document.getElementsByClassName("deleteItem"))
    for(let i = 0 ;i<deleteItemEls.length ; i++){
        deleteItemEls[i].addEventListener('click',(e)=>{
            const item = e.target.parentNode.innerText;
            console.log(item) ;
            const todoitem = item.slice(0,-1).trim() ;
            arr.pop(arr.indexOf(todoitem)) ;
            refereshList() ;
        })
    }
    const editItemEls = Array.from(document.getElementsByClassName("editItem"))
    for(let i = 0 ;i<editItemEls.length ; i++){
        editItemEls[i].addEventListener('click',(e)=>{
            const item = e.target.parentNode.innerText;
            const todoitem = item.slice(0,-3).trim() ;
            const val = SubmitInputEl.value ;
            if(val===""){
                alert("Enter the value in input box")
                return ;
            }
            editItemEls(todoitem,val) ;
            SubmitInputEl.value = "" ;
            refereshList();
            
        })
    }
}
function editItem(todoitem,toedit){
    for(let i = 0 ;i<arr.length ; i++){
        if(arr[i]===todoitem){
            arr[i]=toedit;
            return ;
        }
    }
}