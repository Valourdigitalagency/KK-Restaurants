const menuItems = [
  { name: "Appam Delight", file: "appam.jpg", category: "Breakfast", price: 85, note: "Soft, crisp-edged appam with coconut pairing." },
  { name: "Berry Cake", file: "berry-cake.jpg", category: "Desserts", price: 220, note: "Layered cake with berries and rich chocolate drizzle." },
  { name: "Besan Ladoo", file: "besan-ladoo.jpg", category: "Sweets", price: 110, note: "Traditional festival-style sweet balls." },
  { name: "Biryani Platter", file: "biryani-platter.jpg", category: "Mains", price: 320, note: "Fragrant rice platter with a restaurant finish." },
  { name: "Blueberry Falooda", file: "blueberry-falooda.jpg", category: "Desserts", price: 180, note: "Cool layered treat with berry flavor." },
  { name: "Blueberry Smoothie", file: "blueberry-smoothie.jpg", category: "Drinks", price: 150, note: "Fresh blueberry smoothie served chilled." },
  { name: "Brownie Ice Cream", file: "brownie-icecream.jpg", category: "Desserts", price: 190, note: "Warm brownie topped with creamy ice cream." },
  { name: "Carrot Halwa", file: "carrot-halwa.jpg", category: "Sweets", price: 130, note: "Slow-cooked carrot dessert with nuts." },
  { name: "Chapati Stack", file: "chapati-stack.jpg", category: "Breakfast", price: 80, note: "Fresh chapati stack for everyday meals." },
  { name: "Chicken Lollipops", file: "chicken-lollipops.jpg", category: "Snacks", price: 260, note: "Crispy, spicy starter with a premium look." },
  { name: "Chicken Roast", file: "chicken-roast.jpg", category: "Mains", price: 340, note: "Slow-roasted chicken with deep flavor." },
  { name: "Chocolate Banana Shake", file: "chocolate-banana-shake.jpg", category: "Drinks", price: 140, note: "Thick banana chocolate shake." },
  { name: "Chocolate Crepe", file: "chocolate-crepe.jpg", category: "Desserts", price: 170, note: "Soft crepe with chocolate and ice cream." },
  { name: "Chocolate Truffle Cake", file: "chocolate-truffle-cake.jpg", category: "Desserts", price: 240, note: "Elegant truffle cake for celebrations." },
  { name: "Choco Sundae", file: "choco-sundae.jpg", category: "Desserts", price: 160, note: "Classic sundae with a chocolate finish." },
  { name: "Classic Sundae", file: "classic-sundae.jpg", category: "Desserts", price: 150, note: "Traditional ice cream sundae bowl." },
  { name: "Coconut Shake", file: "coconut-shake.jpg", category: "Drinks", price: 120, note: "Fresh coconut cooler with a creamy finish." },
  { name: "Dessert Cup", file: "dessert.jpg", category: "Desserts", price: 180, note: "Signature layered dessert cup." },
  { name: "Idli Set", file: "dosa-set.jpg", category: "Breakfast", price: 120, note: "Soft idli plate with chutney and sambar." },
  { name: "Dragon Fruit Juice", file: "dragon-fruit-juice.jpg", category: "Drinks", price: 130, note: "Bold pink juice made for bright menus." },
  { name: "Chicken Skewers", file: "falooda.jpg", category: "Snacks", price: 240, note: "Chargrilled chicken skewers with dip." },
  { name: "Fish Fry", file: "fish-fry.jpg", category: "Mains", price: 290, note: "Spiced fish fry with banana leaf styling." },
  { name: "Gulab Jamun", file: "gulab-jamun.jpg", category: "Sweets", price: 120, note: "Soft syrup-soaked classic dessert." },
  { name: "Hero Biryani", file: "hero-biryani.jpg", category: "Mains", price: 360, note: "Big-bowl biryani for signature orders." },
  { name: "Lemon Poha", file: "idli.jpg", category: "Breakfast", price: 70, note: "Bright poha breakfast with peanuts and herbs." },
  { name: "Mini Rava Idli", file: "mini-rava-idli.jpg", category: "Breakfast", price: 95, note: "Mini rava idli with a bright yellow finish." },
  { name: "Naan Curry", file: "naan-curry.jpg", category: "Mains", price: 260, note: "Butter naan with creamy curry." },
  { name: "Noodles", file: "noodles.jpg", category: "Snacks", price: 180, note: "Hot wok noodles with restaurant plating." },
  { name: "Orange Cream Cup", file: "orange-cream-cup.jpg", category: "Desserts", price: 140, note: "Orange cream dessert cups." },
  { name: "Orange Juice", file: "orange-juice.jpg", category: "Drinks", price: 90, note: "Fresh orange juice served classic style." },
  { name: "Orange Milkshake", file: "orange-milkshake.jpg", category: "Drinks", price: 130, note: "Creamy orange milkshake with foam." },
  { name: "Oreo Shake", file: "oreo-shake.jpg", category: "Drinks", price: 150, note: "Popular cookies-and-cream shake." },
  { name: "Paneer Masala", file: "paneer-masala.jpg", category: "Mains", price: 280, note: "Rich paneer masala in a thick gravy." },
  { name: "Papaya Juice", file: "papaya-juice.jpg", category: "Drinks", price: 95, note: "Fresh papaya juice with a tropical look." },
  { name: "Pomegranate Juice", file: "pomegranate-juice.jpg", category: "Drinks", price: 110, note: "Bright, refreshing pomegranate juice." },
  { name: "Puri Stack", file: "puri-stack.jpg", category: "Breakfast", price: 100, note: "Golden puffed puris in a neat stack." },
  { name: "Rasmalai", file: "rasmalai.jpg", category: "Sweets", price: 130, note: "Soft rasmalai in saffron milk." },
  { name: "Semiya Payasam", file: "semiya-payasam.jpg", category: "Sweets", price: 110, note: "Creamy vermicelli payasam." },
  { name: "Strawberry Cheesecake", file: "strawberry-cheesecake.jpg", category: "Desserts", price: 230, note: "Fresh strawberry slice with glaze." },
  { name: "String Hopper", file: "string-hopper.jpg", category: "Breakfast", price: 110, note: "String hoppers with curry on the side." },
  { name: "Tender Coconut Lassi", file: "tender-coconut-lassi.jpg", category: "Drinks", price: 125, note: "Cooling coconut lassi with mint freshness." },
  { name: "Yellow Sweet Bites", file: "yellow-sweet-bites.jpg", category: "Sweets", price: 100, note: "Festival bite-size sweets with pistachio." },
  { name: "Chocolate", file: "chocolate.jpg", category: "Sweets", price: 1, note: "A tiny chocolate treat for just Rs 1.", sortRank: 999 },
];

