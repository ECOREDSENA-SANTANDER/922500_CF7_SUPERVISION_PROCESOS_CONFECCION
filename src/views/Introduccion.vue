<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-lg-12.col-10
          p En el siguiente video se presentará en que consisten lo planes de mantenimiento de maquinaria y equipos.
      
          figure(data-aos="fade-right").py-2
            .video.mb-1
              iframe(width="1280" height="720" src="https://youtube.com/embed/oRpwVDaJc8I" title="mantenimiento de maquinaria y equipos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. mantenimiento de maquinaria y equipos
      

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
