const url = 'https://www.episodate.com/api/search?q='

var filme 

async function requestFilmeInfo(filmeFavorito) {
  await fetch(url + filmeFavorito)
    .then(response => response.json())
    .then(data => {
      filme = data.tv_shows;
    })
    .catch(err => console.log(err));
  }
  
  async function adicionarFilme() {
    var campoFilmeFavorito = document.querySelector("#filme")
    var filmeFavorito = campoFilmeFavorito.value
    await requestFilmeInfo(filmeFavorito)
    
    if(filme.length <= 0) {
      span = document.querySelector("span")
      span.innerHTML = 'Informe um filme/serie valido!'
    } else {
      iniciaModal('modal-filmes')
      listarFilmesNaJanela(filme)
    }
}

function listarFilmesNaJanela(filme) {
  for (i = 0; i < 5; i++) {
    var listaFilmes = document.querySelector("#listaFilmes")
    var elementoFilme = "<img src=" + filme[i].image_thumbnail_path + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  }
}

function iniciaModal(modalID) {
  const modal = document.getElementById(modalID)
  modal.classList.add('mostrar')
}

setTimeout(function(){ 
    const panel = document.getElementById("panel")
    panel.classList.add('tirar')
  }, 10000)

  function fechar() {
    modal = document.getElementById("modal-filmes")
    modal.classList.remove('mostrar')
  }