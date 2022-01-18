import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js";

const app = {
    data() {
        return {
            ...data,

        }
    },
    methods: {
        login(){

            const { email , password } =  this.login;

            const obj = {
                email,
                password
            };

            axios.post("url",obj)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error)=>{
                console.log(error);
            })



        },

    },
    mounted(){
    

    },
}

createApp(app).mount("#app");