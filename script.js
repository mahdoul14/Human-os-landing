// Advanced Agency Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Animated text functionality
    const titles = ["experiences", "solutions", "platforms", "systems", "experiences"];
    let titleNumber = 0;
    let animatedTextElement;

    function updateTitle() {
        if (!animatedTextElement) return;
        
        if (titleNumber === titles.length - 1) {
            titleNumber = 0;
        } else {
            titleNumber = titleNumber + 1;
        }
        
        // Add spring-like animation
        animatedTextElement.style.transform = 'translateX(-50%) translateY(-100px)';
        animatedTextElement.style.opacity = '0';
        
        setTimeout(() => {
            animatedTextElement.textContent = titles[titleNumber];
            animatedTextElement.style.transform = 'translateX(-50%) translateY(0)';
            animatedTextElement.style.opacity = '1';
        }, 400);
    }

    // Initialize animated text
    animatedTextElement = document.getElementById('animated-text');
    if (animatedTextElement) {
        setInterval(updateTitle, 3000);
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            navbar.style.boxShadow = 'none';
        }

        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
    });

    // Scroll reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.service-card, .work-item, .stat-box, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // FAQ functionality
    function toggleFAQ(button) {
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const icon = button.querySelector('.faq-icon');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = '0';
            }
        });
        
        // Toggle current item
        if (faqItem.classList.contains('active')) {
            faqItem.classList.remove('active');
            answer.style.maxHeight = '0';
        } else {
            faqItem.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    }

    // Add click handlers to FAQ questions
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => toggleFAQ(question));
    });

    // Parallax effect for floating elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.shape, .dot');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Button ripple effect
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Add ripple effect to buttons
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Mouse trail effect
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create subtle trail effect
        if (Math.random() > 0.95) {
            const dot = document.createElement('div');
            dot.style.position = 'fixed';
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
            dot.style.width = '4px';
            dot.style.height = '4px';
            dot.style.background = 'rgba(0, 212, 255, 0.6)';
            dot.style.borderRadius = '50%';
            dot.style.pointerEvents = 'none';
            dot.style.zIndex = '1000';
            dot.style.transition = 'opacity 2s ease, transform 2s ease';
            dot.style.boxShadow = '0 0 10px rgba(0, 212, 255, 0.8)';
            
            document.body.appendChild(dot);
            
            setTimeout(() => {
                dot.style.opacity = '0';
                dot.style.transform = 'scale(0)';
                setTimeout(() => {
                    if (dot.parentNode) {
                        dot.parentNode.removeChild(dot);
                    }
                }, 2000);
            }, 100);
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Animate counters when they come into view
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    });

    document.querySelectorAll('.stat-number').forEach(counter => {
        counterObserver.observe(counter);
    });

    // Video play button functionality
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            const videoContainer = this.closest('.video-container');
            const loadingSpinner = videoContainer.querySelector('.loading-spinner');
            const videoPlaceholder = videoContainer.querySelector('.video-placeholder');
            
            // Show loading state
            this.style.display = 'none';
            loadingSpinner.style.display = 'flex';
            
            // Simulate video loading
            setTimeout(() => {
                loadingSpinner.style.display = 'none';
                videoPlaceholder.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #00d4ff; font-size: 1.2rem;">Demo Video Playing</div>';
            }, 2000);
        });
    }

    // Form validation and submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!email.includes('@')) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn-primary, .btn-secondary {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
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
    `;
    document.head.appendChild(style);

    // Initialize everything
    console.log('Human OS Agency website loaded successfully!');
});