<template>
    <div>
        <div class="bg-slate-50 p-5 rounded-xl flex justify-between items-center">
            <h4 class="font-bold text-xl">QUẢN LÝ BÁO CÁO</h4>
            <span class="font-semibold text-xl">Chỉnh Sửa Báo Cáo</span>
        </div>
        <div class="bg-slate-50 p-5 rounded-xl mt-10">
            <form @submit.prevent="saveReport">
                <div class="sm:overflow-hidden">
                    <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-2">
                            <label for="tengame" class="block text-sm font-medium text-gray-700">Tên Game</label>
                            <input v-model="report.tengame" type="text" disabled id="tengame" class="mt-2 rounded-md shadow-sm block w-full flex-1  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required>
                        </div>
                    </div>
                    <div class="mt-5">
                        <label for="hoten" class="block text-sm font-medium text-gray-700">Người Báo Cáo</label>
                        <input v-model="report.name" type="text" id="hoten" disabled class="mt-2 rounded-md shadow-sm block w-full flex-1  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required>
                    </div>
                    <div class="mt-5">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input v-model="report.email" type="text" id="email" disabled class="mt-2 rounded-md shadow-sm block w-full flex-1  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required>
                    </div>
                    <div class="mt-5">
                        <label for="loi" class="block text-sm font-medium text-gray-700">Lỗi</label>
                        <input v-model="report.loi" type="text" id="loi" disabled class="mt-2 rounded-md shadow-sm block w-full flex-1  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required>
                    </div>
                    <div class="mt-5">
                        <label for="motaloi" class="block text-sm font-medium text-gray-700">Mô tả lỗi</label>
                        <div class="mt-1">
                            <textarea v-model="report.motaloi" id="motaloi" disabled rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Nhập mô tả thể loại" required></textarea>
                        </div>
                    </div>
                    <div class="mt-5">
                        <label for="trangthai" class="block text-sm font-medium text-gray-700">Trạng thái</label>
                        <select class="mx-2 mt-1 py-0 rounded-md" v-model="report.trangthai" id="trangthai" required>
                            <option :value="report.trangthai">{{ report.trangthai }}</option>
                            <option value="Đã xác nhận">Đã xác nhận</option>
                            <option value="Đã sửa lỗi">Đã sửa lỗi</option>
                        </select>
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
    const report = ref({
        id: "",
        tengame: "",
        name: "",
        email: "",
        loi: "",
        motaloi: "",
        trangthai: ""
    })

    function saveReport()
    {
        store.dispatch('updateReport', report.value).then(() => {
            router.push({name: 'AdminReport'})
            Swal.fire(
                    'Thành công!',
                    'Đã cập nhật báo cáo',
                    'success'
                    )
            store.dispatch('getNoProcessReport')
        })
        
    }

    if (route.params.id)
    {
        store.dispatch('getReport', route.params.id).then((res) => {
            report.value = res.data.data
        })
    }
    document.title = "Quản lý - Cập nhật báo cáo"
</script>

<style>

</style>