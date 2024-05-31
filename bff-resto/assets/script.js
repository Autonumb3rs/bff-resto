function login() { 
    var attempt = 0; 
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    if (email === "Borger" && password === "Borger") {
        attempt = 0;
        window.location.href = "home.html";
    } else {
        attempt++; 
        alert("Invalid username or password. Please try again.");
        if (attempt >= 3) {
            document.getElementById("email").disabled = true;
            document.getElementById("pass").disabled = true;
            alert("Cannot login. Attempts exceeded!!");
        }
    }
}

function logout() {
    window.location.href = "index.html";
}

function refresh() {
    window.location.replace(window.location.href);
}

//Home
function home() {
    window.location.href="home.html";
}

//About
function about() {
    window.location.href="about.html";
}

//Menu
function menu() {
    window.location.href="menu.html"
}

//Contacts
function contact() {
    window.location.href="contacts.html";
}

//Order (Collections)
function order() {
    window.location.href="order.html";
}

//About Mission Vission
let currentAbout = 0;

const aboutItems = [
    {
        title: 'Mission',
        text: 'At BFF-RESTO, our mission is to create more than just meals; we aim to craft unforgettable dining experiences that linger in the hearts and minds of our patrons long after they leave our doors. We accomplish this by meticulously curating a menu of delectable dishes, infused with passion and creativity, and by fostering an atmosphere of genuine warmth and hospitality. We believe that dining is not just about satisfying hunger but about creating moments of connection, celebration, and joy. Every aspect of our restaurant, from the ambiance to the service, is designed to elevate the dining experience and leave a lasting impression on our guests.'
    },
    {
        title: 'Vision',
        text: 'Our vision at BFF-RESTO is to be more than just a restaurant; we aspire to be a destination—a place where food lovers come together to indulge in culinary delights, share laughter and stories, and forge meaningful connections. We envision a future where BFF-RESTO is synonymous with excellence, innovation, and community, where patrons eagerly anticipate each visit, knowing they will be treated to an extraordinary dining adventure. We are committed to continually raising the bar, pushing boundaries, and setting new standards of excellence in the culinary world. Through our unwavering dedication to quality, hospitality, and innovation, we aim to create a legacy that transcends generations, enriching the lives of all who enter our doors.'
    },

    {
        title: 'Core Values',
        text: 'At BFF-RESTO, we passionately create exceptional dishes that delight our customers and leave lasting impressions. We treat every guest like family, offering genuine warmth and attentive service. We value the community spirit of sharing meals and constantly innovate to inspire and delight. Committed to using the finest ingredients and maintaining high standards, we deliver excellence in every aspect. Dining with us is a joyful experience, filled with laughter, good food, and memorable moments. We also prioritize convenience, offering easy ordering options to ensure hassle-free interactions.'
    }
];

function showNextAbout() {
    currentAbout = (currentAbout + 1) % aboutItems.length;
    document.getElementById('about-title').innerText = aboutItems[currentAbout].title;
    document.getElementById('about-text').innerText = aboutItems[currentAbout].text;
}

document.addEventListener('DOMContentLoaded', () => {
    showNextAbout();
});

// Menu Featured
let currentMenu = 0;

const menuItems = [
    {
        image: 'pictures/presets/BFF-Burger-Beer.jpg',
        title: 'BFF Burger & Beer',
        subtitle: 'BFF Signature: 3 Burgers & 3 Beers',
        text: 'Indulge in the ultimate burger experience with our BFF-Burger-Beer combo. This delectable offering includes three of our signature burgers, each crafted to perfection and bursting with flavor. Paired with a chilled beer, this combo is perfect for those who love a hearty meal with a refreshing twist. Whether you are sharing with friends or treating yourself, the BFF-Burger-Beer combo promises a delightful and satisfying dining experience.'
    },
    {
        image: 'pictures/presets/BFF-Burger-Extra-Chili.jpg',
        title: 'BFF Burger Extra Chili',
        subtitle: 'BFF Signature: Hot Beef & Teriyaki Burger',
        text: 'For those who crave a fiery kick, the BFF-Burger-Extra-Chili is your go-to choice. This burger features a juicy patty smothered in extra chili, delivering a bold and spicy punch with every bite. The addition of savory teriyaki sauce adds a deliciously sweet and tangy balance, making this burger a flavor-packed adventure. Perfect for spice lovers, the BFF-Burger-Extra-Chili offers an unforgettable taste experience that will leave you craving more.'
    },
    {
        image: 'pictures/presets/BFF-Burger-Gold.jpg',
        title: 'BFF Burger Gold',
        subtitle: 'BFF Signature: 24K Burger',
        text: 'Elevate your burger experience with the BFF-Burger-Gold, our premium creation designed for those with discerning taste. This exquisite burger boasts a succulent, perfectly seasoned patty topped with gourmet ingredients, delivering a rich and satisfying flavor profile. Every bite of the BFF-Burger-Gold is a celebration of quality and craftsmanship, making it the ideal choice for those seeking a top-tier dining experience. Treat yourself to the luxury of the BFF-Burger-Gold and savor the finest in burger excellence.'
    }
];

