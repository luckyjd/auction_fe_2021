<template>
  <div>
<!--    <header>-->

<!--    </header>-->
    <div id="main-container" class="">
      <div id="header-container">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
          <a href="#" class="navbar-brand">Nhattx</a>
          <div class="navbar-nav mr-auto">
            <li class="nav-item">
              <a href="/tutorials" class="nav-link">Tutorials</a>
            </li>
            <li class="nav-item">
              <a href="/add" class="nav-link">Add</a>
            </li>
          </div>
        </nav>
      </div>
      <div id="page-content">
        <router-view />
      </div>
      <div id="footer-container">

      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Layout",
}
</script>

<style scoped>

</style>