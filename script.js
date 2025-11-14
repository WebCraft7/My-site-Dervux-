// Form Submission - Actually sends emails
document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create email content
    const subject = `New Website Inquiry from ${name}`;
    const body = `
New website inquiry from Dervux:

Name: ${name}
Email: ${email}
Message: ${message}

Sent from Dervux website contact form.
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:sikholisekubheka8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open user's email client
    window.location.href = mailtoLink;
    
    // Show confirmation message
    alert(`Thank you ${name}! Please check your email client to send the message. We'll respond within 24 hours.`);
    
    // Optional: Reset the form
    this.reset();
});
// ==================== PAYMENT SECURITY FUNCTIONS ====================

// Security Functions for Payment Section
function revealAccountNumber() {
    const revealBtn = document.querySelector('.reveal-btn');
    const accountValue = document.querySelector('.info-item.partial .info-value');
    
    if (revealBtn.textContent === 'Show') {
        accountValue.textContent = '51111678496';
        revealBtn.textContent = 'Hide';
        revealBtn.style.background = '#dc3545';
        
        // Auto hide after 30 seconds
        setTimeout(() => {
            accountValue.textContent = '51111****96';
            revealBtn.textContent = 'Show';
            revealBtn.style.background = 'var(--primary-color)';
        }, 30000);
    } else {
        accountValue.textContent = '51111****96';
        revealBtn.textContent = 'Show';
        revealBtn.style.background = 'var(--primary-color)';
    }
}

function requestPaymentLink() {
    const name = prompt("Please enter your name for the payment link:");
    if (name) {
        const email = prompt("Please enter your email to receive the secure payment link:");
        if (email) {
            alert(`Thank you ${name}! A secure payment link will be sent to ${email} within 1 hour.`);
            
            // In a real application, you would send this to your backend
            console.log(`Payment link requested by: ${name}, Email: ${email}`);
        }
    }
}

// Protect against account number scraping
document.addEventListener('copy', function(e) {
    const selectedText = window.getSelection().toString();
    if (selectedText.includes('51111678496')) {
        e.preventDefault();
        alert('For security reasons, account number copying is disabled. Please note it manually.');
    }
});

// Add context menu protection
document.addEventListener('contextmenu', function(e) {
    if (e.target.closest('.bank-details')) {
        e.preventDefault();
        alert('Right-click disabled for security in bank details section.');
    }
});