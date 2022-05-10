window.addEventListener('load', () => {
  const sections = Array.from(document.querySelectorAll('section'))
  let sectionIndex = 0

  const scroll = (direction) => {
    sectionIndex += direction
    if (sectionIndex < 0) {
      sectionIndex = 0
    } else if (sectionIndex >= sections.length) {
      sectionIndex = sections.length - 1
    }

    const section = sections[sectionIndex]
    section.scrollIntoView()
  }

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        scroll(-1)
        event.preventDefault()
        break
      case 'ArrowDown':
      case 'ArrowRight':
        scroll(1)
        event.preventDefault()
        break
    }
  })
})
