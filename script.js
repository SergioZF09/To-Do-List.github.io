const inputText = document.querySelector(".input-task input");

const buttonAdd = document.getElementById("add");

const ul = document.querySelector("ul");

const empty = document.querySelector(".empty");


buttonAdd.addEventListener("click", (e) => {

    e.preventDefault();

    let task = inputText.value;

    if(task !== ""){

        //Show the task written and clicked the add button
        let li = document.createElement("li");
        let p = document.createElement("p");

        li.className = "task";
        p.innerHTML = task;

        ul.appendChild(li);
        li.appendChild(p);
        li.appendChild(buttonDelete());

        inputText.value = "";

        empty.style.display = "none";

    }

});

function buttonDelete() {
    
    let btnDelete = document.createElement("button");

    btnDelete.textContent = "Eliminar";
    btnDelete.className = "delete";

    btnDelete.addEventListener("click", (e) => {

        let object = e.target.parentElement;

        ul.removeChild(object);

        let objects = document.querySelectorAll("li");

        if(objects.length === 0){

            empty.style.display = "block";

        }

    });

    return btnDelete;

}