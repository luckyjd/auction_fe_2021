<template>
  <div class="container-fluid admin-container-nav">
      <div class="row">
          <div class="col-2 collapse show p-0 min-vh-100" id="sidebar">
              <div class="row-no-margin col-12 p-8p d-flex justify-content-start">
                <div class="hammer-icon"></div>
                <div class="text-center d-flex justify-content-center pl-12p">
                  <div class="m-auto font-16 font-medium color-theme">Đấu Giá Việt Nam</div>
                </div>
              </div>
              <ul class="nav flex-column flex-nowrap overflow-hidden">
                  <li class="nav-item">
                    <a class="nav-link text-truncate" href="#"><i class="fa fa-id-card" aria-hidden="true"></i> <span class="d-none d-sm-inline">Quản lý khách hàng</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-truncate" href="/admin/products"><i class="fa fa-star-o" aria-hidden="true"></i> <span class="d-none d-sm-inline">Quản lý đấu giá</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-truncate" href="#"><i class="fa fa-newspaper-o" aria-hidden="true"></i> <span class="d-none d-sm-inline">Tin tức</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-truncate" href="#"><i class="fa fa-commenting" aria-hidden="true"></i> <span class="d-none d-sm-inline">Giới thiệu</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-truncate" href="#"><i class="fa fa-question-circle-o" aria-hidden="true"></i> <span class="d-none d-sm-inline">Trung tâm trợ giúp</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-truncate" href="#"><i class="fa fa-user-o" aria-hidden="true"></i> <span class="d-none d-sm-inline">Tài khoản</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-truncate" href="#"><i class="fa fa-building-o" aria-hidden="true"></i> <span class="d-none d-sm-inline">Thông tin công ty</span></a>
                  </li>
              </ul>
          </div>
          <div class="col p-0">
            <router-view />
          </div>
      </div>
  </div>










</template>

<script>
export default {
name: "AdminLayout",
}
</script>

<style scoped>

</style>