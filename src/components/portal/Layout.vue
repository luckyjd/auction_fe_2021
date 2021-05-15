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
              <input class="border-0 w-100" type="text" placeholder="Tìm kiếm" id="usr" name="username">
            </div>
            <i class="fa fa-question-circle" aria-hidden="true"></i>
            <i class="fa fa-cog" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <b-navbar-nav v-if="login" class="nav-dropdown-custom">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em><i class="fa fa-user-circle-o nav-dropdown-icon" aria-hidden="true"></i></em>
                </template>
                <b-dropdown-item href="#">Thông báo <i class="fa fa-circle fa-circle-dropdown" aria-hidden="true"></i>
                </b-dropdown-item>
                <b-dropdown-item href="#">Đã lưu</b-dropdown-item>
                <hr>
                <b-dropdown-item href="#">Quản lý đấu giá
                  <b-badge variant="light">4</b-badge>
                </b-dropdown-item>
                <b-dropdown-item href="#">Thông tin tài khoản</b-dropdown-item>
                <hr>
                <b-dropdown-item href="#">Trung tâm trợ giúp</b-dropdown-item>
                <b-dropdown-item href="#" @click="logout()">Đăng xuất</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav v-else class="nav-dropdown-custom">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <i class="fa fa-user-circle-o nav-dropdown-icon" aria-hidden="true"></i>
                </template>
                <b-dropdown-item href="#" @click="$bvModal.show('modal-login')">Đăng nhập</b-dropdown-item>
                <hr>
                <b-dropdown-item href="#" @click="$bvModal.show('modal-register')">Đăng ký</b-dropdown-item>
                <b-dropdown-item href="#">Thông tin tài khoản</b-dropdown-item>
                <hr>
                <b-dropdown-item href="#">Trung tâm trợ giúp</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </div>
        </div>
      </div>
      <div id="page-content" class="d-flex justify-content-center">
        <router-view/>
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
              info@daugiavietnam.vn
            </div>
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
          <div class="p-12p">Quyết định số 112/QĐ-STP của Sở Tư Pháp thành phố Hà Nội phê duyệt tổ chức đấu giá tài sản
            đủ điều kiện thực hiện hình thức đấu giá trực tuyến ngày 12/05/2020
          </div>
        </div>
      </div>
    </div>
    <ModalLogin
      @openModalRegister="openModalRegister"
      @loggedIn="loginSuccess"
    >

    </ModalLogin>
    <ModalRegister @openModalLogin="openModalLogin">

    </ModalRegister>
  </div>
</template>

<script>
    import ModalLogin from "./ModalLogin";
    import ModalRegister from "./ModalRegister";

    export default {
        name: "Layout",
        components: {
            ModalLogin,
            ModalRegister
        },
        data() {
            return {
                login: this.$cookies.get("au_rf_ntx")
            }
        },
        created() {
            
        },
        methods: {
            openModalRegister() {
                this.$bvModal.hide('modal-login')
                this.$bvModal.show('modal-register')
            },
            openModalLogin() {
                this.$bvModal.hide('modal-register')
                this.$bvModal.show('modal-login')

            },
            loginSuccess() {
                this.login = true;
                this.$bvModal.hide('modal-login');
            },
            logout() {
                this.login = false;
                this.$cookies.remove("au_tk_ntx");
                this.$cookies.remove("au_rf_ntx");
                localStorage.removeItem('is_staff');
                this.$router.push({name: 'home'})
            }
        }
    }
</script>

<style scoped lang="scss">
  ::v-deep {

    #header-container {
      height: 56px;

      .nav-dropdown-custom {
        margin-left: 30px;

        .dropdown-toggle::after {
          display: none !important;

        }

        .b-nav-dropdown {
          .dropdown-toggle {
            padding: 0 !important;

            .nav-dropdown-icon {
              padding: 0;
            }
          }

        }

        .fa-circle-dropdown {
          color: red !important;
          font-size: 7px !important;
          line-height: 20px;
          vertical-align: super;
          padding-left: 7px !important;
        }

        .dropdown-menu {
          padding-bottom: 10px;
          top: 8px !important;
          box-shadow: 0px 3px 6px #00000029;

          a {
            color: #000000;
            font-size: 14px;
            line-height: 20px;
            font-weight: 600;
          }

          .badge {
            border-radius: 50%;
            background: #FF0000 0% 0% no-repeat padding-box;
            width: 16px;
            height: 16px;
            color: #FFFFFF;
            letter-spacing: 0;
            margin-left: 5px;
          }

          a:hover {
            text-decoration: none;
          }

          a:active {
            background-color: #E9ECEF;
          }
        }
      }


    }


  }


</style>
