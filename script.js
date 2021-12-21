let btn = document.querySelector('#btn')
let input = document.querySelector('#input')
let out = document.querySelector('#output')

btn.addEventListener('click', () => {
    let p = document.createElement('p')
    p.innerHTML = input.value
    out.appendChild(p)
    p.classList.add('p-style')
    input.value = ''
    p.addEventListener('click', () => {
        p.style.textDecoration = 'line-through'
    })
    p.addEventListener('dblclick', () => {
        out.removeChild(p)
    })
})