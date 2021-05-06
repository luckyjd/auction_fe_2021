<template>
  <div class="container">
    <div class="row">
      <div class="user-side col-md-3 no-boder">
        <div class="user-side-top">

          <div class="row row-avatar">
            <div class="col">
              <b-avatar class="b-avatar" variant="info" src="https://placekitten.com/300/300"></b-avatar>
            </div>
            <div class="col">
              <span>Xin chào,</span> <br>
              <span class="name">Nguyễn Khánh Hưng</span>
            </div>
          </div>
          <div class="row margin-side account-type">
            <span>Loại tài khoản: <strong>Khách hàng</strong></span>
            <br>
            <p>Tài khoản của bạn chỉ còn thiếu một bước nữa để tham gia đấu giá.</p>
          </div>
          <div class="align-content-center text-center">
            <button class="btn-brown update-info">
              Cập nhật thông tin
            </button>
          </div>
        </div>
        <div class="sidebar-link">
          <ul class="nav flex-column flex-nowrap overflow-hidden">
            <li class="nav-item">
              <a class="nav-link text-truncate" href="#">
                <img src="~@/assets/svg/bell.svg" alt="Thông báo">
                <span class="d-none d-sm-inline">Thông báo</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-truncate" href="">
                <img src="~@/assets/svg/Star.svg" alt="Đã lưu">
                <span class="d-none d-sm-inline">Đã lưu</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-truncate" href="#">
                <img src="~@/assets/svg/file.svg" alt="Quản lý đấu giá">
                <span
                  class="d-none d-sm-inline">Quản lý đấu giá</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-truncate active" href="#">
                <img src="~@/assets/svg/User.svg" alt="Thông tin tài khoản">
                <span
                  class="d-none d-sm-inline">Thông tin tài khoản</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-truncate" href="#">
                <img src="~@/assets/svg/help.svg" alt="Trung tâm trợ giúp">
                <span class="d-none d-sm-inline">Trung tâm trợ giúp</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-truncate" href="#">
                <img src="~@/assets/svg/logout.svg" alt="Đăng xuất">
                <span
                  class="d-none d-sm-inline">Đăng xuất</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-9 form-info">
        <div class="card no-boder">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 title-page">
                <h4>Thông tin tài khoản</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <form>
                  <div class="form-group row">
                    <label class="col-4 col-form-label">Loại tài khoản</label>
                    <div class="col-8 row">
                      <div class="col">
                        <b-form-radio name="radio-size">Cá nhân</b-form-radio>
                      </div>
                      <div class="col">
                        <b-form-radio name="radio-size">Doanh nghiệp</b-form-radio>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="name" class="col-4 col-form-label">Họ và tên *</label>
                    <div class="col-8 row">
                      <div class="col">
                        <input id="name" name="name" placeholder="Họ và tên đệm" class="form-control here input-form" type="text">
                      </div>
                      <div class="col">
                        <input name="name" placeholder="Tên" class="form-control here input-form" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-4 col-form-label">Số điện thoại *</label>
                    <div class="col-8 row">
                      <div class="col input-group phone">
                        <input class="input-form" type="text" />
