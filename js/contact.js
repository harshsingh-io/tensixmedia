document.addEventListener('DOMContentLoaded', function() {
    // Initialize FAQ Accordion
    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We offer web development, app development, digital marketing, and graphic design services."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity. We'll provide a detailed timeline during consultation."
        },
        {
            question: "What is your pricing structure?",
            answer: "We offer customized pricing based on project requirements. Contact us for a free quote."
        },
        {
            question: "Do you offer ongoing support?",
            answer: "Yes, we provide maintenance and support packages for all our services."
        }
    ];

    const accordion = document.getElementById('faqAccordion');
    faqs.forEach((faq, index) => {
        accordion.innerHTML += `
            <div class="accordion-item" data-aos="fade-up" data-aos-delay="${index * 100}">
                <h2 class="accordion-header">
                    <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#faq${index}">
                        ${faq.question}
                    </button>
                </h2>
                <div id="faq${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        ${faq.answer}
                    </div>
                </div>
            </div>
        `;
    });

    // Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Chat Function
    window.openChat = function() {
        // Add your chat implementation here
        alert('Chat feature coming soon!');
    };
}); 