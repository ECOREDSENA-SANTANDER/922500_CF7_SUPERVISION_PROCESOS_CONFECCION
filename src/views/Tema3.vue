<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistemas de lubricación en máquinas

    figure.mb-5
      img(src='@/assets/curso/tema_3/img_1.png', alt='Texto que describa la imagen' data-aos='fade-left')

    p(data-aos='fade-left') La lubricación es uno de los procesos más importantes a tener en cuenta para mantener nuestras máquinas en óptimas condiciones, las máquinas están conformadas por una serie de piezas metálicas que, en su proceso productivo, generan un movimiento continuo y un roce permanente generando una fricción, por lo tanto, la película de lubricante evita el desgaste y el calentamiento de forma excesiva.


    p(data-aos='fade-left') Los sistemas de lubricación se designan como el recorrido del aceite por las distintas piezas de la máquina, cuya función es proveer de sustancias lubricantes entre piezas móviles mitigando la fricción entre ellas, generalmente están conformados por un control o temporizador, bomba automática o manual y una línea de suministro. En los talleres textiles, los sistemas de lubricación que intervienen generalmente son la automática, por mecha y manual.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido
      .h2 3.1 Tipos de lubricación 

    .row
      .col-lg-8(data-aos='fade-right')
        p Según la #[em American Petroleum Co. Inc. (2012)], los aditivos de antidesgaste permiten aumentar las posibles aplicaciones de lubricación en mayor cantidad de máquinas, y son utilizados, principalmente, en máquinas de coser, al igual que en maquinarias de precisión de la industria textil, industria de confección, ejes, deslizadoras, máquinas de oficina, carriles de impresoras y mangas de ejes. Por su cuerpo liviano y claro tiene extraordinaria lubricidad y no crean goma; además, al utilizarlo en metal impedirá el desarrollo de herrumbre en las cerraduras, bisagras, tuercas, etc.; por su alta pureza es biodegradable y son totalmente lavables en caso de provocar manchas en los tejidos, telas, hilos, etc.
      .col-lg-4(data-aos='fade-left')
        figure.mb-5
          img(src='@/assets/curso/tema_3/img_2.svg', alt='Texto que describa la imagen')

    .cajon.cajon-color-verde.p-4.mb-5(data-aos='fade-right')
      p Este aceite no es recomendado para transmisiones mecánicas o reductores industriales. Además, al reducir el desgaste evita que los equipos estén fuera de servicio a causa del mantenimiento, lo cual aumenta la productividad. Este producto es extremadamente estable y contiene agentes demulsificantes, inhibidores de herrumbre, corrosión y espumas, también crea una fuerte película y tiene propiedades excepcionales de antidesgaste y agentes demulsificantes.

    h5.mb-5.text-center(data-aos='fade-right') A continuación, se pueden analizar los tipos de lubricación utilizados. 

    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/tema_3/img_3.svg' alt='AvatarTop' data-aos='fade-right')
          .tarjeta.color-fondo
            .p-4(data-aos='fade-left')
              h2 Lubricación automática
              P Está implementada a través del bombeo de grasa o aceite desde el reservorio central a las diferentes zonas de lubricación de forma automática, está basada en los requerimientos técnicos especificadas por los fabricantes de maquinarias.
              P Es aplicada a máquinas industriales caracterizadas por un trabajo continuo a gran velocidad, estas máquinas están equipadas de una bomba propulsora de aceite que mueve el lubricante por gravedad.
        
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/tema_3/img_4.svg' alt='AvatarTop' data-aos='fade-right')
          .tarjeta.color-fondo
            .p-4(data-aos='fade-left')
              h2 Lubricación por mecha
              p.mb-0 Sistema implementado en el principio de la capilaridad de un material poroso que se genera como mecha el cual absorbe el lubricante para generar el contacto con las piezas en movimiento.

        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/tema_3/img_5.svg' alt='AvatarTop' data-aos='fade-right')
          .tarjeta.color-fondo
            .p-4(data-aos='fade-left')
              h2 Lubricación manual
              p.mb-0 Sistema de lubricación basado en la implementación de un mecanismo como pistola de engrase o bomba manual que genera el lubricante a presión, por baño de aceite o por gotas.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2 3.2 Tipos de lubricantes

    p.mb-5(data-aos='fade-right') Los equipos de lubricación son de variada composición y generalmente emplean los siguientes. 

    .row
      .col-lg-6(data-aos='fade-right')
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/tema_3/img_6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--bg1.tar-av2
            .p-3
              h2.left Lubricantes por aceite
              p.left Son altamente utilizados en la confección, pues ceden bien al calor y crean una fina capa generando una total cobertura y capacidad de fluencia. 
              p.left Son utilizados en piezas de alta temperatura o revoluciones de fricción.
     
      .col-lg-6.d-flex(data-aos='fade-left')
        .tarjeta-avatar-b.mb-5
          .tarjeta.color-fondo.tar-av
            .p-3
              h2.left Lubricantes por grasa
              p.left Conformados por un aceite base ligado por un espesante que garantiza permanencia en el punto de lubricación, posibilitando una protección que sella las piezas de la fricción, el desgate e influencias de humedad o sustancias extrañas.
          img(src='@/assets/curso/tema_3/img_7.svg' alt='AvatarTop')

    .row
      .col-lg-6(data-aos='fade-right')
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/tema_3/img_8.svg' alt='AvatarTop')
          .tarjeta.color-fondo
            .p-4
              h2.left Lubricantes de aire / aceite
              p.left Basado en una nueva tecnología, que genera una corriente de aire, que posibilita la refrigeración y lubricación a partir de partículas de aceite que recubren las partes.
      .col-lg-6.d-flex(data-aos='fade-left')
        .tarjeta-avatar-b.mb-5
          .tarjeta.tarjeta--bg1.tar-av
            .p-4
              h2.left Lubricantes secos
              p.left Usados con poca frecuencia en las confecciones por el tipo de máquina que se utiliza, pero son lubricantes sólidos en polvo, lacas o en películas semejantes a la cera.
          img(src='@/assets/curso/tema_3/img_9.svg' alt='AvatarTop')

    separador


    #t_3_3.titulo-segundo.color-acento-contenido
      .h2 3.3 Proceso de lubricación de máquinas de coser 

    p.mb-5(data-aos='fade-right') Las máquinas de coser requieren un sistema permanente de lubricación como un proceso preventivo de mantenimiento que alargará la vida útil de la máquina. Generalmente, se pueden definir tres pasos básicos para estos procesos, a saber:

    .row.mb-5
      .col-lg-4(data-aos='fade-right')
        figure.mb-5
          img(src='@/assets/curso/tema_3/img_10.png', alt='Texto que describa la imagen')
        h5 Limpieza exterior
        p Como paso previo a la lubricación, es necesario limpiar los elementos y partes externas de la máquina retirando residuos para evitar que se mezclen, se debe remover todas las partes móviles para acceder correctamente al lugar o pieza que se lubricará.

      .col-lg-4(data-aos='fade-up')
        figure.mb-5
          img(src='@/assets/curso/tema_3/img_11.png', alt='Texto que describa la imagen')
        h5 Limpieza interna
        p Se procede a retirar todos los elementos internos que se puedan mover para generar procedimiento y limpieza profundamente a piezas como tornillo de la placa de agujas, portacanillas, la carrera de la portacanillas y los dientes de arrastre y cualquier parte donde se hayan acumulado polvo o pelusas.

      .col-lg-4(data-aos='fade-left')
        figure.mb-5
          img(src='@/assets/curso/tema_3/img_12.png', alt='Texto que describa la imagen')
        h5 Lubricación
        p Finalmente, se procede a lubricar la máquina, respetando los requerimientos técnicos y los sistemas de lubricación.
     
    .row.justify-content-around.align-items-center 
      .col-lg-8
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
              img(src="@/assets/curso/tema_3/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p #[b Anexo. ] 
                    span  Se invita a revisar el material complementario: Manual técnico de lubricantes de Lubricantes Raloy. 
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(href="/downloads/Manual_Tecnico_Lubricantes.pdf" target="_blank")
                    span.text-white Descargar
                    i.fas.fa-download
    



    
    

</template>

<script>
export default {
  name: 'Tema3',
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
