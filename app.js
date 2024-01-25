const pos = document.documentElement;
const cards = document.querySelectorAll('.skill-card');

// For Flash Light Effect
pos.addEventListener('mousemove', e => {
    pos.style.setProperty('--x', e.clientX + 'px')
    pos.style.setProperty('--y', e.clientY + 'px')
})

// For Card Intro Animation Basically Intersection Observer
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(e => {
            e.target.classList.toggle('show',e.isIntersecting)
        })
    },{
        threshold: 0.5,
    }
)

cards.forEach(card => {
    observer.observe(card)
})