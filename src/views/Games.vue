<script setup>
  import PageComponent from '../components/PageComponent.vue'
  import store from '../store'
  import {computed, onMounted, ref} from 'vue'
  import {useRoute} from 'vue-router';
  import GamesList from '../components/GamesList.vue';
import axios from 'axios';

  const route = useRoute();
  let games = ref([])
  let tenTheloai = ref('')
  let mota = ref('')
  let sorts = [
    {name: 'Lượt chơi', value: 'soluotchoi'},
    {name: 'Tên', value: 'tengame'},
    {name: 'Đánh giá', value: 'danhgia'},
  ]
  let selected = ref('id');
  const pagination = ref({})
  function sortGames()
  {
    let require = {
        sort: selected.value,
        id_theloai: 0
    }
    if (!route.params.keyword)
    {
      if (route.params.slug)
      {
        store.dispatch('getTheloaiBySlug', route.params.slug).then((res) => {
          tenTheloai.value = res.data.data[0].tentheloai
          mota.value = res.data.data[0].mota
          require.id_theloai = res.data.data[0].id
        }).then(() => {
          store.dispatch('getGamesSortTheloai', require).then(res => {
            games.value = res.data.data
            pagination.value = {
              last_page: res.data.meta.last_page,
              path_page: res.data.meta.path + "?page=",
              first_link: res.data.links.first,
              last_link: res.data.links.last,
            }
          })
        })
      }
      else 
      {
        tenTheloai.value = 'Games'
        mota.value = ''
        store.dispatch('getGamesSortTheloai', require).then(res => {
            games.value = res.data.data
            pagination.value = {
              last_page: res.data.meta.last_page,
              path_page: res.data.meta.path + "?page=",
              first_link: res.data.links.first,
              last_link: res.data.links.last,
            }
          })
      }
    }  
    else 
    {
      let require = {
        sort: selected.value,
        keyword: route.params.keyword
      }
      store.dispatch('getGamesSearchSort', require).then(res => {
        games.value = res.data.data
        pagination.value = {
          last_page: res.data.meta.last_page,
          path_page: res.data.meta.path + "?page=",
          first_link: res.data.links.first,
          last_link: res.data.links.last,
        }
      })
    }
  }

  if (route.params.keyword)
  {
    store.dispatch('search', route.params.keyword).then(res => {
      games.value = res.data.data
      pagination.value = {
        last_page: res.data.meta.last_page,
        path_page: res.data.meta.path + "?page=",
        first_link: res.data.links.first,
        last_link: res.data.links.last,
      }
    });
    tenTheloai.value = 'Games'
    mota.value = ''
  }
  else
  {
    sortGames();
  }
  function next(path)
  {
      axios.get(path).then((res) => {
          games.value = res.data.data
      })
  }
  document.title = "Chilly Gaming - Games"
</script>

<template>
  <PageComponent>
    <template v-slot:header>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 text-center">{{ tenTheloai }}</h1>
    </template>
    <div>
      <div v-if="mota" class="hidden md:block border-dashed border-2 border-sky-500 rounded-xl p-4 text-center mb-5">
        {{ mota }}
      </div>
      <div v-if="games.length != 0" class="flex justify-end items-center">
        <span class="mr-3">Sắp xếp theo</span>
        <select @change="sortGames" v-model="selected" class="px-4 py-0 w-32 bg-gray-200 rounded" name="" id="">
          <option :value="sort.value" v-for="sort in sorts" :key="sort.value">{{ sort.name }}</option>
        </select>
      </div>
      <div class="text-center text-xl font-medium mt-2" v-if="games.length == 0">Không tìm thấy Game liên quan</div>
      <div class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
        <GamesList v-for="game in games" :key="game.id" :game="game" />
      </div>
    </div>
    <div class="mt-10" v-if="pagination">
      <ul class="flex items-center justify-evenly">
          <li><button @click="next(pagination.first_link)"><input class="hidden" type="radio" name="check" id="first"><label class="text-2xl border-2 px-3 rounded-xl"  for="first">&laquo;</label></button></li>
          <li v-for="n in pagination.last_page" :key="n"><button  @click="next(pagination.path_page + n)"><input class="hidden" type="radio" name="check" :id="n"><label class="border-2 px-3 rounded-xl" :for="n">{{ n }}</label></button></li>
          <li><button @click="next(pagination.last_link)" ><input class="hidden" type="radio" name="check" id="last"><label class="text-2xl border-2 px-3 rounded-xl" for="last">&raquo;</label></button></li>
      </ul>
    </div>
  </PageComponent>
</template>

<style scoped>
</style>
