<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-64 mr-2" src="../../../public/logo_text_ngang.png" alt="logo">
            </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Đăng nhập vào tài khoản của bạn
                </h1>
                <form class="space-y-4 md:space-y-6" @submit.prevent="adminLogin">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input v-model="admin.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                        <input v-model="admin.password" type="password" name="password" id="password" placeholder="Nhập mật khẩu" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    </div>
                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Đăng nhập</button>
                    <div v-if="errorMsg" class="py-3 px-4 m-auto mt-5 bg-red-500 text-white rounded">
                            <span>{{ errorMsg }}</span>
                    </div>
                </form>
          </div>
      </div>
  </div>
</section>
</template>

<script setup>
    import {useRouter} from 'vue-router';
    import store from '../../store';
    import {ref} from 'vue'
    const router = useRouter()
    const admin = {
        email: "",
        password: ""
    }
    const errorMsg = ref('')
    function adminLogin()
    {
        store.dispatch('adminLogin', admin).then(() => {
            router.push({
                name: 'AdminDashboard'
            })
        })
        .catch( err => {
            errorMsg.value = err.response.data.error
    })
    }
</script>

<style>

</style>