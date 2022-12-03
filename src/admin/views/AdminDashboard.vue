<template>
    <div>
        <div class="bg-slate-50 p-5 rounded-xl flex justify-center items-center">
            <h4 class="font-bold text-xl">TRANG QUẢN LÝ WEBSITE CHILLYGAMING</h4>
        </div>
        <div class="md:grid-cols-5 grid-cols-3 gap-5 grid mt-10">
            <div class="bg-slate-50 p-5 text-center rounded-xl">
                <span class="text-xl font-semibold">Số Game</span>
                <div class="text-xl font-bold">{{ count.numGame }}</div>
            </div>
            <div class="bg-slate-50 p-5 text-center rounded-xl ">
                <span class="text-xl font-semibold">Số Thể Loại</span>
                <div class="text-xl font-bold">{{ count.numTheloai }}</div>
            </div>
            <div class="bg-slate-50 p-5 text-center rounded-xl">
                <span class="text-xl font-semibold">Số Người Dùng</span>
                <div class="text-xl font-bold">{{ count.numUser }}</div>
            </div>
            <div class="bg-slate-50 p-5 text-center rounded-xl ">
                <span class="text-xl font-semibold">Số Báo Cáo</span>
                <div class="text-xl font-bold">{{ count.numReport }}</div>
            </div>
            <div class="bg-slate-50 p-5 text-center rounded-xl">
                <span class="text-xl font-semibold">Số Bài Viết</span>
                <div class="text-xl font-bold">{{ count.numArticle }}</div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-40 md:flex-row justify-between">
            <div v-if="chartBarData.datasets[0].data" class="bg-slate-50 p-5 rounded-xl mt-10 text-center">
                <Bar  :chart-data="chartBarData"/>
                <span class="text-sm italic">Biểu đồ thống kê các thể loại game được chơi nhiều nhất</span>
            </div>
            <div v-if="chartLineData.datasets[0].data" class="bg-slate-50 p-5 rounded-xl mt-10 text-center">
                <Line :chart-data="chartLineData"/>
                <span class="text-sm italic">Biểu đồ thống kê số lượt chơi game tại trang web trong các tháng gần đây</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import store from "../../store"
import { Bar, Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, BarElement, CategoryScale, LinearScale)
    
    const count = ref({
        numUser: '',
        numGame:'',
        numTheloai: '',
        numReport: '',
        numArticle: ''
    })
    store.dispatch('getNumUser').then((res) => {
        count.value.numUser = res.data.num_user[0].num_user
    })
    store.dispatch('getNumGame').then((res) => {
        count.value.numGame = res.data.num_game[0].num_game
    })
    store.dispatch('getNumTheloai').then(res => {
        count.value.numTheloai = res.data.num_theloai[0].num_theloai
    })
    store.dispatch('getNumReport').then(res => {
        count.value.numReport = res.data.num_report[0].num_report
    })
    store.dispatch('getNumArticle').then(res => {
        count.value.numArticle = res.data.count[0].count
    })
    let chartBarData = ref({
        labels: [],
        datasets: [
            {
                label: 'Số lượt chơi',
                backgroundColor: '#009900',
                data: []
            }
        ]
    })
    let chartLineData = ref({
        labels: [],
        datasets: [
            {
                label: 'Số lượt chơi',
                backgroundColor: '#009900',
                data: []
            }
        ]
    })
    store.dispatch('getPopularTheloai').then((res) => {
        res.data.data.forEach(theloai => {
            chartBarData.value.labels = chartBarData.value.labels.concat(theloai.tentheloai);
            chartBarData.value.datasets[0].data = chartBarData.value.datasets[0].data.concat(theloai.slc);
        });
    })
    store.dispatch('calSumSlc').then(() => {
        store.dispatch('getStatistic').then((res) => {
            res.data.data.forEach(date => {
                chartLineData.value.labels = chartLineData.value.labels.concat(date.date);
                chartLineData.value.datasets[0].data = chartLineData.value.datasets[0].data.concat(date.tongsoluotchoi);
            })
            chartLineData.value.labels = chartLineData.value.labels.reverse();
            chartLineData.value.datasets[0].data = chartLineData.value.datasets[0].data.reverse();
        })
    })
    document.title = "Quản lý - Trang Chủ"
</script>

<style>

</style>