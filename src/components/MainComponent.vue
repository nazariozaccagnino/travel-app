<template>
    <div>+ aggiungi nuovo viaggio</div>
    <div v-for="(item, index) in store.travels" :key="index">
        <div class="d-flex">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ item.destination }}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Data inizio e fine viaggio</h6>
                    <p class="card-text">Descrizione sintetica viaggio</p>
                    <button type="button" class="btn btn-success btn-sm">Aggiungi nuova tappa</button>
                </div>
            </div>
            <div v-for="(item, index) in store.travels" :key="index">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="MAPPA">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.details.place.latitude }}</h5>
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
            store
        }
    },
    mounted() {
        console.log(this.store.travels);
    }
}
</script>

<style lang="scss" scoped></style>