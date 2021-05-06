<template>
  <div class="row row-no-margin p-0">
    <div class="row row-no-margin">
      <div class="col-12 pt-12p pb-12p pl-24p pr-16p d-flex justify-content-between align-items-center admin-nav-top">
        <div class="font-14 font-medium">Quản lý đấu giá / Tạo đấu giá mới</div>
        <i class="fa fa-user-circle-o" aria-hidden="true" style="color: #B7B7B7;font-size: 32px;"></i>
      </div>
    </div>
    <div class="row row-no-margin p-24p admin-product-create-step">
      <div class="row row-no-margin create-step-1 pt-16p" v-show="step==1">
        <div class="col-12 p-0 ml-12p">
          <div class="font-20 font-medium">Bước 1/3 : Thông tin cơ bản</div>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Tiêu đề đấu giá</div>
          <input class="p-8p" type="text" placeholder="Nhập tiêu đề " id="product_title" name="product_title" v-model="auction.product_title" style="min-width: 470px;">
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Ngày bắt đầu nhận cọc</div>
          <date-picker v-model="auction.deposit_start_time" type="time" format="HH:mm" class="mr-20p" placeholder="Giờ/Phút"></date-picker>
          <date-picker v-model="auction.deposit_start_date" type="date" class="" style="width:240px;" placeholder="Ngày/Tháng/Năm"></date-picker>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Ngày xem tài sản</div>
          <date-picker v-model="auction.view_start_time" type="time" format="HH:mm" class="mr-20p" placeholder="Giờ/Phút"></date-picker>
          <date-picker v-model="auction.view_start_date" type="date" class="" style="width:240px;" placeholder="Ngày/Tháng/Năm"></date-picker>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Ngày bắt đầu đấu giá</div>
          <date-picker v-model="auction.auction_start_time" type="time" format="HH:mm" class="mr-20p" placeholder="Giờ/Phút"></date-picker>
          <date-picker v-model="auction.auction_start_date" type="date" class="" style="width:240px;" placeholder="Ngày/Tháng/Năm"></date-picker>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Ngày kết thúc đấu giá</div>
          <date-picker v-model="auction.auction_end_time" type="time" format="HH:mm" class="mr-20p" placeholder="Giờ/Phút"></date-picker>
          <date-picker v-model="auction.auction_end_date" type="date" class="" style="width:240px;" placeholder="Ngày/Tháng/Năm"></date-picker>
        </div>

        <div class="col-12 p-0 m-12p d-flex justify-content-center align-items-center">
          <button type="button" class="btn btn-danger bg-color-theme-admin" v-on:click="step = 2">Tiếp tục</button>
          <router-link to="/admin/products" tag="button" class="btn btn-default border-000000 ml-24p" style="width:72px;">Huỷ</router-link>
        </div>
      </div>
      <div class="row row-no-margin create-step-2 pt-16p" v-show="step==2">
        <div class="col-12 p-0 ml-12p">
          <div class="font-20 font-medium">Bước 2/3 : Thông tin tài sản</div>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Dạng tài sản</div>
          <select v-model="auction.product_kind" class="form-control w-470p">
            <option disabled value="" hidden>Chọn dạng tài sản</option>
            <option value="1">Tài sản thanh lý </option>
            <option value="2">Tài sản thanh lý 1</option>
            <option value="3">Tài sản thanh lý 2</option>
          </select>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Loại tài sản</div>
          <select v-model="auction.product_type" class="form-control w-470p">
            <option disabled value="" hidden>Chọn loại tài sản</option>
            <option value="1">Phương tiện vận tải </option>
            <option value="2">Phương tiện vận tải 1</option>
            <option value="3">Phương tiện vận tải 2</option>
          </select>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Tên tài sản</div>
          <input class="p-8p" type="text" placeholder="Nhập tên sản phẩm" name="product_name" v-model="auction.product_name" style="min-width: 470px;">
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Giá khởi điểm</div>
          <input class="p-8p pr-16p" type="number" placeholder="Nhập giá khởi điểm" name="product_begin_prize" v-model.number="auction.product_begin_prize" style="min-width: 470px;"><span class="" style="margin-left: -15px;">đ</span>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Bước giá</div>
          <input class="p-8p pr-16p" type="number" placeholder="Nhập bước giá" name="product_step_prize" v-model.number="auction.product_step_prize" style="min-width: 470px;"><span class="" style="margin-left: -15px;">đ</span>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Địa chỉ tài sản</div>
          <select v-model="auction.product_loc_city" class="form-control m-w-140p">
            <option disabled value="" hidden>Tỉnh/Thành phố</option>
            <option value="1">Hà Nội</option>
            <option value="2">TP HCM</option>
            <option value="3">Hải Phòng</option>
          </select>
          <select v-model="auction.product_loc_district" class="form-control m-w-140p ml-20p">
            <option disabled value="" hidden>Quận/Huyện</option>
            <option value="1">Hoàn Kiếm</option>
            <option value="2">Hà Đông</option>
            <option value="3">Hoàng Mai</option>
          </select>
          <select v-model="auction.product_loc_wards" class="form-control m-w-140p ml-20p">
            <option disabled value="" hidden>Xã/Phường</option>
            <option value="1">Phú Lương</option>
            <option value="2">Vạn Phúc</option>
            <option value="3">Nguyễn Trãi</option>
          </select>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p"></div>
          <input class="p-8p pr-16p" type="text" placeholder="Số nhà, ngõ, ngách, đường phố" name="product_loc_street" v-model="auction.product_loc_street" style="min-width: 470px;">
        </div>
        <div class="col-12 p-0 ml-12p mt-12p mr-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Thông tin chi tiết</div>
        </div>
        <div class="col-12 p-0 m-12p">
          <ckeditor v-model="auction.product_detail_data" :config="editorConfig"></ckeditor>
        </div>
        <div class="col-12 p-0 m-12p ">
          <div class="p-title pr-12p pt-12p pb-12p">Tải ảnh tài sản lên</div>
            <div class="upload-multi-preview">
              <vue-upload-multiple-image
                @upload-success="uploadProductImageSuccess"
                @before-remove="beforeRemove"
                @edit-image="editImage"
                @data-change="dataChange"
                :data-images="auction_product_images"
                idUpload=1
                :maxImage=4
                ></vue-upload-multiple-image>
            </div>
        </div>


        <div class="col-12 p-0 m-12p d-flex justify-content-center align-items-center">
          <button type="button" class="btn btn-danger bg-color-theme-admin" v-on:click="step = 1">Quay lại</button>
          <button type="button" class="btn btn-danger bg-color-theme-admin ml-24p" v-on:click="step = 3">Tiếp tục</button>
          <router-link to="/admin/products" tag="button" class="btn btn-default border-000000 ml-24p" style="width:72px;">Huỷ</router-link>
        </div>

      </div>


      <div class="row row-no-margin create-step-3 pt-16p" v-show="step==3">
        <div class="col-12 p-0 ml-12p">
          <div class="font-20 font-medium">Bước 3/3 : Thông tin chủ tài sản</div>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Chủ tài sản</div>
          <input type="radio" id="one" value="1" v-model="auction.product_owner_type">
          <label class="mb-0 ml-8p" for="one">Cá nhân</label>
          
          <input style="margin-left:80px;" type="radio" id="two" value="2" v-model="auction.product_owner_type">
          <label class="mb-0 ml-8p" for="two">Doanh Nghiệp</label>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">{{ auction.product_owner_type == 2 ? 'Tên doanh nghiệp' : 'Tên cá nhân' }}</div>
          <input class="p-8p" type="text" placeholder="Nhập tên doanh nghiệp/cá nhân" name="product_owner_name" v-model="auction.product_owner_name" style="min-width: 470px;">
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Số đăng ký kinh doanh</div>
          <input class="p-8p" type="text" placeholder="Nhập số đăng ký kinh doanh" name="product_owner_business_regis_no" v-model="auction.product_owner_business_regis_no" style="min-width: 470px;">
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Ngày cấp số ĐKKD gần nhất</div>
          <date-picker v-model="auction.product_owner_business_regis_no_date" format="DD/MM/YYYY" type="date" class="" style="width:370px;" placeholder="Ngày/Tháng/Năm"></date-picker>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Nơi cấp</div>
          <input class="p-8p" type="text" placeholder="Nhập nơi cấp" name="product_owner_business_regis_no_place" v-model="auction.product_owner_business_regis_no_place" style="min-width: 470px;">
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Mã số thuế</div>
          <input class="p-8p" type="text" placeholder="Nhập mã số thuế" name="product_owner_tax_code" v-model="auction.product_owner_tax_code" style="min-width: 470px;">
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Số điện thoại</div>
          <input class="p-8p" type="text" placeholder="Nhập số điện thoại" name="product_owner_phone" v-model="auction.product_owner_phone" style="min-width: 470px;">
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Email</div>
          <input class="p-8p" type="text" placeholder="Nhập email" name="product_owner_email" v-model="auction.product_owner_email" style="min-width: 470px;">
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Địa chỉ</div>
          <select v-model="auction.product_owner_city" class="form-control m-w-140p">
            <option disabled value="" hidden>Tỉnh/Thành phố</option>
            <option value="1">Hà Nội</option>
            <option value="2">TP HCM</option>
            <option value="3">Hải Phòng</option>
          </select>
          <select v-model="auction.product_owner_district" class="form-control m-w-140p ml-20p">
            <option disabled value="" hidden>Quận/Huyện</option>
            <option value="1">Hoàn Kiếm</option>
            <option value="2">Hà Đông</option>
            <option value="3">Hoàng Mai</option>
          </select>
          <select v-model="auction.product_owner_wards" class="form-control m-w-140p ml-20p">
            <option disabled value="" hidden>Xã/Phường</option>
            <option value="1">Phú Lương</option>
            <option value="2">Vạn Phúc</option>
            <option value="3">Nguyễn Trãi</option>
          </select>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p"></div>
          <input class="p-8p pr-16p" type="text" placeholder="Số nhà, ngõ, ngách, đường phố" name="product_owner_street" v-model="auction.product_owner_street" style="min-width: 470px;">
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Người đại diện</div>
          <input class="p-8p pr-16p" type="text" placeholder="Họ và tên đệm" name="product_owner_represent_surname" v-model="auction.product_owner_represent_surname" style="min-width: 255px;">
          <input class="p-8p pr-16p ml-20p" type="text" placeholder="Tên" name="product_owner_represent_name" v-model="auction.product_owner_represent_name" style="min-width: 170px;">        
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Chức vụ người đại diện</div>
          <input class="p-8p pr-16p" type="text" placeholder="Nhập chức vụ người đại diện" name="product_owner_represent_position" v-model="auction.product_owner_represent_position" style="min-width: 470px;">       
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Số điện thoại người đại diện</div>
          <input class="p-8p pr-16p" type="text" placeholder="Nhập số điện thoại người đại diện" name="product_owner_represent_phone" v-model="auction.product_owner_represent_phone" style="min-width: 470px;">       
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Email người đại diện</div>
          <input class="p-8p pr-16p" type="text" placeholder="Nhập email người đại diện" name="product_owner_represent_email" v-model="auction.product_owner_represent_email" style="min-width: 470px;">       
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Giới tính</div>
          <select v-model="auction.product_owner_represent_gender" class="form-control m-w-140p">
            <option disabled value="" hidden>Giới tính </option>
            <option value="1">Nam</option>
            <option value="2">Nữ</option>
          </select>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Ngày sinh</div>
          <date-picker v-model="auction.product_owner_represent_dob" format="DD/MM/YYYY" type="date" class="" style="width:370px;" placeholder="Ngày/Tháng/Năm"></date-picker>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Số CMT/CCCD/Hộ chiếu</div>
          <input class="p-8p pr-16p" type="text" placeholder="Nhập Số CMT/CCCD/Hộ chiếu" name="product_owner_represent_id_card" v-model="auction.product_owner_represent_id_card" style="min-width: 470px;">       
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Ngày cấp</div>
          <date-picker v-model="auction.product_owner_represent_id_card_date" format="DD/MM/YYYY" type="date" class="" style="width:370px;" placeholder="Ngày/Tháng/Năm"></date-picker>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Nơi cấp</div>
          <input class="p-8p pr-16p" type="text" placeholder="Nhập nơi cấp" name="product_owner_represent_id_card_place" v-model="auction.product_owner_represent_id_card_place" style="min-width: 470px;">       
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Ảnh CMND/CCCD/Hộ chiếu</div>
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="upload-owner-preview">
            <vue-upload-multiple-image
              @upload-success="uploadProductOwnerImageFrontSuccess"
              @before-remove="beforeRemove"
              @edit-image="editImage"
              @data-change="dataChange"
              :data-images="product_owner_represent_id_card_image_front"
              idUpload=2
              :maxImage=1
              dragText="Ảnh mặt trước"
              ></vue-upload-multiple-image>
          </div>
          <div class="upload-owner-preview">
            <vue-upload-multiple-image
              @upload-success="uploadProductOwnerImageBackSuccess"
              @before-remove="beforeRemove"
              @edit-image="editImage"
              @data-change="dataChange"
              :data-images="product_owner_represent_id_card_image_back"
              idUpload=3
              :maxImage=1
              dragText="Ảnh mặt sau"
              ></vue-upload-multiple-image>
          </div>
        </div>

        









        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Số tài khoản ngân hàng</div>
          <input class="p-8p pr-16p" type="text" placeholder="Nhập số tài khoản để nhận tiền đấu gía" name="product_owner_represent_bank_no" v-model="auction.product_owner_represent_bank_no" style="min-width: 470px;">       
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Tên ngân hàng</div>
          <input class="p-8p pr-16p" type="text" placeholder="Nhập tên ngân hàng" name="product_owner_represent_bank_name" v-model="auction.product_owner_represent_bank_name" style="min-width: 470px;">       
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Chi nhánh</div>
          <input class="p-8p pr-16p" type="text" placeholder="Nhập tên chi nhánh" name="product_owner_represent_bank_branch" v-model="auction.product_owner_represent_bank_branch" style="min-width: 470px;">       
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-start align-items-center">
          <div class="p-title pr-12p pt-12p pb-12p">Chủ tài khoản</div>
          <input class="p-8p pr-16p" type="text" placeholder="Nhập tên chủ tài khoản" name="product_owner_represent_bank_user_name" v-model="auction.product_owner_represent_bank_user_name" style="min-width: 470px;">       
        </div>
        <div class="col-12 p-0 m-12p d-flex justify-content-center align-items-center">
          <button type="button" class="btn btn-danger bg-color-theme-admin" v-on:click="step = 2">Quay lại</button>
          <button type="button" class="btn btn-danger bg-color-theme-admin ml-24p" @click="createAuction()" >Tạo đấu giá mới</button>
          <router-link to="/admin/products" tag="button" class="btn btn-default border-000000 ml-24p" style="width:72px;">Huỷ</router-link>
        </div>
      </div>
    </div>
    <!--
    <date-picker
      v-model="time3"
      format="HH:mm"
      value-type="format"
      type="time"
      placeholder="hh:mm a"
    ></date-picker> -->
  </div>
