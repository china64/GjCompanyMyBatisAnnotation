const cityoptions=['Shanghai','London','New York','Paris'];
const app=Vue.createApp({
    data(){
        return {
            checkList:['選中且禁用','複選框A'],
            checkedCities:['Shanghai','London'],
            cities:cityoptions
        }
    },
    methods:{
        mysel(val){
           // alert(val);
           console.log(val);
        }

    }
});
app.use(ElementPlus);
app.mount("#app");