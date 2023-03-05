function Order(
  email,
  numberOfSeats,
  allergens,
  credit,
  comments = "No Comments",
  outside,
  date,
  time

) {

  this.orderNumber = `order_${Math.ceil(Math.random() * 99999999999)}`;
  this.email = email;
  this.numberOfSeats = +numberOfSeats;
  this.credit = credit;
  this.allergens = allergens;
  this.comments = comments;
  this.date = date;
  this.time = time;
  this.outside = outside;
}

console.log("Order is loaded!");
