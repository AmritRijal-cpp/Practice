var items = JSON.parse(localStorage.getItem("todo-list")) || [];
function addTodo() {
  var inputBox = document.querySelector("#todo-input");
  var item = inputBox.value;
  if (item === "") {
    alert("You need to put in a value");
    return;
  }
  items.push({
    value: item,
  });

  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
  inputBox.value = "";
}

function deleteItem(index) {
    if(confirm('Do you want to delete')){
        items.splice(index, 1);
        localStorage.setItem("todo-list", JSON.stringify(items));
        listItems();
    }
}

function listItems() {
  var list = "";
  for (var i = 0; i < items.length; i++) {
    list += `<li class ="newList">
            ${items[i].value}
            <span class="remove" onclick='deleteItem(${i})'>Delete</span>
        </li>
    `;
  }
  document.querySelector("#todo-list").innerHTML = list;
}

(function () {
  listItems();
})();
