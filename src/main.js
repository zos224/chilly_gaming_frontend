import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import CKEditor from '@ckeditor/ckeditor5-vue';
import 'sweetalert2/dist/sweetalert2.min.css'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery
createApp(App).use(store).use(router).use(VueSweetalert2).use(CKEditor).mount('#app')
