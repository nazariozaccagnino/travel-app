<template>
    <div class="btn btn-primary" @click="addTrip(this.newTrip)">+ aggiungi nuovo viaggio</div>
    <div v-for="(item, index) in store.travels" :key="index" class="p-2">
        <div class="d-flex">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ item.destination }}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Data inizio e fine viaggio</h6>
                    <p class="card-text">Descrizione sintetica viaggio</p>
                    <button type="button" class="btn btn-success btn-sm" @click="addLeg(this.newLeg, index)">Aggiungi nuova tappa</button>
                </div>
            </div>
            <div v-for="childItems in item.details" :key="index">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="MAPPA">
                    <div class="card-body">
                        <h5 class="card-title">{{ childItems.voce1 }}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'MainComponent',
    data() {
        return {
            store,
            errorInputName: false,
            newTrip: {
                destination: '',
                tripdate: '',
                rating: '',
                details: []
            },
            newLeg: {
                name: 'leg',
                place: {
                    "latitude": 0,
                    "longitude": 0
                },
                images: [],
                notes: '',
            }
        }
    },
    methods: {
        addTrip(newTrip) {
            if (this.newTrip.tripName === '') {
                return this.errorInputName = true;
            }
            else {
                this.errorInputName = false;
                console.log(this.newTrip);
                this.store.travels.push({ ...newTrip })
                console.log(this.store.travels);
                this.newTrip.destination= '';
                this.newTrip.tripdate= '';
                this.newTrip.rating= '';
                this.newTrip.details= [];
            }
        },
        addLeg(newLeg, index){            
                this.errorInputName = false;
                console.log(index);             
                console.log(this.newLeg);
                this.store.travels[index].details.push({ ...newLeg })
                console.log(this.store.travels);
        },
        computed() {
            
        }
    }
}
</script>

<style lang="scss" scoped></style>