<!--                        <div class="input-group-addon">-->
<!--                          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>-->
<!--                        </div>-->
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="email" class="col-4 col-form-label">Email</label>
                    <div class="row col-8">
                      <div class="col">
                        <input id="email" name="text" placeholder="Nhập địa chỉ email của bạn" class="form-control here input-form" required="required"
                               type="text">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="select" class="col-4 col-form-label">Giới tính *</label>
                    <div class="row col-8">
                      <div class="col">
                        <select id="select" name="select" class="custom-select">
                          <option value="nam">Nam</option>
                          <option value="nu">Nu</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="select" class="col-4 col-form-label">Giới tính *</label>
                    <div class="row col-8">
                      <div class="col">
                        <select name="select" class="custom-select custom-select-gender">
                          <option value="Ngày">Ngày</option>
                        </select>
                        <select name="select" class="custom-select custom-select-gender">
                          <option value="Tháng">Tháng</option>
                        </select>
                        <select name="select" class="custom-select custom-select-gender">
                          <option value="Năm">Năm</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row address">
                    <label for="select" class="col-4 col-form-label">Địa chỉ *</label>
                    <div class="row col-8">
                      <div class="col">
                        <select name="select" class="custom-select">
                          <option value="Tỉnh/Thành phố">Tỉnh/Thành phố</option>
                        </select>
                        <select name="select" class="custom-select">
                          <option value="Quận/Huyện">Quận/Huyện</option>
                        </select>
                        <select name="select" class="custom-select">
                          <option value="Xã/Phường">Xã/Phường</option>
                        </select>
                        <br>
                        <input name="text" placeholder="Số nhà, ngõ, ngách, tên đường/phố" class="form-control here input-form" required="required"
                               type="text">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-4 col-form-label">Số CMT/CCCD/Hộ chiếu *</label>
                    <div class="row col-8">
                      <div class="col">
                        <input name="text" placeholder="Nhập số chứng mình / Số thẻ căn cước / Số hộ chiếu" class="form-control here input-form" required="required"
                               type="text">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-4 col-form-label">Ngày cấp *</label>
                    <div class="row col-8">
                      <div class="col">
                        <input name="text" placeholder="Ngày/Tháng/Năm" class="form-control here input-form" required="required"
                               type="text">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-4 col-form-label">Nơi cấp *</label>
                    <div class="row col-8">
                      <div class="col">
                        <input name="text" placeholder="Nhập nơi cấp giấy tờ tuỳ thân mà bạn điền phía trên" class="form-control here input-form" required="required"
                               type="text">
                      </div>
                    </div>
                  </div>

                  <div class="form-group row identity">
                    <div class="row col-12">
                      <div class="col identity-before">
                        <div class="row-no-margin text-center">
                          <p>Ảnh chụp mặt trước <br> giấy tờ tuỳ thân của bạn *</p>
                        </div>
                        <div class="row-no-margin text-center">
                          <img src="~@/assets/svg/cam.svg">
                        </div>
                        <div class="row-no-margin text-center">
                          <p>Kéo thả ảnh vào đây hoặc click để tải lên</p>
                        </div>
                      </div>
                      <div class="col identity-after">
                        <div class="row-no-margin text-center">
                          <p>Ảnh chụp mặt sau<br> giấy tờ tuỳ thân của bạn *</p>
                        </div>
                        <div class="row-no-margin text-center">
                          <img src="~@/assets/svg/cam.svg">
                        </div>
                        <div class="row-no-margin text-center">
                          <p>Kéo thả ảnh vào đây hoặc click để tải lên</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-4 col-form-label">Số tài khoản ngân hàng *</label>
                    <div class="row col-8">
                      <div class="col">
                        <input name="text" placeholder="Số tài khoản để nhận hoàn tiền cọc" class="form-control here input-form" required="required"
                               type="text">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-4 col-form-label">Tên ngân hàng *</label>
                    <div class="row col-8">
                      <div class="col">
                        <input name="text" placeholder="Chọn ngân hàng" class="form-control here input-form" required="required"
                               type="text">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-4 col-form-label">Chi nhánh *</label>
                    <div class="row col-8">
                      <div class="col">
                        <input name="text" placeholder="Nhập tên chi nhánh" class="form-control here input-form" required="required"
                               type="text">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-4 col-form-label">Chủ tài khoản *</label>
                    <div class="row col-8">
                      <div class="col">
                        <input name="text" placeholder="Nhập tên chủ tài khoản" class="form-control here input-form" required="required"
                               type="text">
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                selected: 'first',
                options: [
                    {text: 'First radio', value: 'first'},
                    {text: 'Second radio', value: 'second'}
                ]
            }
        }
    }
</script>

<style lang="scss">
  .container {
    background-color: #F6F7FB;

    .margin-side {
      padding: 16px;
    }

    .user-side {
      background-color: #FFFFFF;
      padding: 16px;
    }

    .user-side-top {
      max-width: 270px;
      padding-bottom: 24px;
      border-bottom: solid 1px;

      span {
        padding: 0;
      }

      p {
        padding: 0;
      }

      .row-avatar {
        .b-avatar {
          width: 64px;
          height: 64px;
        }

        :nth-child(1) {
          max-width: 64px;
        }

        :nth-child(2) {
          margin-left: 10px;

          span {
            font-size: 14px;
            font-family: 'Maven Pro', sans-serif;
            color: #222222;
          }

          .name {
            margin-top: 5px;
            font-weight: 700;
          }
        }
      }

      .account-type {
        p {
          margin-top: 6px;
        }
      }

      .update-info {
        width: 100%;
        height: 26px;
      }
    }

    .sidebar-link {
      margin-top: 16px;

      .text-truncate {
        color: #000000;
        font-size: 14px;
        font-weight: 600;
        padding: 10px 0;

        span {
          margin-left: 10px;
        }
      }

      .active {
        color: #713C39;
      }

    }

    .form-info {
      padding-left: 30px;
      .card-body {
        min-width: 870px;
        padding: 24px 70px;


        .title-page {
          margin-bottom: 30px;

          h4 {
            color: #000000;
            font-size: 20px;
            font-weight: 700;
          }
        }

        .form-group {
          margin-bottom: 24px;
        }


        .input-form {
          height: 40px;
          border-radius: 2px;
          border: solid 1px #DBDBDB;
        }

        .phone {
          input {
            outline: 0;
            border-width: 0 0 2px;
            border-color: blue;
            width: 100%;
          }

        }
        .phone:focus {
          border-color: green
        }

        .custom-select {
          width: auto;
          height: 40px;
          margin-right: 15px;
        }
        .custom-select-gender {
          width: auto;
          height: 40px;
          margin-right: 30px;
        }

        .address {
          input {
            margin-top: 15px;
          }
        }

        .identity {
          .identity-before {
            width: 330px;
            max-width: 330px;
            height: 192px;
            border: 1px dashed #000000;
            border-radius: 8px;
            padding: 24px 0;
            margin-left: 15px;
          }
          .identity-after {
            width: 330px;
            max-width: 330px;
            height: 192px;
            border: 1px dashed #000000;
            border-radius: 8px;
            margin-left: 40px;
            padding: 24px 0;
          }
        }

      }


    }

  }
</style>
