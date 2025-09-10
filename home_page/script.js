// Enhanced JavaScript with modern features and animations

class NetTechProWebsite {
  constructor() {
    this.currentSlide = 0
    this.slides = document.querySelectorAll(".slide")
    this.dots = document.querySelectorAll(".dot")
    this.hamburger = document.querySelector(".hamburger")
    this.navMenu = document.querySelector(".nav-menu")
    this.header = document.querySelector(".header")

    this.init()
  }

  init() {
    this.setupSlideshow()
    this.setupNavigation()
    this.setupScrollEffects()
    this.setupProductCards()
    this.setupSmoothScrolling()
    this.setupHeaderScroll()
  }

  // Enhanced slideshow with smooth transitions
  setupSlideshow() {
    // Auto-advance slides
    setInterval(() => {
      this.nextSlide()
    }, 5000)

    // Dot navigation
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.goToSlide(index)
      })
    })

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prevSlide()
      if (e.key === "ArrowRight") this.nextSlide()
    })
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length
    this.updateSlide()
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1
    this.updateSlide()
  }

  goToSlide(index) {
    this.currentSlide = index
    this.updateSlide()
  }

  updateSlide() {
    // Update slides
    this.slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === this.currentSlide)
    })

    // Update dots
    this.dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentSlide)
    })
  }

  // Enhanced navigation with mobile support
  setupNavigation() {
    this.hamburger.addEventListener("click", () => {
      this.navMenu.classList.toggle("active")
      this.animateHamburger()
    })

    // Close mobile menu when clicking on links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.navMenu.classList.remove("active")
        this.resetHamburger()
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!this.hamburger.contains(e.target) && !this.navMenu.contains(e.target)) {
        this.navMenu.classList.remove("active")
        this.resetHamburger()
      }
    })
  }

  animateHamburger() {
    const spans = this.hamburger.querySelectorAll("span")
    if (this.navMenu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
    } else {
      this.resetHamburger()
    }
  }

  resetHamburger() {
    const spans = this.hamburger.querySelectorAll("span")
    spans.forEach((span) => {
      span.style.transform = ""
      span.style.opacity = ""
    })
  }

  // Scroll-triggered animations
  setupScrollEffects() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, observerOptions)

    // Add scroll animation class to elements
    document.querySelectorAll(".product-card, .about-text, .footer-section").forEach((el) => {
      el.classList.add("scroll-animate")
      observer.observe(el)
    })
  }

  // Enhanced product card interactions
  setupProductCards() {
    document.querySelectorAll(".product-card").forEach((card) => {
      const buyButton = card.querySelector(".buy-button")

      // Ripple effect on buy button
      buyButton.addEventListener("click", (e) => {
        this.createRipple(e, buyButton)

        // Simulate purchase process
        const originalText = buyButton.textContent
        buyButton.textContent = "Adding..."
        buyButton.disabled = true

        setTimeout(() => {
          buyButton.textContent = "Added!"
          buyButton.style.background = "#10b981"
        }, 1000)

        setTimeout(() => {
          buyButton.textContent = originalText
          buyButton.disabled = false
          buyButton.style.background = ""
        }, 2500)
      })

      // Parallax effect on hover
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 10
        const rotateY = (centerX - x) / 10

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
      })

      card.addEventListener("mouseleave", () => {
        card.style.transform = ""
      })
    })
  }

  createRipple(event, element) {
    const ripple = document.createElement("span")
    const rect = element.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = size + "px"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.classList.add("ripple")

    element.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  }

  // Smooth scrolling for navigation links
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault()
        const target = document.querySelector(anchor.getAttribute("href"))
        if (target) {
          const headerHeight = this.header.offsetHeight
          const targetPosition = target.offsetTop - headerHeight

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  }

  // Header scroll effects
  setupHeaderScroll() {
    let lastScrollY = window.scrollY

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY

      // Add/remove scrolled class for styling
      if (currentScrollY > 100) {
        this.header.classList.add("scrolled")
      } else {
        this.header.classList.remove("scrolled")
      }

      // Hide/show header on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        this.header.style.transform = "translateY(-100%)"
      } else {
        this.header.style.transform = "translateY(0)"
      }

      lastScrollY = currentScrollY
    })
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new NetTechProWebsite()
  new BasicOperations()
})

