<template>
    <div>
        <div class="bg-slate-50 p-5 rounded-xl flex justify-between items-center">
            <h4 class="font-bold text-xl">QUẢN LÝ GAME</h4>
            <span v-if="!route.params.id" class="font-semibold text-xl">
                Thêm Game Mới
            </span>
            <span v-else class="font-semibold text-xl">Chỉnh Sửa Game</span>
        </div>
        <div class="bg-slate-50 p-5 rounded-xl mt-10">
            <form @submit.prevent="saveGame">
                <div class="sm:overflow-hidden">
                    <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-2">
                            <label for="tengame" class="block text-sm font-medium text-gray-700">Tên game</label>
                            <input v-model="game.tengame" type="text" id="tengame" class="mt-2 rounded-md shadow-sm block w-full flex-1  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Nhập tên game" required>
                        </div>
                    </div>
                    <div class="mt-5">
                        <label for="theloai" class="block text-sm font-medium text-gray-700">Thể loại game</label>
                        <select class="mx-2 mt-1 py-0 rounded-md" v-model="game.id_theloai" id="theloai" required>
                            <option v-for="theloai in theloaigames" :key="theloai.id" :value="theloai.id">{{ theloai.tentheloai }}</option>
                        </select>
                    </div>
                    <div class="mt-5">
                        <label for="linkgame" class="block text-sm font-medium text-gray-700">Link game</label>
                        <div class="mt-1">
                            <textarea v-model="game.link_game" id="linkgame" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Nhập link game" required></textarea>
                        </div>
                    </div>
                    <div class="mt-5">
                        <label for="motagame" class="block text-sm font-medium text-gray-700">Mô tả game</label>
                        <div class="mt-1 editor_mota">
                            <ckeditor id="editor" :editor="editor" v-model="game.mota" :config="editorConfig"></ckeditor>
                        </div>
                    </div>
                    <div class="mt-5">
                        <label class="block text-sm font-medium text-gray-700">Thumbnail game</label>
                        <div v-if="game.thumb_image.length > 100" class="mt-1 flex items-center">
                            <img class="w-24 h-24 object-cover mr-5" :src="game.thumb_image" alt="">
                            <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-3 text-md font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <input @change="onImageChoose_Thumb" type="file" name="" id="" class="absolute opacity-0 cursor-pointer">
                                Thay đổi
                            </button>
                        </div>
                        <div v-if="game.thumb_image.length > 1 && game.thumb_image.length < 100" class="mt-1 flex items-center">
                            <img class="w-24 h-24 object-cover mr-5" :src="'https://chillygamingbackend-production.up.railway.app/images/games/' + game.thumb_image" alt="">
                            <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-3 text-md font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <input @change="onImageChoose_Thumb" type="file" name="" id="" class="absolute opacity-0 cursor-pointer">
                                Thay đổi
                            </button>
                        </div>
                        <div v-if="game.thumb_image.length == 0" class="mt-1 flex items-center">
                            <span class="inline-block h-12 w-12 overflow-hidden rounded-sm bg-gray-100 mr-5">
                                <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </span>
                            <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-3 text-md font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <input @change="onImageChoose_Thumb" type="file" name="" id="" class="absolute opacity-0 cursor-pointer" required>
                                Chọn
                            </button>
                        </div>
                    </div>
                    <div class="mt-5">
                        <label class="block text-sm font-medium text-gray-700">Hình ảnh game - 1</label>
                        <div v-if="game.image1.length > 100" class="mt-1 relative flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <img class="w-full h-52 " :src="game.image1" alt="">
                            <span @click="removeImage('image1')" class="absolute right-3 top-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                        <div v-if="game.image1.length > 1 && game.image1.length < 100" class="mt-1 relative flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <img class="w-full h-52 " :src="'https://chillygamingbackend-production.up.railway.app/images/games/' + game.image1" alt="">
                            <span @click="removeImage('image1')" class="absolute right-3 top-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                        <div v-if="game.image1.length == 0" class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex justify-center text-sm text-gray-600">
                                <label for="image1" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Chọn file</span>
                                    <input @change="onImageChoose_1" id="image1" type="file" class="sr-only" required>
                                </label>
                            </div>
                                <p class="text-xs text-gray-500">Hỗ trợ PNG, JPEG, JPG</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5">
                        <label class="block text-sm font-medium text-gray-700">Hình ảnh game - 2</label>
                        <div v-if="game.image2.length > 100" class="mt-1 relative flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <img class="w-full h-52 " :src="game.image2" alt="">
                            <span @click="removeImage('image2')" class="absolute right-3 top-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                        <div v-if="game.image2.length > 1 && game.image2.length < 100" class="mt-1 relative flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <img class="w-full h-52 " :src="'https://chillygamingbackend-production.up.railway.app/images/games/' + game.image2" alt="">
                            <span @click="removeImage('image2')" class="absolute right-3 top-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                        <div v-if="game.image2.length == 0" class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex justify-center text-sm text-gray-600">
                                <label for="image2" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Chọn file</span>
                                    <input @change="onImageChoose_2" id="image2" type="file" class="sr-only" required>
                                </label>
                            </div>
                                <p class="text-xs text-gray-500">Hỗ trợ PNG, JPEG, JPG</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5">
                        <label class="block text-sm font-medium text-gray-700">Hình ảnh game - 3</label>
                        <div v-if="game.image3.length > 100" class="mt-1 relative flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <img class="w-full h-52 " :src="game.image3" alt="">
                            <span @click="removeImage('image3')" class="absolute right-3 top-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                        <div v-if="game.image3.length > 1 && game.image3.length < 100" class="mt-1 relative flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <img class="w-full h-52 " :src="'https://chillygamingbackend-production.up.railway.app/images/games/' + game.image3" alt="">
                            <span @click="removeImage('image3')" class="absolute right-3 top-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                        <div v-if="game.image3.length == 0" class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex justify-center text-sm text-gray-600">
                                <label for="image3" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Chọn file</span>
                                    <input @change="onImageChoose_3" id="image3" type="file" class="sr-only" required>
                                </label>
                            </div>
                                <p class="text-xs text-gray-500">Hỗ trợ PNG, JPEG, JPG</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5">
                        <label class="block text-sm font-medium text-gray-700">Hình ảnh game - 4</label>
                        <div v-if="game.image4.length > 100" class="mt-1 relative flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <img class="w-full h-52 " :src="game.image4" alt="">
                            <span @click="removeImage('image4')" class="absolute right-3 top-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                        <div v-if="game.image4.length > 1 && game.image4.length < 100" class="mt-1 relative flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <img class="w-full h-52 " :src="'https://chillygamingbackend-production.up.railway.app/images/games/' + game.image4" alt="">
                            <span @click="removeImage('image4')" class="absolute right-3 top-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                        <div v-if="game.image4.length == 0" class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex justify-center text-sm text-gray-600">
                                <label for="image4" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Chọn file</span>
                                    <input @change="onImageChoose_4" id="image4" type="file" class="sr-only" required>
                                </label>
                            </div>
                                <p class="text-xs text-gray-500">Hỗ trợ PNG, JPEG, JPG</p>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-6 mt-5">
                        <div class="col-span-3 sm:col-span-2">
                            <label for="tengame" class="block text-sm font-medium text-gray-700">Giới hạn độ tuổi</label>
                            <input v-model="game.gh_dotuoi" type="text" id="tengame" class="mt-2 rounded-md shadow-sm block w-full flex-1  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Nhập giới hạn độ tuổi" required>
                        </div>
                    </div>
                    <div class="mt-5">
                        <label for="trangthai" class="block text-sm font-medium text-gray-700">Trạng thái</label>
                        <select class="mx-2 mt-1 py-0 rounded-md" v-model="game.trangthai" id="trangthai" required>
                            <option value="0">Ẩn</option>
                            <option value="1">Hiện</option>
                        </select>
                    </div>
                </div>
                <div class="py-3 px-4 m-auto mt-5 bg-red-500 text-white rounded" v-if="errorMsg">{{ errorMsg.replace('tengame','Tên Game') }}</div>
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Lưu</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { computed, ref } from '@vue/runtime-core';
    import {useRouter, useRoute} from 'vue-router';
    import Editor from '@b0wdyy/ckeditor5-build-classic-image-resize'
    import store from '../../store';
    import Swal from 'sweetalert2'
    let editor = Editor
    let editorConfig = {
        placeholder: 'Nhập mô tả game',
    }
    const theloaigames = computed(() => store.state.theloais)
    const router = useRouter()
    const route = useRoute()
    const errorMsg = ref('')
    store.dispatch('getTheLoais')
    const game = ref({
        tengame: "",
        id_theloai: "",
        link_game: "",
        thumb_image: "",
        mota: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        gh_dotuoi: "",
        trangthai: ""
    })

    function onImageChoose_Thumb(ev)
    {   
        const file = ev.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            game.value.thumb_image = reader.result
        }
    }

    function onImageChoose_1(ev)
    {
        const file = ev.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            game.value.image1 = reader.result;
        }
    }

    function onImageChoose_2(ev)
    {
        const file = ev.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            game.value.image2 = reader.result;
        }
    }

    function onImageChoose_3(ev)
    {
        const file = ev.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            game.value.image3 = reader.result;
        }
    }

    function onImageChoose_4(ev)
    {
        const file = ev.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            game.value.image4 = reader.result;
        }
    }

    function saveGame()
    {
        if (!route.params.id)
        {
            store.dispatch('addGame', game.value).then(() => {
                router.push({
                    name: 'AdminGames'
                })
                Swal.fire(
                    'Thành công!',
                    'Đã thêm game vào hệ thống',
                    'success'
                )
            }).catch( err => {
                errorMsg.value = err.response.data.message
            })
        }
        else 
        {
            store.dispatch('updateGame', game.value).then(() => {
                router.push({
                    name: 'AdminGames'
                })
                Swal.fire(
                        'Thành công!',
                        'Đã cập nhật game',
                        'success'
                    )
            })
        }
        
    }

    function removeImage(image)
    {
        switch (image)
        {
            case 'image1': game.value.image1 = ''
                           break
            case 'image2': game.value.image2 = ''
                           break
            case 'image3': game.value.image3 = ''
                           break
            case 'image4': game.value.image4 = ''
                           break
        }
    }

    if (route.params.id)
    {
        store.dispatch('getGame', route.params.id).then((res) => {
            game.value = res.data.data 
        })
        document.title = "Quản lý - Chỉnh sửa Game"
    }
    else
    {
        document.title = "Quản lý - Thêm Game mới"
    }


</script>

<style>
    .editor_mota .ck-editor__editable_inline{
        min-height: 200px;
    }
</style>