let cart = JSON.parse(localStorage.getItem("cart")) || []

let listItem = documnet.getElemetById("list-item")
function showCart(){
    for (let index = 0; index < cart.length; index++) {
        const item = cart[index];

        let cartItem = document.createElement("div")       
        cartItem.classList.add("d-flex align-items-center")
         let cardItem_img = document.createElement("div")
         cartItem_img.classList.add("img-fluid me-5 rounded-circle")

         let img = document.createElement("img")
         img.setAttribute("src",item.image)
         img.classList.add("width: 80px; height: 80px;")
         cartItem.appendChild(cartItem_img)

        let cartItem_productName = document.createElement("div")       
        cartItem_productName.classList.add("d-flex align-items-center")

        let h6 = document.createElement("h6")
        h6.innerHTML = item.name
        cartItem_productName.appendChild(h6)
        cartItem.appendChild(cartItem_productName) 
        
    }
}