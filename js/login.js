import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js";


const app = {
    data() {
        return {
            ...data,

        }
    },
    methods: {
        login(){

            const { username , password } =  this.loginData;

            const obj = {
                username,
                password
            };


            axios.post( this.domain.url + "/admin/signin" , obj)
            .then((res) => {

                const { token , expired } = res.data;

                // 將 token 存至 cookie
                document.cookie = `aliciaToken=${token}; expires=${new Date(expired)}`;

                window.location = "./admin.html";


            })
            .catch((error)=>{
                alert(`${error.data.message}:${error.data.error.message}`);
            })



        },

    },

}

createApp(app).mount("#app");