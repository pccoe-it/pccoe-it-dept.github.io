document.addEventListener("DOMContentLoaded", function() {
    // Target the "Your Orders" link in the navbar
    const ordersLink = document.getElementById("your-orders-link");
    const ordersSection = document.getElementById("orders");
    const ordersList = document.getElementById("orders-list");

    // Sample data for orders
    const orders = [
        { id: 1, item: "Laptop", status: "Delivered" },
        { id: 2, item: "Smartphone", status: "In Transit" },
        { id: 3, item: "Headphones", status: "Pending" }
    ];

    // Toggle orders section visibility when "Your Orders" is clicked
    ordersLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        ordersSection.classList.toggle("hidden");
        displayOrders();
    });

    // Function to display orders
    function displayOrders() {
        // Clear previous orders
        ordersList.innerHTML = "";
        
        // Add each order to the list
        orders.forEach(order => {
            const listItem = document.createElement("li");
            listItem.textContent = `Order #${order.id}: ${order.item} - ${order.status}`;
            ordersList.appendChild(listItem);
        });
    }
});

