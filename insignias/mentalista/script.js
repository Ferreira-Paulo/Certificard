const pokemons = [
  {name: "bulbasaur"},
  {name: "ivysaur"},
  {name: "venusaur"},
  {name: "charmander"},
  {name: "charmeleon"},
  {name: "charizard"},
  {name: "squirtle"},
  {name: "wartortle"},
  {name: "blastoise"},
  {name: "caterpie"},
  {name: "metapod"},
  {name: "butterfree"},
  {name: "weedle"},
  {name: "kakuna"},
  {name: "beedrill"},
  {name: "pidgey"},
  {name: "pidgeotto"},
  {name: "pidgeot"},
  {name: "rattata"},
  {name: "raticate"},
  {name: "spearow"},
  {name: "fearow"},
  {name: "ekans"},
  {name: "arbok"},
  {name: "pikachu"},
  {name: "raichu"},
  {name: "sandshrew"},
  {name: "sandslash"},
  {name: "nidoran-f"},
  {name: "nidorina"},
  {name: "nidoqueen"},
  {name: "nidoran-m"},
  {name: "nidorino"},
  {name: "nidoking"},
  {name: "clefairy"},
  {name: "clefable"},
  {name: "vulpix"},
  {name: "ninetales"},
  {name: "jigglypuff"},
  {name: "wigglytuff"},
  {name: "zubat"},
  {name: "golbat"},
  {name: "oddish"},
  {name: "gloom"},
  {name: "vileplume"},
  {name: "paras"},
  {name: "parasect"},
  {name: "venonat"},
  {name: "venomoth"},
  {name: "diglett"},
  {name: "dugtrio"},
  {name: "meowth"},
  {name: "persian"},
  {name: "psyduck"},
  {name: "golduck"},
  {name: "mankey"},
  {name: "primeape"},
  {name: "growlithe"},
  {name: "arcanine"},
  {name: "poliwag"},  
  {name: "poliwrath"},
  {name: "abra"},
  {name: "kadabra"},
  {name: "alakazam"},
  {name: "machop"},
  {name: "machoke"},
  {name: "machamp"},
  {name: "bellsprout"},
  {name: "weepinbell"},
  {name: "victreebel"},
  {name: "tentacool"},
  {name: "tentacruel"},
  {name: "geodude"},
  {name: "graveler"},
  {name: "golem"},
  {name: "ponyta"},
  {name: "rapidash"},
  {name: "slowpoke"},
  {name: "slowbro"},
  {name: "magnemite"},
  {name: "magneton"},
  {name: "farfetchd"},
  {name: "doduo"},
  {name: "dodrio"},
  {name: "seel"},
  {name: "dewgong"},
  {name: "grimer"},
  {name: "muk"},
  {name: "shellder"},
  {name: "cloyster"},
  {name: "gastly"},
  {name: "haunter"},
  {name: "gengar"},
  {name: "onix"},
  {name: "drowzee"},
  {name: "hypno"},
  {name: "krabby"},
  {name: "kingler"},
  {name: "voltorb"},
  {name: "electrode"},
  {name: "exeggcute"},
  {name: "exeggutor"},
  {name: "cubone"},
  {name: "marowak"},
  {name: "hitmonlee"},
  {name: "hitmonchan"},
  {name: "lickitung"},
  {name: "koffing"},
  {name: "weezing"},
  {name: "rhyhorn"},
  {name: "rhydon"},
  {name: "chansey"},
  {name: "tangela"},
  {name: "kangaskhan"},
  {name: "horsea"},
  {name: "seadra"},
  {name: "goldeen"},
  {name: "seaking"},
  {name: "staryu"},
  {name: "starmie"},
  {name: "mr-mime"},
  {name: "scyther"},
  {name: "jynx"},
  {name: "electabuzz"},
  {name: "magmar"},
  {name: "pinsir"},
  {name: "tauros"},
  {name: "magikarp"},
  {name: "gyarados"},
  {name: "lapras"},
  {name: "ditto"},
  {name: "eevee"},
  {name: "vaporeon"},
  {name: "jolteon"},
  {name: "flareon"},
  {name: "porygon"},
  {name: "omanyte"},
  {name: "omastar"},
  {name: "kabuto"},
  {name: "kabutops"},
  {name: "aerodactyl"},
  {name: "snorlax"},
  {name: "articuno"},
  {name: "zapdos"},
  {name: "moltres"},
  {name: "dratini"},
  {name: "dragonair"},
  {name: "dragonite"},
  {name: "mewtwo"},
  {name: "mew"}
]

const enviar = document.getElementById('enviar')
const refaz = document.getElementById('reload')
const img = document.querySelector('img')

var numero = 0;

function aleatorio(){
  numero = Math.floor(Math.random() * pokemons.length)
  url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${numero + 1}.svg`
  img.setAttribute('src', url)
}

resetar()

function resetar(){
  document.querySelector('span').innerHTML = " ";
  document.getElementById('imgpokemon').className = null
  aleatorio()
}

enviar.onclick = () => {
    let resposta = document.querySelector('input').value.trim();

    if(resposta.length){
        if(resposta.toLowerCase() == pokemons[numero].name.toLowerCase()){
      document.querySelector('span').innerHTML = "Parabéns! É o " + pokemons[numero].name
      document.getElementById('imgpokemon').className = "acertou"
      document.querySelector('input').value = ""
      setTimeout(() => { resetar(); }, 2000)
    }else{
      document.querySelector('span').innerHTML = "Você errou! É o " + pokemons[numero].name
      document.getElementById('imgpokemon').className = "acertou"
      document.querySelector('input').value = ""
      setTimeout(() => { resetar(); }, 2000)
    }
  }else{
    document.querySelector('span').innerHTML = "Coloque o name"
  }
}

refaz.onclick = resetar