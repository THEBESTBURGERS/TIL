const coordinates = document.querySelector('#coordinates')
const content = document.querySelector('#content')

content.addEventListener('mousemove', e => {
    console.log(coordinates)
    console.log(`${event.clientX}px, ${event.clientY}px`)
    coordinates.innerHTML = `${event.clientX}px, ${event.clientY}px`
})