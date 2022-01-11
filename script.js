const loginEmailTrybe = document.querySelector('#login-email');
const loginSenhaTrybe = document.querySelector('#login-senha');
const loginButtonTrybe = document.querySelector('#login-button');

const entrar = function loginTrybewarts(event) {
  event.preventDefault();
  if ((loginEmailTrybe.value === 'tryber@teste.com') && (loginSenhaTrybe.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

loginButtonTrybe.onclick = entrar;
