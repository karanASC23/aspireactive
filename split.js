const navLinks = document.querySelectorAll('nav a');


// Accordion functionality for training splits
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const accordionHeader = item.querySelector('.accordion-header');
    const accordionContent = item.querySelector('.accordion-content');

    accordionHeader.addEventListener('click', () => {
        accordionContent.classList.toggle('active');
    });
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});