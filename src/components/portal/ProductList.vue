<template>
  <div class="row row-no-margin p-0">
    <div class="row row-no-margin  d-flex justify-content-center">
      <div class="row row-no-margin template-content-container">
        <div class="row row-no-margin p-0 d-flex justify-content-end align-items-center user-info">
              <!-- <div class="col-8 p-0 d-flex justify-content-start search-group pl-1 pr-1"> -->
            <div class="row row-no-margin search-group d-flex justify-content-start align-items-center">
              <div class="col-8 p-0 d-flex justify-content-start align-items-center">
                <div class="m-1 pl-4p pr-4p">
                  <div class="search-icon"></div>
                </div>
                <input class="border-0 " type="text" placeholder="Tên tài sản" id="product_name" name="product_name" >
              </div>
              <div class="col-4 p-0 d-flex justify-content-start align-items-center">
                <div class="">
                  <date-range-picker
                    v-model="dateRange"
                  ></date-range-picker>
                </div>
                <button type="button" class="btn btn-primary" style="background-color: #713C39; border-color: #713C39;">Tìm Kiếm</button>
              </div>
            </div>
            <div class="auction-info-wrapper col-12 p-0 d-flex justify-content-center">
      <div class="col-12 p-0 pr-24p">
        <div class="row row-no-margin auction-today p-8p">
          <div class="col-12 p-0">
            <div class="row row-no-margin">
              <div class="col-12 font-bold font-20 p-0 pb-4p pl-8p">Đấu giá hôm nay</div>
              <div class="col-12 p-0 d-flex justify-content-between pl-8p pr-8p">
                <div class="font-14 font-medium" style="color: #8A91A1;">8 sản phẩm</div>
                <a class="font-14 font-medium" style="color: #274AF2;">Xem tất cả</a>
              </div>
            </div>
          </div>
          <div class="col-12 p-0">
            <div class="row row-no-margin">
              <div class="col-3 p-0 auction-today-post p-8p">
                <div class="auction-today-post-single">
                  <img src="~@/assets/image/auction-today-post/img3.png">
                  <div class="row row-no-margin p-8p font-14">
                    <div class="font-14 font-bold">This is auction-today-post title long long long long </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá hiện tại:</div>
                      <div class="text-red font-bold">120.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá khởi điểm:</div>
                      <div class="text-gray font-regular">36.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Kết thúc:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3 p-0 auction-today-post p-8p">
                <div class="auction-today-post-single">
                  <img src="~@/assets/image/auction-today-post/img2.png">
                  <div class="row row-no-margin p-8p font-14">
                    <div class="font-14 font-bold">This is auction-today-post title long long long long </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá hiện tại:</div>
                      <div class="text-red font-bold">120.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá khởi điểm:</div>
                      <div class="text-gray font-regular">36.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Kết thúc:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3 p-0 auction-today-post p-8p">
                <div class="auction-today-post-single">
                  <img src="~@/assets/image/auction-today-post/img.png">
                  <div class="row row-no-margin p-8p font-14">
                    <div class="font-14 font-bold">This is auction-today-post title long long long long </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá hiện tại:</div>
                      <div class="text-red font-bold">120.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá khởi điểm:</div>
                      <div class="text-gray font-regular">36.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Kết thúc:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3 p-0 auction-today-post p-8p">
                <div class="auction-today-post-single">
                  <img src="~@/assets/image/auction-today-post/img.png">
                  <div class="row row-no-margin p-8p font-14">
                    <div class="font-14 font-bold">This is auction-today-post title long long long long </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá hiện tại:</div>
                      <div class="text-red font-bold">120.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá khởi điểm:</div>
                      <div class="text-gray font-regular">36.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Kết thúc:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3 p-0 auction-today-post p-8p">
                <div class="auction-today-post-single">
                  <img src="~@/assets/image/auction-today-post/img3.png">
                  <div class="row row-no-margin p-8p font-14">
                    <div class="font-14 font-bold">This is auction-today-post title long long long long </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá hiện tại:</div>
                      <div class="text-red font-bold">120.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá khởi điểm:</div>
                      <div class="text-gray font-regular">36.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Kết thúc:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3 p-0 auction-today-post p-8p">
                <div class="auction-today-post-single">
                  <img src="~@/assets/image/auction-today-post/img3.png">
                  <div class="row row-no-margin p-8p font-14">
                    <div class="font-14 font-bold">This is auction-today-post title long long long long </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá hiện tại:</div>
                      <div class="text-red font-bold">120.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá khởi điểm:</div>
                      <div class="text-gray font-regular">36.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Kết thúc:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div> <!--  end aution-info-wrapper  -->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import daterangepicker 
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
// import ProductDataService from "../../services/ProductDataService";

export default {
  name: "products",
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Auction Online',
      // all titles will be injected into this template
      titleTemplate: '%s | Products'
    },
  data() {
      return {
        dateRange: {
          startDate: '2021-03-20',
          endDate: '2021-03-28',
        },
      }
    },
  methods: {
    dateFormat (classes, date) {
        if (!classes.disabled) {
          classes.disabled = date.getTime() < new Date()
        }
        return classes
      },
    // retrieveProducrts() {
    //   ProductDataService.getAll()
    //     .then(response => {
    //       this.products = response.data;
    //       // this.products.forEach(this.convertProducts);
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },
  },
  components: {
      DateRangePicker
    },
  mounted() {
      // add external script hereeee
      // let recaptchaScript = document.createElement('script')
      // let recaptchaScript2 = document.createElement('script')
      // recaptchaScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
      // recaptchaScript2.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js')
      // document.head.appendChild(recaptchaScript)
      // document.head.appendChild(recaptchaScript2)

      
  }
};
</script>

<style>

</style>
