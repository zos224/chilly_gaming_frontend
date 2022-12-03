<template>
    <div>
        <div class="bg-slate-50 p-5 rounded-xl text-center">
            <h4 class="font-bold text-xl">QUẢN LÝ NGƯỜI DÙNG</h4>
        </div>
        <div class="mt-5 bg-slate-50 p-5 rounded-xl ">
            <h4 class="text-center font-semibold text-lg">Danh sách người dùng trong hệ thống</h4>
            <div class="flex justify-between">
                <div >
                    <span>Hiển thị</span>
                    <select @click="changeData" v-model="selectRow" class="mx-2 py-0 rounded-md" name="" id="">
                        <option v-for="option in optionsRow" :key="option.value" :value="option.value">{{ option.name }}</option>
                    </select>
                </div>
                <div>
                    <span>Sắp xếp theo</span>
                    <select @click="changeData" v-model="selectSort" class="mx-2 py-0 rounded-md" name="" id="">
                        <option v-for="option in optionsSort" :key="option.value" :value="option.value">{{ option.name }}</option>
                    </select>
                </div>
            </div>
            <div class="mt-8" style="min-height: max-content;">
                <div v-if="users">
                    <table id="tableUser" class="table-auto w-full border-collapse border-2 ">
                        <tr class="border-2">
                            <th class="border-2 ">ID Người dùng</th>
                            <th class="border-2">Tên Tài khoản</th>
                            <th class="border-2">Email</th>
                            <th class="border-2">Loại tài khoản</th>
                            <th class="border-2">Tên hiển thị</th>
                            <th class="border-2">Ảnh đại diện</th>
                            <th class="border-2">Quyền tài khoản</th>
                            <th class="border-2">Tùy chọn</th>
                        </tr>
                        <tr class="text-center border-2" v-for="user in users" :key="user.id">
                            <td class="border-2">{{ user.id }}</td>
                            <td class="border-2">{{ user.username }}</td>
                            <td class="border-2">{{ user.email }}</td>
                            <td v-if="user.social_id" class="border-2">Tài khoản liên kết</td>
                            <td v-else class="border-2">Tài khoản thường</td>
                            <td class="border-2">{{ user.name }}</td>
                            <td class="border-2 flex justify-center"><img class="w-16 h-16 object-cover" :src="'https://chillygamingbackend-production.up.railway.app/images/profile/' + user.avatar_url" alt=""></td>
                            <td v-if="user.role == 1" class="border-2">Admin</td>
                            <td v-else class="border-2">Người dùng</td>
                            <td>
                                <button @click="delUser(user.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF0000" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </table>
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
</template>

<script setup>
    import axios from 'axios';
    import {ref, onMounted} from 'vue'
    import { useRouter } from 'vue-router';
    import store from '../../store'
    import Swal from 'sweetalert2'
    const router = useRouter()
    const users = ref([])
    const pagination = ref({})
    let selectRow = ref(5);
    let selectSort = ref('id')
    let optionsRow = [
        {name: '5 Dòng', value: 5},
        {name: '10 Dòng', value: 10},
        {name: '15 Dòng', value: 15}
    ]
    let optionsSort = [
        {name: 'ID', value: 'id'},
        {name: 'Tên Tài Khoản', value: 'username'},
        {name: 'Email', value: 'email'},
        {name: 'Loại Tài Khoản', value: 'social_id'},
        {name: 'Tên Hiển Thị', value: 'name'},
        {name: 'Quyền Tài Khoản', value: 'role'}
    ]
    onMounted(() => changeData())
    function changeData()
    {
        let require = {
            row: selectRow.value,
            sort: selectSort.value
        }
        store.dispatch('getUserPageSort', require).then((res) => {
        users.value = res.data.data
        pagination.value = {
            last_page: res.data.meta.last_page,
            path_page: res.data.meta.path + "?page=",
            first_link: res.data.links.first,
            last_link: res.data.links.last,
            }
        })
    }

    function next(path)
    {
        axios.get(path).then((res) => {
            users.value = res.data.data
        })
    }

    function delUser(id)
    {
        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa chứ?',
            text: "Bạn không thể hoàn tác lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có',
            cancelButtonText: 'Không'
            }).then((result) => {
            if (result.isConfirmed) {
                store.dispatch('delUser', id).then(() => {
                    Swal.fire(
                    'Đã xóa!',
                    'Người dùng đã được xóa khỏi hệ thống',
                    'success'
                    )
                    changeRow()
                })
            }
        })
    }
    document.title = "Quản lý - Người dùng"
</script>

<style>
    #tableUser tr:nth-child(even) {
         background-color: #f0f0f0;
    }
</style>