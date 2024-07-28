//global variable declaretion 
const inputBox=document.querySelector('#input-box');
// console.log(inputBox);
const button=document.querySelector('#button');
// console.log(button);
const listItem=document.querySelector('.list-container')
// console.log(listItem);
//function for adding into list
button.addEventListener('click',()=>{
    if(inputBox.value===''){
        alert('hey,write your task');
    }else{
        const list=document.createElement('li');
        list.innerHTML=inputBox.value;
        listItem.appendChild(list);
        const span=document.createElement('span');
        span.innerHTML='\u00d7';
        list.appendChild(span);
    }
    inputBox.value="";
    saveData();
})
//function for toggle item
listItem.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false)
//function for save data
function saveData(){
    localStorage.setItem("data",listItem.innerHTML);
}
function showData(){
    listItem.innerHTML=localStorage.getItem("data");
}
showData();