const state = {
  filter: "All",
  query: "",
  cart: loadCart(),
};

const filters = ["All", "Breakfast", "Mains", "Snacks", "Desserts", "Drinks", "Sweets"];
const categoryOrder = {
  Breakfast: 0,
  Mains: 1,
  Snacks: 2,
  Desserts: 3,
  Drinks: 4,
  Sweets: 5,
};

const menuGrid = document.getElementById("menuGrid");
const filtersEl = document.getElementById("filters");
const searchInput = document.getElementById("searchInput");
const cartDrawer = document.getElementById("cartDrawer");
const cartPill = document.getElementById("cartPill");
const closeCart = document.getElementById("closeCart");
const toast = document.getElementById("toast");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const drawerItems = document.getElementById("drawerItems");
const drawerTotal = document.getElementById("drawerTotal");
const drawerTotalLabel = document.getElementById("drawerTotalLabel");
const subtotalEl = document.getElementById("subtotal");
const serviceFeeEl = document.getElementById("serviceFee");
const deliveryFeeEl = document.getElementById("deliveryFee");
const grandTotalEl = document.getElementById("grandTotal");
const checkoutForm = document.getElementById("checkoutForm");
const paymentModal = document.getElementById("paymentModal");
const closePayment = document.getElementById("closePayment");
const paymentAmount = document.getElementById("paymentAmount");
const paymentQr = document.getElementById("paymentQr");
const paymentUpiText = document.getElementById("paymentUpiText");
const upiAppSelect = document.getElementById("upiAppSelect");
const openUpiAppBtn = document.getElementById("openUpiAppBtn");
const gpayLink = document.getElementById("gpayLink");
const phonepeLink = document.getElementById("phonepeLink");
const paytmLink = document.getElementById("paytmLink");
const copyUpiId = document.getElementById("copyUpiId");
const paidConfirm = document.getElementById("paidConfirm");
const heroSearchInput = document.querySelector(".search-hero input");
const rotatorSlides = Array.from(document.querySelectorAll(".rotator-slide"));
const logoUrl = new URL("./public/velour-logo-transparent.png?v=20260707", window.location.href).href;
const checkoutSection = document.getElementById("checkout");

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const merchantUpiId = "7904564217@ptyes";
const merchantUpiName = "Valour Restaurant";

