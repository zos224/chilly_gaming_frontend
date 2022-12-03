<script setup>
  import PageComponent from '../components/PageComponent.vue'
  import GamesList from '../components/GamesList.vue';
  import store from '../store'
  import {computed, ref} from 'vue'
  import {useRouter} from 'vue-router'
  const games = computed(() => store.state.gamesHot);
  const games_new = ref([])
  const games_foryou = ref([])
  const articles = ref([])
  const router = useRouter();
  store.dispatch('getGamesHot')
  store.dispatch('getGamesNew').then(res => {
    games_new.value = res.data.data
  })
  store.dispatch('getGamesRate').then(res => {
    games_foryou.value = res.data.data
  })
  store.dispatch('getArticleView').then(res => {
    articles.value = res.data.data
  })
  document.title = "Chilly Gaming - Trang Chủ"
</script>

<template>
  <PageComponent>
    <template v-slot:header>
        <div class="text-3xl font-bold tracking-tight text-gray-900 text-center">
            TRANG CHỦ
        </div>
    </template>
    <div>
      <div>
        <div class="flex"> 
          <h1 id="game_hot_text" class="text-xl mt-5 font-semibold text-white rounded-tl-lg rounded-tr-lg pt-2 px-10">GAME HOT</h1>
        </div>
        <div class="game_hot border-2 p-4 ">
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            <GamesList v-for="game in games" :key="game.id" :game="game" />
          </div>
        </div>
      </div>
      <div>
        <div class="flex"> 
          <h1 class="text-xl games_new_title mt-20 font-semibold text-white rounded-tl-lg rounded-tr-lg pt-2 px-10">GAME MỚI</h1>
        </div>
        <div class="game_new p-4">
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            <GamesList v-for="game in games_new" :key="game.id" :game="game" />
          </div>
        </div>
      </div>
      <div class>
        <div class="flex"> 
          <h1 class="text-xl games_foryou_title mt-20 font-semibold text-white rounded-tl-lg rounded-tr-lg pt-2 px-10">GAME DÀNH CHO BẠN</h1>
        </div>
        <div class="game_foryou">
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            <GamesList v-for="game in games_foryou" :key="game.id" :game="game" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <h1 class="text-xl font-semibold mt-20 underline">TIN HAY</h1>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 mt-5">
          <div @click="router.push({name: 'ArticleView', params: {slug: article.slug}})" class="cursor-pointer" v-for="article in articles" :key="article.id">
            <img class="w-full h-48 object-cover" :src="'https://chillygamingbackend-production.up.railway.app/images/articles/' + article.thumb_image" alt="">
            <div>{{ article.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </PageComponent>
</template>

<style>
  .games_new_title{
    background-color: #154e5a;
  }
  .game_new{
    border: 2px solid #154e5a;
  }
  .games_foryou_title{
    background-color: #1dbfc4;
  }
  .game_foryou{
    border: 2px solid #1dbfc4;
  }
  #game_hot_text{
    background-color: #102844;
  }
  .game_hot{
    border-color: #102844;
  }
</style>
