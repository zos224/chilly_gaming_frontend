<template>
    <div class="flex flex-col items-center py-4 px-6">
        <img :src="'https://chillygamingbackend-production.up.railway.app/images/games/' + game.thumb_image" alt="" class="w-40 h-40 object-cover rounded-xl">
        <h4>{{ game.tengame }}</h4>
        <span class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" /></svg>
          <h5 class="ml-3">{{ game.soluotchoi }}</h5>
        </span>
        <div class="my-4">
          <router-link id="choigame" :to="{name: 'GameView', params: {slug: game.slug}}" class="py-2 px-4 rounded text-white  ">Chơi ngay</router-link>
        </div>
    </div>
</template>

<script setup>
const {game} = defineProps({
    game: Object
})
</script>

<style>
#choigame {
  background-color: #13697f;
}
#choigame:hover {
  background-color: #164f5c;
}
</style>