</template>
<script src="https://cdn.ckeditor.com/4.10.0/standard/ckeditor.js"></script>
<script>
import DatePicker from "vue2-datepicker";
import 'vue2-datepicker/index.css';
import CKEditor from 'ckeditor4-vue';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CKEditor from '@ckeditor/ckeditor5-vue2';
import VueUploadMultipleImage from 'vue-upload-multiple-image';
import axios from 'axios';


import ProductDataService from "../../services/ProductDataService";

export default {
  components: {
    DatePicker,
    ckeditor: CKEditor.component,
    VueUploadMultipleImage
  },
  name: "AdminProductCreate",
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Admin Auction Online',
      // all titles will be injected into this template
      titleTemplate: '%s | Auction Management'
    },
  data() {
    return {
      step : 1,
      myIdUpload1 : 1,
      myIdUpload2 : 2,
      auction_product_images: [],
      auction_user_card_no_images: [],
      product_owner_represent_id_card_image_front: [],
      product_owner_represent_id_card_image_back: [],
      auction_required_list: ['deposit_start_date', 'deposit_start_time',
                              'view_start_date', 'view_start_time',
                               'auction_start_date', 'auction_start_time',
                               'auction_end_date', 'auction_end_time'],
// step 1 
      auction: {},
      // product_title,
      // deposit_start_time: null,
      // deposit_start_date: null,
      // view_start_time: null,
      // view_start_date: null,
      // auction_start_time: null,
      // auction_start_date: null,
      // auction_end_time: null,
      // auction_end_date: null,

// step 2
      

      
      // product_type: '',
      // product_kind: '',
      // product_name:'',
      // product_begin_prize: null,
      // product_step_prize: null,
      
      // product_loc_city:'',
      // product_loc_district:'',
      // product_loc_wards:'',
      // product_loc_street: '',
      // product_detail_data: '',
      editorConfig: {},
// step 3
      // product_owner_type: 2,
      // product_owner_name: '',
      // product_owner_business_regis_no: null,
      // product_owner_business_regis_no_date: '',
      // product_owner_business_regis_no_place: '',
      // product_owner_tax_code: '',
      // product_owner_phone: '',
      // product_owner_email: '',
      // product_owner_city: '',
      // product_owner_district: '',
      // product_owner_wards: '',
      // product_owner_street: '',
      // product_owner_represent_surname: '',
      // product_owner_represent_name: '',
      // product_owner_represent_position: '', 
      // product_owner_represent_phone: '',
      // product_owner_represent_email: '',
      // product_owner_represent_gender: '',
      // product_owner_represent_dob: '',
      // product_owner_represent_id_card: '',
      // product_owner_represent_id_card_date: '',
      // product_owner_represent_id_card_place: '',
      // product_owner_represent_bank_no: '',
      // product_owner_represent_bank_name: '',
      // product_owner_represent_bank_branch: '',
      // product_owner_represent_bank_user_name: ''


      
    }
  },
  methods: {
    uploadProductImageSuccess(formData, index, fileList) {
      this.auction.product_images = fileList;
    },
    uploadProductOwnerImageFrontSuccess(formData, index, fileList) {
      this.auction.product_owner_represent_id_card_image_front = fileList;
    },
    uploadProductOwnerImageBackSuccess(formData, index, fileList) {
      this.auction.product_owner_represent_id_card_image_back = fileList;
      // Upload image api
      // axios.post('http://your-url-upload', { data: formData }).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm("remove image")
      if (r == true) {
        done()
      } else {
      }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    },
    dataChange (data) {
      console.log(data)
    },
    createAuction() {

      this.auction = this.convertProductData(this.auction);
      console.log(this.auction);
      ProductDataService.create(this.auction)
      .then(response => {
          console.log("Create ok");
          this.$router.push('/admin/products');
        })
        .catch(e => {
          console.log("Create faild");
          console.log(e);
        });
    },
    convertProductData(data){
      if (data.deposit_start_date && data.deposit_start_time) {
        data.deposit_start_date.setHours(data.deposit_start_time.getHours());
        data.deposit_start_date.setMinutes(data.deposit_start_time.getMinutes());
        data.deposit_start_time = data.deposit_start_date;
      }

      if (data.view_start_date && data.view_start_time) {
        data.view_start_date.setHours(data.view_start_time.getHours());
        data.view_start_date.setMinutes(data.view_start_time.getMinutes());
        data.view_start_time = data.view_start_date;
      }

      if (data.auction_start_date && data.auction_start_time) {
        data.auction_start_date.setHours(data.auction_start_time.getHours());
        data.auction_start_date.setMinutes(data.auction_start_time.getMinutes());
        data.auction_start_time = data.auction_start_date;
      }

      if (data.auction_end_date && data.auction_end_time) {
        data.auction_end_date.setHours(data.auction_end_time.getHours());
        data.auction_end_date.setMinutes(data.auction_end_time.getMinutes());
        data.auction_end_time = data.auction_end_date;
      }
      return data;
    }
  },
  
  mounted() {
      // add external script hereeee
      // let recaptchaScript = document.createElement('script')
      // let recaptchaScript2 = document.createElement('script')
      // recaptchaScript.setAttribute('src', 'https://cdn.ckeditor.com/4.10.0/standard/ckeditor.js')
      // recaptchaScript2.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js')
      // document.head.appendChild(recaptchaScript)
      // document.head.appendChild(recaptchaScript2)

  }
};
</script>

<style>

</style>
