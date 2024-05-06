document.getElementById("shareForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var songTitle = document.getElementById("songTitle").value;
    var artistName = document.getElementById("artistName").value;

    // Função para compartilhar e enviar a música para todas as plataformas
    shareAndSend(songTitle, artistName);
});

function shareAndSend(songTitle, artistName) {
    // Aqui você pode adicionar chamadas para as APIs das plataformas digitais
    // Por exemplo:
    // - Chamada para a API do Facebook para compartilhar a música
    // - Chamada para a API do TikTok para enviar a música
    // - Chamada para a API do Instagram para compartilhar a música
    // - Chamada para a API do Spotify para enviar a música
    // - Chamada para a API do YouTube para enviar a música
    // - E assim por diante

    // Exemplo de chamada fictícia para o Spotify
    console.log("Enviando música para o Spotify: " + songTitle + " - " + artistName);

    // Exemplo de chamada fictícia para o SoundClud
    console.log("Enviando música para o SoundClud: " + songTitle + " - " + artistName);
    
    // Exemplo de chamada fictícia para o Facebook
    console.log("Enviando música para o Facebook: " + songTitle + " - " + artistName);
    
    // Exemplo de chamada fictícia para o YouTube
    console.log("Enviando música para o YouTube: " + songTitle + " - " + artistName);

    // Exemplo de chamada fictícia para o Boomplay
    console.log("Enviando música para o Boomplay: " + songTitle + " - " + artistName);

    // Exemplo de chamada fictícia para o TikTok
    console.log("Enviando música para o TikTok: " + songTitle + " - " + artistName);

    // Exemplo de chamada fictícia para o Instagram
    console.log("Enviando música para o Instagram: " + songTitle + " - " + artistName);

    // Exemplo de chamada fictícia para o DEEZER
    console.log("Enviando música para o DEEZER: " + songTitle + " - " + artistName);

    // Exemplo de chamada fictícia para o VEVO
    console.log("Enviando música para o VEVO: " + songTitle + " - " + artistName);

    // Exemplo de chamada fictícia para o Twitter
    console.log("Enviando música para o Twitter: " + songTitle + " - " + artistName);

    // Exemplo de chamada fictícia para o Vimeo
    console.log("Enviando música para o Vimeo: " + songTitle + " - " + artistName);

    // Exemplo de chamada fictícia para o Tubidy
    console.log("Enviando música para o Tubidy: " + songTitle + " - " + artistName);

    // Exemplo de chamada fictícia para o BandLab
    console.log("Enviando música para o BandLab: " + songTitle + " - " + artistName);

    // Exemplo de chamada fictícia para o VidMate
    console.log("Enviando música para o VidMate: " + songTitle + " - " + artistName);

    // Exemplo de chamada fictícia para o WhatsApp
    console.log("Enviando música para o WhatsApp: " + songTitle + " - " + artistName);

    alert("Música compartilhada com sucesso em todas as plataformas!");
}