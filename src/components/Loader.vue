<template>
  <div class="loader">
    <img src="@/assets/img/pokeball.svg" class="spin" alt="Loading..." />
  </div>
</template>

<style scoped>
.spin {
  animation: spin 1s linear infinite;
  width: 50px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
