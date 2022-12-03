<script>
import { ref, computed } from 'vue';
import {useRoute, useRouter} from 'vue-router'
import store from '../store';
import Swal from 'sweetalert2'
  export default{
    setup()
    {
      const router = useRouter();
      const route = useRoute();
      let length = ref();
      let open = ref(false);
      let show = ref(false);

      function menuopen(){
      open.value = !open.value    
      }
      function showuser()
      {
        show.value = !show.value;
      }
      function logout()
      {
        store.dispatch('logout')
        .then(() =>
        {
          Swal.fire({
            icon: 'success',
            text: 'Đăng xuất thành công',
        });
          if (route.name == 'Profile')
          {
            router.push({name: 'Home'})
          }
        });
      }
      const keyword = {
        key: ""
      }

      function search()
      {
        var key = keyword.key.trim();
        for (var i = 0; i < key.length; i++)
        {
          if (key[i] == ' ' && key[i + 1] == ' ')
          {
            for (var j = i + 1; j < key.length - 1; j++)
            {
              key[j] = key[j+1]
            }
            key[j + 1] = ' '
          }
        }
        key = key.trim();
        for (var i = 0; i < key.length; i++)
        {
          if (key[i] == ' ')
          {
            key = key.replace(' ', '+')
          }
        }
        router.push({
          name: "Search",
          params: {keyword: key}
        }).then(() =>
        {
          keyword.key = ''
        })
      }
      const avatar_url = computed( () => store.state.user.data.avatar_url, () => sessionStorage.getItem('avatar_url'))
      
      const theloais = computed(() => store.state.theloais)
      store.dispatch('getTheLoais').then(() => {
        length = parseInt(theloais.value.length) / 5
      })
      $('#game').on('mouseover', function(e) {
        alert('dm')
        $('#gameTable').addClass('hover')
      })
      return{open,menuopen, show, showuser, logout, store, router,theloais, route, keyword, search, avatar_url, length};
    }
  }
</script>

