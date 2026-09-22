document.addEventListener("DOMContentLoaded", () => {
    const pasted = document.getElementById('pasted')
    const charCount = document.getElementById('char-count')

    const updateCount = () => {
        charCount.textContent = pasted.value.length.toString()
    }

    // "input" fires for typing, paste, cut, drag and drop, and undo/redo.
    pasted.addEventListener('input', updateCount)

    document.getElementById('clear').addEventListener('click', () => {
        pasted.value = ''
        updateCount()
        pasted.focus()
    })
})
