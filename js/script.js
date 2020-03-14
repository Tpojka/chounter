document.addEventListener("DOMContentLoaded", () => {
    const pasted = document.getElementById('pasted')
    const strongCount = document.getElementById('strong-count')
    strongCount.innerText = '0'

    pasted.focus()

    document.getElementById('pasted').onkeyup = function () {
        strongCount.innerText = pasted.value.length.toString()
    }

    document.getElementById('pasted').onpaste = function (e) {
        let current = pasted.value.length
        current += (e.clipboardData || window.clipboardData).getData('text').length
        strongCount.innerText = current.toString()
    }

    document.getElementById('clear').onclick = function () {
        pasted.value = ''
        strongCount.innerText = "0"
        pasted.focus()
    }
})