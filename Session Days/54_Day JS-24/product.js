function Product() {
  this.productList = [];
  this.addNewProduct = function (newProduct, callback) {
    this.productList.push(newProduct);
    callback();
  };
}
