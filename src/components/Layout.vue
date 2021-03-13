<template>
  <div class="row-no-margin">
    <div class="row-no-margin col-12 d-flex justify-content-center top-banner-container">
      <div class="hammer-icon"></div>
      <div class="text-center d-flex justify-content-center pl-2">
        <div class="m-auto font-20 font-medium">Đấu Giá Việt Nam</div>
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
          <div class="row-no-margin p-0 col-6 d-flex justify-content-end align-items-center user-info">
            <!-- <div class="col-8 p-0 d-flex justify-content-start search-group pl-1 pr-1"> -->
              <div class="row-no-margin search-group d-flex justify-content-start">
                <div class="m-1 pl-1 pr-1">
                  <div class="search-icon"></div>
                </div>
                <input class="border-0 w-100" type="text" placeholder="Tìm kiếm" id="usr" name="username" >
              </div>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <i class="fa fa-cog" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div id="page-content">
        <router-view />

      </div>
      <div id="footer-container" class="position-relative row-no-margin">
        <div class="footer-wrapper d-flex justify-content-start">
          <div class="footer-address d-flex flex-column">
            <div>Đấu Giá Việt Nam</div>
            <div>CÔNG TY ĐẤU GIÁ HỢP DANH ĐẤU GIÁ VIỆT NAM</div>
            <div>Số 4-A13 Đầm Trấu, phường Bạch Đằng, quận Hai Bà Trưng, Tp Hà Nội</div>
            <div>024 3984 2728</div>
            <div>024 3984 2728</div>
            <div>info@daugiavietnam.vn</div>
          </div>
          <div class="footer-info ml-auto">
            BBB
          </div>
        </div>
        <div class="position-absolute license">
          <div class="p-3">Quyết định số 112/QĐ-STP của Sở Tư Pháp thành phố Hà Nội phê duyệt tổ chức đấu giá tài sản đủ điều kiện thực hiện hình thức đấu giá trực tuyến ngày 12/05/2020</div>
        </div>
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