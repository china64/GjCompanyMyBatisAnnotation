const app=Vue.createApp({
    data(){
        return {
            num:7,
            num2:9,
            num3:6,
            num4:9
        }
    },
    methods:{
        handleChange(val)
        {
            console.log(val);
        }
    }
});
app.use(ElementPlus);
app.mount("#app");