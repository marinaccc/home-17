function Post(item){
    const div = document.createElement('div')
    const img = document.createElement('img')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const a = document.createElement('a')
    
    div.appendChild(img)
    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(a)

    h2.innerText = 'Распространенные заблуждения об уходе за кошкой'
    p.innerText = 'Некоторых животных природа призывает делать очень странные вещи: есть колбасные шкурки,нитки из покрывала, варенье и прочие, часто…'
    a.innerText = 'Читать полностью >'

    div.classList.add('Post')
    img.classList.add('Post__photo')
    h2.classList.add('Post__title')
    p.classList.add('Post__description')
    a.classList.add('Post__link')

    a.setAttribute('href', '#')

    return div
}
