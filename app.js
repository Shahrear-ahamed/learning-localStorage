const getId = id => document.getElementById(id);


const addBtnElem = getId("add-btn");
const inputElem = getId("todo-input");
const list = getId("todo-lists");

inputElem.addEventListener("keypress",(e)=>{
    if(e.key=== "Enter"){
        addBtn()
    }
})

const addBtn = () =>{
    if(inputElem.value == ""){
        return;
    }else{
    const items = document.createElement("li");
    const button = document.createElement("button");
    const input = inputElem.value;
    items.innerText = input;
    button.innerText = "Delete";
    button.setAttribute("onClick", `removeBtn("${input}")`)
    items.appendChild(button)
    list.appendChild(items);
    addLocalStorage(input);
    inputElem.value = "";
    }
}

const addLocalStorage = (id) => {
  let shoppingCart = {};
  // get data from localStorage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // set data in localStorage by suing object
  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

  /*
    here is for only add element one by one

    const quantity = localStorage.getItem(d ata);
    console.log(quantity);
    if (quantity) {
      const newQuantity = parseFloat(quantity) + 1;
      localStorage.setItem(data, newQuantity);
    } else {
      localStorage.setItem(data, 1);
    } */
};

const removeBtn = (id) => {
  const savedData = localStorage.getItem("shopping-cart");
  if(savedData){
      const shoppingCart = JSON.parse(savedData);
      console.log(shoppingCart[id]);
      if(shoppingCart){
          delete shoppingCart[id];
          localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
      }
  }
};







































// const elem = id => document.getElementById(id);

// const input = elem("todo-input")
// const addBtn = elem("add-btn")
// const todoList = elem("todo-lists");

// // button and add items
// input.addEventListener("keypress",(e)=>{
//     if(e.key == "Enter"){
//         addBtnClick();
//     }else{
//         return;
//     }
// })
// const addBtnClick = ()=>{
//     if(input.value == ""){
//         return
//     }else{
//         const value = input.value
//         const li = document.createElement("li");
//         li.innerText = value;
//         todoList.appendChild(li);
//         input.value = "";
//         addLocalStorage(value)
//     }
// }

// // send data to localStorage

// const addLocalStorage = test =>{
//     let localData;

//     const quantity = localData[test];
//     if(quantity){
        
//     }
//     localStorage.setItem("data", JSON.stringify(localData));
// }