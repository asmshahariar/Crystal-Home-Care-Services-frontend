document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
        });
    });
    
    // Photo upload functionality
    const photoUploads = document.querySelectorAll('.photo-upload');
    
    photoUploads.forEach(upload => {
        upload.addEventListener('click', function() {
            // Simulate file input click
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.click();
            
            fileInput.addEventListener('change', function(e) {
                if (e.target.files.length > 0) {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    
                    reader.onload = function(event) {
                        // Create image preview
                        const img = document.createElement('img');
                        img.src = event.target.result;
                        img.style.maxWidth = '100%';
                        img.style.maxHeight = '200px';
                        
                        // Replace placeholder with image
                        const placeholder = upload.querySelector('.upload-placeholder');
                        placeholder.innerHTML = '';
                        placeholder.appendChild(img);
                    };
                    
                    reader.readAsDataURL(file);
                }
            });
        });
    });
    
    // Form validation (basic example)
    const nextButtons = document.querySelectorAll('.next-btn, .create-btn');
    
    nextButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const form = this.closest('.signup-form');
            const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], input[type="tel"]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields');
            }
        });
    });
});