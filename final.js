
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

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[2].style.fontWeight = 'bold'
li[2].style.backgroundColor = 'green'
li[2].textContent = 'HELLO'

for (var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = "#f4f4f4"

}