document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('header .nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Testimonial Slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonialCards.length > 0 && prevBtn && nextBtn) {
        let currentIndex = 0;
        
        // Function to show testimonial at specific index
        function showTestimonial(index) {
            testimonialCards.forEach((card, i) => {
                card.style.transform = `translateX(${100 * (i - index)}%)`;
            });
        }
        
        // Initialize slider
        showTestimonial(currentIndex);
        
        // Event listeners for navigation buttons
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % testimonialCards.length;
            showTestimonial(currentIndex);
        });
        
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
            showTestimonial(currentIndex);
        });
    }

    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.vision-image, .vision-text, .section-title, .policy-content, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Course tabs functionality - FIXED
    const courseTabs = document.querySelectorAll('.course-tab');
    const courseCards = document.querySelectorAll('.course-cards');
    
    if (courseTabs.length > 0 && courseCards.length > 0) {
        courseTabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all tabs and cards
                courseTabs.forEach(tab => tab.classList.remove('active'));
                courseCards.forEach(card => card.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Show corresponding course card
                const courseId = this.getAttribute('data-course');
                document.getElementById(courseId).classList.add('active');
            });
        });
    }
});