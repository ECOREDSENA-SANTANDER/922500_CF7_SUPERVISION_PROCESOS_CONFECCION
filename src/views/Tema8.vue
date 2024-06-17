<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Buenas prácticas para el mantenimiento de máquinas

    .row.mb-5
      .col-lg-7(data-aos='fade-right')
        p Parte del buen uso de las máquinas de confección radica en un adecuado mantenimiento, por ello se hace necesario evidenciar la generalidad de las buenas prácticas en este aspecto. 

        p Según el portal #[em web Skarlett] Costura (2015), desde el primer momento en que se adquiere una máquina de confección es importante tener una serie de cuidados con miras a mantener una larga vida a este importante elemento para la producción textil. En primer lugar, se destaca la importancia del entendimiento del manual de instrucciones, lo cual permite conocer de mejor manera la herramienta de trabajo y podrá ser el primer paso para una posible eventualidad. Igualmente, se recomienda el uso de materiales como hilos y agujas de mediana o buena calidad a la hora de integrar a la máquina de confección, lo cual podrá prevenir situaciones que generen problemas a largo plazo. Del mismo modo, la limpieza es un factor fundamental para el funcionamiento de la máquina y el mantenimiento de esta, donde las principales zonas que se deberá limpiar será la lanzadera y el arrastre, en este punto se hace referencia a los primeros auxilios en mantenimiento, donde se espera utilizar mínimamente herramientas como el destornillador. Después de la limpieza, se procede con el engrase en la misma zona de la lanzadera, lo cual será necesario y suficiente para un mantenimiento común.

        
      .col-lg-5(data-aos='fade-left')
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 14.
          span Limpieza de la máquina especificando la lanzadera y la zona de arrastre.
        figure.mb-5
          img(src='@/assets/curso/tema_8/img_1.png', alt='La fotografía presenta una maquina de coser donde se resaltan la zona de la lanzadera y la zona del arrastre.')

    .hr1
    .bloque-texto-b.color-rosadoD.p-4.mb-5(data-aos='fade-left')
      .bloque-texto-b__texto
        i.fas.fa-quote-left
        h5 De acuerdo con el blog Ananas Labores y Manualidades (2016) el hecho de mantener una buena práctica de higiene con respecto al mantenimiento de las máquinas de confección permite prevenir la generación de elementos obstructivos como pelusas o restos de hilo que podrían entorpecer el funcionamiento de algunas piezas. Dichos elementos pueden surgir después de cierto tiempo o determinada cantidad de producción, por lo tanto, la limpieza se debe realizar periódicamente para evitar retrasos e inconvenientes en la misma producción. 
        i.fas.fa-quote-right.d-flex.justify-content-end
    
    .row.d-flex
      .col-lg-4.mb-5.d-flex(data-aos='fade-right')
        figure
          img(src='@/assets/curso/tema_8/img_2.png', alt='Texto que describa la imagen')
      .col-lg-8(data-aos='fade-left')
        p De otro lado, el engrasado de la máquina de confección evitará los rozamientos indebidos, siempre teniendo en cuenta que este procedimiento se realiza después del proceso de limpieza comentado anteriormente. Además, es importante que el engrasado se realice con un tiempo prudente de anticipación al proceso de producción para desarrollarlo sin percances, por lo que se recomienda realizar algunas puntadas sobre un trozo de tela para eliminar los restos del aceite y así no tener problemas con las próximas prendas. 


        p Entre otros aspectos que se destaca, se encuentra el cambio periódico de la bombilla que ilumina la zona de trabajo y la limpieza de la carcasa externa de la máquina, los cuales se constituyen como elementos que todo operario debe tener muy presente para el desarrollo de buenas prácticas en cuanto al mantenimiento de la máquina de confección.
          





        

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
