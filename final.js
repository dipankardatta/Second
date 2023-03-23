
// get element by id
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header')
//var h2 = document.getElementsByClassName('title');
//console.log(headerTitle);
//headerTitle.textContent = "HELLO"  
//console.log(headerTitle.innerText)

//header.style.borderBottom = 'solid 3px #000'
//console.log(h2[0]);
//h2[0].style.fontWeight = 'bolder';
//h2[0].style.color = 'green'

//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[2].style.fontWeight = 'bold'
//li[2].style.backgroundColor = 'green'
//li[2].textContent = 'HELLO'

//for (var i = 0; i < li.length; i++){
    //li[i].style.backgroundColor = "#f4f4f4"

//}
    //var header = document.querySelector('#main-header')
    //header.style.borderBottom = 'solid 4px #ccc'

    //var input = document.querySelector('input');
    //input.value = "HELLO WORLD" // grab the first one by default

    //var submit = document.querySelector('input[type="submit"]');
    //submit.value = "SEND PLEASE"

    //var item = document.querySelector('.list-group-item');
    //item.style.color = 'red';

    //var secondItem = document.querySelector('.list-group-item:nth-child(2)')
    //secondItem.style.backgroundColor = 'green'

    //var thirdItem = document.querySelector('.list-group-item:nth-child(3)')
    //thirdItem.style.color = 'coral'

//QUERYSELECTORALL


//var odd = document.querySelectorAll('li:nth-child(odd)');
//for (var i = 0; i<odd.length ; i++){
  //  odd[i].style.backgroundColor = 'green'

//}

//TRAVERSING THE DOM
// var itemList = document.querySelector("#items");
// //PARENTNode
// //console.log(itemList.parentNode);
// //itemList.parentNode.style.backgroundColor = '#f6f6f6'
// //console.log(itemList.parentNode.parentNode)


// //PARENTELEMENT
// //console.log(itemList.parentElement);
// //itemList.parentElement.style.backgroundColor = '#f6f6f6'
// //console.log(itemList.parentElement.parentElement)


// //childNodes
// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// // itemList.children[1].style.background = 'yellow'

// //FirstChild
// // console.log(itemList.firstElementChild);
// // itemList.firstElementChild.textContent = 'HELLO 1'

// //nextsibling
// // console.log(itemList.nextElementSibling)

// // previousSibling
// // console.log(itemList.previousElementSibling);
// // itemList.previousElementSibling.style.color = 'green'

// // create a div
// var newDiv = document.createElement('div');

// // add class
// newDiv.className = 'hello';

// // add id
// newDiv.id = 'hello1';

// // add attr
// newDiv.setAttribute('title','Hello Div');

// //create text node
// var newDivText = document.createTextNode("HELLO WORLD");

// // add text to div

// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);
// container.insertBefore(newDiv, h1);
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);
var newItem = document.getElementById("item");
var description = document.getElementById("description");

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItemvalue = newItem.value;
  var descriptionValue = description.value;

  // Create new li element
  var li = document.createElement("li");

  // Add class
  li.className = "list-group-item";

  // Add text node with input value
  const newText = document.createTextNode(newItemvalue);
  const descriptionNode = document.createTextNode(' ' + descriptionValue);
  console.log(newItemvalue);
  console.log(descriptionValue);

  li.appendChild(newText);
  li.appendChild(descriptionNode);

  // Create del button element
  var deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
  // store user details 
  var user = {
    name: newItemvalue,
    description: descriptionValue
  };
  var users = JSON.stringify(user);
  localStorage.setItem("users", JSON.stringify(users));
  var users_deserial = JSON.parse(localStorage.getItem('users'));
  console.log(users_deserial);

  
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  console.log(text);
  // Get lis
  var items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    // const description = item.childNode[1].textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

























































