// ================= FLOATING QUICK-ACCESS WIDGET ENGINE =================

document.addEventListener("DOMContentLoaded", () => {
  initFloatingWidget();
});

function initFloatingWidget() {
  const fabBtn = document.getElementById("floating-widget-btn");
  const panel = document.getElementById("floating-widget-panel");
  const closeBtn = document.getElementById("floating-widget-close");
  const tabBtns = document.querySelectorAll(".widget-tab-btn");
  const panes = document.querySelectorAll(".widget-pane");
  
  if (!fabBtn || !panel) return;

  // Toggle widget drawer open/close
  fabBtn.addEventListener("click", () => {
    panel.classList.toggle("active");
    if (panel.classList.contains("active")) {
      syncWidgetBadge();
      renderQuickCart();
      renderQuickWishlist();
      scrollChatToBottom();
    }
  });

  // Close when clicking outside of the panel (but not on the FAB button)
  document.addEventListener("click", (e) => {
    if (!panel.contains(e.target) && !fabBtn.contains(e.target)) {
      panel.classList.remove("active");
    }
  });

  // Tab switching logic
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetPaneId = btn.getAttribute("data-tab");
      
      tabBtns.forEach(b => b.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));
      
      btn.classList.add("active");
      const targetPane = document.getElementById(`widget-pane-${targetPaneId}`);
      if (targetPane) targetPane.classList.add("active");

      if (targetPaneId === "cart") renderQuickCart();
      if (targetPaneId === "wishlist") renderQuickWishlist();
    });
  });

  // Chat message submission
  const chatForm = document.getElementById("widget-chat-form");
  const chatInput = document.getElementById("widget-chat-input");
  
  if (chatForm && chatInput) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const messageText = chatInput.value.trim();
      if (!messageText) return;
      
      appendChatMessage(messageText, "user");
      chatInput.value = "";
      
      showChatTypingIndicator();
      
      // Simulate bot query response
      setTimeout(() => {
        removeChatTypingIndicator();
        const response = getChatbotResponse(messageText);
        appendChatMessage(response, "bot");
      }, 950);
    });
  }

  // Set up MutationObserver to update FAB badge whenever cart or wishlist updates in app.js
  const badgeObserver = new MutationObserver(() => {
    syncWidgetBadge();
  });
  
  // Start observing
  badgeObserver.observe(document.body, { childList: true, subtree: true });
  syncWidgetBadge();
  
  // Set initial greeting
  const messagesLog = document.getElementById("widget-chat-log");
  if (messagesLog && messagesLog.children.length === 0) {
    appendChatMessage("Hello! Welcome to Amazon Premium Support. How can I assist you with your premium experience today?", "bot");
  }
}

// Sync FAB Badge Counter
function syncWidgetBadge() {
  const badge = document.getElementById("widget-badge-count");
  if (!badge) return;

  const cartItems = typeof window.getCartState === "function" ? window.getCartState() : [];
  const wishlistItems = typeof window.getWishlistState === "function" ? window.getWishlistState() : [];
  
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0) + wishlistItems.length;
  
  if (totalQty > 0) {
    badge.style.display = "flex";
    badge.textContent = totalQty;
  } else {
    badge.style.display = "none";
  }
}

