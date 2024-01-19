const form = document.getElementById('form') // Formulario.
const username = document.getElementById('username') // Input de nome.
const email = document.getElementById('email') // Input de email.
const password = document.getElementById('password') // Input de senha.
const passwordConfirmation = document.getElementById('password-confirmation') // Input de confirmação da senha.

form.addEventListener('submit', (event) => { // Chamo o form e não deixo ele submeter o formulario.
    event.preventDefault()
    checkForm()
})

email.addEventListener('blur', ()=> {
    checkInputEmail()
})

username.addEventListener('blur', ()=> {
    checkInputUsername()
})

password.addEventListener('blur', ()=> {
    checkInputPassword()
})

passwordConfirmation.addEventListener('blur', ()=> {
    checkInputPasswordConfirm()
})

function checkInputUsername() { // Validação do username.
    const userNameValue = username.value // Valor do input username
    if (userNameValue === '') { // Verifica se o input ta vazio, se estiver chama a função errorInput e passa o input e a mensagem.
        errorInput(username, 'O nome é obrigatorio!')
    } else {
        const formItem = username.parentElement
        formItem.className = 'form__conteudo'
    }
}

function checkInputEmail() {
    const emailValue = email.value
    if (emailValue === '') {
        errorInput(email, 'O email é obrigatorio!')
    } else {
        const formItem = email.parentElement
        formItem.className = 'form__conteudo'
    }
}

function checkInputPassword() {
    const passwordValue = password.value
    if (passwordValue === '') {
        errorInput(password, 'A senha é obrigatoria!')
    } else if (passwordValue.length < 8) {
        errorInput(password, 'A senha precisa ter 8 caracteres..')
    } else {
        const formItem = password.parentElement
        formItem.className = 'form__conteudo'
    }
}

function checkInputPasswordConfirm() {
    const passwordConfirmValue = passwordConfirmation.value
    const passwordValue = password.value
    if (passwordConfirmValue === '') {
        errorInput(passwordConfirmation, 'A confirmação de senha é obrigatoria!')
    } else if (passwordConfirmValue !== passwordValue) {
        errorInput(passwordConfirmation, 'As senhas não são iguais.')
    } else {
        const formItem = passwordConfirmation.parentElement
        formItem.className = 'form__conteudo'
    }
}


function checkForm() {
    checkInputUsername()
    checkInputEmail()
    checkInputPassword()
    checkInputPasswordConfirm()

    const formItems = form.querySelectorAll('.form__conteudo')
    const isValid = [...formItems].every(item => {
        return item.className === 'form__conteudo'
    })
    
    if(isValid){
        alert('Cadastrado com sucesso!')
    }
}

function errorInput(input, message) { // Função para pegar o input e mensagem.
    const formItem = input.parentElement
    const textMessage = formItem.querySelector('span')
    textMessage.innerText = message

    formItem.className = 'form__conteudo error' // Essa forma,limpa a classe e insere essa string.
}

// OBS: Preciso acessar o pai, ao invez da div pq existem varios elementos com a mesma classe.