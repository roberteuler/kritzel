<template>
<div class="krz krz-app">
<nav class="navbar krz" role="navigation" aria-label="main navigation">

  <div class="navbar-brand">
    <a class="krz navbar-item">
       <router-link to="/">
      <img src="./assets/Logo2.png" width="40" height="70">
      </router-link>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="krz navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <router-link to="/">
              Home
            </router-link>
            
          </a>
          <a class="button is-primary">
            <router-link to="/Score">Score</router-link>
          </a>
        </div>
      </a>

    </div>

  </div>
</nav>
<router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import "~bulma/css/bulma.css";
/* main color #00C4A7 */
html, .krz{
background-image: url("./assets/background.png");
background-attachment: fixed;
background-size: 256px;
background-position-x: 50%;
background-position-y: 50%;


}
.krz-app{
  min-height:100%;
}

</style>
