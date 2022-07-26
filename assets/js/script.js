var toDoList = [
    { id: 1, tarea: "Bañar gatos", state: false },
    { id: 2, tarea: "Hacer aseo", state: false },
    { id: 3, tarea: "Sacar basura", state: false },
];

//CONSTANTES

const bL = document.getElementById("bodyList");
const btnAdd = document.querySelector(".btn");
var inputToDo = document.getElementById("inputToDo");
var totalCount = document.getElementById("totalCount");
var totalCheck = document.getElementById("totalCheck");
var totalList = document.getElementById("totalList");
var toDoCheck = document.querySelector("checkBox")
var validate = false;
idtareaCheck = "";
var count = 0;
var totalCheckCout = "";
var toDoSelected;
let total = toDoList.length;

let html = "";

function vistaInicial() {
    bL.innerHTML = ``;
    toDoList.forEach((x) =>
    (bL.innerHTML +=
        `
        <tr>
          <th scope="row">` + x.id + `</th>
          <td>` + x.tarea + `</td>
          <td><input type="checkbox" onchange="checkedToDo(this)" id="checkBox"></td>
          <td><center><i class="bi bi-x-square-fill" onclick="deleteToDo(this)"></i></center></td></tr>`
    )
    );
    total.innerHTML = toDoList.length;
}

idtareaCheck = 0;
toDoSelected = 0;
vistaInicial();
totalList.innerHTML = toDoList.length;
totalCheckCout = 0;
totalCheck.innerHTML = totalCheckCout;
initCheck();
totalCount.innerHTML = count;


btnAdd.addEventListener("click", function () {
    if (validar() === true) {
        var newToDo = {
            id: toDoList.length + 1,
            tarea: inputToDo.value,
            enable: false,
            delete: false,
        };
        toDoList.push(newToDo);
        count++;
        totalCount.innerHTML = count;
        totalList.innerHTML = toDoList.length;
        clean();
        vistaInicial();
    }
});

function validar() {
    if (inputToDo.value === "") {
        validate = false;
        alert("Agregue una tarea antes de continuar");
    } else {
        validate = true;
    }
    return validate;
}

function initCheck() {
    totalCheckCout = 0;
    cont = 0;
    toDoList.forEach((x) => checked(x));
    totalCheck.innerHTML = totalCheckCout;
}

function checked(td) {
    /* var idInput = 'check' + td.id; */
    var inputCheckbox = document.getElementById("checkBox");
    if (td.state === true) {
        inputCheckbox.checked = true;
    } else {
        inputCheckbox.checked = false;
    }
}

bL.addEventListener("change", function () {
    refresh();
    console.log(totalCheckCout);
});

function refresh() {
    totalCheckCout = 0;
    cont = 0;
    toDoList.forEach((x) => countChecked(x));
    totalCheck.innerHTML = totalCheckCout;
}

function countChecked(tarea) {
    /* var idInput = "check" + tarea.id; */
    var inputCheckbox = document.querySelector("#checkBox");
    var stateInput = tarea.state;
    if (stateInput != null && stateInput === true) {
        inputCheckbox.checked = true;
        totalCheckCout++;
    }
}

function deleteToDo(tareaCheck) {
    var idTareaCheck = tareaCheck.parentElement.parentNode.parentNode.children[0].innerHTML;
    var indexDeleteToDo = toDoList.findIndex((tarea) => tarea.id == idTareaCheck);
    count++;
    toDoList.splice(indexDeleteToDo, 1);
    vistaInicial();
    refresh();
}

function checkedToDo(tareaCheck) {
    idTareaCheck = tareaCheck.parentElement.parentNode.children[0].innerHTML;
    toDoList.forEach((x) => countToDo(x));
    refresh();
}

function clean() {
    inputToDo.value = "";
}

function countToDo(tarea) {
    if (tarea.id === Number(idTareaCheck)) {
        if (tarea.state === true) {
            tarea.state = false;
        } else {
            tarea.state = true;
        }
    }
}