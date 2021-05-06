<template>
  
  <div class="row row-no-margin p-0">
    <div class="row row-no-margin  d-flex justify-content-center">
      <div class="row row-no-margin template-content-container">
        <div class="row row-no-margin p-0 d-flex justify-content-end align-items-center user-info">
              <!-- <div class="col-8 p-0 d-flex justify-content-start search-group pl-1 pr-1"> -->
            <div class="row row-no-margin search-group d-flex justify-content-start align-items-center">
              <div class="col-8 p-0 d-flex justify-content-start align-items-center">
                <div class="m-1 pl-4p pr-4p">
                  <div class="search-icon"></div>
                </div>
                <input class="border-0 " type="text" placeholder="Tên tài sản" id="product_name" name="product_name" >
              </div>
              <div class="col-4 p-0 d-flex justify-content-end align-items-center">
                <div class="">
                  <date-range-picker
                    v-model="dateRange"
                  ></date-range-picker>
                </div>
                <button type="button" class="btn btn-primary ml-8p" style="background-color: #713C39; border-color: #713C39;">Tìm Kiếm</button>
              </div>
            </div>
            <div class="row row-no-margin d-flex justify-content-start align-items-center">
              <div class="col-8 p-0 d-flex justify-content-start align-items-center">
                <select  class="form-control m-w-140p">
                  <option disabled value="" hidden>Tỉnh/Thành phố</option>
                  <option value="1">Hà Nội</option>
                  <option value="2">TP HCM</option>
                  <option value="3">Hải Phòng</option>
                </select>
                <select class="form-control m-w-140p ml-20p">
                  <option disabled value="" hidden>Quận/Huyện</option>
                  <option value="1">Hoàn Kiếm</option>
                  <option value="2">Hà Đông</option>
                  <option value="3">Hoàng Mai</option>
                </select>
                <select class="form-control m-w-140p ml-20p">
                  <option disabled value="" hidden>Xã/Phường</option>
                  <option value="1">Phú Lương</option>
                  <option value="2">Vạn Phúc</option>
                  <option value="3">Nguyễn Trãi</option>
                </select>
                <select class="form-control m-w-140p ml-20p">
                  <option disabled value="" hidden>Xã/Phường</option>
                  <option value="1">Phú Lương</option>
                  <option value="2">Vạn Phúc</option>
                  <option value="3">Nguyễn Trãi</option>
                </select>
              </div>
              <div class="col-4 p-0 d-flex justify-content-end align-items-center flex-column">
                <div>
                  <div>Sắp xếp theo</div>
                <div>
                  <select class="form-control m-w-140p">
                  <option disabled value="" hidden>Xã/Phường</option>
                  <option value="1">Phú Lương</option>
                  <option value="2">Vạn Phúc</option>
                  <option value="3">Nguyễn Trãi</option>
                </select>
                </div>
                </div>
              </div>
            </div>
            <div class="auction-info-wrapper col-12 p-0 d-flex justify-content-center">
      <div class="col-12 p-0">
        <div class="row row-no-margin auction-today p-8p">
          <div class="col-12 p-0">
            <div class="row row-no-margin">
              <div class="col-12 font-bold font-20 p-0 pb-4p pl-8p">Đấu giá hôm nay</div>
              <div class="col-12 p-0 d-flex justify-content-between pl-8p pr-8p">
                <div class="font-14 font-medium" style="color: #8A91A1;">8 sản phẩm</div>
                
              </div>
            </div>
          </div>
          <div class="col-12 p-0">
            <div class="row row-no-margin">
              <div v-for="product in products" :key="product.id" class="col-3 p-0 auction-today-post p-8p" >
                <div class="auction-today-post-single" @click="detailProduct(product.id)">
                  <img v-bind:src="urlApi() + product.product_image_1">
                  <div class="row row-no-margin p-8p font-14">
                    <div class="font-14 font-bold pl-0 pr-0">{{product.product_title}}</div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá hiện tại:</div>
                      <div class="text-red font-bold">???? đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá khởi điểm:</div>
                      <div class="text-gray font-regular">{{product.product_begin_prize}} đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Kết thúc:</div>
                      <div class="font-bold">{{convertTime(product.auction_end_time)}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-24p pb-22p m-center">
            <pagination/>
          </div>
        </div>
      </div>

    </div> <!--  end aution-info-wrapper  -->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import daterangepicker 
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import Pagination from './Pagination.vue';
import ProductDataService from "../../services/ProductDataService";
// import CommonService from "../../service-common";
export default {
  name: "products",
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Auction Online',
      // all titles will be injected into this template
      titleTemplate: '%s | Products'
    },
  data() {
      return {
        dateRange: {
          startDate: '2021-03-20',
          endDate: '2021-03-28',
        },
        products : [],
      }
    },
  methods: {
    dateFormat (classes, date) {
      if (!classes.disabled) {
        classes.disabled = date.getTime() < new Date()
      }
      return classes
    },
    retrieveProducts() {
      ProductDataService.getAll(8)
        .then(response => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    detailProduct(id) {
        this.$router.push({ name: 'product_detail', params: { id: id } })
    },
    urlApi () {
      return process.env.VUE_APP_ROOT;
    },
    convertTime (time_in) {
      let time_tmp = new Date(time_in);
       return (this.checkTime(time_tmp.getHours()) + ":" + this.checkTime(time_tmp.getMinutes()) 
            + " - " + this.checkTime(time_tmp.getDate()) + '/' + this.checkTime(time_tmp.getMonth() + 1) + '/' + time_tmp.getFullYear())                     
    },
    checkTime(i) {
        return (i < 10) ? "0" + i : i;
    },
    
  },

  components: {
    DateRangePicker,
    Pagination
    },
  mounted() {
      this.retrieveProducts();
      // Layout.$bvModal.show('modal-login');
      // add external script hereeee
      // let recaptchaScript = document.createElement('script')
      // let recaptchaScript2 = document.createElement('script')
      // recaptchaScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
      // recaptchaScript2.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js')
      // document.head.appendChild(recaptchaScript)
      // document.head.appendChild(recaptchaScript2)

      
  }
};
</script>

<style>

</style>
