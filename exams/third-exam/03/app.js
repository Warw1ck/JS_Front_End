let updateProductId;
const productForm = {
    name: document.querySelector('#product'),
    count: document.querySelector('#count'),
    price: document.querySelector('#price')

}
buttonsForm = {
    addBtn: document.querySelector('#add-product'),
    updateBtn: document.querySelector('#update-product'),
    loadBtn: document.querySelector('#load-product'),

}
buttonsForm.loadBtn.addEventListener('click', loadProducts)
function loadProducts(e) {
    e.preventDefault();    
    document.querySelector('#tbody').innerHTML = ''
    fetch('http://localhost:3030/jsonstore/grocery/')
    .then((res)=> res.json())
    .then((productsData)=>{
        Object.entries(productsData).forEach(([key, product]) => {
            const row = elementCreate('tr')
            elementCreate('td', ['name'], product.product, null, row)
            elementCreate('td', ['count-product'], product.count, null, row)
            elementCreate('td', ['product-price'], product.price, null, row)
            const productButtonsTd = elementCreate('td', ['btn'])
            const updateProductBtn = elementCreate('button', ['update'], 'Update', null, productButtonsTd)
            const deleteProductBtn = elementCreate('button', ['delete'], 'Delete', null, productButtonsTd)
            row.appendChild(productButtonsTd)
            document.querySelector('#tbody').appendChild(row)
            deleteProductBtn.addEventListener('click', deleteProduct)
            function deleteProduct(e) {
                fetch(`http://localhost:3030/jsonstore/grocery/${key}`, {
                 
                // Adding method type
                method: "DELETE"
            })
             
            // Converting to JSON
            .then(response => response.json())
            .then(() => {
                loadProducts(e); 
                clearTheForm()
            });
                
            }
            updateProductBtn.addEventListener('click', (e)=>{
                productForm.name.value = product.product
                productForm.count.value = product.count
                productForm.price.value = product.price
                buttonsForm.updateBtn.disabled = false;
                buttonsForm.addBtn.disabled = true;

                updateProductId = key

            })
        });

    }) 
}
buttonsForm.updateBtn.addEventListener('click', updateProduct)
function updateProduct(e) {
    fetch(`http://localhost:3030/jsonstore/grocery/${updateProductId}`, {
     
    // Adding method type
    method: "PATCH",
     
    // Adding body or contents to send
    body: JSON.stringify({
        product: productForm.name.value,
        count: productForm.count.value,
        price: productForm.price.value
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    
    // Converting to JSON
    .then(response => response.json())
    .then(() => {
        console.log('Update request completed successfully!');
        clearTheForm()
        buttonsForm.updateBtn.disabled = true;
        buttonsForm.addBtn.disabled = false;
        loadProducts(e)
    });
    
    
     
    
}
buttonsForm.addBtn.addEventListener('click', addProduct)
function addProduct(e) {
    e.preventDefault();    
    fetch("http://localhost:3030/jsonstore/grocery/", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        product: productForm.name.value,
        count: productForm.count.value,
        price: productForm.price.value
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    
    // Converting to JSON
    .then(response => response.json())
    .then(() => {
        loadProducts(e); 
        clearTheForm()
    });
    
}



function clearTheForm(){
    Object.values(productForm).forEach(element => {
        element.value = ''
        
    });
}


function elementCreate(type, classes, textContent, id, fatherName) {
    const element = document.createElement(type)

    if (classes) {
        element.classList.add(...classes);
    }

    if (textContent) {
        element.textContent = textContent
    }

    if (id) {
        element.setAttribute("id", id)
        
    }
    if (fatherName) {
        fatherName.appendChild(element)


    }
    return element
}