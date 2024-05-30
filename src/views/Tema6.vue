<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Guías y accesorios para la confección

    p(data-aos='fade-right') Son elementos que se le adhieren, adaptan o incorporan a las máquinas como complemento para que aumenten su capacidad de hacer operaciones adicionales a las que era capaz de hacer en su diseño inicial, lo anterior, en muchos casos, ahorra la compra de otra máquina.


    p.mb-5(data-aos='fade-right') La guía por naturaleza que se utiliza es el pie prensatelas cuya forma, al hacer contacto con la tela, ayuda a hacer costuras rectas y a la distancia solicitada. 
    
      
    .cajon.cajon-color-rosa.p-4.mb-5(data-aos='fade-left')
      .row 
        .col-lg-7
          
          .row.justify-content-center
            .col-lg-11
              h5 Como beneficios de utilización de guías se tienen los siguientes:
              ul.lista-ul.color1
                .row 
                  .col-lg-1
                    li
                      i.fas.fa-atom
                  .col-lg-11
                    p.izq.c1 Manualmente no se logra la misma simetría y rectitud que se logra con las guías, por ese motivo en términos de calidad se cumplen mejor las expectativas de costura.
                .row 
                  .col-lg-1
                    li
                      i.fas.fa-atom
                  .col-lg-11
                    p.izq.c1 Su costo es bajo, por lo tanto, ayuda a rebajar costos en la empresa.
                .row 
                  .col-lg-1
                    li
                      i.fas.fa-atom
                  .col-lg-11
                    p.izq.c1 Las operaciones se realizan más rápido por ser la guía la que sostiene y conduce el tejido.
                .row 
                  .col-lg-1
                    li
                      i.fas.fa-atom
                  .col-lg-11
                    p.izq.c1 Su instalación no es complicada, o sea que cualquiera lo puede hacer, y habitualmente están sujetas por tornillos.
                .row 
                  .col-lg-1
                    li
                      i.fas.fa-atom
                  .col-lg-11
                    p.izq.c1 Ayudan a cumplir exigencias de diseño.
                .row 
                  .col-lg-1
                    li
                      i.fas.fa-atom
                  .col-lg-11
                    p.izq.c1 Sirven para alimentar tejido y a que se unan dos piezas, también son excelentes para hacer dobladillos.
                .row 
                  .col-lg-1
                    li
                      i.fas.fa-atom
                  .col-lg-11
                    p.izq.c1 El trabajo se vuelve más sencillo y produce menos fatiga, en beneficio del trabajador.
          
        .col-lg-5
          figure
            img.img-a(src='@/assets/curso/tema_6/img_1.svg', alt='Texto que describa la imagen')
      
    p.text-center.mb-5(data-aos='fade-left')
      strong A continuación, se presentan las guías mas usadas.

    .row.justify-content-center(data-aos='fade-right')
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 24.
          span Guías
        .row.justify-content-center
          .col-lg-3
            figure.mb-3
              img.img-a(src='@/assets/curso/tema_6/img_2.png', alt='trebol')
            h5.text-center Guía trébol
          .col-lg-3
            figure.mb-3
              img.img-a(src='@/assets/curso/tema_6/img_3.png', alt='forma T')
            h5.text-center Guía en forma de T
          .col-lg-3
            figure.mb-3
              img.img-a(src='@/assets/curso/tema_6/img_4.png', alt='Rodillo')
            h5.text-center  Guía de rodillo
          .col-lg-3
            figure.mb-3
              img.img-a(src='@/assets/curso/tema_6/img_5.png', alt='fileteadora')
            h5.text-center Guía de tope para fileteadora
        .row.justify-content-center
          .col-lg-3
            figure.mb-3
              img.img-a(src='@/assets/curso/tema_6/img_6.png', alt='dobladillador sencillo')
            h5.text-center Dobladillador sencillo
          .col-lg-3
            figure.mb-3
              img.img-a(src='@/assets/curso/tema_6/img_7.png', alt='tipo avion')
            h5.text-center Guía tipo avión
          .col-lg-3
            figure.mb-3
              img.img-a(src='@/assets/curso/tema_6/img_8.png', alt='tubular')
            h5.text-center Guía tubular
        
        

</template>

<script>
export default {
  name: 'Tema6',
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
