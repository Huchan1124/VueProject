
app.component('addproductmodal', {
    data(){
        return {

          

            addProductModal:"addProductModal",

       
        }
    },
    props:['msg'],
    methods:{
        push(){
            this.$emit('pushData',this.msg.title,this.msg.category,this.msg.origin_price,this.msg.price,this.msg.unit,this.msg.description,this.msg.content,this.msg.is_enabled,this.msg.imageUrl,this.msg.imagesUrl)
        },
        close(){
          this.$emit('closeModal', this.addProductModal)

        },

    },
    template:`      <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel"
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
    data(){
        return {
   

     

          updateProductModal:"updateProductModal",

       
        }
    },
    props:['msg'],
    methods:{
        push(){
            this.$emit('pushData', this.msg.id)
        },
        close(){
          this.$emit('closeModal', this.updateProductModal)

        },

    },
    template:`   <div class="modal fade" id="updateProductModal" tabindex="-1" aria-labelledby="updateProductModalLabel"
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

