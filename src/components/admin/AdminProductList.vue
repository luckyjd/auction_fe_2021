<template>
  <div class="row row-no-margin p-0">
    <div class="row row-no-margin">
      <div class="col-12 pt-12p pb-12p pl-24p pr-16p d-flex justify-content-between align-items-center admin-nav-top">
        <div class="font-14 font-medium">Quản lý đấu giá</div>
        <i class="fa fa-user-circle-o" aria-hidden="true" style="color: #B7B7B7;font-size: 32px;"></i>
      </div>
    </div>
    <div class="row row-no-margin admin-search-product-group">
      <div class="col-12 p-24p pr-20p d-flex justify-content-start align-items-center">
        <div class="row row-no-margin d-flex justify-content-start admin-search-input">
            <div class="m-4p pl-4p pr-4p">
              <div class="search-icon"></div>
            </div>
            <input class="border-0" type="text" placeholder="Tìm đấu giá " id="usr" name="username" >
        </div>
        <div class="ml-16p">
          <date-picker v-model="date_range" type="date" range 
            placeholder="Chọn thời gian " 
            value-type="format" format="DD/MM/YYYY"
            style="max-width:225px;"></date-picker>
        </div>
        <select class="form-control ml-16p" id="sel1">
          <option value="" selected disabled>Loại tài sản</option>
          <option>Bất động sản</option>
          <option>Oto</option>
          <option>Máy bay</option>
        </select>
        <select class="form-control ml-16p" id="sel1">
          <option value="" selected disabled>Địa điểm</option>
          <option>Hà Nội</option>
          <option>Tp HCM</option>
          <option>Đà Nẵng</option>
        </select>
        <select class="form-control ml-16p" id="sel1">
          <option value="" selected disabled>Trạng thái</option>
          <option>Đã kết thúc</option>
          <option>Đang diễn ra</option>
          <option>Bản nháp</option>
        </select>
        <button type="button" class="btn btn-danger ml-auto bg-color-theme-admin">Tìm kiếm</button>
      </div>
    </div>
    <div class="row row-no-margin admin-search-product-filter">
      <div class="col-12 pl-24p pr-20p pb-8p d-flex justify-content-end align-items-center">
        <div class="mr-auto"> {{products.length}}-{{products.length}} / {{ products.length}} đấu giá 
          <span class="fa fa-angle-left pl-20p" aria-hidden="true"></span> 
          <span class="fa fa-angle-right pl-20p" aria-hidden="true"></span>
        </div>
        <!-- <button type="button" >Tạo đấu giá</button> -->
        <router-link to="/admin/products/create" tag="button" class="btn btn-danger ml-16p bg-color-theme-admin">Tạo đấu giá</router-link>
        <button type="button" class="btn btn-default ml-20p">
          <span class="fa fa-download" aria-hidden="true"></span> Export
        </button>
        <button type="button" class="btn btn-default ml-20p">
          <span class="fa fa-filter" aria-hidden="true"></span> Chọn cột
        </button>
      </div>
    </div>
    <div class="row row-no-margin admin-search-product-list">
      <b-table 
        responsive 
        hover 
        :items="products" 
        :fields="fields"
        :sticky-header="stickyHeader"
        @row-clicked="viewDetail"
      >
        <template #cell(auction_start_end_time)="data">
          {{ data.value.start}} <br> {{ data.value.end}}
        </template>
        <template #cell(product_begin_prize)="data">
          {{ numberWithCommas(data.value)}} đ
        </template>
      </b-table>
    </div>
  </div>
</template>
<script>

import DatePicker from "vue2-datepicker";
import 'vue2-datepicker/index.css';

import ProductDataService from "../../services/ProductDataService";
import ProductDetail from "./AdminProductDetail.vue";

export default {
  name: "AdminAuctionManagement",
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Admin Auction Online',
      // all titles will be injected into this template
      titleTemplate: '%s | Auction Management'
    },
  data() {
    return {
      products : [],
      date_range : '',
      stickyHeader: 'calc(100vh - 180.5px)', 
      fields: [
            {
              key: 'product_code',
              label: 'Mã đấu giá',
              sortable: true
            },
            {
              key: 'auction_start_end_time',
              label: 'Bắt đầu - kết thúc',
            },
            {
              key: 'product_title',
              label: 'Tiêu đề',
              sortable: true,
            },
            {
              key: 'product_begin_prize',
              label: 'Giá khởi điểm',
              sortable: true,
            },
            {
              key: 'current_prize',
              label: 'Gía hiện tại',
              sortable: true,
            },
            {
              key: 'product_auction_status',
              label: 'Trạng thái',
              sortable: true,
            }
          ],
    }
  },
  methods: {
    retrieveProducrts() {
      ProductDataService.getAll()
        .then(response => {
          this.products = response.data;
          this.products.forEach(this.convertProducts);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    convertProducts(item, index, data) {
      // convert auction_start_end_time 
        let tmp_start_time = new Date(item.auction_start_time);
        let tmp_end_time = new Date(item.auction_end_time);
        data[index]['auction_start_end_time'] = { 'start' : (this.checkTime(tmp_start_time.getHours()) + ":" + this.checkTime(tmp_start_time.getMinutes()) 
                                              + " " + this.checkTime(tmp_start_time.getDate()) + '/' + this.checkTime(tmp_start_time.getMonth() + 1) + '/' + tmp_start_time.getFullYear()),
                                               'end' : (this.checkTime(tmp_end_time.getHours()) + ":" + this.checkTime(tmp_end_time.getMinutes()) 
                                              + " " + this.checkTime(tmp_end_time.getDate()) + '/' + this.checkTime(tmp_end_time.getMonth() + 1) + '/' + tmp_end_time.getFullYear())
                                                };
      // convert product_auction_status
        switch (item.product_auction_status) {
          case 0:
            data[index]['product_auction_status'] = "Sắp diễn ra";
            break;
          case 1:
            data[index]['product_auction_status'] = "Đang diễn ra";
            break;
          case 2:
            data[index]['product_auction_status'] = "Đã kết thúc";
            break;
        }                            
    },
    checkTime(i) {
        return (i < 10) ? "0" + i : i;
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    viewDetail(item, index) {
      console.log(index);
      this.$modal.show(
        ProductDetail,
        {
          data: item
        },
        {
          draggable: true,
          height: '90%',
          width: '90%'
        }
      );
    }
  },
  components: {
    DatePicker
  },
  mounted() {
    this.retrieveProducrts();
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