let rotatorIndex = 0;
let rotatorTimer = null;
let pendingOrder = null;

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem("verde-cart")) || [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("verde-cart", JSON.stringify(state.cart));
}

function money(amount) {
  return currency.format(amount);
}

function getVisibleItems() {
  return menuItems
    .map((item, index) => ({ ...item, __index: index }))
    .filter((item) => {
      const byFilter = state.filter === "All" || item.category === state.filter;
      const text = `${item.name} ${item.category} ${item.note}`.toLowerCase();
      const byQuery = !state.query || text.includes(state.query.toLowerCase());
      return byFilter && byQuery;
    })
    .sort((a, b) => {
      const aPriority = a.sortRank ?? 0;
      const bPriority = b.sortRank ?? 0;
      if (aPriority !== bPriority) return aPriority - bPriority;
      const aRank = categoryOrder[a.category] ?? 99;
      const bRank = categoryOrder[b.category] ?? 99;
      if (aRank !== bRank) return aRank - bRank;
      const nameCompare = a.name.localeCompare(b.name);
      if (nameCompare !== 0) return nameCompare;
      return a.__index - b.__index;
    });
}

function renderFilters() {
  filtersEl.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-btn ${state.filter === filter ? "active" : ""}" data-filter="${filter}">
          ${filter}
        </button>`
    )
    .join("");
}

function renderMenu() {
  const items = getVisibleItems();
  menuGrid.innerHTML = items
    .map(
      (item) => `
      <article class="menu-card">
        <img src="./public/food/${item.file}" alt="${item.name}" />
        <div class="menu-card-body">
          <div class="menu-card-top">
            <span class="badge">${item.category}</span>
            <strong class="price">${money(item.price)}</strong>
          </div>
          <h3>${item.name}</h3>
          <div class="menu-card-actions">
            <button class="btn btn-primary" data-action="add" data-file="${item.file}">Add</button>
          </div>
        </div>
      </article>`
    )
    .join("");
}

function findItem(file) {
  return menuItems.find((item) => item.file === file);
}

function addToCart(file) {
  const item = findItem(file);
  if (!item) {
    showToast("Menu item not found");
    return;
  }
  const existing = state.cart.find((item) => item.file === file);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...item, quantity: 1 });
  }
  saveCart();
  renderCart();
  showToast("Added to cart");
}

function removeFromCart(file) {
  state.cart = state.cart.filter((item) => item.file !== file);
  saveCart();
  renderCart();
  showToast("Removed from cart");
}

function updateQty(file, delta) {
  const item = state.cart.find((entry) => entry.file === file);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(file);
    return;
  }
  saveCart();
  renderCart();
}

function getTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const chocolateOnly = state.cart.length === 1 && state.cart[0]?.file === "chocolate.jpg";
  const serviceFee = chocolateOnly ? 0 : subtotal > 0 ? Math.max(25, Math.round(subtotal * 0.05)) : 0;
  const deliveryFee = chocolateOnly ? 0 : subtotal >= 700 ? 0 : subtotal > 0 ? 40 : 0;
  const grandTotal = subtotal + serviceFee + deliveryFee;
  return { subtotal, serviceFee, deliveryFee, grandTotal };
}

function cartItemMarkup(item, compact = false) {
  return `
    <div class="${compact ? "drawer-item" : "cart-item"}">
      <img src="./public/food/${item.file}" alt="${item.name}" />
      <div class="cart-item-main">
        <h4>${item.name}</h4>
        <small>${item.category} - ${money(item.price)} each</small>
      </div>
      <div class="cart-item-right">
        <div class="qty-controls">
          <button class="qty-btn qty-btn-minus" type="button" data-action="minus" data-file="${item.file}" aria-label="Decrease ${item.name} quantity">-</button>
          <strong>${item.quantity}</strong>
          <button class="qty-btn qty-btn-plus" type="button" data-action="plus" data-file="${item.file}" aria-label="Increase ${item.name} quantity">+</button>
          <button class="remove-btn" type="button" data-action="delete" data-file="${item.file}">Remove</button>
        </div>
        <strong class="cart-item-price">${money(item.price * item.quantity)}</strong>
      </div>
    </div>`;
}

function paymentLabel(value) {
  if (value === "upi") return "UPI";
  return "Cash on delivery";
}

function isMobileDevice() {
  return window.matchMedia("(max-width: 760px)").matches || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

function buildUpiParams(orderId, total) {
  const params = new URLSearchParams({
    pa: merchantUpiId,
    pn: merchantUpiName,
    am: String(total.toFixed(2)),
    cu: "INR",
    tn: `Order ${orderId}`,
  });
  return params.toString();
}

function buildUpiUrl(orderId, total) {
  return `upi://pay?${buildUpiParams(orderId, total)}`;
}

