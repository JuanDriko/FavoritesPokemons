<template>
    <div>
        <div class="d-flex flex-column justify-content-center align-items-center p-5">
            <div v-if="loading" class="d-flex justify-content-center align-items-center vh-100">
                <Loader />
            </div>

            <div class="carta w-100 bg-white d-flex justify-content-between align-items-center px-3">
                <a href="" class="me-3" @click.prevent>
                    <img src="../assets/img/Search.svg" alt="search" style="cursor: pointer;">
                </a>
                <input v-model="searchQuery" class="h-100 w-100 border-0 fs-5" type="text" placeholder="Search"
                    aria-label="Search" style="outline: none;" />
            </div>

            <div v-if="displayedPokemons.length" class="carta w-100 bg-white p-3 d-flex justify-content-between"
                v-for="poke in displayedPokemons" :key="poke.name">
                <h3 @click="openModal(poke)" style="cursor: pointer;" class="text-capitalize">
                    {{ poke.name }}
                </h3>

                <a v-if="isFavorite(poke)" href="" @click.prevent="removeFavorite(poke)">
                    <img src="../assets/img/Start-gold.svg" alt="start" class="starts" />
                </a>
                <a v-else href="" @click.prevent="addFavorite(poke)">
                    <img src="../assets/img/Start-white.svg" alt="start" class="starts" />
                </a>
            </div>
            <div v-else class="mt-5 text-center">
                <template v-if="showFavorites && !searchQuery">
                    <h2>No favorites yet</h2>
                    <p>You haven't added any favorite Pokémon.</p>
                </template>
                <template v-else>
                    <h2>Uh-Oh!</h2>
                    <p>You look lost on your journey!</p>
                    <RouterLink class="btn btn-red rounded-pill" to="/FavoritesPokemons">Go back home</RouterLink>
                </template>
            </div>

        </div>

        <div class="w-100 position-fixed bottom-0 start-0 bg-white text-center p-3">
            <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2">
                <a @click.prevent="showFavorites = false"
                    :class="['btn', 'rounded-pill', 'd-flex', 'justify-content-center', 'align-items-center', 'icons', showFavorites ? 'btn-favorite' : 'btn-red']"
                    href="">
                    <i class="bi-list-ul me-2"></i>All
                </a>
                <a @click.prevent="showFavorites = true"
                    :class="['btn', 'rounded-pill', 'd-flex', 'justify-content-center', 'align-items-center', 'icons', showFavorites ? 'btn-red' : 'btn-favorite']"
                    href="">
                    <i class="bi-star-fill me-2"></i>Favorites
                </a>
            </div>
        </div>
        <Details v-if="showModal" :pokemon="selectedPokemon" :is-favorite="isFavorite" @close="closeModal" />
    </div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue'
import { getPokemons, getDetail } from '../services/services.js'
import Loader from '../components/Loader.vue'
import { useFavoriteStore } from '../stores/store.js'
import Details from '../components/Details.vue'

export default {
    components: {
        Loader,
        Details,
    },
    setup() {
        const pokemon = ref([])
        const loading = ref(true)
        const showFavorites = ref(false)
        const searchQuery = ref('')
        const showModal = ref(false)
        const selectedPokemon = ref(null)
        const favoriteStore = useFavoriteStore()

        const displayedPokemons = computed(() => {
            const query = searchQuery.value.trim().toLowerCase()
            if (query) {
                return pokemon.value.filter(poke => poke.name.toLowerCase().includes(query))
            }

            return showFavorites.value ? favoriteStore.favorites : pokemon.value
        })
        watch(showFavorites, () => {
            searchQuery.value = ''
        })

        const addFavorite = poke => {
            favoriteStore.addFavorite(poke)
        }

        const removeFavorite = poke => {
            favoriteStore.removeFavorite(poke)
        }

        const openModal = async poke => {
            loading.value = true
            try {
                const data = await getDetail(poke.name)
                selectedPokemon.value = data
                showModal.value = true
            } catch (error) {
                console.error('Error al cargar detalles del Pokémon:', error)
            } finally {
                loading.value = false
            }
        }

        const closeModal = () => {
            showModal.value = false
            selectedPokemon.value = null
        }

        const isFavorite = poke => favoriteStore.isFavorite(poke)

        onMounted(async () => {
            loading.value = true
            try {
                pokemon.value = await getPokemons()
            } catch (error) {
                console.error('Error al cargar los Pokémon:', error)
            } finally {
                loading.value = false
            }
        })

        return {
            pokemon,
            loading,
            showFavorites,
            searchQuery,
            displayedPokemons,
            addFavorite,
            removeFavorite,
            isFavorite,
            showModal,
            selectedPokemon,
            openModal,
            closeModal
        }
    },
}
</script>

<style scoped>
.carta {
    margin: 10px 30px;
    max-width: 570px;
    height: 60px;
    border-radius: 5px;
}

.icons {
    width: 15rem;
}

.starts {
    width: 2rem;
}
</style>