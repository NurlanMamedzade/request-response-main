const goods = [
  
    { name: "car", sum: 4, price: 10000, id: 111 },
    { name: "notebook", sum: 8, price: 2000, id: 222 },
    { name: "pencil", sum: 24, price: 15, id: 333 },
    { name: "bag", sum: 11, price: 20, id: 444 },
    { name: "book", sum: 45, price: 10, id: 555 },
    { name: "phone", sum: 10, price: 455, id: 666 },
    { name: "apple", sum: 100, price: 40, id: 777 },
    { name: "potato", sum: 200, price: 33, id: 888 },
    { name: "bus", sum: 7, price: 12345, id: 999 },
    { name: "pen", sum: 123, price: 21, id: 123 }
  
];

const express = require("express");
const app = express();

app.get("/user/:id", function (req, res) {
    const idOfUser = parseInt(req.params.id);
    const user = goods.find((user) => user.id === idOfUser);
    if (!user) {
      res.status(404).send();
    }
    res.status(200).json(user);
  });

app.listen(3002, function () {
  console.log("Example app listening on port 3000!");
});