function buildAppLinks(orderId, total) {
  const query = buildUpiParams(orderId, total);
  const encoded = `upi://pay?${query}`;
  const androidGpay = `intent://pay?${query}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;
  return {
    gpay: isMobileDevice() ? androidGpay : encoded,
    phonepe: isMobileDevice() ? `phonepe://pay?${query}` : encoded,
    paytm: isMobileDevice() ? `paytmmp://pay?${query}` : encoded,
  };
}

function launchPaymentLink(url) {
  try {
    window.location.href = url;
  } catch {
    window.open(url, "_self");
  }
}

function getSelectedUpiApp() {
  return upiAppSelect?.value || "gpay";
}

function openSelectedUpiApp() {
  if (!pendingOrder) return;
  const totals = pendingOrder.totals || getTotals();
  const links = buildAppLinks(pendingOrder.orderId, totals.grandTotal);
  const selected = getSelectedUpiApp();
  launchPaymentLink(links[selected] || links.gpay);
}

function setPaymentQrFallback(message) {
  paymentQr.removeAttribute("src");
  paymentQr.alt = message;
  paymentQr.classList.add("payment-qr-fallback");
  paymentQr.setAttribute(
    "src",
    `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320">
        <rect width="320" height="320" rx="28" fill="#ffffff"/>
        <rect x="20" y="20" width="280" height="280" rx="22" fill="#eef9e6" stroke="#d6e7c8"/>
        <text x="160" y="144" text-anchor="middle" fill="#243324" font-size="24" font-family="Segoe UI, Arial, sans-serif" font-weight="700">UPI payment ready</text>
        <text x="160" y="180" text-anchor="middle" fill="#61705f" font-size="15" font-family="Segoe UI, Arial, sans-serif">Use the UPI ID or app buttons below</text>
        <text x="160" y="214" text-anchor="middle" fill="#61705f" font-size="13" font-family="Segoe UI, Arial, sans-serif">QR generation unavailable</text>
      </svg>
    `)}`
  );
}

async function openPaymentModal(order) {
  pendingOrder = order;
  const totals = order.totals || getTotals();
  const upiUrl = buildUpiUrl(order.orderId, totals.grandTotal);
  const links = buildAppLinks(order.orderId, totals.grandTotal);
  const mobile = isMobileDevice();

  paymentAmount.textContent = money(totals.grandTotal);
  paymentUpiText.textContent = `UPI ID ${merchantUpiId}`;
  paymentQr.classList.remove("payment-qr-fallback");

  try {
    const qrSource = await window.QRCode.toDataURL(upiUrl, {
      errorCorrectionLevel: "M",
      margin: 2,
      scale: 8,
      color: {
        dark: "#102616",
        light: "#ffffff",
      },
    });
    paymentQr.src = qrSource;
    paymentQr.alt = `QR code to pay ${money(totals.grandTotal)} using UPI ID ${merchantUpiId}`;
  } catch {
    setPaymentQrFallback("QR generation unavailable");
  }

  gpayLink.href = links.gpay;
  phonepeLink.href = links.phonepe;
  paytmLink.href = links.paytm;
  if (upiAppSelect) {
    upiAppSelect.value = "gpay";
  }
  paymentModal.classList.toggle("mobile", mobile);
  paymentModal.classList.add("open");
  paymentModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closePaymentModal() {
  paymentModal.classList.remove("open", "mobile");
  paymentModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function finishOrder({ orderId, name, phone, address, payment }) {
  const totals = getTotals();
  if (payment === "upi") {
    openBillWindow({ orderId, name, phone, address, payment, totals }, () => {
      completeOrder(orderId);
    });
    return;
  }

  completeOrder(orderId);
}

function completeOrder(orderId) {
  showToast(`Order placed successfully: ${orderId}`);

  state.cart = [];
  saveCart();
  checkoutForm.reset();
  checkoutForm.querySelector('[name="payment"]').checked = true;
  renderCart();
  closeCartDrawer();
}

function openBillWindow({ orderId, name, phone, address, payment, totals }, onComplete) {
  const billFrame = document.createElement("iframe");
  billFrame.style.position = "fixed";
  billFrame.style.right = "0";
  billFrame.style.bottom = "0";
  billFrame.style.width = "0";
  billFrame.style.height = "0";
  billFrame.style.border = "0";
  billFrame.style.opacity = "0";
  billFrame.setAttribute("aria-hidden", "true");

  const cleanup = () => {
    if (billFrame.parentNode) {
      billFrame.parentNode.removeChild(billFrame);
    }
  };

  billFrame.onload = () => {
    const billWindow = billFrame.contentWindow;
    if (!billWindow) {
      cleanup();
      return;
    }

    try {
      billWindow.focus();
      billWindow.print();
    } catch {
      cleanup();
      showToast("Bill could not print. Please allow pop-ups or printing.");
      return;
    }

    cleanup();
    if (typeof onComplete === "function") {
      onComplete();
    }
  };

  billFrame.srcdoc = buildBillHtml({ orderId, name, phone, address, payment, totals });
  document.body.appendChild(billFrame);
}

function buildBillHtml({ orderId, name, phone, address, payment, totals }) {
  const rows = state.cart
    .map(
      (item) => `
        <tr>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>${money(item.price)}</td>
          <td>${money(item.price * item.quantity)}</td>
        </tr>`
    )
    .join("");

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Valour Restaurant Bill</title>
        <style>
          :root {
            color-scheme: light;
            --green: #2c6e49;
            --green-soft: #eaf6e3;
            --dark: #163122;
            --text: #1e2f24;
            --muted: #5f7061;
          }
          body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: #fff;
            color: var(--text);
            padding: 24px;
          }
          .bill {
            max-width: 840px;
            margin: 0 auto;
            background: #fff;
            border: 1px solid rgba(44, 110, 73, 0.15);
            border-radius: 22px;
            overflow: hidden;
            box-shadow: 0 18px 40px rgba(22, 49, 34, 0.08);
          }
          .bill-head {
            padding: 24px 28px;
            background: linear-gradient(135deg, var(--dark), var(--green));
            color: #fff;
          }
          .bill-brand {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 10px;
          }
          .bill-brand img {
            width: auto;
            height: 54px;
            object-fit: contain;
            display: block;
            filter: drop-shadow(0 8px 16px rgba(127, 211, 0, 0.18));
          }
          .bill-head h1 {
            margin: 0 0 8px;
            font-size: 30px;
          }
          .bill-head p {
            margin: 4px 0;
            opacity: 0.94;
          }
          .bill-body {
            padding: 24px 28px 28px;
          }
          .meta {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px 18px;
            margin-bottom: 18px;
          }
          .meta div,
          .summary div {
            padding: 12px 0;
            border-bottom: 1px solid rgba(44, 110, 73, 0.12);
          }
          .meta strong,
          .summary strong {
            display: block;
            font-size: 0.78rem;
            color: var(--green);
            letter-spacing: 0.12em;
            text-transform: uppercase;
            margin-bottom: 6px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 12px;
          }
          th, td {
            text-align: left;
            padding: 12px 10px;
            border-bottom: 1px solid rgba(44, 110, 73, 0.12);
          }
          th {
            color: var(--green);
            font-size: 0.82rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }
          .summary {
            margin-top: 18px;
            display: grid;
            gap: 6px;
            background: linear-gradient(180deg, #f7fff3, #f0f9ea);
            border-radius: 18px;
            padding: 8px 18px;
          }
          .summary-row {
            display: flex;
            justify-content: space-between;
            gap: 16px;
          }
          .total {
            font-size: 1.1rem;
            font-weight: 800;
            color: var(--dark);
          }
          .footer {
            margin-top: 18px;
            color: var(--muted);
            font-size: 0.92rem;
          }
          @media print {
            body { padding: 0; }
            .bill { box-shadow: none; border-radius: 0; }
          }
          @media (max-width: 700px) {
            .meta { grid-template-columns: 1fr; }
          }
        </style>
      </head>
      <body>
        <section class="bill">
          <header class="bill-head">
            <div class="bill-brand">
              <img src="${logoUrl}" alt="Valour Restaurant logo" />
            </div>
            <h1>Valour Restaurant</h1>
            <p>Order bill and receipt</p>
          </header>
          <div class="bill-body">
            <div class="meta">
              <div><strong>Order ID</strong>${orderId}</div>
              <div><strong>Date</strong>${new Date().toLocaleString("en-IN")}</div>
              <div><strong>Name</strong>${name}</div>
              <div><strong>Phone</strong>${phone}</div>
              <div style="grid-column: 1 / -1;"><strong>Address</strong>${address}</div>
              <div><strong>Payment</strong>${paymentLabel(payment)}</div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Rate</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
            <div class="summary">
              <div class="summary-row"><span>Subtotal</span><strong>${money(totals.subtotal)}</strong></div>
              <div class="summary-row"><span>Service fee</span><strong>${money(totals.serviceFee)}</strong></div>
              <div class="summary-row"><span>Delivery</span><strong>${money(totals.deliveryFee)}</strong></div>
              <div class="summary-row total"><span>Total</span><span>${money(totals.grandTotal)}</span></div>
            </div>
            <div class="footer">Thank you for ordering from Valour Restaurant.</div>
          </div>
        </section>
      </body>
    </html>
  `;
}

