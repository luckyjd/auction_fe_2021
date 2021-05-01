<template>
  <b-modal id="modal-register" centered hide-footer>
    <template #modal-header="{ close }" style="text-align: center">
      <!-- Emulate built in modal header close button action -->
      <a @click="close" class="close"> </a>
      <div class="row-no-margin text-center">
        <h5 class="login-title">Đăng ký</h5>
      </div>
    </template>

    <template #default="{ hide }">
      <b-input-group>
        <b-input-group-prepend>
          <span class="input-group-text"><i class="fa fa-mobile fa-lg"></i></span>
        </b-input-group-prepend>
        <b-form-input class="LoginInput" size="lg" placeholder="Số điện thoại">
        </b-form-input>
      </b-input-group>
      <b-input-group>
        <b-input-group-prepend>
          <span class="input-group-text"><i class="fa fa-lock fa-lg"></i></span>
        </b-input-group-prepend>
        <b-form-input class="LoginInput" size="lg" placeholder="Mật khẩu">
        </b-form-input>
      </b-input-group>
      <b-input-group>
        <b-input-group-prepend>
          <span class="input-group-text"><i class="fa fa-lock fa-lg"></i></span>
        </b-input-group-prepend>
        <b-form-input class="LoginInput" size="lg" placeholder="Xác nhận mật khẩu">
        </b-form-input>
      </b-input-group>
      <div class="row content-login">
        <div class="col">
          <b-button class="btn-login" @click="hide()">Đăng ký</b-button>
        </div>
      </div>

      <div class="login-footer">
        <div class="row-no-margin text-center">
          <span>Bạn đã có tài khoản?</span>
        </div>
        <div class="row-no-margin text-center">
          <a v-on:click="$emit('openModalLogin')">Đăng nhập</a>
        </div>
      </div>
    </template>
  </b-modal>
</template>

<script>
    export default {
        name: "ModalRegister",
        props: [
            'modalLogin',
        ],
        computed: {},
    }
</script>

<style scoped lang="scss">
  ::v-deep {
    input {
      border-radius: 4px;
    }

    .modal-content {
      width: 570px !important;
      height: 432px;

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
            float: right;
            text-align: center;

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

