<template>
  <div id="contenedor">
    <h1>Se debe mostrar una tabla con una lista de arquetipos para descargar</h1>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' },
          { Numero: 40, Autor: 'Dickerson', Area: 'Macdonald', Enlace: 'Descarga' }
        ]
      }
    }
  }
</script>

<style scoped>
  #contenedor {
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
</style>