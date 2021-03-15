<template>

  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Auction Online',
      // all titles will be injected into this template
      titleTemplate: '%s | %s Webapp'
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
</style>