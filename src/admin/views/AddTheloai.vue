<template>
    <div>
        <div class="bg-slate-50 p-5 rounded-xl flex justify-between items-center">
            <h4 class="font-bold text-xl">QUẢN LÝ THỂ LOẠI</h4>
            <span v-if="!route.params.id" class="font-semibold text-xl">
                Thêm Thể Loại Mới
            </span>
            <span v-else class="font-semibold text-xl">Chỉnh Sửa Thể Loại</span>
        </div>
        <div class="bg-slate-50 p-5 rounded-xl mt-10">
            <form @submit.prevent="saveTheloai">
                <div class="sm:overflow-hidden">
                    <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-2">
                            <label for="tengame" class="block text-sm font-medium text-gray-700">Tên thể loại</label>
                            <input v-model="theloai.tentheloai" type="text" id="tengame" class="mt-2 rounded-md shadow-sm block w-full flex-1  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Nhập tên thể loại" required>
                        </div>
                    </div>
                    <div class="mt-5">
                        <label for="motagame" class="block text-sm font-medium text-gray-700">Mô tả thể loại</label>
                        <div class="mt-1">
                            <textarea v-model="theloai.mota" id="motagame" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Nhập mô tả thể loại" required></textarea>
                        </div>
                    </div>
                </div>
                <div class="py-3 px-4 m-auto mt-5 bg-red-500 text-white rounded" v-if="errorMsg">{{ errorMsg.replace('tentheloai','Tên thể loại') }}</div>
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Lưu</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import {ref} from 'vue';
    import Swal from 'sweetalert2'
    import store from '../../store';
    const route = useRoute()
    const router = useRouter()
    const errorMsg = ref('')
    const theloai = ref({
        tentheloai: "",
        mota: ""
    })

    function saveTheloai()
    {
        if (!route.params.id)
        {
            store.dispatch('addTheloai', theloai.value).then(() => {
                router.push({name: 'AdminTheloai'})
                Swal.fire(
                        'Thành công!',
                        'Đã thêm thể loại vào hệ thống',
                        'success'
                        )
            }).catch( err => {
                errorMsg.value = err.response.data.message
            })
        }
        else 
        {
            store.dispatch('updateTheloai', theloai.value).then(() => {
                router.push({name: 'AdminTheloai'})
                Swal.fire(
                        'Thành công!',
                        'Đã cập nhật thể loại',
                        'success'
                        )
            })
        }
        
    }

    if (route.params.id)
    {
        store.dispatch('getTheloai', route.params.id).then((res) => {
            theloai.value = res.data.data[0]
        })
        document.title = "Quản lý - Chỉnh sửa Thể loại"
    }
    else 
    {
        document.title = "Quản lý - Thêm Thể loại mới"
    }
</script>

<style>

</style>