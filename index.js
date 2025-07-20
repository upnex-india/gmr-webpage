const form = document.getElementById("booking-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const checkInDate = document.getElementById("check-in-date").value;
    const checkOutDate = document.getElementById("check-out-date").value;
    const roomType = document.getElementById("room-type").value;
    const guests = document.getElementById("guests").value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone Number: ${phone}`);
    console.log(`Check-In Date: ${checkInDate}`);
    console.log(`Check-Out Date: ${checkOutDate}`);
    console.log(`Room Type: ${roomType}`);
    console.log(`Number of Guests: ${guests}`);

    alert("Booking successful!");
  });
}

function toggleMenu() {
  var menu = document.getElementById("nav-links");
  var computedStyle = window.getComputedStyle(menu);
  if (computedStyle.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}
