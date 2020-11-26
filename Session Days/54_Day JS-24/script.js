extend(Product, CommonFunction);
var product = new Product();

var productName = product.getById("inputProductName");
var productPrise = product.getById("inputProductPrise");
var productMangDate = product.getById("inputProductMangDate");
var addBtnProduct = product.getById("saveProductDetails");

addBtnProduct.addEventListener("click", function (event) {
  event.preventDefault();
  var newProduct = {
    name: productName.value,
    prise: "",
    date: "",
  };
  newProduct.prise = productPrise.value;
  newProduct.date = productMangDate.value;

  product.addNewProduct(newProduct, function () {
    productName.value = "";
    productPrise.value = "";
    productMangDate.value = "";
  });
});
