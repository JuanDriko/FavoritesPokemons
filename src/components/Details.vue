<template>
    <div @click.self="emit('close')" class="modal-backdrop d-flex justify-content-center align-items-center">
        <div class="modal-content bg-white rounded shadow-lg overflow-hidden position-relative">

            <div class="fondopoke-wrapper position-relative w-100">
                <img src="../assets/img/fondopoke.svg" alt="Fondo" class="fondopoke w-100" />

                <a class="close position-absolute top-0 end-0 m-2" @click="emit('close')" aria-label="Close">
                    <img src="../assets/img/btn-close.svg" alt="close">
                </a>

                <img :src="pokemon?.sprites?.front_default" alt="Pokemon Image"
                    class="pokemon-image position-absolute top-50 start-50 translate-middle" />
            </div>

            <div class="p-4">
                <p class="border-bottom pb-2"><strong>Name: </strong> {{ pokemon?.name }}</p>
                <p class="border-bottom pb-2"><strong>Weight: </strong> {{ pokemon?.weight }}</p>
                <p class="border-bottom pb-2"><strong>Height: </strong> {{ pokemon?.height }}</p>
                <p class="border-bottom pb-2"><strong>Types: </strong>

                    <span v-for="type in pokemon?.types" :key="type.type.name"> {{ type.type.name }},
                    </span>
                </p>
                <div class="d-flex justify-content-between align-items-center mt-4">
                    <a @click="sharePokemon" class="btn btn-red rounded-pill">Share to my friends</a>
                    <a>
                        <img :src="isFavorite(pokemon) ? startGold : startWhite" alt="star" class="starts" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import startGold from '../assets/img/Start-gold.svg'
import startWhite from '../assets/img/Start-white.svg'

const props = defineProps({
    pokemon: Object,
    isFavorite: Function
})
const emit = defineEmits(['close']);
const sharePokemon = () => {
  const data = `name:${props.pokemon.name}, Weight: ${props.pokemon.weight}, Height: ${props.pokemon.height}, Types: ${props.pokemon.types.map(t => t.type.name).join(', ')}`;
  navigator.clipboard.writeText(data);
  console.log('Pokemon data copied to clipboard:', data);
}

</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1050;
}

.modal-content {
    width: 90%;
    max-width: 506px;
    border-radius: 16px;
}

.fondopoke {
    height: 100%;
    object-fit: cover;
    display: block;
}

.fondopoke-wrapper {
    overflow: hidden;
}

.pokemon-image {
    width: 80%;
}

.close {
    width: 2rem;
    cursor: pointer;
}
</style>