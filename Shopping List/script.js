

const input = document.getElementById('inputTask');
const form = document.getElementById('item-form');
const list = document.querySelector('.items');
const clearAll = document.getElementById("btn2")
const Filter = document.getElementById("Filter");



//ADDING ITEMS TO UNORDERED LIST 

const onSubmit = (e) => {
  e.preventDefault();

  const inputData = input.value.trim();
  if(inputData === "")
  {
    alert("Please enter an item");
  }
  else{
  const newItem = document.createElement('li');
  const boldInput = boldify(inputData);
  newItem.appendChild((boldInput));
  newItem.appendChild(addImg('cross'));
  newItem.className = "field";
  list.appendChild(newItem);
  checkUI();
  input.value = '';
  }
}

const boldify = (text)=>{
const bold = document.createElement('b');
  bold.appendChild(document.createTextNode(text));
  return bold;
}

const addImg = (classes)=>{
  const img = document.createElement('img');
  img.className = classes;
  img.src = "./images/cross-mark.svg"
  return img;
}


form.addEventListener('submit', onSubmit);


//removing single items

const removeItem = (e)=>{
  if(e.target.classList.contains('cross'))

  {
    if(confirm('Are you sure you want to remove this item form the list?'))
    e.target.parentElement.remove();
  }
checkUI();

}

list.addEventListener('click',removeItem);




//removing all items

const onClear = ()=>{
  if(confirm('Are you sure you want to clear the list?')){
  
  while(list.firstChild)

  {
    

    list.removeChild(list.firstChild);
  }
checkUI();
  
}}



clearAll.addEventListener('click',onClear);



const checkUI = ()=>{
  const listItems = list.querySelectorAll('li');
  if(listItems.length ===0)
  {
    clearAll.style.display = 'none';
    Filter.style.display = 'none';
  }
  else{
    clearAll.style.display = 'block';
    Filter.style.display = 'block';
  }
}
checkUI();  