<template>
  <div>
    Product Detail 
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
