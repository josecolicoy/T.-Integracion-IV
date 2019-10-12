<template>
  <div >
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand ><router-link id="boton" to="/" class="text-decoration-none">Home</router-link> </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item ><router-link id="boton" to="/arquetipo" class="text-decoration-none">Arquetipos</router-link> </b-nav-item>
          <b-nav-item ><router-link id="boton" to="/cargar" class="text-decoration-none">Cargar</router-link></b-nav-item>
          <b-nav-item ><router-link id="boton" to="/descargar" class="text-decoration-none">Descargar</router-link></b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item ><router-link id="boton" to="/about" class="text-decoration-none">About</router-link></b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'Helloworld'
}
</script>

<style scoped>
  #boton {
      color: aliceblue;  
    }
</style>