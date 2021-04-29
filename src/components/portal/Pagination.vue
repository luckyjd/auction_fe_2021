<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      first-number
      last-number
      class="no-boder "
    ></b-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
          { id: 10, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 11, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 12, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 13, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>

<style>
.page-item button{
    border: none;
    outline: none;
    border-radius: 0.25rem;
}
.page-link{
    border: none;
    color: #713C39;
    font-weight: 900;
    background: none;
}
.page-item.active .page-link{
    background: #713C39;
    color: #ffffff;
    border-radius: 0.25rem;
    border-color: none !important;
}

</style>