function renderCart() {
  const totals = getTotals();
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartItems.innerHTML = state.cart.length
    ? state.cart.map((item) => cartItemMarkup(item, false)).join("")
    : `<div class="empty-state">Add menu items to build your order.</div>`;
  drawerItems.innerHTML = state.cart.length
    ? state.cart.map((item) => cartItemMarkup(item, true)).join("")
    : `<div class="empty-state">Your cart is empty right now.</div>`;

  subtotalEl.textContent = money(totals.subtotal);
  serviceFeeEl.textContent = money(totals.serviceFee);
  deliveryFeeEl.textContent = money(totals.deliveryFee);
  grandTotalEl.textContent = money(totals.grandTotal);
  drawerTotal.textContent = money(totals.grandTotal);
  drawerTotalLabel.textContent = `${cartCount.textContent} item${cartCount.textContent === "1" ? "" : "s"}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function advanceRotator() {
  if (!rotatorSlides.length) return;
  rotatorIndex = (rotatorIndex + 1) % rotatorSlides.length;
  syncRotator();
}

function syncRotator() {
  if (!rotatorSlides.length) return;

  rotatorSlides.forEach((slide, index) => {
    slide.className = "rotator-slide";
    if (index === rotatorIndex) {
      slide.classList.add("is-active");
    } else {
      slide.classList.add("is-hidden");
    }
  });
}

function startRotator() {
  if (!rotatorSlides.length) return;
  clearInterval(rotatorTimer);
  syncRotator();
  rotatorTimer = setInterval(advanceRotator, 3800);
}

function openCart() {
  if (checkoutSection) {
    checkoutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  closeCartDrawer();
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
}

function resetFilters() {
  state.filter = "All";
  state.query = "";
  searchInput.value = "";
  if (heroSearchInput) heroSearchInput.value = "";
  renderFilters();
  renderMenu();
}

function updateSearchQuery(value, source = null) {
  state.query = String(value || "").trim();
  if (source !== searchInput && searchInput) {
    searchInput.value = state.query;
  }
  if (source !== heroSearchInput && heroSearchInput) {
    heroSearchInput.value = state.query;
  }
  renderMenu();
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (button) {
    const { action, file } = button.dataset;
    if (action === "add") addToCart(file);
    if (action === "plus") updateQty(file, 1);
    if (action === "minus") updateQty(file, -1);
    if (action === "delete") removeFromCart(file);
  }

  const filterButton = event.target.closest(".filter-btn");
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    renderFilters();
    renderMenu();
  }
});

searchInput.addEventListener("input", (event) => updateSearchQuery(event.target.value, searchInput));
if (heroSearchInput) {
  heroSearchInput.addEventListener("input", (event) => updateSearchQuery(event.target.value, heroSearchInput));
}

cartPill.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.cart.length) {
    showToast("Please add at least one item");
    openCart();
    return;
  }

  const formData = new FormData(checkoutForm);
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const address = String(formData.get("address") || "").trim();

  if (!name || !phone || !address) {
    showToast("Fill the delivery details first");
    return;
  }

  const orderId = `VE-${Math.floor(100000 + Math.random() * 900000)}`;
  const payment = String(formData.get("payment") || "upi");
  const totals = getTotals();
  const order = { orderId, name, phone, address, payment, totals };

  if (payment === "upi") {
    void openPaymentModal(order);
    showToast("Choose a UPI app or scan the QR to pay");
    return;
  }

  finishOrder(order);
});

closePayment.addEventListener("click", closePaymentModal);
paymentModal.addEventListener("click", (event) => {
  if (event.target === paymentModal) {
    closePaymentModal();
  }
});

copyUpiId.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(merchantUpiId);
    showToast("UPI ID copied");
  } catch {
    showToast(`UPI ID: ${merchantUpiId}`);
  }
});

[gpayLink, phonepeLink, paytmLink].forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    launchPaymentLink(event.currentTarget.href);
  });
});

openUpiAppBtn.addEventListener("click", openSelectedUpiApp);

paidConfirm.addEventListener("click", () => {
  if (!pendingOrder) return;
  const order = pendingOrder;
  pendingOrder = null;
  closePaymentModal();
  finishOrder(order);
});

renderFilters();
renderMenu();
renderCart();
startRotator();

