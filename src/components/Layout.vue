<template>
  <div class="row-no-margin">
    <div class="row-no-margin col-12 d-flex justify-content-center top-banner-container">
      <div class="hammer-icon"></div>
      <div class="text-center d-flex justify-content-center pl-2">
        <h5 class="m-auto">Đấu Giá Việt Nam</h5>
      </div>
    </div>
    <div id="main-container" class="row-no-margin">
      <div id="header-container" class="row-no-margin">
        <div class="row-no-margin col-12 d-flex align-items-center top-banner-container">
          <div class="row-no-margin p-0 col-6 d-flex justify-content-start">
            <a class="active">Trang chủ</a>
            <a class="">Đấu giá</a>
            <a class="">Tin tức</a>
            <a class="">Giới thiệu</a>
            <a class="">Tuyển dụng</a>
            <a class="">Liên hệ</a>
          </div>
          <div class="row-no-margin p-0 col-6 d-flex justify-content-start align-items-center">
            <div class="col-8 p-0 d-flex justify-content-start search-group pl-1 pr-1">
              <div class="m-1 pl-1 pr-1">
                <div class="search-icon"></div>
              </div>
              <input class="border-0 w-100" type="text" placeholder="Tìm kiếm" id="usr" name="username" >
            </div>
            <div class="col-4 p-0 d-flex justify-content-end user-info align-items-center">
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <i class="fa fa-cog" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-user-circle-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div id="page-content">
        <router-view />

      </div>
      <div id="footer-container">

      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Layout",
}
</script>

<style scoped>

</style>