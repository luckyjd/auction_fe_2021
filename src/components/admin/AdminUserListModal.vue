<template>
  <div class="row row-no-margin p-24p">
    <div class="row row-no-margin">
      <div class="col-12 p-12p d-flex justify-content-between align-items-center admin-nav-top">
        <div class="font-16 font-medium">Quản lý khách hàng đấu giá</div>
      </div>
    </div>
    <div class="row row-no-margin admin-search-product-list">
      <b-table 
        responsive 
        hover 
        :items="users" 
        :fields="fields"
      >
        <template #cell(is_active)="data">
          {{ data ? "Kích hoạt" : "Khoá"}}
        </template>
        <template #cell(user_type)="data">
          {{ data ? "Cá nhân" : "Doanh nghiệp"}}
        </template>
        <template #cell(actions)="row">
          <button class="btn btn-danger bg-color-theme-admin font-12" @click="add_user(row.item)">Add</button>
        </template>
      </b-table>
    </div>
  </div>
</template>
<script>


import AuthService from "../../services/AuthService";

export default {
  name: "AdminUserListModal",
  data() {
    return {
      users : [],
      picked_users: [],
      fields: [
        // 'phone', 'user_type', 'is_full_info', 'is_active', 'first_name', 'last_name', 'email', 'dob'
            {
              key: 'first_name',
              label: 'Họ và tên',
              sortable: true,
            },
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
              key: 'actions',
              label: 'Action',
            },
            
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
      add_user(data){
        this.picked_users.push(data);
        console.log(this.picked_users);
      }
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
