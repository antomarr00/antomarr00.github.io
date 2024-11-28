// Toggle active section
const sidebarItems = document.querySelectorAll('.sidebar-item');
const sections = document.querySelectorAll('.main-content > div');

sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        const sectionName = item.getAttribute('data-section');
        
        sidebarItems.forEach(item => item.querySelector('.sidebar-icon').classList.remove('active'));
        item.querySelector('.sidebar-icon').classList.add('active');
        
        sections.forEach(section => section.style.display = 'none');
        document.querySelector(`.${sectionName}-section`).style.display = 'block';
    });
});

// Search courses
const searchInput = document.querySelector('.search-input');
const courseCards = document.querySelectorAll('.courses-section .grid > div');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    courseCards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});