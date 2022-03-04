import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js";


let addProductModal = '';
let updateProductModal = '';

const app = createApp({
  data() {
    return {
      ...data,

    }
  },
  methods: {
    getProducts() {
      axios.get(this.domain.url + `/api/${this.domain.path}/admin/products/all`)
        .then((res) => {
          this.products = Object.values(res.data.products);
        })
        .catch((error) => {

        })

    },
    addProduct(title, category, origin_price, price, unit, description, content, is_enabled, imageUrl, imagesUrl) {


      const obj = {
        "data": {
          "title": title,
          "category": category,
          "origin_price": origin_price,
          "price": price,
          "unit": unit,
          "description": description,
          "content": content,
          "is_enabled": is_enabled,
          "imageUrl": imageUrl,
          "imagesUrl": imagesUrl,
        }
      };

      axios.post(this.domain.url + `/api/${this.domain.path}/admin/product`, obj)
        .then((res) => {
          this.getProducts();
          this.closeModal("addProductModal");

          this.addProductData = {
            category: "",
            content: "",
            description: "",
            id: "",
            is_enabled: 1,
            num: 1,
            origin_price: 0,
            price: 0,
            title: "",
            unit: "",
            imageUrl: "",
            imagesUrl: []
          };


        })
        .catch((error) => {
        })
    },
    removeProduct(id) {


      confirm('確定要刪除嗎？');

      
      if (true) {
         axios.delete(this.domain.url + `/api/${this.domain.path}/admin/product/${id}`)
          .then((res) => {
              this.getProducts();

          })
          .catch((error) => {
          })
      } 

    

    },
    updateProduct(id) {

      const obj = {
        "data": {
          "title": this.tempProduct.title,
          "category": this.tempProduct.category,
          "origin_price": this.tempProduct.origin_price,
          "price": this.tempProduct.price,
          "unit": this.tempProduct.unit,
          "description": this.tempProduct.description,
          "content": this.tempProduct.content,
          "is_enabled": this.tempProduct.is_enabled,
          "imageUrl": this.tempProduct.imageUrl,
          "imagesUrl": this.tempProduct.imagesUrl,
        }
      };

      axios.put(this.domain.url + `/api/${this.domain.path}/admin/product/${id}`, obj)
        .then((res) => {
          this.getProducts();
          this.closeModal("updateProductModal");
        })
        .catch((error) => {
        })

    },
    checkLogin() {

      const token = document.cookie.replace(/(?:(?:^|.*;\s*)aliciaToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      axios.defaults.headers.common['Authorization'] = token;


      axios.post(this.domain.url + "/api/user/check")
        .then((res) => {

        })
        .catch((error) => {
          window.location = "./login.html";
        })

    },
    openModal(modelName) {
      if (modelName === "addProductModal") {
        addProductModal.show();
      };

      if (modelName === "updateProductModal") {
        updateProductModal.show();
      }

    },
    closeModal(modelName) {
      if (modelName === "addProductModal") {
        addProductModal.hide();
      };

      if (modelName === "updateProductModal") {
        updateProductModal.hide();
      };


    }
  },
  mounted() {

    this.checkLogin()
    this.getProducts()

    addProductModal = new bootstrap.Modal(document.querySelector("#addProductModal"));
    updateProductModal = new bootstrap.Modal(document.querySelector("#updateProductModal"));

  },
})



app.component('addproductmodal', {
  data() {
    return {



      addProductModal: "addProductModal",


    }
  },
  props: ['msg'],
  methods: {
    push() {
      this.$emit('pushData', this.msg.title, this.msg.category, this.msg.origin_price, this.msg.price, this.msg.unit, this.msg.description, this.msg.content, this.msg.is_enabled, this.msg.imageUrl, this.msg.imagesUrl)
    },
    close() {
      this.$emit('closeModal', this.addProductModal)

    },

  },
  template: `      <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel"
        aria-hidden="true">
        <div class="modal-dialog  modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addProductModalLabel">建立產品資訊</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label for="title" class="form-label">產品標題</label>
                    <input v-model="msg.title" type="text" class="form-control bg-light text-black" id="title"
                      placeholder="請輸入產品標題">
                  </div>
                  <div class="mb-3">
                    <label for="description" class="form-label">產品描述</label>
                    <input v-model="msg.description" type="text" class="form-control bg-light text-black"
                      id="description" placeholder="請輸入產品描述">
                  </div>
                  <div class="mb-3">
                    <label for="content" class="form-label">產品說明</label>
                    <input v-model="msg.content" type="text" class="form-control bg-light text-black"
                      id="content" placeholder="請輸入產品說明">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-lg-6  ">
                      <div class="mb-3">
                        <label for="category" class="form-label">分類</label>
                        <input v-model="msg.category" type="text" class="form-control bg-light text-black"
                          id="category" placeholder="分類">
                      </div>
                      <div class="mb-3">
                        <label for="unit" class="form-label">單位</label>
                        <input v-model="msg.unit" type="text" class="form-control bg-light text-black"
                          id="unit" placeholder="單位">
                      </div>
                    </div>
                    <div class="col-lg-6  ">
                      <div class="mb-3">
                        <label for="originPrice" class="form-label">原價</label>
                        <input v-model="msg.origin_price" min="0" type="number"
                          class="form-control bg-light text-black" id="originPrice" placeholder="原價">
                      </div>
                      <div class="mb-3">
                        <label for="price" class="form-label">售價</label>
                        <input v-model="msg.price" min="0" type="number"
                          class="form-control bg-light text-black" id="price" placeholder="售價">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="imageUrl" class="form-label">輸入主圖網址</label>
                <input v-model="msg.imageUrl" type="text" class="form-control bg-light text-black"
                  id="imageUrl" placeholder="請輸入主圖網址">
                <img class="mt-3 img-fluid" :src="msg.imageUrl" alt="">
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label for="imagesUrl1" class="form-label">輸入圖片網址 1</label>
                    <input v-model="msg.imagesUrl[0]" type="text" class="form-control bg-light text-black"
                      id="imagesUrl1" placeholder="請輸入圖片網址 1">
                    <img class="mt-3 img-fluid" :src="msg.imagesUrl[0]" alt="">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label for="imagesUrl2" class="form-label">輸入圖片網址 2</label>
                    <input v-model="msg.imagesUrl[1]" type="text" class="form-control bg-light text-black"
                      id="imagesUrl2" placeholder="請輸入圖片網址 2">
                    <img class="mt-3 img-fluid" :src="msg.imagesUrl[1]" alt="">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label for="imagesUrl3" class="form-label">輸入圖片網址 3</label>
                    <input v-model="msg.imagesUrl[2]" type="text" class="form-control bg-light text-black"
                      id="imagesUrl3" placeholder="請輸入圖片網址 3">
                    <img class="mt-3 img-fluid" :src="msg.imagesUrl[2]" alt="">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label for="imagesUrl4" class="form-label">輸入圖片網址 4</label>
                    <input v-model="msg.imagesUrl[3]" type="text" class="form-control bg-light text-black"
                      id="imagesUrl4" placeholder="請輸入圖片網址 4">
                    <img class="mt-3 img-fluid" :src="msg.imagesUrl[3]" alt="">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label for="imagesUrl5" class="form-label">輸入圖片網址 5</label>
                    <input v-model="msg.imagesUrl[4]" type="text" class="form-control bg-light text-black"
                      id="imagesUrl5" placeholder="請輸入圖片網址 5">
                    <img class="mt-3 img-fluid" :src="msg.imagesUrl[4]" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" @click="close">關閉</button>
              <button type="button" class="btn btn-pink" @click="push">上傳</button>
            </div>
          </div>
        </div>
      </div>
    `,
}
)

app.component('updateproductmodal', {
  data() {
    return {




      updateProductModal: "updateProductModal",


    }
  },
  props: ['msg'],
  methods: {
    push() {
      this.$emit('pushData', this.msg.id)
    },
    close() {
      this.$emit('closeModal', this.updateProductModal)

    },

  },
  template: `   <div class="modal fade" id="updateProductModal" tabindex="-1" aria-labelledby="updateProductModalLabel"
        aria-hidden="true">
        <div class="modal-dialog  modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="updateProductModalLabel">更新產品資訊</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
              <div class="row">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label for="title" class="form-label">產品標題</label>
                    <input v-model="msg.title" type="text" class="form-control bg-light text-black" id="title"
                      placeholder="請輸入產品標題">
                  </div>
                  <div class="mb-3">
                    <label for="description" class="form-label">產品描述</label>
                    <input v-model="msg.description" type="text" class="form-control bg-light text-black"
                      id="description" placeholder="請輸入產品描述">
                  </div>
                  <div class="mb-3">
                    <label for="content" class="form-label">產品說明</label>
                    <input v-model="msg.content" type="text" class="form-control bg-light text-black" id="content"
                      placeholder="請輸入產品說明">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="row">
                    <div class="col-lg-6  ">
                      <div class="mb-3">
                        <label for="category" class="form-label">分類</label>
                        <input v-model="msg.category" type="text" class="form-control bg-light text-black"
                          id="category" placeholder="分類">
                      </div>
                      <div class="mb-3">
                        <label for="unit" class="form-label">單位</label>
                        <input v-model="msg.unit" type="text" class="form-control bg-light text-black" id="unit"
                          placeholder="單位">
                      </div>
                    </div>
                    <div class="col-lg-6  ">
                      <div class="mb-3">
                        <label for="originPrice" class="form-label">原價</label>
                        <input v-model="msg.origin_price" min="0" type="number"
                          class="form-control bg-light text-black" id="originPrice" placeholder="原價">
                      </div>
                      <div class="mb-3">
                        <label for="price" class="form-label">售價</label>
                        <input v-model="msg.price" min="0" type="number" class="form-control bg-light text-black"
                          id="price" placeholder="售價">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="imageUrl" class="form-label">輸入主圖網址</label>
                <input v-model="msg.imageUrl" type="text" class="form-control bg-light text-black" id="imageUrl"
                  placeholder="請輸入主圖網址">
                <img class="mt-3 img-fluid" :src="msg.imageUrl" alt="">
              </div>
              <div class="row">
                <template v-if="msg?.imagesUrl?.length">
                  <div v-for="(item,index) in msg.imagesUrl" class="col-lg-6">
                    <div class="mb-3">
                      <label for=" imagesUrl" class="form-label">輸入圖片網址{{index+1}}</label>
                      <input v-model="item" type="text" class="form-control bg-light text-black"
                        id="imagesUrl" placeholder=" 請輸入圖片網址">
                      <img class="mt-3 img-fluid" :src="item" alt="">
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary"  @click="close" >關閉</button>
              <button type="button" class="btn btn-pink" @click="push">儲存變更</button>
            </div>
          </div>
        </div>
      </div>
    `,
}
)

app.component('pagination', {
  data() {
    return {}
  },

  template: `<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>`,
})

app.mount("#app");