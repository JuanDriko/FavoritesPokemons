import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favorites', {
    state: () => ({
      favorites: JSON.parse(localStorage.getItem('favorites')) || []
    }),
    actions: {
      addFavorite(pokemon) {
        if (!this.isFavorite(pokemon)) {
          this.favorites.push(pokemon)
          this.saveToLocalStorage()
        }
      },
      removeFavorite(pokemon) {
        this.favorites = this.favorites.filter(fav => fav.name !== pokemon.name)
        this.saveToLocalStorage()
      },
      isFavorite(pokemon) {
        return this.favorites.some(fav => fav.name === pokemon.name)
      },
      saveToLocalStorage() {
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
      }
    }
  })
  