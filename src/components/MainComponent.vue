<template>
    <div class="btn btn-primary" @click="openModal">+ Aggiungi nuovo viaggio</div>
    <div v-for="(item, index) in store.travels" :key="index" class="p-2">
        <div class="d-flex">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ item.destination }}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Data inizio e fine viaggio</h6>
                    <p class="card-text">Descrizione sintetica viaggio</p>
                    <button type="button" class="btn btn-success btn-sm" @click="addLeg(this.newLeg, index)">Aggiungi
                        nuova tappa</button>
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


    <!--modale-->
    <div v-if="showModal" class="modal fade show d-block" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addTrip(this.newTrip)">Save changes</button>
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
            showModal: false,
            newTrip: {
                destination: '',
                tripdate: '',
                rating: '',
                details: []
            },
            newLeg: {
                name: '',
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
                this.newTrip.destination = '';
                this.newTrip.tripdate = '';
                this.newTrip.rating = '';
                this.newTrip.details = [];
                this.closeModal();
            }
        },
        addLeg(newLeg, index) {
            this.errorInputName = false;
            console.log(index);
            console.log(this.newLeg);
            this.store.travels[index].details.push({ ...newLeg })
            console.log(this.store.travels);
            this.newLeg.name = '';
            this.newLeg.place = {
                "latitude": 0,
                "longitude": 0,
            },
                this.newLeg.images = [];
            this.newLeg.notes = '';
        },
        openModal(){
            this.showModal = true;
        },
        closeModal(){
            this.showModal= false;
        },
        computed() {

        }
    }
}
</script>

<style lang="scss" scoped>
.modal.fade.show {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
}


</style>