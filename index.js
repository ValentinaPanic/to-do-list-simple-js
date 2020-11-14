const arr = ["take out trash", "make lunch", "do laundry"]

let element = document.createElement('div')

document.body.appendChild(element)

let ul = document.createElement('ul')

document.body.appendChild(ul)

function toDoLIst() {
for ( let i = 0; i < arr.length; i++) {
    let li = document.createElement('li')
    li.innerHTML = arr[i]
    ul.appendChild(li)
}}

const form = document.getElementById("myForm")

    form.addEventListener("submit", function(e){
        e.preventDefault()
            let toDo = e.target.children[0].value
            console.log(toDo)
            
    })
  
  
toDoLIst()
