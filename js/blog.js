document.addEventListener('DOMContentLoaded', function() {
    // Search Functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            // Add your search logic here
            console.log('Searching for:', e.target.value);
        });
    }

    // Category Filter
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            categoryItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            // Add your category filter logic here
            console.log('Filtering by category:', category);
        });
    });

    // Load More Posts
    const loadMoreBtn = document.querySelector('.load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const spinner = this.querySelector('.spinner-border');
            spinner.classList.remove('d-none');
            
            // Simulate loading new posts
            setTimeout(() => {
                spinner.classList.add('d-none');
                // Add your load more logic here
                console.log('Loading more posts...');
            }, 1500);
        });
    }

    // Newsletter Subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            // Add your newsletter subscription logic here
            alert('Thank you for subscribing!');
            this.reset();
        });
    }
}); 