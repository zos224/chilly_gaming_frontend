<template>
    <div id="container_article" class="m-auto mt-10 ck-content">
        <div class="text-center font-bold text-2xl uppercase border-b-2 border-sky-300 pb-5">{{ article.title }}</div>
        <div class="flex mt-2 border-b-2 border-sky-300 pb-2 px-2 justify-between">
            <div class="flex items-center">
                <div class="mr-2">
                    Đánh giá: 
                </div>
                <div id="starts" class="cursor-pointer" v-for="n in 5" :key="n">
                    <svg v-if="article.rate >= n" @click="rate(n)" xmlns="http://www.w3.org/2000/svg" fill="#FFCC00" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" @click="rate(n)" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </div>
                <div class="italic text-sm mx-1"> 
                    {{ article.soluotdanhgia }} lượt đánh giá
                </div>
            </div>
            <div class="italic">
                {{ created }}
            </div>
        </div>
        <div class="mt-10" v-html="article.content">
        </div>
        <div class="border-t-2 mt-10">
            <div class="bg-slate-300 border-l-8 border-rose-500">
                <div class=" py-2 mx-2 text-lg">Tin liên quan</div>
            </div>
            <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 mt-5 justify-around cursor-pointer">
                <div @click="router.push({name: 'ArticleView', params: {slug: article.slug}})" class="flex sm:block" v-for="article in articleRelate" :key="article.id">
                    <img class="sm:w-full w-2/4 h-32" :src="'https://chillygamingbackend-production.up.railway.app/images/articles/' + article.thumb_image" alt="">
                    <div class="text-center mt-1 sm:w-full w-2/4">{{ article.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "@vue/reactivity";
    import { useRoute, useRouter } from "vue-router";
    import store from "../store";
    const article = ref({});
    const articleRelate = ref([]);
    const created = ref('')
    const route = useRoute();
    const router = useRouter();
    if (route.params.slug)
    {
        store.dispatch('getArticleBySlug', route.params.slug).then( res => {
            article.value = res.data.data
            created.value = article.value.created.slice(0,10)
            article.value.luotxem += 1
            store.dispatch('updateArticle', article.value);
            document.title = article.value.title
        })
        store.dispatch('getArticleRelate').then(res => {
            articleRelate.value = res.data.data
        })
    }

    function rate(n)
    {
        article.value.rate = (article.value.rate * article.value.soluotdanhgia + n)/ (article.value.soluotdanhgia + 1)
        article.value.soluotdanhgia += 1
        store.dispatch('updateArticle', article.value);
    }

</script>

<style>
    #container_article{
        max-width: 800px;
    }  
</style>