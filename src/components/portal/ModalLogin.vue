<template>
  <b-modal id="modal-login" centered hide-footer>
    <template #modal-header="{ close }" style="text-align: center">
      <!-- Emulate built in modal header close button action -->
      <a @click="close" class="close"> </a>
      <div class="row-no-margin text-center">
        <h5 class="login-title">Đăng nhập</h5>
      </div>
    </template>

    <template>
      <b-input-group>
        <b-input-group-prepend>
          <span class="input-group-text"><i class="fa fa-mobile fa-lg"></i></span>
        </b-input-group-prepend>
        <b-form-input v-model="data.phone" class="LoginInput" size="lg" placeholder="Số điện thoại">
        </b-form-input>

      </b-input-group>
      <b-input-group>
        <b-input-group-prepend>
          <span class="input-group-text"><i class="fa fa-lock fa-lg"></i></span>
        </b-input-group-prepend>
        <b-form-input v-model="data.password" type="password" class="LoginInput" size="lg" placeholder="Mật khẩu">
        </b-form-input>

      </b-input-group>

      <div class="row content-login">
        <div class="col">
          <a href="#">Quên mật khẩu</a>
        </div>
        <div class="col">
          <b-button class="btn-login" v-on:click="handleSubmit($event)">Đăng nhập</b-button>
        </div>
      </div>

      <div class="login-footer">
        <div class="row-no-margin text-center">
          <span>Bạn chưa có tài khoản?</span>
        </div>
        <div class="row-no-margin text-center">
          <a v-on:click="$emit('openModalRegister')">Đăng ký</a>
        </div>
      </div>
    </template>
  </b-modal>
</template>

<script>
    import AuthService from "../../services/AuthService";
    import {setAuthHeader} from "../../http-common";

    export default {
        name: "ModalLogin",
        props: [
            'modalLogin',
        ],
        data() {
            return {
                data: {
                    phone: '0123456789',
                    password: 'admin123456'
                }
            }
        },
        computed: {},
        methods: {
            handleSubmit(e) {
                e.preventDefault()
                if (this.data.password.length > 0) {
                    AuthService.getToken(this.data)
                        .then(response => {
                            if (response.status === 200) {
                                this.$cookies.set("au_tk_ntx", response.data.access, "15MIN");
                                this.$cookies.set("au_rf_ntx", response.data.refresh, "24h");

                                setAuthHeader(response.data.access);
                                AuthService.getUser()
                                    .then((res) => {
                                        let is_admin = res.data.is_staff;
                                        localStorage.setItem('is_staff', is_admin);
                                        this.$emit('loggedIn');
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                            }
                        })
                        .catch(error => {
                            console.log(error);

                        });
                }
            }
        }
    }
</script>

<style scoped lang="scss">
  ::v-deep {
    input {
      border-radius: 4px;
    }

    .modal-content {
      width: 570px !important;
      height: 368px;

      .modal-header {
        width: 570px;
      }

      .input-group {
        margin-top: 24px;

        .input-group-text {
          background: #fff;
        }

        .LoginInput {
          border-left: none;
        }
      }

      .modal-body {
        height: 292px;
        margin: 0 70px;
        padding: 0px 0;

        .content-login {
          margin-top: 24px;

          :nth-child(1) {
            a {
              line-height: 36px;
              color: #000000;
              text-decoration: underline;
            }
          }

          :nth-child(2) {
            text-align: right;

            button {
              border-radius: 4px;
              background-color: #713C39;
              width: 122px;
              height: 36px;
            }
          }
        }

        .login-footer {
          margin-top: 36px;

          :nth-child(1) {
            color: #888888;
          }

          :nth-child(2) {
            a {
              color: #000000;
              text-decoration: underline;
            }
          }
        }
      }
    }


  }

  .login-title {
    font-family: 'Maven Pro', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: #333333;
  }

  .close {
    position: absolute;
    top: 21px;
    width: 24px;
    height: 24px;
    opacity: 0.3;
  }

  .close:hover {
    opacity: 1;
  }

  .close:before, .close:after {
    position: absolute;
    left: 12px;
    content: ' ';
    height: 14px;
    width: 2px;
    background-color: #333;
  }

  .close:before {
    transform: rotate(45deg);
  }

  .close:after {
    transform: rotate(-45deg);
  }
</style>
