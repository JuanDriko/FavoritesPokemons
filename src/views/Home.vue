<template>
    <div class="container vh-100 d-flex flex-column justify-content-center align-items-center text-center py-5">
        <img class="image mb-4" src="../assets/img/Picachu.svg" alt="picachu" />
        <div>
            <h1 class="mb-4">Welcome to Pokedéx</h1>
            <p class="mb-4">
                The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon
                world.
            </p>
            <RouterLink to="/pokedex" class="btn btn-red rounded-pill">Get started</RouterLink>

        </div>
    </div>
</template>

<script setup>
</script>
<style scoped>
.image {
    width: 40%;
}

@media screen and (max-width: 800px) {
    .image {
        width: 90%;
    }
}
</style>