class BasicOperations {
  constructor() {
    this.setupFormValidation()
    this.setupSearchFunctionality()
    this.setupCartOperations()
    this.setupNotifications()
    this.setupLocalStorage()
  }

  // Form validation for contact forms
  setupFormValidation() {
    const forms = document.querySelectorAll("form")
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault()
        this.validateForm(form)
      })
    })
  }

  validateForm(form) {
    const inputs = form.querySelectorAll("input[required], textarea[required]")
    let isValid = true

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        this.showError(input, "This field is required")
        isValid = false
      } else if (input.type === "email" && !this.isValidEmail(input.value)) {
        this.showError(input, "Please enter a valid email")
        isValid = false
      } else {
        this.clearError(input)
      }
    })

    if (isValid) {
      this.showNotification("Form submitted successfully!", "success")
      form.reset()
    }
  }

  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  showError(input, message) {
    input.classList.add("error")
    let errorDiv = input.nextElementSibling
    if (!errorDiv || !errorDiv.classList.contains("error-message")) {
      errorDiv = document.createElement("div")
      errorDiv.className = "error-message"
      input.parentNode.insertBefore(errorDiv, input.nextSibling)
    }
    errorDiv.textContent = message
  }

  clearError(input) {
    input.classList.remove("error")
    const errorDiv = input.nextElementSibling
    if (errorDiv && errorDiv.classList.contains("error-message")) {
      errorDiv.remove()
    }
  }

  // Search functionality
  setupSearchFunctionality() {
    const searchInput = document.createElement("input")
    searchInput.type = "text"
    searchInput.placeholder = "Search products..."
    searchInput.className = "search-input"

    const nav = document.querySelector(".nav")
    nav.appendChild(searchInput)

    searchInput.addEventListener("input", (e) => {
      this.searchProducts(e.target.value)
    })
  }

  searchProducts(query) {
    const products = document.querySelectorAll(".product-card")
    const searchTerm = query.toLowerCase()

    products.forEach((product) => {
      const productName = product.querySelector("h3").textContent.toLowerCase()
      if (productName.includes(searchTerm) || searchTerm === "") {
        product.style.display = "block"
        product.style.animation = "fadeIn 0.3s ease"
      } else {
        product.style.display = "none"
      }
    })
  }

  // Shopping cart operations
  setupCartOperations() {
    this.cart = this.getCartFromStorage()
    this.updateCartDisplay()

    document.querySelectorAll(".buy-button").forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation()
        const productCard = button.closest(".product-card")
        const product = this.extractProductInfo(productCard)
        this.addToCart(product)
      })
    })
  }

  extractProductInfo(productCard) {
    return {
      id: Date.now() + Math.random(),
      name: productCard.querySelector("h3").textContent,
      price: productCard.querySelector(".product-price").textContent,
      image: productCard.querySelector("img").src,
    }
  }

  addToCart(product) {
    this.cart.push(product)
    this.saveCartToStorage()
    this.updateCartDisplay()
    this.showNotification(`${product.name} added to cart!`, "success")
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter((item) => item.id !== productId)
    this.saveCartToStorage()
    this.updateCartDisplay()
    this.showNotification("Item removed from cart", "info")
  }

  updateCartDisplay() {
    let cartIcon = document.querySelector(".cart-icon")
    if (!cartIcon) {
      cartIcon = document.createElement("div")
      cartIcon.className = "cart-icon"
      cartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i><span class="cart-count">0</span>`
      document.querySelector(".nav").appendChild(cartIcon)

      cartIcon.addEventListener("click", () => this.showCartModal())
    }

    const cartCount = cartIcon.querySelector(".cart-count")
    cartCount.textContent = this.cart.length
  }

  showCartModal() {
    const modal = document.createElement("div")
    modal.className = "cart-modal"
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>Shopping Cart</h3>
          <button class="close-modal">&times;</button>
        </div>
        <div class="cart-items">
          ${this.cart
            .map(
              (item) => `
            <div class="cart-item">
              <img src="${item.image}" alt="${item.name}">
              <div class="item-info">
                <h4>${item.name}</h4>
                <p>${item.price}</p>
              </div>
              <button class="remove-item" data-id="${item.id}">Remove</button>
            </div>
          `,
            )
            .join("")}
        </div>
        <div class="cart-total">
          <p>Total Items: ${this.cart.length}</p>
          <button class="checkout-btn">Checkout</button>
        </div>
      </div>
    `

    document.body.appendChild(modal)

    modal.querySelector(".close-modal").addEventListener("click", () => modal.remove())
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.remove()
    })

    modal.querySelectorAll(".remove-item").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.removeFromCart(Number.parseInt(e.target.dataset.id))
        modal.remove()
      })
    })
  }

  // Notification system
  setupNotifications() {
    const notificationContainer = document.createElement("div")
    notificationContainer.className = "notification-container"
    document.body.appendChild(notificationContainer)
  }

  showNotification(message, type = "info") {
    const notification = document.createElement("div")
    notification.className = `notification ${type}`
    notification.innerHTML = `
      <i class="fas fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"}"></i>
      <span>${message}</span>
      <button class="close-notification">&times;</button>
    `

    const container = document.querySelector(".notification-container")
    container.appendChild(notification)

    notification.querySelector(".close-notification").addEventListener("click", () => {
      notification.remove()
    })

    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove()
      }
    }, 5000)
  }

  // Local storage operations
  setupLocalStorage() {
    // Save user preferences
    this.saveUserPreference = (key, value) => {
      localStorage.setItem(`nettechpro_${key}`, JSON.stringify(value))
    }

    this.getUserPreference = (key, defaultValue = null) => {
      const stored = localStorage.getItem(`nettechpro_${key}`)
      return stored ? JSON.parse(stored) : defaultValue
    }
  }

  getCartFromStorage() {
    return this.getUserPreference("cart", [])
  }

  saveCartToStorage() {
    this.saveUserPreference("cart", this.cart)
  }

  // Utility functions
  formatPrice(price) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price)
  }

  debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  throttle(func, limit) {
    let inThrottle
    return function () {
      const args = arguments
      
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }
}

