var infos;

document.getElementById("formulario").addEventListener("submit", function (evento) {
  evento.preventDefault()
  let Nome = document.getElementById('nome').value
  let Email = document.getElementById('email').value
  let WhatsApp = document.getElementById('whats').value
  console.log(Nome, Email, WhatsApp)
  const checkboxes = document.querySelectorAll('input[type=checkbox][name=dados-orcamento]:checked');
  const valores = Array.from(checkboxes).map((checkbox) => checkbox.value);
  console.log(checkboxes, valores)
  const Budget = document.querySelector('input[type=radio][name="budget"]:checked').value;
  console.log(Budget);
  const Detalhes = document.querySelector('textarea[name="dados_contato"]').value;
  console.log(Detalhes);
  const Onde = document.querySelector('input[type=radio][name="donde"]:checked').value;
  console.log(Onde);
  const dados = { // aqui cria um objeto com todas as informações para enviar ao e-mail
    Nome,
    Email,
    WhatsApp,
    Serviço: valores.join(", "),
    Budget,
    Detalhes,
    Onde,
  };
  infos = Object.entries(dados).map(([key, value]) => `${key}: ${value}`).join("<br>");
  document.querySelector('label[for="confirmado"]').innerHTML = infos
  document.getElementById('resposta').style.display = 'block'
})

console.log(infos)

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "bruno.a.dinis96@gmail.com",
    Password: "BC0C433E52603F2E4F46E828C4F00AC26DD0",
    To: 'bruno.a.dinis@hotmail.com',
    From: 'bruno.a.dinis96@gmail.com',
    Subject: "Nova solicitação realizada pelo site!",
    Body: `${infos}`
  }).then(
    message => console.log(message)
  );

  document.getElementById('resposta').style.display = 'none'
  var inputes = document.querySelectorAll('input')
  console.log(inputes)
  var inputDesabled = Array.from(inputes).map((input) => input.setAttribute('disabled', 'disabled'));
  console.log(inputDesabled)
  document.querySelector("textarea").setAttribute('disabled', 'disabled')
  document.getElementById("fechar").removeAttribute('disabled', 'disabled')
  alert('E-mail enviado com sucesso!')
}

document.getElementById("fechar").addEventListener('click', function () {
  document.getElementById('resposta').style.display = 'none'
})