function menuNext() {
    currentMenu = (currentMenu + 1) % menuItems.length;
    document.getElementById('menu-image').src = menuItems[currentMenu].image;
    document.getElementById('menu-title').innerText = menuItems[currentMenu].title;
    document.getElementById('menu-subtitle').innerText = menuItems[currentMenu].subtitle;
    document.getElementById('menu-text').innerText = menuItems[currentMenu].text;
}

document.addEventListener('DOMContentLoaded', () => {
    menuNext();
    setInterval(menuNext, 5000);
});

//Modal for Menu
const openModalText = document.querySelector('#open-modal'); 
const modal = document.getElementById('modal-1');
const closeModalBtn = document.getElementById('close-modal');

openModalText.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}

/*menu*/

let cart = [];

// Sample item data with images and descriptions
const items = [
    { name: "Item 1", price: 10.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 1" },
    { name: "Item 2", price: 15.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 2" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    { name: "Item 3", price: 20.00, src: "BFF-Burger-Beer.jpg", description: "Description for Item 3" },
    // Add more items here
];

// Function to render items
function renderItems() {
    const search = document.getElementById('search').value.toLowerCase();
    const itemContainer = document.getElementById('item-container');
    itemContainer.innerHTML = '';
    items.forEach(item => {
        if (item.name.toLowerCase().includes(search)) {
            const itemCard = document.createElement('div');
            itemCard.classList.add('item');
            itemCard.innerHTML = `
                <div class="food">
                    <img src="${item.src}" alt="${item.name}">
                    <div class="layer">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                    </div>
                </div>
                <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
            `;
            itemContainer.appendChild(itemCard);
        }
    });
}

// Render items initially
renderItems();

// Event listener for search input
document.getElementById('search').addEventListener('input', renderItems);

function addToCart(item, price) {
    cart.push({ item, price });
    renderCartItems();
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach((cartItem, index) => {
        total += cartItem.price;
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <span>${cartItem.item} - $${cartItem.price.toFixed(2)}</span>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
    cartItemsContainer.innerHTML += `<div class="cart-item"><strong>Total: $${total.toFixed(2)}</strong></div>`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCartItems();
}

function openCheckoutModal() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before checking out.");
        return;
    }
    const orderOverview = document.getElementById('order-overview');
    let orderDetails = '';
    let total = 0;
    cart.forEach(cartItem => {
        orderDetails += `${cartItem.item} - $${cartItem.price.toFixed(2)}<br>`;
        total += cartItem.price;
    });
    orderDetails += `<strong>Total: $${total.toFixed(2)}</strong>`;
    orderOverview.innerHTML = orderDetails;

    document.getElementById('transaction-id').value = generateTransactionId();
    document.getElementById('modal-checkout').style.display = 'flex';
}

function closeCheckoutModal() {
    document.getElementById('modal-checkout').style.display = 'none';
}

function generateTransactionId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '#';
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function submitCheckout() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const paymentMode = document.getElementById('payment-mode').value;

    if (!name ||!email ||!address ||!paymentMode) {
        alert("Please fill in all required fields.");
        return;
    }

    const transactionId = document.getElementById('transaction-id').value;
    const orderOverview = cart.map(cartItem => `${cartItem.item} - $${cartItem.price.toFixed(2)}`).join(', ');

    const receiptDetails =
    `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Mode of Payment:</strong> ${paymentMode}</p>
        <p><strong>Transaction ID:</strong> ${transactionId}</p>
        <p><strong>Order Overview:</strong></p>
        <p>${orderOverview}</p>
    `;
    document.getElementById('receipt-details').innerHTML = receiptDetails;
    document.getElementById('modal-receipt').style.display = 'flex';
    document.getElementById('modal-receipt').style.textAlign = 'left';
}

function closeReceiptModal() {
    document.getElementById('modal-receipt').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal-checkout');
    if (event.target == modal) {
        closeCheckoutModal();
    }
}