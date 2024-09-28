// JavaScript for page navigation and interactive elements

// Handle navigation menu clicks
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove 'active' class from all links
        document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
        // Add 'active' class to clicked link
        this.classList.add('active');
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
        // Show the selected page
        const pageId = this.getAttribute('data-page');
        document.getElementById(pageId).style.display = 'block';
    });
});

// Handle NER process simulation
document.getElementById('start-ner').addEventListener('click', function() {
    const status = document.getElementById('ner-status');
    status.textContent = 'Processing...';
    // Simulate processing time
    setTimeout(() => {
        status.textContent = 'Entity Recognition Completed.';
    }, 2000);
});

// Handle form submission (prevent actual upload)
document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Data file uploaded successfully.');
});

// Handle export results (simulate)
document.getElementById('export-results').addEventListener('click', function() {
    alert('Results exported successfully.');
});