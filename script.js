const loginEmailTrybe = document.querySelector('#login-email');
const loginSenhaTrybe = document.querySelector('#login-senha');
const loginButtonTrybe = document.querySelector('#login-button');
const containerAvaliacao = document.querySelector('#container-avaliacao');

const entrar = function loginTrybewarts(event) {
  event.preventDefault();
  if ((loginEmailTrybe.value === 'tryber@teste.com') && (loginSenhaTrybe.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

for (let i = 1; i <= 10; i += 1) {
  const radio = document.createElement('input');
  const label = document.createElement('label');
  radio.type = 'radio';
  radio.name = 'rate';
  radio.value = i;
  radio.id = `rate${i}`;
  label.htmlFor = `rate${i}`;
  label.appendChild(radio);
  label.innerHTML += i;
  containerAvaliacao.appendChild(label);
}

loginButtonTrybe.onclick = entrar;
