
const sections = document.querySelectorAll('.section1, .section2');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    
    observer.unobserve(entry.target);
    }
});
}, { threshold: 0.2 });

sections.forEach(section => {
observer.observe(section);
});

