const app=Vue.createApp({
    data(){
        return {
            value:[30,60],
            marks:{
                0:'0度c',
                8:'8度c',
                37:'37度c',
                50:{
                    style:{
                        color:'#1989FA',
                    },
                    label:'50%'
                }
            }
        }
    }
});
app.use(ElementPlus);
app.mount("#app");