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
              <span class="name">{{user.first_name ? user.first_name : ''}} {{user.last_name ? user.last_name : ''}}</span>
            </div>
          </div>
          <div class="row margin-side account-type">
            <span>Loại tài khoản: <strong>Khách hàng</strong></span>
            <br>
            <p>Tài khoản của bạn chỉ còn thiếu một bước nữa để tham gia đấu giá.</p>
          </div>
          <div class="align-content-center text-center">
            <button class="btn-brown update-info" @click="putDataUser()">
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
                        <b-form-radio name="radio-size" v-model="data.company_business_registration_no" value="1">Cá
                          nhân
                        </b-form-radio>
                      </div>
                      <div class="col">
                        <b-form-radio name="radio-size" v-model="data.company_business_registration_no" value="2">Doanh
                          nghiệp
                        </b-form-radio>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="name" class="col-4 col-form-label">Họ và tên *</label>
                    <div class="col-8 row">
                      <div class="col">
                        <input id="name" v-model="data.first_name" name="name" placeholder="Họ và tên đệm"
                               class="form-control here input-form" type="text">
                      </div>
                      <div class="col">
                        <input name="name" v-model="data.last_name" placeholder="Tên"
                               class="form-control here input-form" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-4 col-form-label">Số điện thoại *</label>
                    <div class="col-8 row">
                      <div class="col input-group phone">
                        <input class="input-form" v-model="data.phone" type="text"/>
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
                        <input id="email" name="text" v-model="data.email" placeholder="Nhập địa chỉ email của bạn"
                               class="form-control here input-form" required="required"
                               type="text">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="select" class="col-4 col-form-label">Giới tính *</label>
                    <div class="row col-8">
                      <div class="col">
                        <select id="select" v-model.lazy="data.gender" name="select"
                                @input="data.gender = $event.target.value" class="custom-select">
                          <option :value="true">Nam</option>
                          <option :value="false">Nữ</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="select" class="col-4 col-form-label">Ngày sinh *</label>
                    <div class="row col-8">
                      <div class="col">
                        <select :value="birthday.day()" @input="setBirthDay('day',$event.target.value)" name="select"
                                class="custom-select custom-select-gender">
                          <option
                            v-for="day in birthdays.days"
                            :value="day"
                            v-bind:key="day">{{day}}
                          </option>
                        </select>
                        <select :value="1+birthday.month()" @input="setBirthDay('month',$event.target.value)"
                                name="select"
                                class="custom-select custom-select-gender">
                          <option v-for="month in months"
                                  :value="month.value"
                                  v-bind:key="month.value">{{month.label}}
                          </option>
                        </select>
                        <select :value="birthday.year()" @input="setBirthDay('year',$event.target.value)"
                                name="select" class="custom-select custom-select-gender">
                          <option v-for="year in birthdays.years"
                                  :value="year"
                                  v-bind:key="year">{{year}}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row address">
                    <label for="select" class="col-4 col-form-label">Địa chỉ *</label>
                    <div class="row col-8">
                      <div class="col">
                        <select v-model.lazy="data.user_city" @input="setAddress('city',$event.target.value)" name="select"
                                class="custom-select">
                          <option :value="null">Tỉnh/Thành phố</option>
                          <option v-for="ct in city"
                                  :value="ct.Id"
                                  v-bind:key="ct.Id">{{ct.Name}}
                          </option>
                        </select>
                        <select v-model.lazy="data.user_district" @input="setAddress('district',$event.target.value)"
                                name="select"
                                class="custom-select">
                          <option :value="null">Quận/Huyện</option>
                          <option v-for="dt in district"
                                  :value="dt.Id"
                                  v-bind:key="dt.Id">{{dt.Name}}
                          </option>
                        </select>
                        <select v-model.lazy="data.user_wards" @input="setAddress('wards',$event.target.value)"
                                name="select" class="custom-select">
                          <option :value="null">Xã/Phường</option>
                          <option v-for="ward in wards"
                                  :value="ward.Id"
                                  v-bind:key="ward.Id">{{ward.Name}}
                          </option>
                        </select>
                        <br>
                        <input v-model.lazy="data.user_street" name="text"
                               placeholder="Số nhà, ngõ, ngách, tên đường/phố"
                               class="form-control here input-form" required="required"
                               type="text">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-4 col-form-label">Số CMT/CCCD/Hộ chiếu *</label>
                    <div class="row col-8">
                      <div class="col">
                        <input v-model="data.user_id_card" name="text"
                               placeholder="Nhập số chứng mình / Số thẻ căn cước / Số hộ chiếu"
                               class="form-control here input-form" required="required"
                               type="text">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row date">
                    <label class="col-4 col-form-label">Ngày cấp *</label>
                    <div class="row col-8">
                      <div class="col date-input">
                        <b-input-group class="mb-3">
                          <b-form-input
                            id="example-input"
                            v-model="data.user_id_card_date"
                            type="text"
                            placeholder="YYYY-MM-DD"
                            autocomplete="off"
                          ></b-form-input>
                          <b-input-group-append>
                            <b-form-datepicker
                              v-model="data.user_id_card_date"
                              button-only
                              right
                              locale="en-US"
                              aria-controls="example-input"
                            ></b-form-datepicker>
                          </b-input-group-append>
                        </b-input-group>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-4 col-form-label">Nơi cấp *</label>
                    <div class="row col-8">
                      <div class="col">
                        <input v-model="data.user_id_card_place" name="text" placeholder="Nhập nơi cấp giấy tờ tuỳ thân mà bạn điền phía trên"
                               class="form-control here input-form" required="required"
                               type="text">
                      </div>
                    </div>
                  </div>

                  <div class="form-group row identity">
                    <div class="row col-12">
                      <div class="col identity-before">
                        <vue-upload-multiple-image
                          @upload-success="uploadUserCardImageFrontSuccess"
                          @before-remove="beforeRemove"
                          @edit-image="editImageUserCardFront"
                          :multiple=false
                          idUpload=1
                          :maxImage=1
                        >
                        </vue-upload-multiple-image>
