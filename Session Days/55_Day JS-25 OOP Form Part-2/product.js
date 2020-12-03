function Product() {
  this.productList = [];
  this.addNewProduct = function (newProduct, callback) {
    this.productList.push(newProduct);
    callback();
  };
  this.printProductList = function (callback) {
    var _tr = "";
    if (this.productList.length == 0) {
      _tr += `<tr><td colspan="5">No Student List To Print</td></tr>`;
    } else {
      this.productList.forEach(function (value, index) {
        var date = value.date.split("-");
        _tr += `<tr>
                    <td>${index + 1}</td>
                    <td>${value.name}</td>
                    <td>${value.price}</td>
                    <td>${date[2]}-${date[1]}-${date[0]}</td>
                    <td><button onclick="deleteProduct(this,event,${index})">Delete</button></td>
                </tr>`;
      });
    }
    callback(_tr);
  };
  this.removeProduct = function (index, callback) {
    this.productList.splice(index, 1);
    callback();
  };
}
