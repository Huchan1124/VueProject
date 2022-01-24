import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js";


const app = {
    data() {
        return {
            ...data,

        }
    },
    methods: {
        getProducts(){
            axios.get( this.domain.url + `/api/${this.domain.path}/admin/products/all`)
            .then((res) => {
                this.products = Object.values(res.data.products);
            })
            .catch((error)=>{

            })

        },
        addProduct(){

        },
        checkLogin(){

            const token = document.cookie.replace(/(?:(?:^|.*;\s*)aliciaToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");       
            axios.defaults.headers.common['Authorization'] = token; 


            axios.post( this.domain.url + "/api/user/check")
            .then((res) => {
         
            })
            .catch((error)=>{      
                window.location = "./login.html";
            })

        },
      
    },
    mounted(){

        this.checkLogin()
        this.getProducts()
    

    },
}

createApp(app).mount("#app");