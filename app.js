const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menu = document.getElementsByClassName('menu')[0]

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active')
})

menu.addEventListener('click', () => {
    menu.classList.toggle('active')
})

const sr = ScrollReveal ({
    distance: `40px`,
    duration: 1500,
    reset: true
})

sr.reveal(` .intro-text`,{delay:250, origin:`top`})
sr.reveal(` .intro-text h2`,{delay:450, origin:`left`})


sr.reveal(` .about-text-wrapper`,{delay:250, origin:`top`})
sr.reveal(` .findMe`,{delay:550, origin:`bottom`})



sr.reveal(` .CVResume, .services, .findMe, .projects-wrapper, .education, .skills, .about`, {delay:150, origin:`bottom`})

sr.reveal(` .intro-text, .CVResume, .services, .skills, .projects, .education, .findMe`, {delay:150, origin:`bottom`})

sr.reveal(` .project-box1`, {delay:150, origin:`left`})
sr.reveal(` .project-box3`, {delay:150, origin:`left`})

sr.reveal(` .project-box2`, {delay:150, origin:`right`})
sr.reveal(` .project-box4`, {delay:150, origin:`right`})
