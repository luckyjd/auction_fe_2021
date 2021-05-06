<template>
  <div>
    <div class="row row-no-margin p-0 template-content-container">
      <div class="auction-info-wrapper col-12 p-0 d-flex justify-content-center">
        <div class="col-8 p-0">
          <div class="row row-no-margin auction-today p-8p">
            <div class="col-12 p-0">
              <div class="row row-no-margin">
                <div class="col-12 font-bold font-20 p-0 pb-4p pl-8p">{{product.product_title}}
                </div>
              </div>
              <div class="row row-no-margin slider-image-product">
                <div class="main-image">
                  <div>
                    <img :src="imageSelected"/>
                  </div>
                  <!--                <a class="prev" @click="prev" href="#">&#10094; Previous</a>-->
                  <!--                <a class="next" @click="next" href="#">&#10095; Next</a>-->
                </div>
                <div class="row-no-margin list-images list-images-product-detail">
                  <div v-for="image in images" :key="image">
                    <img @click="selectImage(image)" :src="image"/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <hr width="5" size="500">
        <div class="auction-notification col-4 p-8p">
          <div class="row row-no-margin">
            <div class="col-12 p-0 d-flex justify-content-between pl-8p pr-8p pb-8p">
              <div class="font-14 font-medium" style="color: #555555;">Thời gian còn lại</div>
              <div class="font-14 font-medium" style="color: #713C39">00:12':05"</div>
            </div>
            <div class="col-12 p-0 d-flex justify-content-between pl-8p pr-8p pb-8p">
              <div class="font-14 font-medium" style="color: #555555;">Giá hiện tại</div>
              <div class="font-18 font-medium font-bold" style="color: #FF6464;">120.000.000 đ</div>
            </div>
            <div class="col-12 p-0 d-flex justify-content-between pl-8p pr-8p pb-24p">
              <div class="font-14 font-medium" style="color: #555555;">Giá khởi điểm</div>
              <div class="font-14 font-medium" style="color: #8A91A1;">36.000.000 đ</div>
            </div>
            <div class="col-12 p-25-50" style="background: #F4F6F8">
              <div class="col-12 p-0 d-flex justify-content-between pb-8p">
                <div class="font-14 font-medium" style="color: #555555;">Đặt giá</div>
                <div class="font-12 font-medium" style="color: #333333;">Bước giá 1.000.000 đ</div>
              </div>
              <div class="col-12 p-0 d-flex justify-content-center pl-24p pr-24p pb-12p">
                <input class="p-8p pr-16p bdr-1p bdr-r1p" type="number" placeholder="" name="product_step_prize"
                       style="min-width: 298px;"><span class="mt-8p" style="margin-left: -15px;">đ</span>
              </div>
              <div class="col-12 p-0 d-flex justify-content-center pl-24p pr-24p pb-12p">
                <div class="font-14 font-medium">
                  <button type="button" class="btn ml-24p pt-4p pb-4p pl-24p pr-24p"
                          style="background:#713C39; color:#ffffff">Đấu giá
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 p-0 pt-24p">
              <table class="table pay-status">
                <tbody>
                <tr>
                  <td>user0102</td>
                  <td>120.000.000 đ</td>
                  <td class="text-right">vừa xong</td>
                </tr>
                <tr>
                  <td>user1369</td>
                  <td>118.000.000 đ</td>
                  <td class="text-right">1 phút trước</td>
                </tr>
                <tr>
                  <td>user0102</td>
                  <td>117.000.000 đ</td>
                  <td class="text-right">20:02 20/02/2020</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="auction-info-wrapper col-12 p-0 d-flex justify-content-center">
        <div class="col-8 p-0 pr-24p">
            <div class="row row-no-margin product_detail_data_html pt-24p pb-24p" style="background-color: #fff;x" 
            v-html="product.product_detail_data"></div>
        </div>
        <div class="auction-notification col-4 p-8p">
          <div class="row row-no-margin">
            <div class="col-12 pt-8p pl-16p pr-16p pb-16p font-bold font-16 text-center">Đây là phần ảnh quảng cáo</div>
            <!-- <div class="font-12 col-12" style="color: #000000;"></div> -->
          </div>
        </div>
      </div> <!--  end aution-info-wrapper  -->
      <div class="auction-news-wrapper col-12 p-0">
        <div class="row row-no-margin auction-news p-8p">
          <div class="col-12 p-0 font-bold font-20 pb-8p pl-8p pr-8p">Tương tự</div>
          <div class="col-12 p-0 d-flex justify-content-between pl-8p pr-8p">
            <div class="font-14 font-medium" style="color: #8A91A1;">8 sản phẩm</div>
            <a class="font-14 font-medium" style="color: #274AF2;">Xem tất cả</a>
          </div>
          <div class="col-12 p-0">
            <div class="row row-no-margin">
              <div class="col-4 p-0 auction-today-post p-8p">
                <div class="auction-today-post-single">
                  <img src="~@/assets/image/auction-today-post/img3.png">
                  <div class="row row-no-margin p-8p font-14">
                    <div class="font-14 font-bold">This is auction-today-post title long long long long</div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá khởi điểm:</div>
                      <div class="text-red font-bold">120.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Bắt đầu:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Kết thúc:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 p-0 auction-today-post p-8p">
                <div class="auction-today-post-single">
                  <img src="~@/assets/image/auction-today-post/img2.png">
                  <div class="row row-no-margin p-8p font-14">
                    <div class="font-14 font-bold">This is auction-today-post title long long long long</div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá khởi điểm:</div>
                      <div class="text-red font-bold">120.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Bắt đầu:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Kết thúc:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 p-0 auction-today-post p-8p">
                <div class="auction-today-post-single">
                  <img src="~@/assets/image/auction-today-post/img.png">
                  <div class="row row-no-margin p-8p font-14">
                    <div class="font-14 font-bold">This is auction-today-post title long long long long</div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá khởi điểm:</div>
                      <div class="text-red font-bold">120.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Bắt đầu:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Kết thúc:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 p-0 auction-today-post p-8p">
                <div class="auction-today-post-single">
                  <img src="~@/assets/image/auction-today-post/img.png">
                  <div class="row row-no-margin p-8p font-14">
                    <div class="font-14 font-bold">This is auction-today-post title long long long long</div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá khởi điểm:</div>
                      <div class="text-red font-bold">120.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Bắt đầu:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Kết thúc:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 p-0 auction-today-post p-8p">
                <div class="auction-today-post-single">
                  <img src="~@/assets/image/auction-today-post/img3.png">
                  <div class="row row-no-margin p-8p font-14">
                    <div class="font-14 font-bold">This is auction-today-post title long long long long</div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá khởi điểm:</div>
                      <div class="text-red font-bold">120.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Bắt đầu:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Kết thúc:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 p-0 auction-today-post p-8p">
                <div class="auction-today-post-single">
                  <img src="~@/assets/image/auction-today-post/img3.png">
                  <div class="row row-no-margin p-8p font-14">
                    <div class="font-14 font-bold">This is auction-today-post title long long long long</div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Giá khởi điểm:</div>
                      <div class="text-red font-bold">120.000.000 đ</div>
                    </div>
                    <div class="col-12 p-0 d-flex justify-content-between">
                      <div class="text-gray font-regular">Bắt đầu:</div>
                      <div class="font-bold">09:00 - 15/11/2020</div>
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
    </div>
  </div>
