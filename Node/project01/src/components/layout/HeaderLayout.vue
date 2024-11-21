<template>
   <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/input">List</router-link> |
    <router-link to="/click">Evenvt</router-link> |
    <router-link to="/page">Page</router-link> |
    <router-link to="/parent">Parent</router-link> |
    <router-link to="/table">Table</router-link> |
    <router-link to="/grid">Ex</router-link>
  </nav>  -->
 

 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" @click="goToMenu('/')">MyBlog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" @click="goToMenu('/')">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToMenu('input')">List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToMenu('click')">Evenvt</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToMenu('parent')">Parent</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToMenu('table')">Table</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToMenu('page')">Page</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToMenu('vuex')">Ex</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToMenu('mixi')">Mixin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToMenu('plug')">Languegae</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToMenu('auth')">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
</template>

<script>
export default {
    methods: {
        goToMenu(path) {
            this.$router.push({path : path})
        }
    }
}
</script>

<style scoped>
a {
    cursor : pointer;
}
</style>