<!--                        <div class="row-no-margin text-center">-->
<!--                          <p>Ảnh chụp mặt trước <br> giấy tờ tuỳ thân của bạn *</p>-->
<!--                        </div>-->
<!--                        <div class="row-no-margin text-center">-->
<!--                          <img src="~@/assets/svg/cam.svg">-->
<!--                        </div>-->
<!--                        <div class="row-no-margin text-center">-->
<!--                          <p>Kéo thả ảnh vào đây hoặc click để tải lên</p>-->
<!--                        </div>-->
                      </div>
                      <div class="col identity-after">
                        <vue-upload-multiple-image
                          @upload-success="uploadUserCardImageBackSuccess"
                          @before-remove="beforeRemove"
                          @edit-image="editImageUserCardBack"
                          :data-images="auction_product_images"
                          idUpload=2
                          :maxImage=1
                        >
                        </vue-upload-multiple-image>
<!--                        <div class="row-no-margin text-center">-->
<!--                          <p>Ảnh chụp mặt sau<br> giấy tờ tuỳ thân của bạn *</p>-->
<!--                        </div>-->
<!--                        <div class="row-no-margin text-center">-->
<!--                          <img src="~@/assets/svg/cam.svg">-->
<!--                        </div>-->
<!--                        <div class="row-no-margin text-center">-->
<!--                          <p>Kéo thả ảnh vào đây hoặc click để tải lên</p>-->
<!--                        </div>-->
                      </div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-4 col-form-label">Số tài khoản ngân hàng *</label>
                    <div class="row col-8">
                      <div class="col">
                        <input v-model="data.user_bank_no" name="text"
                               placeholder="Số tài khoản để nhận hoàn tiền cọc"
                               class="form-control here input-form" required="required"
                               type="text">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-4 col-form-label">Tên ngân hàng *</label>
                    <div class="row col-8">
                      <div class="col">
                        <select v-model.lazy="data.user_bank_name" @input="setBankName($event.target.value)" name="select"
                                class="custom-select" style="width: 100%;">
                          <option :value="null">Chọn ngân hàng</option>
                          <option v-for="bank in banks"
                                  :value="bank.MaNganHang"
                                  v-bind:key="bank.MaNganHang">{{bank.TenNH}}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-4 col-form-label">Chi nhánh *</label>
                    <div class="row col-8">
                      <div class="col">
                        <input v-model="data.user_bank_branch" name="text" placeholder="Nhập tên chi nhánh"
                               class="form-control here input-form"
                               required="required"
                               type="text">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-4 col-form-label">Chủ tài khoản *</label>
                    <div class="row col-8">
                      <div class="col">
                        <input v-model="data.user_bank_user_name" name="text" placeholder="Nhập tên chủ tài khoản"
                               class="form-control here input-form"
                               required="required"
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
    <b-modal id="modal-scoped">
      <template #modal-header>
        <h5>Cập nhật thành công</h5>
      </template>
      <template #modal-footer="{ ok }">
        <b-button size="sm" variant="success" @click="ok(); getUser">
          OK
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
    import AuthService from "../../services/AuthService";
    import UserDataService from "../../services/UserDataService";
    import moment from 'moment'
    import dataDistrict from "../../services/DistrictService";
    import dataBank from "../../services/BankService";
    import VueUploadMultipleImage from 'vue-upload-multiple-image';

    export default {
        components: {
            VueUploadMultipleImage
        },
        data() {
            return {
                user: {
                    first_name: '',
                    last_name: ''
                },
                editorConfig: {},
                auction_product_images: [],
                auction: {},
                selected: 'first',
                options: [
                    {text: 'First radio', value: 'first'},
                    {text: 'Second radio', value: 'second'}
                ],
                data: {},
                months: [
                    {
                        value: 1,
                        label: 'Tháng 1'
                    },
                    {
                        value: 2,
                        label: 'Tháng 2'
                    },
                    {
                        value: 3,
                        label: 'Tháng 3'
                    },
                    {
                        value: 4,
                        label: 'Tháng 4'
                    },
                    {
                        value: 5,
                        label: 'Tháng 5'
                    },
                    {
                        value: 6,
                        label: 'Tháng 6'
                    },
                    {
                        value: 7,
                        label: 'Tháng 7'
                    },
                    {
                        value: 8,
                        label: 'Tháng 8'
                    },
                    {
                        value: 9,
                        label: 'Tháng 9'
                    },
                    {
                        value: 10,
                        label: 'Tháng 10'
                    },
                    {
                        value: 11,
                        label: 'Tháng 11'
                    },
                    {
                        value: 12,
                        label: 'Tháng 12'
                    },
                ],
                birthday: moment(),
                birthdays: {
                    days: this.setDay(this.birthday),
                    months: this.months,
                    years: this.setYear(),
                },
                day: moment(),
                city: dataDistrict,
                district: [],
                wards: [],
                banks: [],
            }
        },
        created() {
            this.getUser();
            this.setDataBank();
        },
        methods: {
            uploadUserCardImageFrontSuccess(formData, index, fileList) {
                console.log(formData, index, fileList);
                this.data.user_id_card_image_front = fileList[0];
                console.log(this.data.user_id_card_image_front);
            },
            uploadUserCardImageBackSuccess(fileList) {
                this.data.user_id_card_image_back = fileList[0];
            },
            beforeRemove (index, done, fileList) {
                console.log('index', index, fileList)
                var r = confirm("remove image")
                if (r == true) {
                    done()
                }
            },
            editImageUserCardFront (formData, index, fileList) {
                console.log('edit data', formData, index, fileList)
            },
            editImageUserCardBack (formData, index, fileList) {
                console.log('edit data', formData, index, fileList)
            },
            dataChange (data) {
                console.log(data)
            },
            setDataBank() {
                dataBank.forEach(bank => {
                    bank.bankList.forEach(item => {
                        this.banks.push(item);
                    })
                })
            },
            getUser() {
                AuthService.getUser()
                    .then((res) => {
                        this.user.last_name = res.data.last_name;
                        this.user.first_name = res.data.first_name;
                        this.data = res.data;
                        this.setDataBirthday();
                        this.dataDistrict('district', this.data.user_city);
                        this.dataDistrict('wards', this.data.user_district);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            setDay(date = null) {
                let length = 30;
                if (date) {
                    length = date.daysInMonth();
                }
                let days = [];
                for (let i = 1; i <= length; i++) {
                    days[i] = i;
                }
                return days;
            },
            putDataUser() {
                this.data.date_joined = this.birthday;
                UserDataService.putUser(this.data).then((response) => {
                    console.log(response);
                    this.$bvModal.show('modal-scoped')
                }).catch((error) => {
                    console.log(error);
                })
            },
            setBirthDay(mode, value) {
                switch (mode) {
                    case 'day': {
                        this.birthday.date(value);
                        break;
                    }
                    case 'month': {
                        this.birthday.month(value - 1);
                        this.birthdays.days = this.setDay(this.birthday);
                        break;
                    }
                    case 'year': {
                        this.birthday.year(value);
                        this.birthdays.days = this.setDay(this.birthday);
                        break;
                    }
                    default: {
                        break;
                    }
                }
            },
            setDataBirthday() {
                this.birthday = moment(this.data.date_joined);
                console.log(this.birthday.day());
                this.birthdays.days = this.setDay(this.birthday);
            },
            setYear() {
                let cur = moment().year();
                let years = []
                for (let i = cur; i >= 1900; i--) {
                    years.push(i);
                }
                return years;
            },
            setAddress(mode, value) {
                switch (mode) {
                    case 'city': {
                        if (this.data.user_city !== value) {
                            this.data.user_city = value;
                            this.data.user_district = null;
                            this.data.user_wards = null;
                            this.dataDistrict('district', value);
                        }
                        break;
                    }
                    case 'district': {
                        if (this.data.user_district !== value) {
                            this.data.user_district = value;
                            this.data.user_wards = null;
                            this.dataDistrict('wards', value);
                        }
                        break;
                    }
                    case 'wards': {
                        if (this.data.user_wards !== value) {
                            this.data.user_wards = value;
                        }
                        break;
                    }
                    default: {
                        break;
                    }
                }
            },
            dataDistrict(mode, value) {
                switch (mode) {
                    case 'district': {
                        for (let i = 0; i < dataDistrict.length; i++) {
                            if (dataDistrict[i].Id === value) {
                                this.district = dataDistrict[i].Districts;
                                break;
                            }
                        }
                        break;
                    }
                    case 'wards': {
                        for (let i = 0; i < dataDistrict.length; i++) {
                            if (dataDistrict[i].Id === this.data.user_city) {
                                for (let j = 0; j < dataDistrict[i].Districts.length; j++) {
                                    if (dataDistrict[i].Districts[j].Id === value) {
                                        this.wards = dataDistrict[i].Districts[j].Wards;
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                    }
                    default: {
                        break;
                    }
                }
            },
            setBankName(id) {
                this.data.user_bank_name = id;
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
      height: 500px;
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
        padding: 6px 0;

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

        .phone::after {
          display: block;
          content: "";
          width: 28px;
          height: 27px;
          background: transparent url('~@/assets/svg/file.svg') no-repeat;
          position: absolute;
          right: 8px;
          bottom: 0;
        }

        .phone:focus {
          border-color: green
        }

        .date-input {
          input {
            height: 40px;
          }
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
            cursor: pointer;
          }

          .identity-after {
            width: 330px;
            max-width: 330px;
            height: 192px;
            border: 1px dashed #000000;
            border-radius: 8px;
            margin-left: 40px;
            padding: 24px 0;
            cursor: pointer;
          }
        }

      }


    }

  }
</style>
