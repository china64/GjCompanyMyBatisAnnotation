const app=Vue.createApp({
data(){
return {
    value1:true,
    value2:false,
    value3:true,
    value4:false,

}
},
methods:{
handleChange(val){
    alert(val);
}
}
});
app.use(ElementPlus);
app.mount("#app");
