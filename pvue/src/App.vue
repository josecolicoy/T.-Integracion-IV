<template>
  <div id="app">
    <div id="nav">
      <HelloWorld />
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/cargar">cargar</router-link> |
      <router-link to="/descargar">descargar</router-link> |
      <router-link to="/arquetipo">arquetipo</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>