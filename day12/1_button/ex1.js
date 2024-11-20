const app=Vue.createApp({
    data(){
        return {
            message:"hello Element plus",
        }
    },
    methods:{
        onLogin(){
            alert("login ok");
        }
    }
});
app.use(ElementPlus);
app.mount("#app");