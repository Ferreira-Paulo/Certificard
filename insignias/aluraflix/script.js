const url = 'https://www.episodate.com/api/show-details?q='

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
    
    if(filme <= 0) {
      span = document.querySelector("span")
      span.innerHTML = 'Informe um filme/serie valido!'
    } else {
      iniciaModal('modal-filmes')
      listarFilmesNaJanela(filme)
    }
}

function listarFilmesNaJanela(filme) {
  for (i = 0; i < 5; i++) {
    console.log(filme[i])
    var listaFilmes = document.querySelector("#listaFilmes")
    var elementoFilmeImg = "<div id='filme'><img src=" + filme[i].image_thumbnail_path + ">"
    var elementoFilmeName = "<p>" + filme[i].name + "</p></div>"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilmeImg + elementoFilmeName
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