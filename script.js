
function guardarRegisto() {
  const form = document.getElementById('formulario');
  const dados = {};
  for (let elemento of form.elements) {
    if (elemento.name) {
      dados[elemento.name] = elemento.value;
    }
  }

  let registos = JSON.parse(localStorage.getItem('registos') || '[]');
  registos.push(dados);
  localStorage.setItem('registos', JSON.stringify(registos));
  alert('Registo guardado com sucesso!');
  form.reset();
}

function listarRegistos() {
  const container = document.getElementById('listaRegistos');
  const registos = JSON.parse(localStorage.getItem('registos') || '[]');

  if (registos.length === 0) {
    container.innerHTML = '<p>Nenhum registo encontrado.</p>';
    return;
  }

  registos.forEach((registo, index) => {
    const bloco = document.createElement('div');
    bloco.innerHTML = `<strong>Registo ${index + 1}</strong><br>` +
      Object.entries(registo).map(([chave, valor]) => `${chave}: ${valor}`).join('<br>') +
      '<hr>';
    container.appendChild(bloco);
  });
}

if (document.getElementById('listaRegistos')) {
  listarRegistos();
}
