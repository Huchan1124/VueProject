import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js";

const app = {
    data() {
        return {
            ...data,

        }
    },
    methods: {
        login(){

            const url = `https://vue3-course-api.hexschool.io/v2/admin/signin`;

            const { username , password } =  this.loginData;

            const obj = {
                username,
                password
            };


            axios.post(url,obj)
            .then((res) => {
                console.log(res.data);

                const { token , expired } = res.data;
                // 將 token 存至 cookie
                document.cookie = `aliciaToken=${token}; expires=${new Date(expired)}`;


            })
            .catch((error)=>{
                console.dir(error);
            })



        },

    },
    mounted(){
    

    },
}

createApp(app).mount("#app");