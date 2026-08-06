document.addEventListener("DOMContentLoaded", () => {
    const pasted = document.getElementById('pasted')
    const charCount = document.getElementById('char-count')

    let count = 0

    const updateCount = () => {
        count = pasted.value.length
        charCount.innerText = count.toString()
    }

    pasted.addEventListener('input', updateCount)
    pasted.addEventListener('paste', (e) => {
        setTimeout(() => updateCount(), 0)
    })
    pasted.addEventListener('keydown', () => {
        setTimeout(() => updateCount(), 0)
    })

    document.getElementById('clear').addEventListener('click', () => {
        pasted.value = ''
        count = 0
        charCount.innerText = '0'
        pasted.focus()
    })
})