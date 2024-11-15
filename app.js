const addbtn=document.getElementById("addbtn")
const taskTitle= document.getElementById("title")
let desc= document.getElementById("desc")
let taskContainer= document.getElementById("taskContainer")
let bigbox= document.getElementById("bigbox")




addbtn.addEventListener( "click", ()=>{


    if( taskTitle.value=="" || desc.value=="")
    {
        alert("please enter task")
        return
    }

    let task= document.createElement("div")
    task.classList.add("border","rounded-4","bg-warning","p-3","mt-3","d-flex","justify-content-between","align-items-center")

    let leftdiv= document.createElement("div")
    
    let theading=document.createElement("h3")
    theading.innerText=taskTitle.value
    
    let tdesc= document.createElement("p")
    tdesc.innerText=desc.value

    leftdiv.appendChild(theading)
    leftdiv.appendChild(tdesc)

    task.appendChild(leftdiv)
    
    
    let rightdiv= document.createElement("div")

    let delBtn= document.createElement("button")
    delBtn.innerText="❌"
    delBtn.classList.add("bg-info")


    delBtn.addEventListener("click",()=>{
        taskContainer.removeChild(task)
    })
    
    rightdiv.appendChild(delBtn)
    task.appendChild(rightdiv)
    
    let delAll=document.createElement("button")
    delAll.innerText="❌"
    delAll.classList.add("bg-light")

    delAll.addEventListener("click",()=>{
       bigbox.removeChild(taskContainer)
    })

    
    taskContainer.appendChild(delAll)
    taskContainer.appendChild(task)
    })


