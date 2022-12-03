<template>
    <div class="p-5">
        <div class="mt-20 p-5 border-2 border-sky-300 rounded-xl">
            <h2 class="font-bold text-xl">THÔNG TIN CÁ NHÂN</h2>
            <form name="imageForm" action="" @submit.prevent="updateUser()">
                <div class="flex flex-col items-center">
                    <img class="rounded-full w-24 h-24 object-cover" :src="avatar.url" alt="">
                    <button type="button" class="mt-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-md font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <input @change="onImageChoose" type="file" name="" id="" class="absolute opacity-0 cursor-pointer">
                        Thay đổi
                    </button>
                </div>
                <div class="flex flex-col items-center md:flex-row  mt-10 md:justify-around">
                    <div>
                        <label for="name" class="font-semibold text-md">Tên hiển thị</label>
                        <input type="text" required class="mx-5 rounded-xl w-100" name="name" v-model="model.name">
                    </div>
                    <div class="mt-5 md:mt-0">
                        <label for="email" class="font-semibold text-md">Email</label>
                        <input type="text" class="mx-5 rounded-xl" size="30" name="email" v-model="model.email" disabled>
                    </div>
                </div>
                <div class="flex justify-end mt-5">
                    <input id="saveImageBt" style="background-color: #3dc0b9" class="px-3 py-1 text-md border-2 rounded-xl cursor-pointer" type="submit" value="Lưu">
                </div>
            </form>
        </div>
        <div class="mt-20 p-5 border-2 border-sky-300 rounded-xl">
            <h2 class="font-bold text-xl">ĐỔI MẬT KHẨU</h2>
            <div v-if="model.social_id">Bạn đang đăng nhập bằng tài khoản mạng xã hội, tính năng đổi mật khẩu hiện không khả dụng</div>
            <div v-else>
                <form action="" @submit.prevent="changePass()" >
                    <div class="flex justify-center">
                        <div class="flex flex-col justify-around ">
                            <label for="oldPassword">Nhập mật khẩu hiện tại</label>
                            <label for="newPassword">Nhập mật khẩu mới</label>
                            <label for="oldPasswordConfirm">Xác nhận mật khẩu mới</label>
                        </div>
                        <div class="flex flex-col">
                            <input v-model="newPass.oldPass" class="mx-5 rounded-xl" type="password" name="oldPassword" required placeholder="Mật khẩu hiện tại" id="">
                            <input v-model="newPass.newPass" class="mx-5 rounded-xl mt-2" type="password" name="newPassword" required placeholder="Mật khẩu mới" id="">
                            <input v-model="newPass.newPass_confirmation" class="mx-5 rounded-xl mt-2" type="password" required name="oldPasswordConfirm" placeholder="Xác nhận mật khẩu mới" id="">
                        </div>
                    </div>
                    <div v-if="errorMsg" class="py-3 px-4 w-1/2 m-auto mt-5 bg-red-500 text-white rounded">
                        <div v-if="Array.isArray(errorMsg)">
                            <div v-for="(error,idx) in errorMsg" :key="idx">
                                <span>{{ error.replace('new pass','Mật khẩu mới') }}</span>
                            </div>
                        </div>
                        <div v-else>
                            <span>{{ errorMsg }}</span>
                        </div>
                    </div>
                    <div class="flex justify-center mt-5"> 
                        <input type="submit" style="background-color: #3dc0b9" class="border-2 px-3 py-1 text-xl rounded-xl" value="Xác nhận">
                    </div>
                </form>
            </div>
        </div>
        <div class="mt-20 p-5 border-2 border-sky-300 rounded-xl">
            <h2 class="font-bold text-xl">CÁC GAME ĐÃ THÍCH</h2>
            <div v-if="model.likedGames.length > 0">
                <div class="flex justify-around mt-5 p-2">
                    <div @click="router.push({name: 'GameView', params: {slug: game.slug}})" v-for="game in model.likedGames" :key="game.id" class="cursor-pointer">
                        <img class="w-24 h-24 object-cover m-auto" :src="('https://chillygamingbackend-production.up.railway.app/images/games/' + game.thumb_image)" alt="">
                        <div class="text-center mt-1">
                            {{ game.tengame }}
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                Bạn hiện chưa yêu thích tựa game nào cả!
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref } from "@vue/runtime-core";
import {useRouter} from "vue-router";
import store from "../store";
const router = useRouter();
const model = ref({
    id: "",
    name: "",
    avatar_url: "",
    email: "",
    social_id: "",
    likedGames: []
})
const avatar = ref({
    url: ''
})
const newPass = ref({
    oldPass: "",
    newPass: "",
    newPass_confirmation: ""
})
const errorMsg = ref('');
store.dispatch('getUser').then(() => {
    model.value = store.state.user.data
    avatar.value.url  = 'https://chillygamingbackend-production.up.railway.app/images/profile/' + model.value.avatar_url
})

function onImageChoose(ev)
{   
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        model.value.avatar_url = reader.result;
        avatar.value.url = reader.result
    }
    reader.readAsDataURL(file);
}

function updateUser()
{
    store.dispatch('updateUser',model.value)
}

function changePass()
{
    store.dispatch('changePassword', newPass.value).then(() => {
        router.push({
            name: 'Login'
        })
    })
    .catch( err => {
        if (err.response.data.errors)
        {
            errorMsg.value = err.response.data.errors.newPass
        }
        else if (err.response.data.error)
        {
            errorMsg.value = err.response.data.error
        }
    })
}
document.title = "Trang cá nhân"
</script>

<style>

</style>