// Render Tab: Quick Cart list
function renderQuickCart() {
  const container = document.getElementById("widget-quick-cart-list");
  if (!container) return;

  const cartItems = typeof window.getCartState === "function" ? window.getCartState() : [];
  
  if (cartItems.length === 0) {
    container.innerHTML = `
      <div class="widget-empty-msg">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Your cart is empty.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="widget-quick-list">
      ${cartItems.map(item => `
        <div class="widget-list-item">
          <img src="${item.image}" alt="${item.title}">
          <div class="widget-list-details">
            <div class="widget-list-title">${item.title}</div>
            <div class="widget-list-price">₹${item.price.toFixed(2)} (x${item.qty})</div>
          </div>
          <button class="widget-list-action-btn" onclick="removeQuickCartItem(${item.id})">Remove</button>
        </div>
      `).join("")}
    </div>
  `;
}

// Global actions connected to app.js
window.removeQuickCartItem = function(id) {
  if (typeof window.removeCartItem === "function") {
    window.removeCartItem(id);
    renderQuickCart();
    syncWidgetBadge();
  }
};

// Render Tab: Wishlist list
function renderQuickWishlist() {
  const container = document.getElementById("widget-quick-wishlist-list");
  if (!container) return;

  const wishlistIds = typeof window.getWishlistState === "function" ? window.getWishlistState() : [];
  
  if (wishlistIds.length === 0) {
    container.innerHTML = `
      <div class="widget-empty-msg">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <p>Your wishlist is empty.</p>
      </div>
    `;
    return;
  }

  // Get full products details from global array
  const allProducts = typeof PRODUCTS !== "undefined" ? PRODUCTS : [];
  const wishItems = wishlistIds.map(id => allProducts.find(p => p.id === id)).filter(Boolean);

  container.innerHTML = `
    <div class="widget-quick-list">
      ${wishItems.map(item => `
        <div class="widget-list-item">
          <img src="${item.image}" alt="${item.title}">
          <div class="widget-list-details">
            <div class="widget-list-title">${item.title}</div>
            <div class="widget-list-price">₹${item.price.toFixed(2)}</div>
          </div>
          <button class="widget-list-action-btn" onclick="removeQuickWishItem(${item.id})">Remove</button>
        </div>
      `).join("")}
    </div>
  `;
}

window.removeQuickWishItem = function(id) {
  // Trigger toggle in app.js (which updates active heart and array)
  if (typeof window.toggleWishlistItem === "function") {
    // Simulated event wrapper
    const fakeEvent = { preventDefault: () => {} };
    window.toggleWishlistItem(fakeEvent, id);
    renderQuickWishlist();
    syncWidgetBadge();
  }
};

// Chat Helpers
function appendChatMessage(text, sender) {
  const log = document.getElementById("widget-chat-log");
  if (!log) return;

  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${sender}`;
  bubble.innerHTML = text;
  
  log.appendChild(bubble);
  scrollChatToBottom();
}

function showChatTypingIndicator() {
  const log = document.getElementById("widget-chat-log");
  if (!log) return;

  const indicator = document.createElement("div");
  indicator.id = "chat-typing-indicator";
  indicator.className = "chat-typing-bubble";
  indicator.innerHTML = `
    <div class="chat-typing-dot"></div>
    <div class="chat-typing-dot"></div>
    <div class="chat-typing-dot"></div>
  `;
  
  log.appendChild(indicator);
  scrollChatToBottom();
}

function removeChatTypingIndicator() {
  const indicator = document.getElementById("chat-typing-indicator");
  if (indicator) indicator.remove();
}

function scrollChatToBottom() {
  const log = document.getElementById("widget-chat-log");
  if (log) {
    log.scrollTop = log.scrollHeight;
  }
}

// Chatbot NLP Logic
function getChatbotResponse(query) {
  const clean = query.toLowerCase().trim();
  
  // 1. Returns & Refund keywords
  if (clean.includes("return") || clean.includes("refund") || clean.includes("exchange") || clean.includes("cancel")) {
    return "Our Amazon Premium return policy is extremely seamless! You can request a return for any item within 30 days of delivery. Go to 'Returns & Orders' in the header to view your tracking or start a return.";
  }
  
  // 2. Shipping & Fees keywords
  if (clean.includes("shipping") || clean.includes("charge") || clean.includes("free") || clean.includes("delivery")) {
    return "All premium orders above ₹499.00 qualify for FREE simulated expedited delivery. Standard orders are delivered in 1-2 business days!";
  }
  
  // 3. Order status tracking query
  if (clean.includes("status") || clean.includes("track") || clean.includes("where") || clean.includes("order") || clean.includes("orders")) {
    const orders = typeof window.getTrackingOrdersState === "function" ? window.getTrackingOrdersState() : [];
    if (orders.length > 0) {
      let ordersHTML = "Here is your active order status:<br>";
      orders.forEach(o => {
        ordersHTML += `• <strong>${o.orderId}</strong>: ${o.status} - <em>${o.statusDescription}</em> (Est. delivery: ${o.date})<br>`;
      });
      return ordersHTML;
    }
    return "You do not have any active orders right now. Try adding items to your cart, checking out, and then asking me again!";
  }
  
  // 4. Wallet & Gift Card balance
  if (clean.includes("wallet") || clean.includes("balance") || clean.includes("gift") || clean.includes("card") || clean.includes("money")) {
    return "You can credit your Premium Wallet by claiming card codes (like <strong>AMZ-GIFT-5000</strong> or <strong>AMZ-GIFT-10000</strong>) in the Gift Cards panel in the sub-navigation menu!";
  }

  // 5. Offers & Discounts
  if (clean.includes("discount") || clean.includes("offer") || clean.includes("deal") || clean.includes("sale")) {
    return "Today's deals are active! Check out our 'Today's Deals' panel in the sub-navigation for 15% discount Lightning Offers!";
  }
  
  // Default help fallback
  return "Hello! I am your Premium Assistant. How can I help you today? You can ask me about:<br>• <strong>Order tracking</strong> (\"where is my order?\")<br>• <strong>Returns & Refunds</strong> (\"return policy\")<br>• <strong>Shipping fees</strong> (\"free shipping\")<br>• <strong>Wallet balance</strong> (\"gift cards\")";
}
