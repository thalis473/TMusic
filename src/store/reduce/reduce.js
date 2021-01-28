const ESTADO_INICIAL = {
    musica: [{}],
    playlist: [
      {
        id: 1,
        titulo: "Recairei",
        cantor: "Os Barões da Pisadinha",
        ano: 2020,
        img:"https://pa1.narvii.com/6514/1f7858ae9ef45b70565378d265eff9d64ef82e72_hq.gif",
      },
      {
        id: 2,
        titulo: "Investe Em Mim",
        cantor: "Jonas Esticado",
        ano: 2020,
        img:"https://pa1.narvii.com/6514/1f7858ae9ef45b70565378d265eff9d64ef82e72_hq.gif",
      },
      {
        id: 3,
        titulo: "Rita",
        cantor: "Tierry",
        ano: 2020,
        img:"https://pa1.narvii.com/6514/1f7858ae9ef45b70565378d265eff9d64ef82e72_hq.gif",
      },
      {
        id: 4,
        titulo: "Alô Ambev ",
        cantor: "Zé Neto e Cristiano",
        ano: 2020,
        img:"https://pa1.narvii.com/6514/1f7858ae9ef45b70565378d265eff9d64ef82e72_hq.gif",
      },
      {
        id: 5,
        titulo: "De Menina Pra Mulher",
        cantor: "Gusttavo Lima.",
        ano: 2020,
        img:"https://pa1.narvii.com/6514/1f7858ae9ef45b70565378d265eff9d64ef82e72_hq.gif",
      }
    ],
  };
  
  export default function musicas(state = ESTADO_INICIAL, action) {
    if (action.type === "TOCAR_MUSICA") {
      return {
        ...state,
        musica: action.musicas, //objeto musica=>armazenar o state
      };
    }
    if (action.type === "PARAR_MUSICA") {
      return {
        ...state,
        musica: ESTADO_INICIAL, //objeto com todas as musicas
      };
    }
    return state;
  }