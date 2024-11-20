const app=Vue.createApp({
    data(){
        return {
            radio1:'mm',
            radio2:'Won',
            radio3:'dis2',
            bDis:true,
            radio4:'r4',
            radio:2
        }
    },
    methods:{
        mych(val){
            alert(val);
        },
        onbtn()
        {
            if(this.radio4=="r4")
                this.radio4="r5";
            else
                this.radio4="r4"
        },
        mysel(val){
           // alert(val);
           console.log(val);
        }
    }
});
app.use(ElementPlus);
app.mount("#app");