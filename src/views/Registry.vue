<template>
    <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img src="../../public/logo_text.png" class="w-full" alt="Sample image"/>
        </div>
        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form @submit="registry">
                <div class="flex flex-row items-center justify-center lg:justify-start">
                    <p class="text-lg mb-0 mr-4">Đăng ký bằng</p>
                    <button type="button" @click="loginFb" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1">
                    <!-- Facebook -->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                    </button>
                    <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1">
                    <!-- Google -->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-4 h-4"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                    </button>
                </div>

                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p class="text-center font-semibold mx-4 mb-0">Hoặc</p>
                </div>
                <!-- Email input -->
                <div class="mb-6">
                    <input v-model="user.email" type="email" class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="username" required placeholder="Nhập địa chỉ email"/>
                </div>

                <!-- Username input -->
                <div class="mb-6">
                    <input v-model="user.username" type="text" class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="username" required placeholder="Nhập tên tài khoản"/>
                </div>

                <!-- Password input -->
                <div class="mb-6">
                    <input v-model="user.password" type="password" class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="password" required placeholder="Nhập mật khẩu"/>
                </div>

                <!-- Repeat password-->
                <div class="mb-6">
                    <input v-model="user.password_confirmation" type="password" class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="password_again" required placeholder="Nhập lại mật khẩu"/>
                </div>
                <div v-if="(errorMsg)" class="py-3 px-4 m-auto mt-5 mb-5 bg-red-500 text-white rounded">
                    <div v-if="errorMsg.email">
                        <div v-for="(error,idx) in errorMsg.email" :key="idx">
                            <span>* {{ error.replace('email đã tồn tại, vui lòng chọn tên khác hoặc chỉnh sửa game cũ','Email đã được sử dụng, vui lòng sử dụng Email khác') }}</span>
                        </div>
                    </div>
                    <div v-if="errorMsg.username">
                        <div v-for="(error,idx) in errorMsg.username" :key="idx">
                            <span>* {{ error.replace('username đã tồn tại, vui lòng chọn tên khác hoặc chỉnh sửa game cũ','Tên tài khoản đã tồn tại, vui lòng chọn tên khác hoặc đăng nhập tài khoản') }}</span>
                        </div>
                    </div>
                    <div v-if="errorMsg.password">
                        <div v-for="(error,idx) in errorMsg.password" :key="idx">
                            <span>* {{ error.replace('password','Mật khẩu') }}</span>
                        </div>
                    </div>
                </div>
                <div class="text-center lg:text-left">
                    <button type="submit" class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Đăng ký
                    </button>
                    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                    Đã có tài khoản?
                    <router-link :to="{name: 'Login'}" class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Đăng nhập ngay</router-link>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
    import store from "../store";
    import {useRouter} from "vue-router"
    import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
    const router = useRouter();
    const errorMsg = ref();
    const user = {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    };
    function registry(ev)
    {
        ev.preventDefault();
        store.dispatch('register',user)
        .then((res) => {
            router.push({
                name: 'Home'
            })
        })
        .catch(err => {
            errorMsg.value = err.response.data.errors
        })
    }
    function loginFb()
    {
        const newWindow = openWindow('','Logging in')
        store.dispatch('loginFb').then((res) => {
            if (res.data.url)
            {
                newWindow.location.href = res.data.url
            }
        })
        .catch(err => {
            errorMsg.value = err.response.data.error
        })
    }
    
   onMounted(() => {
        window.addEventListener("message", (event) => {
            if (event.origin != "http://localhost:8000" || !event.data.token )
            {
                return
            }
            var textarea = document.createElement('textarea');
            textarea.innerHTML = event.data.user 
            const user_obj = JSON.parse(textarea.value);
            const userData = {
                'token': event.data.token,
                'user': user_obj,
            }
            store.commit('setUser', userData)
            router.push({
                name: 'Home'
            })
        }, false)   
    })

    function openWindow (url, title, options = {}) 
    {
        if (typeof url === 'object') {
        options = url
        url = ''
        }
        options = { url, title, width: 600, height: 720, ...options }
        const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screen.left
        const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screen.top
        const width = window.innerWidth || document.documentElement.clientWidth || window.screen.width
        const height = window.innerHeight || document.documentElement.clientHeight || window.screen.height
        options.left = ((width / 2) - (options.width / 2)) + dualScreenLeft
        options.top = ((height / 2) - (options.height / 2)) + dualScreenTop
        const optionsStr = Object.keys(options).reduce((acc, key) => {
            acc.push(`${key}=${options[key]}`)
            return acc
        }, []).join(',')
        const newWindow = window.open(url, title, optionsStr)
        if (window.focus) {
            newWindow.focus()
        }
        return newWindow
    }
    document.title = "Đăng ký"
</script>
<style>
</style>