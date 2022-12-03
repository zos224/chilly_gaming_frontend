import {createStore} from "vuex"
import axiosClient from "../axios";

const store = createStore(
    {
        state: {
            user: {
                data: Object,
                token: sessionStorage.getItem('TOKEN'),
            },
            theloais: [],
            games: [],
            currentGame: [],
            gamesHot: [],
            comments: [],
            admin: {
                data: Object,
                token: sessionStorage.getItem('adminToken')
            },
            noProcessReport: '',
        },
        getters: {},
        actions: {
            register({commit}, user) {
                return axiosClient.post('/registry', user)
                .then(({data}) => {
                    commit('setUser', data);
                    return data;
                }) 
            },

            login({commit}, user) {
                return axiosClient.post('/login', user)
                .then(({data}) => {
                    commit('setUser', data);
                    return data;
                })  
            },
            
            loginFb({commit})
            {
                return axiosClient.get('/oauth/facebook')
            },

            logout({commit})
            {
                return axiosClient.post('/logout')
                .then(response => 
                    {
                        commit('logout')
                        return response
                    })
            },

            getUser({commit})
            {
                return axiosClient.get('/user').then((res) =>
                {
                    store.state.user.data = res.data.data
                    return res
                })
            },

            getTheLoais({commit})
            {
                return axiosClient.get('/theloai')
                .then((res) =>
                    {
                        commit('setTheLoais', res.data);
                        return res;
                    })
            },

            getTheloaiPageSort({commit}, data)
            {
                return axiosClient.get(`/gettheloaipagesort/${data.sort}/${data.row}`).then((res) => {
                    return res
                })
            },

            getTheloai({commit}, id)
            {
                return axiosClient.get(`/theloai/${id}`).then(res => {
                    return res
                })
            },

            getTheloaiBySlug({commit}, slug)
            {
                return axiosClient.get(`/theloai_by_slug/${slug}`).then(res => {
                    return res
                })
            },

            addTheloai({commit}, theloai)
            {
                return axiosClient.post('/theloai', theloai)
            },

            updateTheloai({commit}, theloai)
            {   
                return axiosClient.patch(`/theloai/${theloai.id}`, theloai)
            },

            delTheloai({commit}, id)
            {
                return axiosClient.delete(`/theloai/${id}`)
            },

            getGame({commit}, id)
            {
                return axiosClient.get(`game/${id}`).then(res => {
                    return res
                })
            },

            getGameBySlug({commit}, slug)
            {
                return axiosClient.get(`/get_game_by_slug/${slug}`)
                .then((res) => 
                {
                    commit('setCurrentGame', res.data);
                    return res;
                })
            },

            getGames({commit})
            {
                return axiosClient.get('game').then((res) =>
                {
                    commit('setGames', res.data)
                    return res
                })
            },

            getGamesPageSort({commit}, data)
            {
                return axiosClient.get(`/games_page_sort/${data.sort}/${data.row}`).then((res) => {
                    return res
                })
            },

            getGamesSortTheloai({commit}, data)
            {
                return axiosClient.get(`/games_sort_theloai/${data.id_theloai}/${data.sort}`).then(res => {
                    commit('setGames', res.data)
                    return res
                })
            },

            getGamesSearchSort({commit}, data)
            {
                return axiosClient.get(`/games_search_sort/${data.keyword}/${data.sort}`).then(res => {
                    commit('setGames', res.data)
                    return res
                })
            },
            getGames_TheLoai({commit}, id_theloai)
            {
                return axiosClient.get(`/games_theloai/${id_theloai}`)
                .then((res) => 
                {
                    commit('setGames', res.data)
                    return res
                })
            },
            
            getGamesHot({commit})
            {
                return axiosClient.get('games_hot').then((res) => 
                {
                    commit('setGamesHot', res.data)
                    return res
                })
            },

            getGamesNew()
            {
                return axiosClient.get('games_new').then((res) => {
                    return res
                })
            },

            getGamesRate()
            {
                return axiosClient.get('games_rate').then(res => {
                    return res
                })
            },

            getGames_luotchoi({commit}, id)
            {
                return axiosClient.get(`games_luotchoi/${id}`).then((res) => 
                {
                    commit('setGames', res.data);
                    return res
                })
            },

            getGames_ten({commit}, id)
            {
                return axiosClient.get(`games_ten/${id}`).then((res) => 
                {
                    commit('setGames', res.data);
                    return res
                })
            },

            getGames_danhgia({commit}, id)
            {
                return axiosClient.get(`games_danhgia/${id}`).then((res) => 
                {
                    commit('setGames', res.data);
                    return res
                })
            },

            updateGame({commit},game)
            {
                return axiosClient.put(`/game/${game.id}`, game)
            },

            search({commit}, keyword)
            {
                return axiosClient.get(`/game_search/${keyword}`).then((res) => 
                {
                    commit('setGames', res.data)
                    return res
                })
            },

            getComments({commit}, require) 
            {
                return axiosClient.get(`/get_comments/${require.id}/${require.num}`).then((res) => 
                {
                    commit('setComments', res.data);
                    return res.data.remain
                })
            }, 

            postComment({commit}, comment)
            {
                return axiosClient.post('/comment', comment).then((res) => {
                    return res
                })
            },

            delComment({commit}, comment_id)
            {
                return axiosClient.delete(`/comment/${comment_id}`)
            },

            updateUser({commit}, user)
            {
                return axiosClient.put(`/user/${user.id}`, user).then((res) => {
                    commit('updateUser', res.data)
                })
            },

            changePassword({commit}, data)
            {
                return axiosClient.post('/changepassword', data)
            },

            likeGame({commit}, game_id)
            {
                return axiosClient.post(`/likegame/${game_id}`)
            },

            unlikeGame({commit}, game_id)
            {
                return axiosClient.post(`/unlikegame/${game_id}`)
            },

            adminLogin({commit}, admin)
            {
                return axiosClient.post('/admin_login', admin).then((res) => {
                    commit('setAdmin', res.data)
                })
            },

            addGame({commit}, game)
            {
                return axiosClient.post('/game', game).then((res) => {
                    return res
                })
            },
             
            delGame({commit}, game_id)
            {
                return axiosClient.delete(`/game/${game_id}`)
            },

            getUserPageSort({commit}, data)
            {
                return axiosClient.get(`user_page_sort/${data.sort}/${data.row}`).then((res) => {
                    return res
                })
            },

            delUser({commit}, user_id)
            {
                return axiosClient.delete(`/user/${user_id}`)
            },

            sendReport({commit}, report)
            {
                return axiosClient.post('report', report)
            },

            getReportPageSort({commit}, data)
            {
                return axiosClient.get(`/report_page_sort/${data.sort}/${data.row}`)
            },

            delReport({commit}, report_id)
            {
                return axiosClient.delete(`report/${report_id}`)
            },

            getReport({commit}, report_id)
            {
                return axiosClient.get(`/report/${report_id}`).then((res) => {
                    return res
                })
            },

            updateReport({commit}, report)
            {
                return axiosClient.put(`report/${report.id}`, report)
            },

            getNoProcessReport({commit})
            {
                return axiosClient.get(`reportnoprocess`).then(res => {
                    store.state.noProcessReport = res.data.count[0].num_report
                    return res
                })
            },

            getNumUser({commit})
            {
                return axiosClient.get('num_user').then((res) => {
                    return res
                })
            },

            getNumGame({commit})
            {
                return axiosClient.get('num_game').then((res) => {
                    return res
                })
            },

            getNumTheloai({commit})
            {
                return axiosClient.get('num_theloai').then(res => {
                    return res
                })
            },

            getNumReport()
            {
                return axiosClient.get('num_report').then(res => {
                    return res
                })
            },

            getPopularTheloai()
            {
                return axiosClient.get('/popular_theloai').then((res) => {
                    return res
                })
            },

            calSumSlc()
            {
                return axiosClient.get('/get_sum_slc')
            },

            getStatistic()
            {
                return axiosClient.get('/get_statistic').then(res => {
                    return res
                })
            },

            postReply({commit}, reply)
            {
                return axiosClient.post('/reply', reply)
            },

            delReply({commit}, reply_id)
            {
                return axiosClient.delete(`/reply/${reply_id}`)
            },

            saveArticle({commit}, article)
            {
                return axiosClient.post('/article', article)
            },

            getArticlePageSort({commit}, data)
            {
                return axiosClient.get(`get_article_page_sort/${data.sort}/${data.row}`).then (res => {
                    return res
                })
            },

            getPopularArticle({commit})
            {
                return axiosClient.get('get_polular_article').then (res => {
                    return res
                })
            },

            getArticle({commit}, id)
            {
                return axiosClient.get(`article/${id}`).then((res) => {
                    return res
                })
            },

            getArticleBySlug({commit}, slug)
            {
                return axiosClient.get(`article_by_slug/${slug}`).then(res => {
                    return res
                })
            },

            getArticleRelate()
            {
                return axiosClient.get('article_relate').then(res => {
                    return res
                })
            },

            updateArticle({commit}, article)
            {
                return axiosClient.put(`article/${article.id}`, article)
            },

            getNumArticle()
            {
                return axiosClient.get('article').then((res) => {
                    return res
                })
            },

            getArticleView()
            {
                return axiosClient.get('get_article_view').then(res => {
                    return res
                })
            },

            getArticleNew()
            {
                return axiosClient.get('get_article_new').then(res => {
                    return res
                })
            },

            delArticle({commit}, id)
            {
                return axiosClient.delete(`article/${id}`)
            }
        },
        mutations: {
            setUser: (state, userData) => {
                state.user.token = userData.token;
                state.user.data = userData.user;
                sessionStorage.setItem('TOKEN',userData.token);
                sessionStorage.setItem('user_id', userData.user.id)
                sessionStorage.setItem('avatar_url', userData.user.avatar_url)
            },

            updateUser: (state, userData) => {
                state.user.data = userData.data;
                sessionStorage.setItem('avatar_url', userData.data.avatar_url)
            },

            logout: (state) => {
                state.user.token = null;
                state.user.data = {};
                state.user.type = '';
                sessionStorage.removeItem('TOKEN');
                sessionStorage.removeItem('user_id');
                sessionStorage.removeItem('avatar_url');
            },

            setTheLoais: (state, theloai) => {
                state.theloais = theloai.data;
            },


            setGames: (state, games) => {
                state.games = games.data;
            },

            setCurrentGame: (state, game) => {
                state.currentGame = game.data;
            },

            setGamesHot: (state, game) => {
                state.gamesHot = game.data
            },

            setComments: (state, comments) => {
                state.comments = comments.data
            },

            setAdmin: (state, admin) =>{
                state.admin.data = admin.admin
                state.admin.token = admin.token
                sessionStorage.setItem('adminToken',admin.token);
            }
        },
        modules: {}
    }
)

export default store;