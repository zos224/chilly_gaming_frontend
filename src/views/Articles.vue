<template>
    <div id="container_article" class="m-auto mt-10">
        <div>
            <div>
                <div class="flex bg-slate-300">
                    <div class="bg-slate-800 px-8 py-2 font-bold text-amber-600">NỔI BẬT</div>
                    <div id="triangle-right"></div>
                </div>
                <div class="mt-5 grid md:grid-cols-2 grid-cols-1 justify-between">
                    <div @click="router.push({name: 'ArticleView', params: {slug: article.slug}})" class="mt-5 mx-3 cursor-pointer" v-for="article in popularArticles" :key="article.id">
                        <div class="relative">
                            <img class="w-full h-64 object-cover" :src="'https://chillygamingbackend-production.up.railway.app/images/articles/' + article.thumb_image" alt="">
                            <span class="absolute px-3 font-bold text-slate-50 text-xl bottom-3" >{{ article.title }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-10">
                <div class="flex border-b-2 border-rose-600">
                    <div class="bg-rose-600 px-5 py-2 font-semibold text-slate-50">MỚI CẬP NHẬT</div>
                </div>
                <div>
                    <div @click="router.push({name: 'ArticleView', params: {slug: article.slug}})" class="flex mt-5 cursor-pointer border-b border-sky-300 pb-2" v-for="article in articles" :key="article.id">
                        <img class="w-1/3 h-40 hidden sm:block" :src="'https://chillygamingbackend-production.up.railway.app/images/articles/' + article.thumb_image" alt="">
                        <span class="w-100 sm:w-2/3 mx-4">{{ article.title }}</span>
                    </div>
                </div>
                <div class="mt-10" v-if="pagination">
                    <ul class="flex items-center justify-evenly">
                        <li><button @click="next(pagination.first_link)"><input class="hidden" type="radio" name="check" id="first"><label class="text-2xl border-2 px-3 rounded-xl"  for="first">&laquo;</label></button></li>
                        <li v-for="n in pagination.last_page" :key="n"><button  @click="next(pagination.path_page + n)"><input class="hidden" type="radio" name="check" :id="n"><label class="border-2 px-3 rounded-xl" :for="n">{{ n }}</label></button></li>
                        <li><button @click="next(pagination.last_link)" ><input class="hidden" type="radio" name="check" id="last"><label class="text-2xl border-2 px-3 rounded-xl" for="last">&raquo;</label></button></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "@vue/reactivity"
    import axios from "axios";
    import { useRouter } from "vue-router";
    import store from "../store"
    const router = useRouter();
    const articles = ref([])
    const popularArticles = ref([])
    const pagination = ref({})
    store.dispatch('getPopularArticle').then(res => {
        popularArticles.value = res.data.data
    }) 
    store.dispatch('getArticleNew').then(res => {
        articles.value = res.data.data
        pagination.value = {
            last_page: res.data.meta.last_page,
            path_page: res.data.meta.path + "?page=",
            first_link: res.data.links.first,
            last_link: res.data.links.last,
        }
    })
    function next(path)
    {
        axios.get(path).then((res) => {
            articles.value = res.data.data
        })
    }
    document.title = "Chilly Gaming - Tin Tức"
</script>

<style>
    #container_article{
        max-width: 800px;
    }
    #triangle-right {
        width: 0;
        height: 0;
        border-top: 20px solid transparent;
        border-left: 20px solid rgb(30 41 59);
        border-bottom: 20px solid transparent;
    }
</style>