<template>
  <div class="row-no-margin">
    <div class="row-no-margin col-12 d-flex justify-content-center top-banner-container">
      <div class="hammer-icon"></div>
      <div class="text-center d-flex justify-content-center pl-12p">
        <div class="m-auto font-20 font-medium">Đấu Giá Việt Nam</div>
      </div>
    </div>
    <div id="main-container" class="row-no-margin">
      <div id="header-container" class="row-no-margin row d-flex justify-content-center ">
        <div class="row-no-margin col-12 d-flex align-items-center template-content-container">
          <div class="row-no-margin p-0 col-6 d-flex justify-content-start ">
            <a href="/home">Trang chủ</a>
            <a href="/products">Đấu giá</a>
            <a href="/news">Tin tức</a>
            <a class="">Giới thiệu</a>
            <a class="">Tuyển dụng</a>
            <a class="">Liên hệ</a>
          </div>
          <div class="row-no-margin p-0 col-6 d-flex justify-content-end align-items-center user-info">
            <!-- <div class="col-8 p-0 d-flex justify-content-start search-group pl-1 pr-1"> -->
              <div class="row-no-margin search-group d-flex justify-content-start">
                <div class="m-4p pl-4p pr-4p">
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
      <div id="page-content" class="d-flex justify-content-center">
        <router-view />
      </div>
      <div id="footer-container" class="position-relative row-no-margin row d-flex justify-content-center">
        
        <div class="footer-wrapper d-flex justify-content-between row-no-margin template-content-container">
          <div class="footer-address d-flex flex-column text-white">
            <div class="d-flex justify-content-start align-items-center">
              <div class="hammer-icon-fff"></div>
              <div class="font-20 font-medium p-8p">ĐẤU GIÁ VIỆT NAM</div>
            </div>
            <div class="font-16 font-medium p-8p">CÔNG TY ĐẤU GIÁ HỢP DANH ĐẤU GIÁ VIỆT NAM</div>
            <div class="font-14 font-regular p-8p">
              <i class="fa fa-building p-4p" aria-hidden="true"></i>
              Số 4-A13 Đầm Trấu, phường Bạch Đằng, quận Hai Bà Trưng, Tp Hà Nội
            </div>
            <div class="font-14 font-regular p-8p">
              <i class="fa fa-phone font-16 p-4p" aria-hidden="true"></i>
              024 3984 2728
              </div>
            <div class="font-14 font-regular p-8p">
              <i class="fa fa-mobile font-20 p-4p pr-8p" aria-hidden="true"></i>
              024 3984 2728
            </div>
            <div class="font-14 font-regular p-8p">
              <i class="fa fa-envelope p-4p" aria-hidden="true"></i>
              info@daugiavietnam.vn</div>
          </div>
          <div class="footer-info ml-auto d-flex justify-content-start text-white pr-24p">
            <div class="footer-doc d-flex flex-column pr-24p pl-24p ">
              <div class="font-16 font-bold pb-16p ">Trợ giúp nhà thầu</div>
              <a class="text-white font-14 font-regular pb-4p pt-4p ">Đăng ký tham gia tài khoản đấu giá </a>
              <a class="text-white font-14 font-regular pb-4p pt-4p">Hướng dẫn chi tiết về đấu thầu</a>
              <a class="text-white font-14 font-regular pb-4p pt-4p">Quy định về đấu giá online</a>
              <div class="font-16 font-bold pb-16p pt-16p">Trợ giúp thanh toán</div>
              <a class="text-white font-14 font-regular pb-4p pt-4p">Cách đăng ký và thanh toán tiền cọc</a>
              <a class="text-white font-14 font-regular pb-4p pt-4p">Trả lại tiền cọc của nhà thầu</a>
            </div>
            <div class=" footer-cert ml-auto d-flex flex-column pr-24p pl-24p">
              <div class="font-16 font-bold pb-16p ">Đăng ký tài sản đấu giá</div>
              <a class="text-white font-14 font-regular pb-4p pt-4p">Cách đưa tài sản lên đấu giá</a>
              <a class="text-white font-14 font-regular pb-4p pt-4p">Quyết toán sau đấu giá</a>
              <div class="bocongthuong-icon mt-8p"></div>
            </div>

          </div>
        </div>
        
        <div class="position-absolute license">
          <div class="p-12p">Quyết định số 112/QĐ-STP của Sở Tư Pháp thành phố Hà Nội phê duyệt tổ chức đấu giá tài sản đủ điều kiện thực hiện hình thức đấu giá trực tuyến ngày 12/05/2020</div>
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