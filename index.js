const DOM = {
  ordersTableBody: null,
  emailInput: null,
  numberOfSeats: null,
  allergens: null,
  credit: null,
  comments: null,
  outside: null,
  date: null,
  time: null
}

let orders = [];

function init() {

  DOM.ordersTableBody = document.querySelector("#ordersTable tbody");
  DOM.emailInput = document.querySelector("#orderEmail");
  DOM.numberOfSeats = document.querySelector("#numberOfSeats");
  DOM.allergens = document.querySelector("#allergens");
  DOM.allergens = document.querySelector("#allergens");
  DOM.credit = document.querySelector("#credit");
  DOM.comments = document.querySelector("#additionalComments");
  DOM.outside = document.querySelector("#outside");
  DOM.date = document.querySelector("#date");
  DOM.time = document.querySelector("#time");
  //   making onclick="addNNewOrder()" from JS:
  //   const addNewOrderButton = document.getElementById("addNewOrderButton");
  const addNewOrderButton = document.querySelector("#addNewOrderButton");
  addNewOrderButton.addEventListener("click", addNewOrderFn);

  const clearTableButton = document.querySelector("#clearTable");
  clearTableButton.addEventListener("click", clearTableFn);

  function addNewOrderFn(event) {

    // console.log(event); // event
    // console.log(this); // button!
    orders.push(new Order(DOM.emailInput.value, DOM.numberOfSeats.value, DOM.allergens.value, DOM.credit.value, DOM.comments.value, DOM.outside.value, DOM.date.value, DOM.time.value));
    draw(orders);
    clearForm();
  }
}
function clearForm() {
  DOM.emailInput.value = "";
  DOM.numberOfSeats.value = "";
  DOM.allergens.value = "";
  DOM.credit.value = "";
  DOM.comments.value = "";
  DOM.outside.value = "";
  DOM.date.value = "";
  DOM.time.value = "";
}

function clearTableFn() {

  DOM.ordersTableBody.innerHTML = "";
}
function draw(ordersArray) {

  if (Array.isArray(ordersArray) === false) return;
  // document.createElement!
  // DOM.ordersTableBody.append
  // DOM.ordersTableBody > tr > td,td,td,td
  clearTableFn();
  for (let index = 0; index < ordersArray.length; index++) {
    const currentOrder = ordersArray[index];
    // create row
    const tableRow = document.createElement("tr");
    // create orderNumber column
    const tdOrderId = document.createElement("td");
    tdOrderId.innerText = currentOrder.orderNumber;
    // create email column
    const tdEmail = document.createElement("td");
    tdEmail.innerText = currentOrder.email;
    // create numberOfSeats column
    const tdNumberOfSeats = getNumberOfSeatsTD(currentOrder.numberOfSeats);
    const tdAllergens = getAllergensTD(currentOrder.allergens);
    // const tdAllergens = document.createElement("td");
    // tdAllergens.innerText = currentOrder.allergens;
    const tdCredit = document.createElement("td");
    tdCredit.innerText = currentOrder.credit;
    const tdComments = document.createElement("td");
    tdComments.innerText = currentOrder.comments;
    const tdOutside = document.createElement("td");
    tdOutside.innerText = currentOrder.outside;
    const tdDate = document.createElement("td");
    tdDate.innerText = currentOrder.date;
    const tdTime = document.createElement("td");
    tdTime.innerText = currentOrder.time;
    // create Button column
    const tdActions = document.createElement("td");
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("btn", "btn-danger");
    buttonDelete.innerText = "X";
    tdActions.append(buttonDelete);
    buttonDelete.addEventListener("click", function () {
      orders.splice(index, 1);
      draw(orders);
    });

    tableRow.append(tdOrderId, tdEmail, tdNumberOfSeats, tdAllergens, tdCredit, tdComments, tdOutside, tdDate, tdTime, tdActions); // tr>td,td,td,td
    DOM.ordersTableBody.append(tableRow); //table > tbody > tr
  }
  function getNumberOfSeatsTD(numberOfSeats) {
    if (typeof numberOfSeats !== "number") return;
    const numberOfSeatsTd = document.createElement("td");
    for (let index = 0; index < numberOfSeats; index++) {
      const person = document.createElement("i");
      person.className = "bi-person";
      numberOfSeatsTd.append(person);
    }
    numberOfSeatsTd.append(`(${numberOfSeats})`);
    return numberOfSeatsTd;
  }


  function getAllergensTD(allergens) {
    if (typeof allergens !== "string") return;
    const allergensTd = document.createElement("td");
    const allergensArray = allergens.split(",");
    for (let index = 0; index < allergensArray.length; index++) {
      const allergen = allergensArray[index];
      const icon = document.createElement("i");
      switch (allergen) {
        case "Eggs":
          icon.className = "bi-egg";
          break;
        case "Gluten":
          icon.className = "bi-bread-slice";
          break;
        case "Milk":
          icon.className = "bi-milk";
          break;
        case "Nuts":
          icon.className = "bi-nut";
          break;
        case "Kashio":
          icon.className = "bi-fish";
          break;
      }
      allergensTd.append(icon);
    }
    return allergensTd

  }
}
init();
