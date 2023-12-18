<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg-7.mb-3(data-aos='fade-right')
        p Dentro de las actividades pertinentes, necesarias y funcionales que se deben realizar para ayudar al excelente funcionamiento de una planta de producción de confecciones, se encuentra la que se refiere a planear y ejecutar tareas de mantenimiento, es decir, las acciones que están encaminadas a mejorar y conservar la maquinaria y herramientas que dotan estas plantas.

        p Planear un buen mantenimiento requiere definir recursos técnicos, humanos, económicos y logísticos, hace parte de un programa que además de la planeación y tiene que ver con la ejecución, el control, la verificación y las acciones de mejora. La persona encargada de administrar estas plantas de confección debe conocer sobre el manejo de los equipos, tanto en términos técnicos, físicos, como de información, en lo que se refiere a las máquinas y herramientas. 

        .cajon.color-secundario.p-4
          p Además, debe entender la importancia del equipo de máquinas y herramientas y ejecutar una buena administración de él, donde el mantenimiento es parte fundamental y ayuda de manera significativa a que la organización tenga éxito en su gestión.
      .col-lg-5.d-flex(data-aos='fade-left')
        figure
          img(src='@/assets/curso/tema_1/img_1.png', alt='Texto que describa la imagen')

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
