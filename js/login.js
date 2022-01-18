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
                console.log(res.data);

                const { token , expired } = res.data;

                // 將 token 存至 cookie
                document.cookie = `aliciaToken=${token}; expires=${new Date(expired)}`;


            })
            .catch((error)=>{
                console.dir(error);
            })



        },
        checkLogin(){

            // 從cookie 取出 token ，存至header
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)aliciaToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");       
            axios.defaults.headers.common['Authorization'] = token; 
            

            axios.post( this.domain.url + "/api/user/check")
            .then((res) => {
                console.log(res.data);
         
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