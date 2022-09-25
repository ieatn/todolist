const output = document.querySelector('#output')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  const todo = document.querySelector('#input').value
  const e = document.createElement('p')
  e.classList.add('hover')
  e.textContent = todo
  output.appendChild(e)
  e.addEventListener('click', () => {
    e.style.textDecoration = 'line-through'
  })
  e.addEventListener('dblclick', () => {
    output.removeChild(e)
  })
})
