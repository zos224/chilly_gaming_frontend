<template>
  <div>
        <div class="bg-slate-50 p-5 rounded-xl flex justify-between items-center">
            <h4 class="font-bold text-xl">QUẢN LÝ TIN TỨC</h4>
            <span v-if="!route.params.id" class="font-semibold text-xl">
                Thêm Tin Tức Mới
            </span>
            <span v-else class="font-semibold text-xl">Chỉnh Sửa Tin Tức</span>
        </div>
        <div class="bg-slate-50 p-5 rounded-xl mt-10">
            <form @submit.prevent="saveArticle">
                <div class="sm:overflow-hidden">
                    <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-2">
                            <label for="title" class="block text-sm font-medium text-gray-700">Tiêu đề</label>
                            <input v-model="article.title" type="text" id="title" class="mt-2 rounded-md shadow-sm block w-full flex-1  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Nhập tiêu đề" required>
                        </div>
                    </div>
                    <div class="mt-5">
                        <label for="motagame" class="block text-sm font-medium text-gray-700">Nội dung</label>
                        <div class="mt-1 edtior_content">
                            <ckeditor :editor="editor" v-model="article.content" :config="editorConfig"></ckeditor>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <label class="block text-sm font-medium text-gray-700">Thumbnail</label>
                    <div v-if="article.thumb_image.length > 100" class="mt-1 flex items-center">
                        <img class="w-24 h-24 object-cover mr-5" :src="article.thumb_image" alt="">
                        <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-3 text-md font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <input @change="onImageChoose" type="file" name="" id="" class="absolute opacity-0 cursor-pointer">
                            Thay đổi
                        </button>
                    </div>
                    <div v-if="article.thumb_image.length > 1 && article.thumb_image.length < 100" class="mt-1 flex items-center">
                        <img class="w-24 h-24 object-cover mr-5" :src="'https://chillygamingbackend-production.up.railway.app/images/articles/' + article.thumb_image" alt="">
                        <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-3 text-md font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <input @change="onImageChoose" type="file" name="" id="" class="absolute opacity-0 cursor-pointer">
                            Thay đổi
                        </button>
                    </div>
                    <div v-if="article.thumb_image.length == 0" class="mt-1 flex items-center">
                        <span class="inline-block h-12 w-12 overflow-hidden rounded-sm bg-gray-100 mr-5">
                            <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </span>
                        <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-3 text-md font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <input @change="onImageChoose" type="file" name="" id="" class="absolute opacity-0 cursor-pointer" required>
                            Chọn
                        </button>
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
    // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    // import Editor from 'ckeditor5-custom-build'
    import Editor from '@b0wdyy/ckeditor5-build-classic-image-resize'
    import { ref } from '@vue/reactivity';
    import store from '../../store' 
    import {useRoute, useRouter} from 'vue-router'
    import Swal from 'sweetalert2'
    const route = useRoute()
    const router = useRouter()
    let editor = Editor
    let editorConfig = {
            ckfinder: {
                uploadUrl: 'https://chillygamingbackend-production.up.railway.app/api/upload_image'
            },
            mediaEmbed: {previewsInData: true},
            placeholder: 'Nhập nội dung bài viết',
            fontSize: {
                options: [
                    'tiny',
                    'default',
                    'big'
                ]
            },
        }
    let article = ref({
        title: '',
        content: '',
        thumb_image: '',  
    })

    function onImageChoose(ev)
    {
        const file = ev.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            article.value.thumb_image = reader.result
        }
    }

    function saveArticle()
    {
        if (!route.params.id)
        {
            store.dispatch('saveArticle', article.value).then(() => {
            router.push({name: 'AdminArticle'})
            Swal.fire(
                    'Thành công!',
                    'Đã thêm bài viết vào hệ thống',
                    'success'
                )
            }) 
        }
        else
        {
            store.dispatch('updateArticle', article.value).then(() => {
                router.push({
                    name: 'AdminArticle'
                })
                Swal.fire(
                        'Thành công!',
                        'Đã cập nhật bài viết',
                        'success'
                    )
            })
        }
    }

    if (route.params.id)
    {
        store.dispatch('getArticle', route.params.id).then(res =>{
            article.value = res.data.data   
        })
        document.title = "Quản lý - Chỉnh sửa tin tức"
    }
    else 
    {
        document.title = "Quản lý - Thêm tin tức mới"
    }
</script>

<style>
    .edtior_content .ck-editor__editable_inline{
        min-height: 500px;
    }
</style>