</template>

<script>
    import ProductDataService from "../../services/ProductDataService";
    // import CommonService from "../../service-common";

    export default {
        name: "product_detail",
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
                product : {},
                images: [],
                imageSelected: "",
            }
        },
        methods: {
            selectImage(image) {
                this.imageSelected = image;
            },
            getProduct(id) {
                ProductDataService.get(id)
              .then(response => {
                this.product = response.data;
                this.convertImageLinkProducts(this.product);
                console.log(response.data);
              })
              .catch(e => {
                console.log(e);
              });
            },
            convertImageLinkProducts(data) {
              let list_image_convert = [];
              [1,2,3,4].forEach(function(index) {
                console.log(data['product_image_' + index])
                if (data['product_image_' + index] != null){
                  list_image_convert.push(process.env.VUE_APP_ROOT+ data['product_image_' + index])
                }
              });
              this.images = list_image_convert;
              this.imageSelected = this.images[0];
            }
        },
        components: {},
        mounted() {
            this.getProduct(this.$route.params.id);
            console.log(this.$route.params.id);
            // add external script hereeee
            // let recaptchaScript = document.createElement('script')
            // let recaptchaScript2 = document.createElement('script')
            // recaptchaScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
            // recaptchaScript2.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js')
            // document.head.appendChild(recaptchaScript)
            // document.head.appendChild(recaptchaScript2)


        },
        computed: {},
        


    };
</script>

<style scoped lang="scss">
  ::v-deep {
    .slider-image-product {
      margin-top: 25px;

      .main-image {
        width: 547px;
        height: 360px;
        margin-left: 15px;

        .fade-enter-active,
        .fade-enter,
        .fade-leave-to {
          visibility: hidden;
          width: 100%;
          opacity: 0;
        }

        img {
          width: 547px;
          height: 360px;
        }

        .prev, .next {
          cursor: pointer;
          position: absolute;
          top: 40%;
          width: auto;
          padding: 16px;
          color: white;
          font-weight: bold;
          font-size: 18px;
          transition: 0.7s ease;
          border-radius: 0 4px 4px 0;
          text-decoration: none;
          user-select: none;
        }

        .next {
          right: 0;
        }

        .prev {
          left: 0;
        }

        .prev:hover, .next:hover {
          background-color: rgba(0, 0, 0, 0.9);
        }
      }

      .list-images {
        width: 170px;
        max-height: 360px;
        margin-left: 30px;
        /*overflow: auto;*/
        img {
          width: 170px;
          height: 101px;
          border-radius: 4px;
          margin-bottom: 8px;
        }
      }
    }
  }

</style>
