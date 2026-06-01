let save_en=document.getElementById("save-entry")
let counter=  document.getElementById("count")
let count=0
function increment(){
    count+=1
    counter.innerText=count
    
}
function save(){
    let cntstrng=count +"-"
    //save_en.innerText+=cntstrng // inner text is not care about not human read character like space
    save_en.textContent+=cntstrng
    counter.innerText=0
    count=0
    //console.log(count)
}