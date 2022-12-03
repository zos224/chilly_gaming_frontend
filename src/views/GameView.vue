<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex items-center justify-between">
               <span class="font-semibold text-xl">
                {{ model.tengame }}
               </span>
               <span class="text-xl relative">
                {{ model.gh_dotuoi }}
                <span class="absolute bottom-2">+</span>
               </span>
            </div>
        </template>
        <div>
            <div class="game_container border-y-2 border-sky-300">
                <div class="iframe-container">
                    <iframe id="iframe" iframe :src="model.link_game" scrolling="no" allowfullscreen></iframe>
                </div>
                <div class="chucnang pb-2 px-10">
                    <div class="feature_main flex justify-between mt-3">
                        <div @click="reload" id="reload" class="flex flex-col items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00B2EE" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                            Tải lại
                        </div>
                        <div @click="fullscreen" id="fullscreen" class="flex flex-col items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00B2EE" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>
                            Toàn màn hình
                        </div>
                        <div v-if="user_id && liked.checked" @click="unlikeGame()" id="like" class="flex flex-col items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00FF00" class="w-6 h-6"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
                            Yêu thích
                        </div>
                        <div v-if="user_id && !liked.checked" @click="likeGame()" class="flex flex-col items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" class="w-6 h-6"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
                            Yêu thích
                        </div>
                        <div v-if="!user_id" @click="alert()"  id="like" class="flex flex-col items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" class="w-6 h-6"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
                            Yêu thích
                        </div>
                        <div @click="toggle" id="report" class="flex flex-col items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" /></svg>
                            Báo cáo
                        </div>
                    </div>
                    <div class="luotchoi mt-5">
                        Lượt chơi: {{ model.soluotchoi }}
                    </div>
                    <div class="flex items-center feature_others">
                        <div class="vote flex items-center justify-between w-1/2">
                            Đánh giá game
                            <div class="positive flex justify-around items-center">
                                <button @click="like" class="flex border-stone-800 bg-gray-200 hover:bg-gray-300 rounded-xl p-2">
                                    Hay
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#008B00" class="w-6 h-6 ml-2"><path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" /></svg>
                                </button>
                                <span class="mx-3">
                                    {{ model.like }}
                                </span>
                            </div>
                            <div class="negative flex justify-around items-center">
                                <button @click="unlike" class="flex border rounded-xl p-2 bg-gray-200 hover:bg-gray-300">
                                    Dở
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF3030" class="w-6 h-6 ml-2"><path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" /></svg>
                                </button>
                                <span class="mx-3">
                                    {{ model.unlike }}
                                </span>
                            </div>
                            <iframe :src="href" width="138" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="game_information border-2 border-sky-300 rounded-xl mt-5 p-5">
                <h4 class="font-semibold">CHI TIẾT GAME</h4>
                <div id="mota" v-html="model.mota">
                    
                </div>
                <div class="mt-5" id="hinhanh">
                    <h5>Một số hình ảnh trong game {{ model.tengame }}</h5>   
                    <div class="relative w-4/5 mx-auto mt-5">
                        <div class="slide relative">
                            <img class="w-full object-cover" :src="'https://chillygamingbackend-production.up.railway.app/images/games/' + model.image1">
                        </div>
                        <div class="slide relative">
                            <img class="w-full object-cover" :src="'https://chillygamingbackend-production.up.railway.app/images/games/' + model.image2">
                        </div>
                        <div class="slide relative">
                            <img class="w-full object-cover" :src="'https://chillygamingbackend-production.up.railway.app/images/games/' + model.image3">
                        </div>
                        <div class="slide relative">
                            <img class="w-full object-cover" :src="'https://chillygamingbackend-production.up.railway.app/images/games/' + model.image4">
                        </div>
                        <!-- The previous button -->
                        <a class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                            @click="moveSlide(-1)">❮</a>

                        <!-- The next button -->
                        <a class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                            @click="moveSlide(1)">❯</a>

                    </div>
                </div>
            </div>
            <div class="others flex border-2 border-sky-300 rounded-xl mt-5 p-5">
                <div class="comment basis-3/4 pr-20">
                    <div class="" v-if="store.state.user.token">
                        <h4 class="text-lg font-medium">Để lại bình luận của bạn tại đây</h4>
                        <div class="rounded-lg mt-3 bg-gray-50 border border-gray-200">
                            <textarea v-model="comment.comment" class="border-0 w-full mt-1 bg-gray-50 focus:ring-0" name="" id=""  rows="3" required placeholder="Viết bình luận..."></textarea>
                            <div class="flex justify-end border-t p-2 bg-gray-200">
                                <button @click="postComment" class="post px-4 py-1 text-lg text-white rounded-xl">Đăng</button>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div>
                            <div class="flex justify-center">
                                <span class="font-semibold text-lg">Vui lòng đăng nhập để bình luận</span>
                            </div>
                            <div class="flex justify-center mt-2">
                                <div class="w-2/4 flex justify-around">
                                    <button class="bg-yellow-500 px-3 py-2 rounded-xl text-lg hover:bg-yellow-600" @click="router.push({name: 'Registry'})">Đăng ký</button>
                                    <button class="bg-green-500 px-3 py-2 rounded-xl text-lg hover:bg-green-600" @click="router.push({name: 'Login'})">Đăng nhập</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5" v-for="comment in comments" :key="comment.id">
                        <div class="rounded bg-gray-50 ">
                            <div class="p-3 bg-gray-200 ">
                                <div class="w-1/5 flex justify-between items-center"> 
                                    <img class="rounded-full w-10 h-10 object-cover" :src="'https://chillygamingbackend-production.up.railway.app/images/profile/' + comment.avatar" alt="">
                                    <span v-if="comment.name" class="font-bold">{{ comment.name }}</span>
                                    <span v-if="comment.username" class="font-bold">{{ comment.username }}</span>
                                </div>
                            </div>
                            <div class="px-3 py-2">
                                {{ comment.comment }}
                            </div>
                            <div class="flex justify-between items-center p-2">
                                <span class="font-semibold text-sm">
                                    {{ calPostDate(comment.created_at) }}
                                </span>
                                <div>
                                    <span class="mr-5"><button v-if="user_id" @click="openReply(comment.id)" style="background-color: #15576b; color: white;" class="bg-violet-300 px-3 py-1 rounded-xl">Trả lời</button></span>
                                    <span><button v-if="comment.user_id == user_id" @click="deleteComment(comment.id)" class="bg-red-500 px-3 py-1 rounded text-white cursor-pointer">Xóa</button></span>
                                </div>
                            </div>
                            <div class="flex justify-end mt-2" v-for="reply in comment.replies" :key="reply.id">
                                <div class="w-4/5 p-2 rounded-lg bg-gray-50 border border-sky-300">
                                    <div class="flex w-1/5 justify-between items-center">
                                        <img class="rounded-full w-10 h-10 object-cover" :src="'https://chillygamingbackend-production.up.railway.app/images/profile/' + reply.avatar" alt="">
                                        <span v-if="reply.name" class="font-bold">{{ comment.name }}</span>
                                        <span v-if="reply.username" class="font-bold">{{ comment.username }}</span>
                                    </div>    
                                    <div class="mt-3 border-t-2 py-2 flex justify-between">
                                        <span>{{ reply.reply }}</span>
                                        <span>
                                            <button v-if="reply.user_id == user_id" @click="delReply(reply.id)" class="bg-red-500 px-3 py-1 rounded text-white cursor-pointer">Xóa</button>
                                        </span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div v-if="comment.id == commentIdReply && displayReply" id="reply" class="mt-3 flex justify-end">
                            <div class="flex w-4/5 rounded-lg bg-gray-50 border border-gray-300">
                                <input v-model="reply.reply" type="text" class="border-0 w-full mt-1 bg-gray-50 focus:ring-0" name="" id=""  rows="3" required placeholder="Viết trả lời...">
                                <div class="p-2 bg-gray-200">
                                    <button @click="postReply" class="post px-4 py-1 text-white rounded-xl">Đăng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center" v-if="remain">
                        <button @click="loadMoreComment" class="mt-5 px-10 py-2 rounded-xl bg-cyan-500">Tải Thêm Bình Luận</button>
                    </div>
                </div>
                <div class="gamehot basis-1/4">
                    <h4 class="text-lg font-medium text-center">GAME HOT</h4>
                    <div v-for="game in gamesHot" :key="game.id" class="md:flex mt-4 border rounded p-3 border-sky-300" >
                        <img @click="router.push({name: 'GameView', params: {slug: game.slug}})"  :src="'https://chillygamingbackend-production.up.railway.app/images/games/' + game.thumb_image" alt="" class="w-24 h-24 object-cover cursor-pointer">
                        <div class="basis-2/4 ml-2 flex flex-col items-center my-auto">
                            <div @click="router.push({name: 'GameView', params: {slug: game.slug}})" class="cursor-pointer">{{ game.tengame }}</div>
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" /></svg>
                                <h5 class="ml-3">{{ game.soluotchoi }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:block hidden mt-10 border-2 border-sky-300 rounded-xl" id="gameRecent">
                <h3 class="text-center font-semibold p-2">CÁC GAME ĐÃ CHƠI GẦN ĐÂY</h3>
                <div class="flex justify-around mt-5 p-2">
                    <div @click="router.push({name: 'GameView', params: {slug: game.slug}})" v-for="game in gameRecent" :key="game.slug">
                        <img :src="'https://chillygamingbackend-production.up.railway.app/images/games/' + game.thumb_image" alt="" class="w-24 h-24 m-auto">
                        <div class="text-center mt-1">
                            {{ game.tengame }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div v-if="showModal.status" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                <div class="relative w-auto my-6 mx-auto">
                    <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div class="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 class="text-2xl font-semibold">
                            Báo cáo Game
                            </h3>
                            <button class="p-1 ml-auto bg-transparent border-0 leading-none font-semibold outline-none focus:outline-none" @click="toggle">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F00000" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                        <div class="relative p-6 flex">
                            <div class="flex flex-col">
                                <label class="mt-1" for="tengame">Tên game:</label>
                                <label class="mt-4" for="hoten">Người báo cáo:</label>
                                <label class="mt-5" for="email">Email:</label>
                                <label class="mt-4" for="loi">Lỗi game:</label>
                                <label class="mt-10" for="motaloi">Mô tả lỗi:</label>
                            </div>
                            <div class="flex flex-col">
                                <input class="mx-4 py-1 rounded-md" disabled v-model="gameReport.tengame" type="text" name="" id="tengame" required>
                                <input class="mx-4 py-1 mt-2 rounded-md" v-model="gameReport.name" type="text" name="" id="hoten" required>
                                <input class="mx-4 py-1 mt-2 rounded-md" v-model="gameReport.email" type="email" name="" id="email" required>
                                <input class="mx-4 py-1 mt-2 rounded-md" v-model="gameReport.loi" type="text" name="" id="loi" required>
                                <textarea v-model="gameReport.motaloi" class="mx-4 py-1 mt-2 rounded-md" name="" id="motaloi" cols="50" rows="3" required></textarea>
                            </div>
                        </div>
                        <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="sendReport">
                                Gửi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="showModal.status" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    </PageComponent>
</template>
<script setup>
import PageComponent from '../components/PageComponent.vue';
import store from '../store'
import {ref, computed, watch, onBeforeMount, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router';
import Swal from 'sweetalert2'
const route = useRoute();
const router = useRouter();
const user_id = sessionStorage.getItem('user_id');
const gameRecent = []
const date = new Date();
const today = date.getDate();
let getCommentsRequire = ref({
    num: 5,
    id: ''
});
let remain =ref()
let model = ref({
    id: "",
    tengame: "",
    thumb_image: "",
    link_game: "",
    soluotchoi: "",
    mota: "",
    gh_dotuoi: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    like: "",
    unlike: "",
});
let gameReport = ref({
    game_id: "",
    tengame: "",
    name: "",
    email: "",
    loi: "",
    motaloi: ""
})
// let likedGames = computed(() => store.state.user.data.likedGames)
let liked = ref({
    likedGames: null,
    checked: false
})

const gamesHot = computed(() => store.state.gamesHot);
const comments = computed(() => store.state.comments);
let comment = ref({
    game_id: '',
    comment: '', 
})
const gameSave = {
    slug: route.params.slug,
    tengame: '',
    thumb_image: ''
}
let showModal = ref({
    status: false,
})
let href = 'https://www.facebook.com/plugins/share_button.php?href=' + window.location.href + '&layout=button_count&size=large&appId=1455233224968219&width=138&height=28' ;
let commentIdReply = ref('')
let displayReply = ref(false)
let reply = ref({
    comment_id: '',
    reply: '',
    user_id: ''
})
let slideIndex = 1;
if (user_id)
{
    store.dispatch('getUser').then( () => {
        liked.value.likedGames = store.state.user.data.likedGames
        for (let i = 0; i < liked.value.likedGames.length; i++)
        {
            if (route.params.slug == liked.value.likedGames[i].slug)
            {
                liked.value.checked = true
                break
            }
        }
    })
    reply.value.user_id = user_id
}

if (store.state.gamesHot.length == 0)
{
    store.dispatch('getGamesHot');
}

if (route.params.slug){
    store.dispatch('getGameBySlug', route.params.slug).then(() => {
    model.value = store.state.currentGame
    model.value.soluotchoi = parseInt(model.value.soluotchoi) + 1
    store.dispatch('updateGame', model.value) 
    getCommentsRequire.value.id = model.value.id
    store.dispatch('getComments', getCommentsRequire.value).then((res) => {
        remain.value = res
    });
    document.title = model.value.tengame
    })
}

function like()
{
    model.value.like = parseInt(model.value.like) + 1;
    store.dispatch('updateGame', model.value)
}

function unlike()
{
    model.value.unlike = parseInt(model.value.unlike) + 1;
    store.dispatch('updateGame', model.value) 
}

function postComment()
{
    comment.value.game_id = model.value.id
    store.dispatch('postComment', comment.value).then(() => {
        comment.value.comment = ''
        store.dispatch('getComments', getCommentsRequire.value)
    })
}

function deleteComment(comment_id)
{
    store.dispatch('delComment', comment_id).then(() => {
        store.dispatch('getComments', getCommentsRequire.value)
        Swal.fire({
        icon: 'success',
        text: 'Đã xóa bình luận',
    })

    })
}

function likeGame()
{
    store.dispatch('likeGame', model.value.id).then(() => {
        liked.value.checked = true;
        Swal.fire({
        icon: 'success',
        text: 'Yêu thích game thành công',
    })
    })
}

function unlikeGame()
{
    store.dispatch('unlikeGame', model.value.id).then(() => {
        liked.value.checked = false;
        Swal.fire({
        icon: 'success',
        text: 'Đã xóa game khỏi danh sách yêu thích',
    })
    })
}
function alert()
{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Vui lòng đăng nhập để thực hiện chức năng này',
    })
}

onBeforeMount(() => {
    if (localStorage.getItem('Game1') != null)
    {
        gameRecent[0] = JSON.parse(localStorage.getItem('Game1'))
    }
    if (localStorage.getItem('Game2') != null)
    {
        gameRecent[1] = JSON.parse(localStorage.getItem('Game2'))
    }
    if (localStorage.getItem('Game3') != null)
    {
        gameRecent[2] = JSON.parse(localStorage.getItem('Game3'))
    }
    if (localStorage.getItem('Game4') != null)
    {
        gameRecent[3] = JSON.parse(localStorage.getItem('Game4'))
    }
    if (localStorage.getItem('Game5') != null)
    {
        gameRecent[4] = JSON.parse(localStorage.getItem('Game5'))
    }
})
watch( () => model.value.tengame, () => {
    gameSave.tengame = model.value.tengame
    gameSave.thumb_image = model.value.thumb_image
    if (localStorage.getItem('Game1') == null)
    {
        if (!checkGameRecent())
        {
            localStorage.setItem('Game1', JSON.stringify(gameSave))
        }
    }
    else if (localStorage.getItem('Game2') == null)
    {
        if (!checkGameRecent())
        {
            localStorage.setItem('Game2', localStorage.getItem('Game1'))
            localStorage.setItem('Game1', JSON.stringify(gameSave))
        }
    }
    else if (localStorage.getItem('Game3') == null)
    {
        if (!checkGameRecent())
        {
            localStorage.setItem('Game3', localStorage.getItem('Game2'))
            localStorage.setItem('Game2', localStorage.getItem('Game1'))
            localStorage.setItem('Game1', JSON.stringify(gameSave))
        }
    }
    else if (localStorage.getItem('Game4') == null)
    {
        if (!checkGameRecent())
        {
            localStorage.setItem('Game4', localStorage.getItem('Game3'))
            localStorage.setItem('Game3', localStorage.getItem('Game2'))
            localStorage.setItem('Game2', localStorage.getItem('Game1'))
            localStorage.setItem('Game1', JSON.stringify(gameSave))
        }
    }
    else 
    {
        if (!checkGameRecent())
        {
            localStorage.setItem('Game5', localStorage.getItem('Game4'))
            localStorage.setItem('Game4', localStorage.getItem('Game3'))
            localStorage.setItem('Game3', localStorage.getItem('Game2'))
            localStorage.setItem('Game2', localStorage.getItem('Game1'))
            localStorage.setItem('Game1', JSON.stringify(gameSave))
        }
    }
})

function checkGameRecent()
{
    var game;
    var check = false;
    for (let i = 1; i <= 5; i++)
    {
        game = JSON.parse(localStorage.getItem('Game' + i))
        if (game == null)
        {
            continue
        }
        if (game.slug == gameSave.slug)
        {
            let temp = localStorage.getItem('Game' + i);
            for (let j = i; j > 1 ; j--)
            {
                localStorage.setItem('Game' + j, localStorage.getItem('Game' + (j - 1)))
            }
            localStorage.setItem('Game1', temp)
            check = true;
            break;
        }
    }
    return check
}
function calPostDate($postDate)
{
    $postDate = $postDate.slice(0,10)
    return $postDate
}

function toggle() {
    showModal.value.status = !showModal.value.status
    if (showModal.value.status)
    {
        gameReport.value.game_id = model.value.id,
        gameReport.value.tengame = model.value.tengame
        if (user_id)
        {
            store.dispatch('getUser').then((res) => {
                gameReport.value.email = res.data.data.email
                if (res.data.data.name)
                {
                    gameReport.value.name = res.data.data.name
                }
            })
        }
    }
}

function sendReport()
{
    store.dispatch('sendReport', gameReport.value).then( () => {
        toggle();
        Swal.fire({
        icon: 'success',
        text: 'Đã gửi báo cáo thành công',
    })
    })
}

function reload()
{
    var temp = document.getElementById('iframe');
    temp.src = temp.src
}

function fullscreen()
{
    var element = document.getElementById('iframe');
    if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
}

(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function loadMoreComment()
{
    getCommentsRequire.value.num += 10;
    store.dispatch('getComments', getCommentsRequire.value).then((res) => {
        remain.value = res
    });
}

function openReply(comment_id)
{
    commentIdReply.value = comment_id;
    reply.value.comment_id = comment_id;
    displayReply.value = true;
}

function postReply()
{
    store.dispatch('postReply', reply.value).then(() => {
        store.dispatch('getComments', getCommentsRequire.value).then((res) => {
            remain.value = res
        })
        reply.value.reply = ''
    })
}

function delReply(reply_id)
{
    store.dispatch('delReply', reply_id).then(() => {
        store.dispatch('getComments', getCommentsRequire.value).then((res) => {
            remain.value = res
        })
    })
}
onMounted(() => {
    showSlide(slideIndex);
})

function moveSlide(moveStep) {
    showSlide(slideIndex += moveStep);
}

function showSlide(n)
{
    let  i;
    const slides = document.getElementsByClassName('slide')
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }
    slides[slideIndex - 1].classList.remove('hidden');
}
window.scrollTo(0,0);
window.addEventListener("keydown", function(e) {
    if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
</script>
<style>
    .iframe-container {
    overflow: hidden;
    /* 16:9 aspect ratio */
    padding-top: 56.25%;
    position: relative;
    }
    .iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    }
    .post {
        background-color: #18b2b6;
    }
    .post:hover {
        background-color: #128794;
    }
</style>