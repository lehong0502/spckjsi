let products = {
    data: [
        {
            name: "Big Banana",
            price: "2.99$",
            image: "img/vegetable-item-5.jpg"
        },

        {
            name: "Big Banana",
            price: "2.99$",
            image: "img/vegetable-item-5.jpg"
        },

        {
            name: "Big Banana",
            price: "2.99$",
            image: "img/vegetable-item-5.jpg"
        },

        {
            name: "Big Banana",
            price: "2.99$",
            image: "img/vegetable-item-5.jpg"
        },

        {
            name: "Big Banana",
            price: "2.99$",
            image: "img/vegetable-item-5.jpg"
        },

        {
            name: "Big Banana",
            price: "2.99$",
            image: "img/vegetable-item-5.jpg"
        },

        {
            name: "Big Banana",
            price: "2.99$",
            image: "img/vegetable-item-5.jpg"
        },

        {
            name: "Big Banana",
            price: "2.99$",
            image: "img/vegetable-item-5.jpg"
        },

        {
            name: "Big Banana",
            price: "2.99$",
            image: "img/vegetable-item-5.jpg"
        },

        {
            name: "Big Banana",
            price: "2.99$",
            image: "img/vegetable-item-5.jpg"
        },

        {
            name: "Big Banana",
            price: "2.99$",
            image: "img/vegetable-item-5.jpg"
        },

        {
            name: "Big Banana",
            price: "2.99$",
            image: "img/vegetable-item-5.jpg"
        },

        {
            name: "Big Banana",
            price: "2.99$",
            image: "img/vegetable-item-5.jpg"
        },
    ]
}

for (let items of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button")
    btn.setAttribute("onclick", "addToCart()")
    btn.innerHTML = "Add to Cart"
    container.appendChild(btn)
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

for (let i of products.data){
    let product = JSON.parse(localStorage.product)
    product.push({
        name: items.name,
        price: items.price , 
        images: items.image
    })

    localStorage.setItem("product", JSON.stringify(product))
}


const addToCart = () => {
    
}