// Add CSS for ripple effect
const style = document.createElement("style")
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .cart-icon {
      position: relative;
      display: inline-block;
      cursor: pointer;
      margin-left: 10px;
    }
    
    .cart-count {
      position: absolute;
      top: -10px;
      right: -10px;
      background-color: #ff0000;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
    }
    
    .cart-modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 80%;
      max-width: 600px;
      z-index: 1000;
    }
    
    .cart-modal .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .cart-modal .modal-header h3 {
      margin: 0;
    }
    
    .cart-modal .modal-header button {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
    }
    
    .cart-modal .cart-items {
      margin-bottom: 20px;
    }
    
    .cart-modal .cart-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    
    .cart-modal .cart-item img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    
    .cart-modal .cart-item .item-info {
      flex-grow: 1;
    }
    
    .cart-modal .cart-item .remove-item {
      background-color: #ff0000;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    }
    
    .cart-modal .cart-total {
      text-align: right;
    }
    
    .cart-modal .checkout-btn {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
    }
    
    .notification-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1001;
    }
    
    .notification {
      display: flex;
      align-items: center;
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      animation: slideIn 0.3s ease;
    }
    
    .notification.success {
      border-color: #28a745;
      color: #28a745;
    }
    
    .notification.error {
      border-color: #dc3545;
      color: #dc3545;
    }
    
    .notification.info {
      border-color: #17a2b8;
      color: #17a2b8;
    }
    
    .notification i {
      margin-right: 10px;
    }
    
    .notification button {
      background: none;
      border: none;
      font-size: 16px;
      cursor: pointer;
      margin-left: auto;
    }
    
    @keyframes slideIn {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }
    
    .search-input {
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 3px;
      margin-left: 10px;
    }
`
document.head.appendChild(style)
