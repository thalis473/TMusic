export function tocarMusica(musicas) {
    return {
      type: "TOCAR_MUSICA",
      musicas,
    };
  }
  
  export function pararMusica(musicas) {
    return {
      type: "PARAR_MUSICA",
      musicas,
    };
  }
  