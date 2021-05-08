<template>
  <div class="row row-no-margin h-100 d-flex justify-content-start">
    <div class="product-detail-wrapper flex-grow-1 ">
      <div class="row row-no-margin p-24p">
        <div class="row row-no-margin " style="border-bottom: 1px solid rgb(200, 195, 195);">
          <div class="row row-no-margin d-flex justify-content-start align-items-baseline">
            <div class="hammer-icon-m"></div>
            <div class="ml-8p mr-24p">Sắp diễn ra</div>
            <div class="font-12 ml-24p mr-8p" style="color: #565656;">Thời gian</div>
            <div class="font-14"> {{data.auction_start_end_time.start}} - {{data.auction_start_end_time.end}}</div>
          </div>
          <div class="row row-no-margin pt-8p pb-12p font-20 font-bold" style="color: #333333;">
            {{data.product_title}}
          </div>
          <div class="row row-no-margin font-12 align-items-baseline" style="color:#565656;">
            Mã đấu giá <span class="font-14 ml-8p" style="color:#000000;">{{data.product_code}}</span>
          </div>
          <div class="row row-no-margin font-12 align-items-baseline pt-12p pb-24p" style="color:#565656;">
            Giá khởi điểm <span class="font-14 ml-8p mr-8p" style="color:#E84A4A;">{{numberWithCommas(data.product_begin_prize)}} đ</span>
            - Bước giá <span class="font-14 ml-8p" style="color:#E84A4A;">{{numberWithCommas(data.product_step_prize)}} đ </span>
          </div>
        </div>
        <div class="row row-no-margin product-detail-image-wrapper pt-20p pb-20p" style="border-bottom: 1px solid rgb(200, 195, 195);">
          <div class="col-12 font-16 font-medium p-0">Hình ảnh</div>
          <div class="col-3 p-8p">
            <img v-bind:src="urlApi() + '/' + data.product_image_1">
          </div>
          <div class="col-3 p-8p">
            <img v-bind:src="urlApi() + '/' + data.product_image_2">
          </div>
          <div class="col-3 p-8p">
            <img v-bind:src="urlApi() + '/' + data.product_image_3">
          </div>
          <div class="col-3 p-8p">
            <img v-bind:src="urlApi() + '/' + data.product_image_4">
          </div>
        </div>
        <div class="row row-no-margin product_detail_data_wrapper pt-20p pb-20p">
          <div class="col-12 font-16 font-medium p-0 pb-8p">Thông tin chi tiết</div>
          <div class="col-12 font-14 font-medium p-0" v-html="data.product_detail_data"></div>
        </div>
      </div>
    </div>
    <div class="product-detail-add-user-wrapper">
      <div class="row row-no-margin p-24p">
        <div class="row row-no-margin pt-8p pb-12p font-20 font-bold" style="color: #333333;">
            Danh sách user đấu giá 
        </div>
        <div class="row row-no-margin">
          <div class="col-12 pt-8p pb-8p bdr-b-1p">user1</div>
          <div class="col-12 pt-8p pb-8p bdr-b-1p">987654321</div>
        </div>
        <div class="row row-no-margin d-flex justify-content-center pt-8p">
          <button class="btn btn-danger ml-16p bg-color-theme-admin" @click="open_add_user_modal()">Thêm user</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminUserListModal from "./AdminUserListModal.vue";
export default {
  name: "AdminProductDetail",
  props: {
    data: Object
  },
  data() {
    return {
      users : [],
    }
  },
  methods: {
    numberWithCommas(x) {
      if(x){
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      } else {return ""}
    },
    urlApi () {
      return process.env.VUE_APP_ROOT;
    },
    open_add_user_modal() {
      this.$modal.show(
        AdminUserListModal,
        // {
        //   data: item
        // },
        {
          draggable: true,
          height: '90%',
          width: '90%'
        }
      );
    }
  },
  mounted() {
  }
};
</script>