import { defineStore } from 'pinia'

export const useUserStore = defineStore("userStore", {
    state: () => ({
        email: "",
        id: null,
        token: "",
        articles: [],
    }),
    getters: {
    },
    actions: {
        saveUser(email, id){
            this.email = email
            this.id = id
        },
        saveToken(token){
            this.token = token
        },
        saveArticles(data){
            this.articles = data
        },
        empty(){
            this.email = ""
            this.id = null
            this.token = ""
            this.articles = []
        }
    }
})