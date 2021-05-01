<template>
  <div>
    <div class="row row-no-margin p-0 template-content-container">
      <div class="auction-info-wrapper col-12 p-0 d-flex justify-content-center">
        <div class="col-8 p-0">
          <div class="row row-no-margin auction-today p-8p">
            <div class="col-12 p-0">
              <div class="row row-no-margin">
                <div class="col-12 font-bold font-20 p-0 pb-4p pl-8p">Xe ô tô Trung Quốc đời Tống, không rõ là hãng
                  nào
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
                <div class="row-no-margin list-images">
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
          <div class="row row-no-margin auction-today p-8p">
            <div class="col-12 p-0">
              <div class="row row-no-margin">
                <div class="col-12 font-bold font-20 p-0 pb-4p pl-8p">Thông tin tài sản</div>
              </div>
            </div>
            <div class="col-12 p-0">
              <div class="row row-no-margin">
                <div class="col-12 p-0 auction-today-post p-8p">
                  <div class="table-info-auction pb-8p">
                    <table class="table">
                      <thead>
                      <tr>
                        <th class="font-bold" scope="col">Tình trạng</th>
                        <th class="font-bold" scope="col">Hãng sản xuất</th>
                        <th class="font-bold" scope="col">Dòng xe</th>
                        <th class="font-bold" scope="col">Năm sản xuất</th>
                        <th class="font-bold" scope="col">Xuất xứ</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Đã qua sử dụng</td>
                        <td>Kia</td>
                        <td>Sedan</td>
                        <td>2012</td>
                        <td>China</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="table-info-auction">
                    <table class="table">
                      <thead>
                      <tr>
                        <th scope="col">Tình trạng</th>
                        <th scope="col">Hãng sản xuất</th>
                        <th scope="col">Dòng xe</th>
                        <th scope="col">Năm sản xuất</th>
                        <th scope="col">Xuất xứ</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Đã qua sử dụng</td>
                        <td>Kia</td>
                        <td>Sedan</td>
                        <td>2012</td>
                        <td>China</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="pb-8p">
                    <p>+ Vị trí cực đẹp Phố Phạm Hồng Thái là một trong những con phố đẹp, thoáng và sạch sẽ nhất quận
                      Ba Đình, kinh doanh cực đỉnh THU NHẬP 45 TRIỆU/THÁNG, khu vực dân trí cực cao, sầm uất nhiều công
                      sở, khách sạn lớn.</p>
                    <p>+ Diện tích sử dụng 188m2 Nhà xây 4 tầng chắc chắn, tọa lạc ở vị trí đẹp nhất phố, vỉa hè kinh
                      doanh lý tưởng để cho thuê văn phòng, công ty, nhà hàng, spa doanh thu đều cực kỳ cao. + Sổ đỏ
                      chính chủ - Giá bán 17.5 tỷ.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 p-0">
              <div class="row row-no-margin">
                <div class="col-12 font-bold font-20 p-0 pb-4p pl-8p">Vị trí</div>
                <div class="col-12 p-0 d-flex justify-content-between pl-8p pr-8p">
                  <div class="font-14 font-medium" style="color: #8A91A1;">Số 1 Tràng Tiền, Q. Hoàn Kiếm, Phường Tràng
                    Tiền, Hà Nội
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 p-0">
              <div class="row row-no-margin">
                <div class="col-12 p-0 auction-today-post p-8p">
                  <div class="table-info-auction pb-8p">

                  </div>
                  <div class="pb-8p">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.213050001854!2d105.8556486150294!3d21.024159693310985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abebfda1baad%3A0x47279bca5bb3202!2zMSBUcsOgbmcgVGnhu4FuLCBQaGFuIENodSBUcmluaCwgSG_DoG4gS2nhur9tLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1619626193376!5m2!1svi!2s"
                      width="720" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div class="col-12 p-0 font-bold font-20 pb-8p pl-8p pr-8p">Tươg tự</div>
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
                images: [
                    "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
                    "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
                    "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
                ],
                imageSelected: "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
            }
        },
        components: {},
        mounted() {
            // add external script hereeee
            // let recaptchaScript = document.createElement('script')
            // let recaptchaScript2 = document.createElement('script')
            // recaptchaScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
            // recaptchaScript2.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js')
            // document.head.appendChild(recaptchaScript)
            // document.head.appendChild(recaptchaScript2)


        },
        computed: {},
        methods: {
            selectImage(image) {
                this.imageSelected = image;
            }


        }


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
