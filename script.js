document.addEventListener("DOMContentLoaded", () => {
    const orderList = document.getElementById("order-list");

    // Adding event listener for datetime-local input change
    orderList.querySelectorAll("input[type='datetime-local']").forEach(input => {
        input.addEventListener("change", (event) => {
            const newDateTime = event.target.value;
            alert(`New date and time set: ${newDateTime}`);
            // You can add more logic here to save or update the new date and time in the backend
        });
    });
});
