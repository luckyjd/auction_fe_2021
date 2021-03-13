<template>
  <div class="row row-no-margin p-0">
    <div class="nar-product-slide-wrapper row-no-margin col-12 p-0 d-flex justify-content-start">
      <div class="nar-product-h p-0 col-3 position-relative">
        <ul class="mainmenu pt-3">
          <li class="position-relative"><a href="">Tài sản thanh lý</a>
            <ul class="submenu position-absolute">
              <li><a href="">Tài sản công</a></li>
              <li><a href="">Tài sản của tổ chức khác</a></li>
            </ul>
          </li>
          <li><a href="">Tài sản phát mại</a></li>
          <li><a href="">QSD đất để NN giao đất</a></li>
          <li><a href="">Tang vật bị tịch thu</a></li>
          <li><a href="">Ts đặc biệt- TS khác</a></li>
        </ul>
        <div class="position-absolute hotline">
          <p>Hotline 0976 448 446</p>
        </div>
      </div>
      <div class="rev-slider-wrapper col-9 p-0">
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="3000"
            controls
            indicators
            background="#ccc"
            img-width="900"
            img-height="320"
            style="text-shadow: 1px 1px 2px #000;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
              img-src="~@/assets/image/revolution-slider/bg-slide-3.jpg"
          ></b-carousel-slide>

          <b-carousel-slide
              img-src="~@/assets/image/revolution-slider/bg-slide-2.jpg"
          ></b-carousel-slide>

          <b-carousel-slide
              img-src="~@/assets/image/revolution-slider/bg-slide-1.jpg"
          ></b-carousel-slide>

  <!--         Slides with custom text-->
  <!--        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">-->
  <!--          <h1>Hello world!</h1>-->
  <!--        </b-carousel-slide>-->

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
  <!--        <b-carousel-slide>-->
  <!--          <template v-slot:img>-->
  <!--            <img-->
  <!--                class="d-block img-fluid w-100"-->
  <!--                width="1170"-->
  <!--                height="320"-->
  <!--                src="https://picsum.photos/1024/480/?image=52"-->
  <!--                alt="image slot"-->
  <!--            >-->
  <!--          </template>-->
  <!--        </b-carousel-slide>-->

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
  <!--        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">-->
  <!--          <p>-->
  <!--            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt-->
  <!--            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.-->
  <!--          </p>-->
  <!--        </b-carousel-slide>-->
        </b-carousel>
      </div>
    </div><!--    end nar-product-slide-wrapper-->
    <div class="auction-process-wrapper col-12 p-3">
      <div class="col-12 p-0">
        <p class="font-bold">Quy trình đấu giá</p>
      </div>
      <div class="col-12 p-0 auction-process-step d-flex justify-content-center">
        <div class="step-cover col-2 p-0 pr-3">
          <div class="step-1 p-2">
            <div class="step-icon d-flex justify-content-start align-items-center">
              <i class="fa fa-file-text" aria-hidden="true"></i>
              <div class="pl-2 font-regular">Bước 1 </div>
            </div>
            <div class="p-1 font-medium">Thông báo đấu giá</div>
          </div>
        </div>
        <div class="step-cover col-2 p-0 pr-3">
          <div class="step-2 p-2">
            <div class="step-icon d-flex justify-content-start align-items-center">
              <i class="fa fa-eye" aria-hidden="true"></i>
              <div class="pl-2 font-regular">Bước 2 </div>
            </div>
            <div class="p-1 font-medium">Xem sản phẩm đấu giá</div>
          </div>
        </div>
        <div class="step-cover col-2 p-0 pr-3">
          <div class="step-3 p-2">
            <div class="step-icon d-flex justify-content-start align-items-center">
              <i class="fa fa-credit-card-alt " aria-hidden="true"></i>
              <div class="pl-2 font-regular">Bước 3 </div>
            </div>
            <div class="p-1 font-medium">Đặt cọc tiền đấu giá</div>
          </div>
        </div>
        <div class="step-cover col-2 p-0 pr-3">
          <div class="step-4 p-2">
            <div class="step-icon d-flex justify-content-start align-items-center">
              <i class="fa fa-gavel" aria-hidden="true"></i>
              <div class="pl-2 font-regular">Bước 4 </div>
            </div>
            <div class="p-1 font-medium">Tham gia đấu giá</div>
          </div>
        </div>
        <div class="step-cover col-2 p-0 pr-3">
          <div class="step-5 p-2">
            <div class="step-icon d-flex justify-content-start align-items-center">
              <i class="fa fa-check-circle" aria-hidden="true"></i>
              <div class="pl-2 font-regular">Bước 5 </div>
            </div>
            <div class="p-1 font-medium">Đấu giá thành công</div>
          </div>
        </div>
        <div class="step-cover col-2 p-0">
          <div class="step-6 p-2">
            <div class="step-icon d-flex justify-content-start align-items-center">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              <div class="pl-2 font-regular">Bước 6 </div>
            </div>
            <div class="p-1 font-medium">Quyết toán </div>
          </div>
        </div>
      </div>
    </div> <!-- end auction-process-wrapper-->
    <div class="auction-info-wrapper col-12 p-0 d-flex justify-content-center">
      <div class="col-9 p-0 pr-4">
        <div class="row row-no-margin auction-today p-3">
          <div class="col-12 p-0 font-bold font-20 pb-1">Đấu giá hôm nay</div>
          <div class="col-12 p-0 d-flex justify-content-between">
            <div class="font-14 font-medium" style="color: #8A91A1;">8 sản phẩm</div>
            <div class="font-14 font-medium" style="color: #274AF2;">Xem tất cả</div>
          </div>
          <div class="col-4 p-0 auction-today-post p-2">
            <div class="auction-today-post-single">
              <img src="~@/assets/image/auction-today-post/img3.png">
              <div class="row row-no-margin p-2 font-14">
                <div class="font-14 font-medium">This is auction-today-post title long long long long </div>
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
          <div class="col-4 p-0 auction-today-post p-2">
            <div class="auction-today-post-single">
              <img src="~@/assets/image/auction-today-post/img2.png">
              <div class="row row-no-margin p-2 font-14">
                <div class="font-14 font-medium">This is auction-today-post title long long long long </div>
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
          <div class="col-4 p-0 auction-today-post p-2">
            <div class="auction-today-post-single">
              <img src="~@/assets/image/auction-today-post/img.png">
              <div class="row row-no-margin p-2 font-14">
                <div class="font-14 font-medium">This is auction-today-post title long long long long </div>
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
          <div class="col-4 p-0 auction-today-post p-2">
            <div class="auction-today-post-single">
              <img src="~@/assets/image/auction-today-post/img.png">
              <div class="row row-no-margin p-2 font-14">
                <div class="font-14 font-medium">This is auction-today-post title long long long long </div>
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
          <div class="col-4 p-0 auction-today-post p-2">
            <div class="auction-today-post-single">
              <img src="~@/assets/image/auction-today-post/img3.png">
              <div class="row row-no-margin p-2 font-14">
                <div class="font-14 font-medium">This is auction-today-post title long long long long </div>
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
          <div class="col-4 p-0 auction-today-post p-2">
            <div class="auction-today-post-single">
              <img src="~@/assets/image/auction-today-post/img3.png">
              <div class="row row-no-margin p-2 font-14">
                <div class="font-14 font-medium">This is auction-today-post title long long long long </div>
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
          <div class="col-4 p-0 auction-today-post p-2">
            <div class="auction-today-post-single">
              <img src="~@/assets/image/auction-today-post/img3.png">
              <div class="row row-no-margin p-2 font-14">
                <div class="font-14 font-medium">This is auction-today-post title long long long long </div>
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
      <div class="auction-notification col-3 p-3">
        <div class="col-12 p-0 font-bold font-16 text-center pb-4">Thông báo đấu giá</div>
        <!-- <div class="font-12 col-12" style="color: #000000;"></div> -->
        <div class="col-12 p-0 auction-notification-post pb-2">
          <div class="auction-notification-post-single">
            <img src="~@/assets/image/revolution-slider/bg-slide-3.jpg">
            <div class="row row-no-margin p-2 font-14">
              <div class="text-gray font-regular pb-2">30/10/2020 </div>
              <div class="auction-notification-post-single-title font-bold pb-2">Auction today post title title long long long , so long , so long ,so long </div>
              <div class="auction-notification-post-single-description ">
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 p-0 auction-notification-post pb-2">
          <div class="auction-notification-post-single">
            <img src="~@/assets/image/revolution-slider/bg-slide-3.jpg">
            <div class="row row-no-margin p-2 font-14">
              <div class="text-gray font-regular pb-2">30/10/2020 </div>
              <div class="auction-notification-post-single-title font-bold pb-2">Auction today post title title long long long , so long , so long ,so long </div>
              <div class="auction-notification-post-single-description ">
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> <!--  end aution-info-wrapper  -->
    <div class="auction-news-wrapper col-12 p-0">
      <div class="row row-no-margin auction-news p-3">
        <div class="col-12 p-0 font-bold font-20 pb-2">Tin tức</div>
        <div class="col-4 p-0 auction-news-post p-2">
          <div class="auction-news-post-single">
            <img src="~@/assets/image/auction-today-post/img3.png">
            <div class="row row-no-margin p-2 font-14">
              <div class="text-gray font-regular pb-2">30/10/2020 </div>
              <div class="auction-notification-post-single-title font-bold pb-2">Auction today post title title long long long , so long , so long ,so long </div>
              <div class="auction-notification-post-single-description">
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 p-0 auction-news-post p-2">
          <div class="auction-news-post-single">
            <img src="~@/assets/image/auction-today-post/img2.png">
            <div class="row row-no-margin p-2 font-14">
              <div class="font-regular text-gray pb-2">30/10/2020 </div>
              <div class="auction-notification-post-single-title font-bold pb-2">Auction today post title title long long long , so long , so long ,so long </div>
              <div class="auction-notification-post-single-description">
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 p-0 auction-news-post p-2">
          <div class="auction-news-post-single">
            <img src="~@/assets/image/auction-today-post/img.png">
            <div class="row row-no-margin p-2 font-14">
              <div class="font-regular text-gray pb-2">30/10/2020 </div>
              <div class="auction-notification-post-single-title font-bold pb-2">Auction today post title title long long long , so long , so long ,so long </div>
              <div class="auction-notification-post-single-description">
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 p-0 auction-news-post p-2">
          <div class="auction-news-post-single">
            <img src="~@/assets/image/auction-today-post/img.png">
            <div class="row row-no-margin p-2 font-14">
              <div class="font-regular text-gray pb-2">30/10/2020 </div>
              <div class="auction-notification-post-single-title font-bold pb-2">Auction today post title title long long long , so long , so long ,so long </div>
              <div class="auction-notification-post-single-description">
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 p-0 auction-news-post p-2">
          <div class="auction-news-post-single">
            <img src="~@/assets/image/auction-today-post/img3.png">
            <div class="row row-no-margin p-2 font-14">
              <div class="font-regular text-gray pb-2">30/10/2020 </div>
              <div class="auction-notification-post-single-title font-bold pb-2">Auction today post title title long long long , so long , so long ,so long </div>
              <div class="auction-notification-post-single-description">
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 p-0 auction-news-post p-2">
          <div class="auction-news-post-single">
            <img src="~@/assets/image/auction-today-post/img3.png">
            <div class="row row-no-margin p-2 font-14">
              <div class="font-regular text-gray pb-2">30/10/2020 </div>
              <div class="auction-notification-post-single-title font-bold pb-2">Auction today post title title long long long , so long , so long ,so long </div>
              <div class="auction-notification-post-single-description">
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 p-0 p-1 auction-news-post p-2">
          <div class="auction-news-post-single">
            <img src="~@/assets/image/auction-today-post/img3.png">
            <div class="row row-no-margin p-2 font-14">
              <div class="font-regular text-gray pb-2">30/10/2020 </div>
              <div class="auction-notification-post-single-title font-bold pb-2">Auction today post title title long long long , so long , so long ,so long </div>
              <div class="auction-notification-post-single-description">
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
                Auction today post title description description description description long long long , so long , so long ,so long
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
  name: "homepage",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
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
