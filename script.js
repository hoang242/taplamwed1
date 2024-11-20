document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartCountElement = document.getElementById("cart-count");
    const totalPriceElement = document.getElementById("total-price");
    const cartItemsElement = document.getElementById("cart-items");

    function updateCart() {
        // Cập nhật số lượng giỏ hàng
        cartCountElement.textContent = cart.length;

        // Cập nhật danh sách sản phẩm
        cartItemsElement.innerHTML = "";
        let totalPrice = 0;
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ${item.price} VND`;
            cartItemsElement.appendChild(li);
            totalPrice += item.price;
        });

        // Cập nhật tổng giá
        totalPriceElement.textContent = totalPrice.toLocaleString();
    }

    // Xử lý sự kiện "Thêm vào giỏ"
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            const productElement = event.target.closest(".product");
            const name = productElement.querySelector("h2").textContent;
            const price = parseInt(productElement.querySelector(".price").textContent.replace(/,/g, ""));

            cart.push({ name, price });
            updateCart();
        });
    });
});
