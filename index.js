const btn = document.getElementById('adicionarCampo')
let contador = 0

btn.addEventListener('click', (e) =>{
    e.preventDefault()
    const formulario = document.getElementById('formContainer')
    contador++

    // Elemento form

    let divCampo = document.createElement('div')
    divCampo.classList.add('campoFormulario')

    let labelEmail = document.createElement('label')
    labelEmail.textContent = `E-mail ${contador}`
    labelEmail.id = `email ${contador}`

    let inputEmail = document.createElement('input')
    inputEmail.type = 'email'
    inputEmail.id = `email-${contador}`
    inputEmail.placeholder = 'E-mail'
    inputEmail.required = true

    let labelCampo = document.createElement('label')
    labelCampo.textContent = `Campo ${contador}`

    let inputCampo = document.createElement('input')
    inputCampo.type = 'text'
    inputCampo.name = `campo${contador}`
    inputCampo.placeholder = 'Digite aqui!'

    // Adicionar Elementos 
    divCampo.append(labelEmail, inputEmail, labelCampo, inputCampo)
    formulario.appendChild(divCampo)
})