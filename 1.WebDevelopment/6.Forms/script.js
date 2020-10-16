const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', function () {
  alert(document.querySelector('#user-email-phone').value);
});

const allInputs = document.querySelectorAll('.required');
const btnRegister = document.querySelector('#facebook-register');

function emptyInput(event) { // função para saber se tem algum input vazio
  event.preventDefault(); // para que não atualize a página ao clique do botão
  // const errorMessage = document.createElement('p');
  // document.querySelector('.right-content').appendChild(errorMessage);
  let finalMessage = document.querySelector('.quick-easy');
  finalMessage.classList.add('finalMessage');
  const inputGender = document.querySelectorAll('input[name="gender"]');
  let gender;
  for (let i = 0; i < inputGender.length; i += 1) {
    if (inputGender[i].checked) {
       gender = inputGender[i].value;
    }
  }
  for (let i = 0; i < allInputs.length; i += 1) {
    if (allInputs[i].value === '') {
      finalMessage.innerText = 'Invalid fields';
    } else {
      const phoneMail = document.querySelector('#phone_email').value;
      const birthDay = document.querySelector('#birthday').value;
      const firstName = document.querySelector('#first-name').value;
      const lastName = document.querySelector('#last-name').value;
      const printAll = `Hello, ${firstName} ${lastName}!
      Gender: ${gender};
      Phone or e-mail: ${phoneMail};
      Birthday: ${birthDay}`;
      finalMessage.innerHTML = `${printAll}`;
    }
  }
  const formData = document.querySelector('.cadastro'); // para deletar o form
  formData.parentNode.removeChild(formData);
  document.querySelector('.right-content').removeChild(document.querySelector('.create-page'));
  document.querySelector('.right-content').removeChild(document.querySelector('.right-content-h1'));
}
btnRegister.addEventListener('click', emptyInput); // ao clicar faz a verificação

