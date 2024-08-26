import { reactive } from 'vue'

export const store = reactive({
    travels: [{
        destination: '',
        tripdate:'',
        rating: '',
        description: '',
        map:'',
      },
    ],
    
    viaggi: [{
      destinazione: "Roma, Italia",
      data: "2024-09-15",
      valutazione: 4.8,
      dettaglio: {
        immagini: [
          "https://example.com/roma1.jpg",
          "https://example.com/roma2.jpg"
        ],
        coordinate_geografiche: {
          "latitudine": 41.9028,
          "longitudine": 12.4964
        },
        note: "Visita al Colosseo e al Vaticano."
        }
    }],
})