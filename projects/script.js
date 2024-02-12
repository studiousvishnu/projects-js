//ADDING ITEMS TO UNORDERED LIST 

const input = document.getElementById('inputTask');
const form = document.getElementById('item-form');
const list = document.querySelector('.items');



const onSubmit = (e) => {
  e.preventDefault();

  const inputData = input.value;
  const newItem = document.createElement('li');
  const boldInput = boldify(inputData);
  newItem.appendChild((boldInput));
  newItem.appendChild(addImg('cross'));
  newItem.className = "field";
  list.appendChild(newItem);
  input.value = '';
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