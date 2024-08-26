import { reactive } from 'vue'

export const store = reactive({
    // travels: [{
    //     destination: '',
    //     tripdate:'',
    //     rating: '',
    //     description: '',
    //     map:'',
    //   },
    // ],
    
    travels: [{
      destination: "Viaggio 1",
      tripdate: "2024-09-15",
      rating: 4.8,
      details: {
        images: [
          "https://example.com/roma1.jpg",
          "https://example.com/roma2.jpg"
        ],
        place: {
          "latitude": 41.9028,
          "longitude": 12.4964
        },
        notes: "Visita al Colosseo e al Vaticano."
        }
    },
    {
        destination: "Viaggio 2",
        tripdate: "2024-09-15",
        rating: 4.8,
        details: {
          images: [
            "https://example.com/roma1.jpg",
            "https://example.com/roma2.jpg"
          ],
          place: {
            "latitude": 41.9028,
            "longitude": 12.4964
          },
          notes: "Visita al Colosseo e al Vaticano."
          }
      }],
})