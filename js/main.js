// Smooth scroll for anchor links
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

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
  }
});

// Copy code to clipboard
const copyToClipboard = (element) => {
  const text = element.textContent;
  navigator.clipboard.writeText(text).then(() => {
    // Show feedback
    const button = element.parentElement;
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  });
};

// Add click handlers to code blocks
document.querySelectorAll('pre').forEach(pre => {
  const button = document.createElement('button');
  button.className = 'copy-btn';
  button.textContent = 'Copy';
  button.style.cssText = `
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 6px 12px;
    background: #10b981;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.3s;
  `;
  pre.style.position = 'relative';
  pre.appendChild(button);
  
  button.addEventListener('click', () => copyToClipboard(pre.querySelector('code')));
  
  pre.addEventListener('mouseenter', () => button.style.opacity = '1');
  pre.addEventListener('mouseleave', () => button.style.opacity = '0');
});

// Analytics tracking (optional)
if (typeof gtag !== 'undefined') {
  gtag('config', 'GA_MEASUREMENT_ID');
}
