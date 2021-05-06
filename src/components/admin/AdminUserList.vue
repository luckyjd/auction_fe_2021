<template>
  <div class="row row-no-margin p-0">
    <div class="row row-no-margin">
      <div class="col-12 pt-12p pb-12p pl-24p pr-16p d-flex justify-content-between align-items-center admin-nav-top">
        <div class="font-14 font-medium">Quản lý khách hàng</div>
        <i class="fa fa-user-circle-o" aria-hidden="true" style="color: #B7B7B7;font-size: 32px;"></i>
      </div>
    </div>
    <div class="row row-no-margin admin-search-product-group">
      <div class="col-12 p-24p pr-20p d-flex justify-content-start align-items-center">
        <div class="row row-no-margin d-flex justify-content-start admin-search-input">
            <div class="m-4p pl-4p pr-4p">
              <div class="search-icon"></div>
            </div>
            <input class="border-0" type="text" placeholder="Tìm tên, email " id="usr" name="username" >
        </div>
        <select class="form-control ml-16p" id="sel1">
          <option value="" selected disabled>Loại khách hàng</option>
          <option selected="selected">Tất cả</option>
          <option>Chưa đủ đk đấu giá</option>
          <option>Đủ đk đấu giá</option>
        </select>
        <button type="button" class="btn btn-danger ml-auto bg-color-theme-admin">Tìm kiếm</button>
      </div>
    </div>
    <div class="row row-no-margin admin-search-product-filter">
      <div class="col-12 pl-24p pr-20p pb-8p d-flex justify-content-end align-items-center">
        <div class="mr-auto"> {{users.length}}-{{users.length}} / {{ users.length}} khách hàng
          <span class="fa fa-angle-left pl-20p" aria-hidden="true"></span> 
          <span class="fa fa-angle-right pl-20p" aria-hidden="true"></span>
        </div>
        <!-- <button type="button" >Tạo đấu giá</button> -->
        <router-link to="/admin/products/create" tag="button" class="btn btn-danger ml-16p bg-color-theme-admin">Tạo khách hàng</router-link>
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
        :items="users" 
        :fields="fields"
        :sticky-header="stickyHeader"
      >
        <template #cell(is_active)="data">
          {{ data ? "Kích hoạt" : "Khoá"}}
        </template>
        <template #cell(user_type)="data">
          {{ data ? "Cá nhân" : "Doanh nghiệp"}}
        </template>
      </b-table>
    </div>
  </div>
</template>
<script>


import AuthService from "../../services/AuthService";


export default {
  name: "AdminUserList",
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Admin Auction Online',
      // all titles will be injected into this template
      titleTemplate: '%s | Auction Management'
    },
  data() {
    return {
      users : [],
      fields: [
        // 'phone', 'user_type', 'is_full_info', 'is_active', 'first_name', 'last_name', 'email', 'dob'
            {
              key: 'phone',
              label: 'SDT',
              sortable: true
            },
            {
              key: 'user_type',
              label: 'Loại khách hàng',
            },
            {
              key: 'is_active',
              label: 'Tình trạng',
              sortable: true,
            },
            {
              key: 'email',
              label: 'Email',
              sortable: true,
            },
            {
              key: 'first_name',
              label: 'Họ và tên',
              sortable: true,
            }
          ]
    }
  },
  methods: {
      retrieveUsers() {
      AuthService.getListUser()
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  components: {
    
  },
  mounted() {
      this.retrieveUsers();
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
