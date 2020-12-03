extend(Product, CommonFunction);
var product = new Product();

var productName = product.getById("inputProductName");
var productPrise = product.getById("inputProductPrise");
var productMangDate = product.getById("inputProductMangDate");
var addBtnProduct = product.getById("saveProductDetails");
var tbody = product.getById("tbody");

product.printProductList(function (_tr) {
  tbody.innerHTML = _tr;
});

addBtnProduct.addEventListener("click", function (event) {
  event.preventDefault();
  var newProduct = {
    name: productName.value,
    price: "",
    date: "",
  };
  newProduct.price = productPrise.value;
  newProduct.date = productMangDate.value;

  product.addNewProduct(newProduct, function () {
    productName.value = "";
    productPrise.value = "";
    productMangDate.value = "";
    product.printProductList(function (_tr) {
      tbody.innerHTML = _tr;
    });
  });
});

function deleteProduct(_this, event, index) {
  product.removeProduct(index, function () {
    product.printProductList(function (_tr) {
      tbody.innerHTML = _tr;
    });
  });
}
