<template>
    <div class="d-flex justify-content-center">
        <div class="btn btn-primary" @click="openModal">+ Aggiungi nuovo viaggio</div>
        <div class="btn btn-primary" @click="emptyTravels">Elimina tutto</div>
        <div class="btn btn-primary" @click="bottone">bottone tuttofare</div>


    </div>
    <div v-for="(item, index) in store.travels" :key="index" class="p-2 riga">
                <div class="d-flex">
                    <section class="my-3" style="width: 23rem;">
                        <div class="card">
                            <div class="card-body d-flex flex-row">
                                <div>
                                    <h5 class="card-title font-weight-bold mb-2">{{ item.destination }}</h5>
                                    <p class="card-text"><i class="far fa-clock pe-2"></i>{{ item.startdate }} -> {{
                                        item.enddate }}</p>
                                </div>
                            </div>
                            <div class="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
                                <img class="img-fluid" :src=getTripImg(item) id="tripimg" alt="trip-img" />
                                <a href="#!">
                                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                </a>
                            </div>
                            <div class="card-body">
                                <p class="card-text">{{ item.description }}</p>
                                <p class="card-text">{{ item.rating }}</p>
                                <div class="d-flex justify-content-between">
                                    <button type="button" class="btn btn-success btn-sm mx-auto"
                                        @click="openModal2(index, item)">Aggiungi
                                        nuova tappa</button>
                                        <button type="button" class="btn btn-danger btn-sm mx-auto"
                                        @click="deleteTrip(index)">Elimina viaggio</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div v-for="childItems in item.details" :key="index">
                        <div class="card my-3 mx-2" style="width: 23rem;">
                            <div class="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
                                <img class="img-fluid" :src=getLegImg(childItems) alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                </a>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{{ childItems.name }}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of
                                    the
                                    card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--modale-->
            <div v-if="showModal" class="modal fade show d-block" id="exampleModal" tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Inserisci nuovo viaggio</h1>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <div v-if="this.error == true">ERROREE</div>
                                    <div id="map"></div>
                                    <div>Inserisci nome destinazione</div>
                                    <input type="text" class="form-control" v-model="newTrip.destination">
                                    <div>Inserisci data inizio viaggio</div>
                                    <input type="date" class="form-control" v-model="newTrip.startdate">
                                    <div>Inserisci data fine viaggio</div>
                                    <input type="date" class="form-control" v-model="newTrip.enddate">
                                    <div class="mb-3">
                                        <label for="formFile" class="form-label">Inserisci foto</label>
                                        <input class="form-control" type="file" id="formFile" @change="tripImgAdd">
                                    </div>
                                    <div>Inserisci descrizione sintetica</div>
                                    <input type="textarea" class="form-control" v-model="newTrip.description">
                                    <div>Inserisci valutazione</div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="1" v-model="newTrip.rating">
                                        <label class="form-check-label" for="inlineRadio1">1 <i class="fa-solid fa-star"
                                                style="color: #FFD43B;"></i></label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="2" v-model="newTrip.rating">
                                        <label class="form-check-label" for="inlineRadio1">2 <i class="fa-solid fa-star"
                                                style="color: #FFD43B;"></i></label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="3" v-model="newTrip.rating">
                                        <label class="form-check-label" for="inlineRadio1">3 <i class="fa-solid fa-star"
                                                style="color: #FFD43B;"></i></label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="4" v-model="newTrip.rating">
                                        <label class="form-check-label" for="inlineRadio1">4 <i class="fa-solid fa-star"
                                                style="color: #FFD43B;"></i></label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="5" v-model="newTrip.rating">
                                        <label class="form-check-label" for="inlineRadio1">5 <i class="fa-solid fa-star"
                                                style="color: #FFD43B;"></i></label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                            <button type="button" class="btn btn-primary" @click="addTrip(this.newTrip)"
                                id="savebtn">Save
                                changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--modale2-->
            <div v-if="showModal2" class="modal fade show d-block" id="exampleModal" tabindex="-1"
                aria-labelledby="exampleModalLabel">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Inserisci nuovo viaggio</h1>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <div v-if="this.error == true">ERROREE</div>
                                    <div id="map"></div>
                                    <div>Inserisci nome tappa</div>
                                    <input type="text" class="form-control" v-model="newLeg.name">
                                    <div>Inserisci data arrivo</div>
                                    <input type="date" class="form-control" v-model="newLeg.startdate">
                                    <div>Inserisci data partenza</div>
                                    <input type="date" class="form-control" v-model="newLeg.enddate">
                                    <div class="mb-3">
                                        <label for="formFile" class="form-label">Inserisci foto</label>
                                        <input class="form-control" type="file" id="formFile" @change="legImgAdd">
                                    </div>
                                    <div>Inserisci note</div>
                                    <input type="textarea" class="form-control" v-model="newLeg.notes">
                                    <div>Inserisci valutazione</div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="1" v-model="newTrip.rating">
                                        <label class="form-check-label" for="inlineRadio1">1 <i class="fa-solid fa-star"
                                                style="color: #FFD43B;"></i></label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="2" v-model="newTrip.rating">
                                        <label class="form-check-label" for="inlineRadio1">2 <i class="fa-solid fa-star"
                                                style="color: #FFD43B;"></i></label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="3" v-model="newTrip.rating">
                                        <label class="form-check-label" for="inlineRadio1">3 <i class="fa-solid fa-star"
                                                style="color: #FFD43B;"></i></label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="4" v-model="newTrip.rating">
                                        <label class="form-check-label" for="inlineRadio1">4 <i class="fa-solid fa-star"
                                                style="color: #FFD43B;"></i></label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="5" v-model="newTrip.rating">
                                        <label class="form-check-label" for="inlineRadio1">5 <i class="fa-solid fa-star"
                                                style="color: #FFD43B;"></i></label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                            <button type="button" class="btn btn-primary" @click="addLeg(this.newLeg, index)"
                                id="savebtn">Save
                                changes</button>
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
            error: false,
            showModal: false,
            showModal2: false,
            i: 0,
            address: {},
            newTrip: {
                destination: '',
                startdate: '',
                enddate: '',
                description: '',
                rating: '',
                img: '',
                details: []
            },
            newLeg: {
                name: '',
                startdate: '',
                enddate: '',
                place: {
                    latitude: 0,
                    longitude: 0
                },
                img: '',
                notes: '',
                rating: '',
            },
            errors: {
                destination: '',
                startdate: '',
                enddate: '',
                description: '',
                rating: ''
            },
        }
    },
    methods: {
        addTrip(newTrip) {
            if (this.newTrip.destination === '') {
                const input = document.getElementById(savebtn);
                this.error = true;
            }
            else {
                this.errorInputName = false;
                this.store.travels.push({ ...newTrip })
                this.newTrip.destination = '';
                this.newTrip.startdate = '';
                this.newTrip.enddate = '';
                this.newTrip.description = '';
                this.newTrip.rating = '';
                this.newTrip.img = '';
                this.newTrip.details = [];
                console.log(this.store.travels, 'poirurgjh');
                this.saveTravels();
                this.closeModal();
            }
        },
        bottone() {
            this.loadTravels()
        },
        addLeg(newLeg, index) {
            this.errorInputName = false;
            console.log(index);
            console.log(this.newLeg);
            this.store.travels[this.i].details.push({ ...newLeg });
            this.i = 0;
            this.newLeg.name = '';
            this.startdate = '',
                this.enddate = '',
                this.newLeg.place = {
                    "latitude": 0,
                    "longitude": 0,
                },
                this.newLeg.img = '';
            this.newLeg.notes = '';
            this.saveTravels();
            this.closeModal();
        },
        openModal() {
            this.showModal = true;
            let showmap = setTimeout(() => {
                this.map();
            }, 1000);
        },
        openModal2(index, item) {
            this.showModal2 = true;
            this.i = index
            let showmap = setTimeout(() => {
                this.map();
            }, 1000);
        },
        closeModal() {
            this.showModal = false;
            this.showModal2 = false;
        },
        validateForm() {
            let isValid = true;
            // Name
            if (this.newTrip.destination.trim() === '') {
                this.errors.name = 'La destinazione è obbligatoria';
                isValid = false;
            }
            return isValid
        },
        saveTravels() {
            localStorage.setItem('travels', JSON.stringify(this.store.travels));

        },
        loadTravels() {
            const savedTravels = localStorage.getItem('travels');
            if (savedTravels) {
                this.store.travels = JSON.parse(savedTravels);
            }
            console.log(this.store.travels);
        },
        emptyTravels() {
            this.store.travels = [];
            localStorage.clear();
        },
        map() {
            let mapOptions = {
                center: [51.5073219, -0.1276474],
                zoom: 15
            }

            let map = new L.map('map', mapOptions);


            let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
            map.addLayer(layer);
            let apiKey = "9098219d18994560be55415be86df062",
                marker = null;


            const addressSearchControl = L.control.addressSearch(apiKey, {
                position: 'topright',

                //set it true to search addresses nearby first
                mapViewBias: true,

                //Text shown in the Address Search field when it's empty
                placeholder: "Enter an address here",

                // /Callback to notify when a user has selected an address
                resultCallback: (address) => {
                    this.address = address
                    this.newTrip.destination = address.address_line1
                    this.newLeg.name = address.address_line1
                    this.address = '';
                    // If there is already a marker remove it
                    if (marker) {
                        marker.remove();
                    }
                    //Prevent throwing Errors when the address search box is empty
                    if (!address) {
                        return;
                    }

                    //add marker 
                    marker = L.marker([address.lat, address.lon]).addTo(map);
                    //Sets the view of the map (geographical center and zoom) with the given animation options.
                    map.setView([address.lat, address.lon], 20);
                },


                //Callback to notify when new suggestions have been obtained for the entered text
                suggestionsCallback: (suggestions) => {
                    // console.log(suggestions);
                }
            });


            map.addControl(addressSearchControl);
        },
        tripImgAdd(event) {
            console.log(event.target.files);
            const file = event.target.files[0];
            // Gets file from input element
            const fr = new FileReader();
            // Creates new FileReader object
            fr.readAsDataURL(file);
            // Set FileReader to output data as URL string
            fr.addEventListener('load', () => {
                // Waits for file reading to be complete
                const url = fr.result
                // Save result
                const img = new Image();
                img.src = url;
                this.newTrip.img = url

                // let tripimg = document.getElementById('tripimg');
                // tripimg.appendChild(img)
                // Make URL src of image and append to DOM
            });
        },
        legImgAdd(event) {
            const file = event.target.files[0];
            // Gets file from input element
            const fr = new FileReader();
            // Creates new FileReader object
            fr.readAsDataURL(file);
            // Set FileReader to output data as URL string
            fr.addEventListener('load', () => {
                // Waits for file reading to be complete
                const url = fr.result
                // Save result
                const img = new Image();
                img.src = url;
                this.newLeg.img = url

                // let tripimg = document.getElementById('tripimg');
                // tripimg.appendChild(img)
                // Make URL src of image and append to DOM
            });
        },
        getTripImg(item) {
            return item.img;
        },
        getLegImg(item) {
            return item.img;
        },
        deleteTrip(index){
            this.store.travels.splice(index, 1);
            this.saveTravels();
        }
    },
    mounted() {
        this.loadTravels();

    }

}
</script>

<style lang="scss" scoped>
.modal.fade.show {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
}

/*card style*/
body {
    background-color: #f5f7fa;
}

.riga {
    overflow-x: auto;
}

#map {
    width: 100%;
    height: 250px;
}
</style>