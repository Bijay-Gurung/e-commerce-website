const productForm = document.getElementById('product-form');
const productTable = document.getElementById('product-table');
const productTBody = productTable.getElementsByTagName('tbody')[0];
const exploreButton = document.getElementById('explore-button');
const products = [];

productForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productImage = document.getElementById('product-image').value;
    const productPrice = document.getElementById('product-price').value;

    if (productName && productImage && productPrice) {
        addProduct(productName, productImage, productPrice);
        clearForm();
    }
});

function addProduct(name, image, price) {
    const product = {
        name: name,
        image: image,
        price: price
    };
    products.push(product);

    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const imageCell = document.createElement('td');
    const priceCell = document.createElement('td');
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');

    nameCell.textContent = name;
    imageCell.innerHTML = `<img src="${image}" alt="${name}" width="50">`;
    priceCell.textContent = price;
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        deleteProduct(product);
        row.remove();
    });

    actionCell.appendChild(deleteButton);

    row.appendChild(nameCell);
    row.appendChild(imageCell);
    row.appendChild(priceCell);
    row.appendChild(actionCell);

    productTBody.appendChild(row);
}

function deleteProduct(product) {
    const index = products.indexOf(product);
    if (index !== -1) {
        products.splice(index, 1);
    }
}

function clearForm() {
    document.getElementById('product-name').value = '';
    document.getElementById('product-image').value = '';
    document.getElementById('product-price').value = '';
}
//Toggle button
function myFunction(){
    const element = document.body;
    element.classList.toggle("dark-mode");

    const button = document.querySelector("button");
    if(element.classList.contains("dark-mode")){
        button.textContent="Light";
    }else{
        button.textContent="Dark";
    }
}