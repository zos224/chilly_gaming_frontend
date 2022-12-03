<template>
    <div>
        <div class="bg-slate-50 p-5 rounded-xl flex justify-between items-center">
            <h4 class="font-bold text-xl">QUẢN LÝ THỂ LOẠI</h4>
            <span>
                <button @click="router.push({name: 'AddTheloai'})" class="flex bg-green-500 text-white font-semibold px-3 py-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="mx-2" >
                        Thêm Thể Loại Mới
                    </span>
                </button>
            </span>
        </div>
        <div class="mt-5 bg-slate-50 p-5 rounded-xl ">
            <h4 class="text-center font-semibold text-lg">Danh sách thể loại trong hệ thống</h4>
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
                <div v-if="theloais">
                    <table id="tableTheloai" class="table-auto w-full border-collapse border-2 ">
                        <tr class="border-2">
                            <th class="border-2 ">ID Thể Loại</th>
                            <th class="border-2">Tên Thể Loại</th>
                            <th class="border-2">Mô Tả</th>
                            <th colspan="2" class="border-2">Tùy chọn</th>
                        </tr>
                        <tr class="text-center border-2" v-for="theloai in theloais" :key="theloai.id">
                            <td class="border-2">{{ theloai.id }}</td>
                            <td class="border-2">{{ theloai.tentheloai }}</td>
                            <td class="border-2">{{ theloai.mota }}</td>
                            <td>
                                <button @click="router.push({name: 'UpdateTheloai', params: {id: theloai.id}})">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CC9900" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                </button>
                            </td>
                            <td>
                                <button @click="delTheloai(theloai.id)">
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
    const theloais = ref([])
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
        {name: 'Tên Thể Loại', value: 'tentheloai'}
    ]
    onMounted(() => changeData())
    function changeData()
    {
        let require = {
            row: selectRow.value,
            sort: selectSort.value
        }
        store.dispatch('getTheloaiPageSort', require).then((res) => {
        theloais.value = res.data.data
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
            theloais.value = res.data.data
        })
    }

    function delTheloai(id)
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
                store.dispatch('delTheloai', id).then(() => {
                    Swal.fire(
                    'Đã xóa!',
                    'Thể loại đã được xóa khỏi hệ thống',
                    'success'
                    )
                    changeRow()
                })
            }
        })
    }
    document.title = "Quản lý - Thể loại game"
</script>

<style>
    #tableTheloai tr:nth-child(even) {
         background-color: #f0f0f0;
    }
    input[type='radio']:checked + label {
        background-color: #0066FF;
        border-color: #0066FF;
        color: white
    }
</style>