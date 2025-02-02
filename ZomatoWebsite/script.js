        // Cart functionality
        let cartCount = 0;
        const cartCountElement = document.querySelector('.cart-count');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                cartCount++;
                cartCountElement.textContent = cartCount;

                // Animation for button
                button.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                }, 100);

                // Show notification
                const itemName = button.parentElement.querySelector('h3').textContent;
                showNotification(`${itemName} added to cart!`);
            });
        });

        // Notification system
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.right = '20px';
            notification.style.backgroundColor = '#4CAF50';
            notification.style.color = 'white';
            notification.style.padding = '1rem';
            notification.style.borderRadius = '5px';
            notification.style.zIndex = '1000';
            notification.textContent = message;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Animation for category cards
        const categoryCards = document.querySelectorAll('.category-card');

        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        categoryCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease-out';
            observer.observe(card);
        });
        function showLoginModal() {
            document.getElementById('loginModal').style.display = 'block';
        }

        function closeLoginModal() {
            document.getElementById('loginModal').style.display = 'none';
        }

        function showRegisterModal() {
            document.getElementById('registerModal').style.display = 'block';
        }

        function closeRegisterModal() {
            document.getElementById('registerModal').style.display = 'none';
        }

        function switchToRegister() {
            closeLoginModal();
            showRegisterModal();
        }

        function switchToLogin() {
            closeRegisterModal();
            showLoginModal();
        }

        // Form Submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Add login logic here
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simulate login
            showNotification('Login successful!');
            closeLoginModal();
        });

        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Add registration logic here
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;

            if (password !== confirmPassword) {
                showNotification('Passwords do not match!', 'error');
                return;
            }

            // Simulate registration
            showNotification('Registration successful!');
            closeRegisterModal();
        });

        // Search Functionality
        const searchBar = document.querySelector('.search-bar');
        const searchButton = document.querySelector('.search-button');

        searchButton.addEventListener('click', performSearch);
        searchBar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        function performSearch() {
            const searchTerm = searchBar.value.trim();
            if (searchTerm) {
                showNotification(`Searching for: ${searchTerm}`);
                // Add search logic here
            }
        }