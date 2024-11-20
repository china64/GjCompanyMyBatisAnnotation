const app=Vue.createApp({
    data(){
        return {
            myinput:"",
            textarea:""
        }
    }
});
app.use(ElementPlus);
app.mount("#app");