<template>
  <div>
    <nav id="navbar" class="text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded md:flex md:items-center relative">
      <div @click="router.push({name: 'Home'})" class="mx-5 w-full md:w-1/5">
        <span class="text-xl font-[Poppins] cursor-pointer">
          <img class="h-14 inline" src="../../public/logo_text_ngang.png" alt="">
        </span>
      </div>
      <span @click="menuopen()" class="border rounded absolute md:hidden right-6 top-4 cursor-pointer">
        <svg :class="[open ? 'hidden' : 'block']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" /></svg>
        <svg :class="[open ? 'block' : 'hidden']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </span>
      <ul id="ul_navbar" class="p-4 md:p-0 my-2 md:my-0 md:flex md:items-center md:justify-between lg:ml-32 z-[999] rounded md:z-auto md:static absolute w-full top-12 duration-300 ease-in" :class="[open ? 'left-0' : 'left-[-110%]']">
        <li class="my-6 md:my-0"> 
          <router-link :to = "{name: 'Home'}" class="text-xl hover:text-cyan-500 duration-300" active-class="active px-5 py-3 rounded">Trang chủ</router-link>
        </li>
        <li id="game" class="my-6 md:my-0 group relative">
          <router-link :to = "{name: 'Games'}" class="text-xl hover:text-cyan-500 duration-300" active-class="px-5 py-3 rounded active">Games</router-link>
          <table id="gameTable" class="absolute top-7 hidden pt-1 group-hover:block rounded z-50">
            <tr v-for="i in parseInt(theloais.length / 4) + 1" :key="i">
              <td v-for="theloai in theloais.slice((i-1) * 4,(i) * 4 )" :key="theloai.id">
                <router-link :to="{name: 'Games_TheLoai', params: {slug: theloai.slug}}" class="rounded text-center hover:bg-cyan-800 py-2 px-4 block whitespace-no-wrap">{{ theloai.tentheloai }}</router-link>
              </td>
            </tr>
          </table>
          <!-- <ul class="absolute hidden dark:bg-gray-900 pt-1 group-hover:block rounded z-50">
            <li v-for="theloai in theloais.slice(0,5)" :key="theloai.id">
              <router-link :to="{name: 'Games_TheLoai', params: {id_theloai: theloai.id, ten_theloai: theloai.tentheloai, mota_theloai: theloai.mota}}" class="rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">{{ theloai.tentheloai }}</router-link>
            </li>
          </ul> -->
        </li>
        <li class="my-6 md:my-0">
          <router-link :to="{name: 'Articles'}" class="text-xl hover:text-cyan-500 duration-300" active-class="active px-5 py-3 rounded">Tin tức</router-link>
        </li>
        <li class="my-6 md:my-0">
          <form @submit.prevent="search">
            <button type="submit" class="flex absolute pl-3 py-3 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg></button>
            <input type="text" v-model="keyword.key" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-sky-900 dark:border-sky-900 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tìm kiếm...">
          </form>
        </li>
        <li v-if="store.state.user.token" @click="showuser" class="mx-10 md:mx-2 my-6 md:my-0 hidden md:block ">
          <div class="cursor-pointer flex justify-end"> 
            <img class="rounded-full w-10 h-10 object-cover" :src="'https://chillygamingbackend-production.up.railway.app/images/profile/' + avatar_url" alt="">
          </div>  
          <ul id="ul_user" :class="[show ? 'block' : 'hidden']" class="absolute right-0 top-15 dark:bg-gray-900 pt-1 rounded">
            <li class="">
              <router-link :to = "{name: 'Profile'}" class="rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Hồ sơ cá nhân</router-link>
            </li>
            <li class="">
              <a @click="logout" class= "hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer" >Đăng xuất</a>
            </li>
          </ul>
        </li>
        <li v-else>
          <router-link :to="{name: 'Login'}" class="mx-10 md:mx-4 my-6 md:my-0 hidden md:block"><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg> </router-link>
        </li>
        <li v-if="store.state.user.token" class="md:hidden block ">
          <router-link :to = "{name: 'Profile'}" class="rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Hồ sơ cá nhân</router-link>
        </li>
        <li v-if="store.state.user.token" class="md:hidden block ">
          <a @click="logout" class= "hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer" >Đăng xuất</a>
        </li>
        <li v-if="!store.state.user.token" class="md:hidden block mx-8">
          <span @click="router.push({name: 'Login'})" class="mx-2 text-xl">Đăng nhập</span>
        </li>
      </ul>
    </nav>
    <router-view :key="route.path"></router-view>
    <div class="footer p-10 mt-20">
      <div class="flex">
        <div class="w-96"><img src="../../public/logo_text_nonbg.png" alt=""></div>
        <div class="ml-5">
          <div>ChillyGaming là website chơi game trực tuyến miễn phí với đa dạng các tựa game, cùng với đó là trải nghiệm mượt mà mang đến cho bạn những giây phút giải trí
          thoải mái nhất. Ngoài ra, ChillyGaming còn cung cấp những thông tin về Game mới nhất, đầy đủ nhất, giúp bạn đọc nắm bắt được những sự kiện nóng hổi nhất. <br>
          Sự hài lòng của các bạn là niềm vui của chúng tôi
          <span class="text-xl align-middle text-rose-600">&hearts;</span>
          </div>
          <div class="flex items-center justify-between w-1/3 mt-5">Liên hệ với chúng tôi: 
              <a href="https://www.facebook.com/phongngo224">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="#3b5998" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/> </svg>
              </a>
              <a href="mailto: phongnd.21ad@vku.udn.vn">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="#dc4e41" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
              </a>
          </div>
          <div class="mt-5">
            Make by Ngô Phong - Phạm Thúy
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .footer {
    background-color: #bcc1bf;
  }

  #gameTable{
    width:max-content;
    margin-left: -300%;
    background-color: #113747;
  }
  .active + #gameTable{
    margin-left: -150%;
  }
  .active
  {
    background-color: #1a4d66;
  }
  #navbar {
    background-color: #113747;
  }
  #ul_navbar {
    background-color: #113747;
  }
  #ul_user{
    background-color: #113747;
  }
</style>
