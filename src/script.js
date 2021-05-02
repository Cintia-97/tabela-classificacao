var Cintia = {
   foto: "<img src='https://www.abrafac.org.br/wp-content/uploads/2020/06/perfil-icone.jpg'>",
   nome: "Cintia",
   vitorias: 0,
   empates: 0,
   derrotas: 0,
   pontos:0
 }
 
var Caio = {
  foto: "<img src='https://www.abrafac.org.br/wp-content/uploads/2020/06/perfil-icone.jpg'>",
  nome: "Caio",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

function calculavitorias(jogador){
  var pontos = jogador.pontos + 3 
  return pontos
 
}

function calculaempates(jogador){
  var pontos = jogador.pontos + 1 
  return pontos
 
}

function calculaPerda(jogador){
  var pontos = jogador.pontos - 5  
  return pontos
 
}

var jogadores = [ Cintia , Caio ]

mostrarjogadoresnatela(jogadores)

function mostrarjogadoresnatela (jogadores){
  var html = ""
  for (var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].foto + "</td>"
    html += "<td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i +")' class='Vitoria'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")' class='Empate'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")' class='Derrota'>Derrota</button></td>"
  }
  var tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria (i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculavitorias(jogador)
  mostrarjogadoresnatela(jogadores)
  
}
  
function adicionarEmpate (i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaempates(jogador)
  mostrarjogadoresnatela(jogadores)
}

function adicionarDerrota (i)  {
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPerda(jogador)
  mostrarjogadoresnatela(jogadores)

}

var num = 00;

function adicionarJogador(){
  var textoFoto = document.getElementById('foto').value;
  if(textoFoto == ""){
    var foto = '<img src="https://www.abrafac.org.br/wp-content/uploads/2020/06/perfil-icone.jpg">'
  }  else if (textoFoto.endsWith('.jpg') | textoFoto.endsWith('.png')){ 
    foto = '<img src="' + textoFoto + '">';
  } else {
    foto = '<img src="https://www.abrafac.org.br/wp-content/uploads/2020/06/perfil-icone.jpg">'
  
}

var nomeTexto = document.getElementById('nome').value
  if (nomeTexto == ""){
    num++
    var nome = num.toString()
} else{
    nome = nomeTexto
}
  
var jogadorNovo = {
  foto: foto,
  nome: nome,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}
  jogadores.push(jogadorNovo)
  document.getElementById('nome').value = ""
  document.getElementById('foto').value = ""
  mostrarjogadoresnatela(jogadores)
}

function Resetar() {
    for(i=0;i<jogadores.length;i++){
    jogadores[i].vitorias = 0
    jogadores[i].derrotas = 0
    jogadores[i].empates = 0
    jogadores[i].pontos = 0
   }
  mostrarjogadoresnatela(jogadores)
}
  
