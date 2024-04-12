<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestión del mantenimiento

    .row.mb-3
      .col-lg-8(data-aos='fade-right')
        p Al buen uso de los recursos que tienen que ver con el equipo de máquinas y herramientas y toda la logística necesaria para aprovechar esos recursos, se le conoce como gestión de mantenimiento. Estas actividades deben ser coherentes con las políticas, objetivos y misión de la organización, además, la gestión del mantenimiento debe incluir las áreas de producción, compras, calidad y enfoque al cliente. 

        p Gestionar estos recursos de manera racional y articulada, con todo el sistema de producción, da como resultado números favorables a los presupuestos. La información sobre los recursos con que se cuenta, tener estructurado un plan de mantenimiento apropiado, el mejoramiento continuo, y el registro de todo el seguimiento, son funciones del administrador del mantenimiento.

        p Para garantizar que los procesos fluyan sin tener ningún contratiempo, se requiere que las actividades que intervengan a las máquinas, involucren a las personas, a las materias primas, al medioambiente, a la rentabilidad, a la sociedad; y hacer que haya una buena relación entre todas las partes es la gestión de mantenimiento.
      .col-lg-4(data-aos='fade-left')
        figure.mb-5
          img(src='@/assets/curso/tema_4/img_1.svg', alt='Texto que describa la imagen')
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 23.
          span Administración del mantenimiento
    .row.justify-content-around.align-items-center 
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
              img(src="@/assets/curso/tema_4/enlace.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Como elemento complementario al tema, se sugiere revisar el video La gestión de mantenimiento de las empresas
                  p #[b Enlace web. ] 
                    span Dr. Buchelli UNT. (2014). La gestión de mantenimiento de las empresas. 
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(href="https://www.youtube.com/watch?v=-5nxVsKSNaI&ab_channel=Dr.BuchelliUNT" target="_blank")
                    span.text-white Ver enlace
                    i.fas.fa-link
    

    separador

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2 4.1 Plan de mantenimiento
    .row.justify-content-center(data-aos='fade-right')
      .col-lg-11
        .row.mb-5.fondo2
          .col-lg-8(data-aos='fade-right')
            p Para cualquier modalidad de mantenimiento que se pretenda aplicar, es importante dimensionar las actividades y los recursos a utilizar; planear es tomar decisiones sobre algo que hay que ejecutar en el corto, mediano o largo plazo, en el tema de la conservación y cuidado de las máquinas y herramientas, es muy importante prever qué circunstancias pueden afectar la productividad.

            p Saber calcular de qué manera se reaccionará a una eventual falla de las máquinas, saber programar actividades preventivas y tener metodologías de control sobre los gastos hacen parte de la elaboración de un buen plan de mantenimiento. 
            .hr1

            .bloque-texto-b.color-secundario.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-0 Es muy importante establecer por escrito todas las acciones que se definan para la mejora y conservación de los equipos, en este plan debe quedar claro el tipo de actividad, el responsable de la ejecución, el momento y lugar de la acción, la forma de realización y el porqué de la acción, de esta forma, se establecen responsabilidades e hitos de control sobre el plan de mejoramiento. 
                i.fas.fa-quote-right.d-flex.justify-content-end

          .col-lg-4(data-aos='fade-left')
            figure.mb-5
              img.img-a(src='@/assets/curso/tema_4/img_2.svg', alt='Texto que describa la imagen')

    .cajon.cajon-color-verderojo.p-4.mb-5
      .row.justify-content-center
        .col-lg-5(data-aos='fade-right')
          p 
            strong El plan debe incluir:
          ul.lista-ul.color1
            li
              i.fas.fa-atom
              span.c1 Cuál es el procedimiento a seguir luego de identificar un daño en una máquina.
            li 
              i.fas.fa-atom
              span.c1 Cuál es la política sobre el manejo de inventarios de repuestos y herramientas.
            li 
              i.fas.fa-atom
              span.c1 Cuáles son las responsabilidades del operario, el mecánico y el supervisor.
            li 
              i.fas.fa-atom
              span.c1 Cuál es la frecuencia para realizar actividades de mantenimiento.

        .col-lg-1.d-sm-none.d-lg-block
          .verticalLine 
        .col-lg-5(data-aos='fade-left')
          p Ahora, se recomienda observar en el siguiente video sobre el Plan de mantenimiento y los 5 elementos que ayudarán en la adecuada gestión del plan. 

          .row.justify-content-around.align-items-center 
            .col-lg-12
              .tarjeta.color-secundario.p-3.mb-5
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2.d-none.d-lg-block
                    img(src="@/assets/curso/tema_4/enlace.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p #[b Enlace web. ] 
                          span Valbor Soluciones. (2018). Plan de mantenimiento: 5 elementos 
                      .col-sm-auto
                        a.boton.color-acento-botones.text-white(href="https://www.youtube.com/watch?v=av7JwCDox3A&ab_channel=ValborSoluciones" target="_blank")
                          span.text-white Ver enlace
                          i.fas.fa-link

    h4(data-aos='fade-left') Información previa para elaborar plan de mantenimiento
    p(data-aos='fade-right') Desde el departamento de producción se debe emitir la siguiente información, para direccionar adecuadamente el plan: 

    .row.mb-5
      .col-lg-4(data-aos='fade-right')
        figure.mb-5
          img.img-a(src='@/assets/curso/tema_4/img_3.svg', alt='Texto que describa la imagen')
      .col-lg-8(data-aos='fade-left')
        .hr.mb-3
        ul.lista-ul--color
          li
            i.fas.fa-atom
            | Los datos del tipo de prenda y tejidos a utilizar para determinar qué tipo de accesorios, agujas y ajustes se deben alistar, al momento de planear la ejecución de las costuras.
          .hr.mb-3
          li
            i.fas.fa-atom
            | Los listados de operaciones de las prendas a trabajar, junto con la demás información relevante sobre las máquinas necesarias en las diferentes producciones, esta es una información necesaria para darle prioridad al mantenimiento de esos equipos.
          .hr.mb-3
          li
            i.fas.fa-atom
            | Las hojas de vida de las máquinas, estas permiten visualizar el estado actual del equipo y conocer sobre qué asuntos han sido intervenidas las máquinas en el pasado, de esta manera se tendrán consideraciones especiales según sea el caso.
          .hr.mb-3
          li
            i.fas.fa-atom
            | La información sobre el estado del equipo debe estar a disposición, lo mismo que las instrucciones del proveedor sobre el sistema de lubricación.
          .hr.mb-3

    h5.mb-5(data-aos='fade-right') Criterios para elaborar el plan de mantenimiento
    
    .row.justify-content-center
      .col-lg-12.d-flex(data-aos='fade-left')
        figure.mb-5
          img(src='@/assets/curso/tema_4/img_4.png', alt='Texto que describa la imagen')
   
    .cajon.cajon-colorgris.p-4.mb-5(data-aos='fade-right')
      p.mb-0 Como cualquier actividad, la planeación del mantenimiento para la planta de confecciones establece que se deben definir cuáles son las actividades a realizar, en un orden lógico. A continuación, se presenta un ejemplo del diagrama de flujo de actividades.


    .row.justify-content-center.mb-5(data-aos='fade-left')
      .col-lg-12 
        figure
          img(src='@/assets/curso/tema_4/img_5.svg', alt='Texto que describa la imagen')
    
    .row.align-items-center.justify-content-center.mb-5(data-aos='fade-left')
      .col-lg-12 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 24.
          span Diagrama de plan de mantenimiento  

    h4(data-aos='fade-left') Responsabilidades del plan de mantenimiento
    p.mb-5(data-aos='fade-right') Desde la gerencia o administración se establecen las políticas y normas de funcionamiento de la organización, eso incluye los planes de mantenimiento. En las actividades del plan hay unas de carácter administrativo como, por ejemplo, asignación de recursos, y otras de carácter más técnico y de ejecución que le corresponden al supervisor o persona encargada de la planta de producción.

    h5.text-center.mb-5(data-aos='fade-right') A continuación se especifica el tipo de responsabilidades según el cargo:

    .row.justify-content-center.mb-5
      .col-lg-12
        .row 
          .col-lg-6
            .hr.mb-3
            .row.align-items-center.justify-content-center
              .col-lg-3(data-aos='fade-right')
                figure
                  img.img-a(src='@/assets/curso/tema_4/img_6.svg', alt='Texto que describa la imagen')
              .col-lg-9(data-aos='fade-left')
                h5 Gerencia
                p Aprobar el plan, asignar recursos financieros y mano de obra. Además, otorgar los permisos respectivos.
            .hr.mb-3
            .row.align-items-center.justify-content-center
              .col-lg-3(data-aos='fade-right')
                figure
                  img.img-a(src='@/assets/curso/tema_4/img_7.svg', alt='Texto que describa la imagen')
              .col-lg-9(data-aos='fade-left')
                h5 Supervisión
                p Definir la fecha, duración y frecuencia del mantenimiento de acuerdo con el tipo de mantenimiento. Calcular y solicitar los recursos físicos y de información necesarios para ejecutar planes orientados a la conservación y mejoramiento de los equipos de la planta de confección.
            .hr.mb-3
          .col-lg-6 
            .hr.mb-3
            .row.align-items-center.justify-content-center
              .col-lg-3(data-aos='fade-right')
                figure
                  img.img-a(src='@/assets/curso/tema_4/img_8.svg', alt='Texto que describa la imagen')
              .col-lg-9(data-aos='fade-left')
                h5 Mecánico
                p Coordinar con el supervisor o encargado, las fechas, la ejecución, el personal necesario, lubricantes y herramientas para realizar el mantenimiento.
            .hr.mb-3
            .row.align-items-center.justify-content-center
              .col-lg-3(data-aos='fade-right')
                figure
                  img.img-a(src='@/assets/curso/tema_4/img_9.svg', alt='Texto que describa la imagen')
              .col-lg-9(data-aos='fade-left')
                h5 Personal operativo
                p Algunas actividades de orden y aseo en el puesto de trabajo, mantener en buen estado las herramientas que se le asignaron, comunicar de manera asertiva cualquier anormalidad que detecten, utilizar de manera correcta y en el tiempo indicado los lubricantes.
            .hr.mb-5
      p.mb-5(data-aos='fade-right') Se invita a ver el video Elaboración de un programa de mantenimiento, el cual le orientará sobre la forma de realizar un programa preventivo de mantenimiento.
        

        .row.justify-content-around.align-items-center 
          .col-lg-10
            .tarjeta.color-secundario.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
                  img(src="@/assets/curso/tema_4/video.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p Se invita a ver el video Elaboración de un programa de mantenimiento, el cual le orientará sobre la forma de realizar un programa preventivo de mantenimiento. 
                      p #[b Enlace web. ] 
                        span Top Solución. (s.f.). Plan de mantenimiento. 
                    .col-sm-auto
                      a.boton.color-acento-botones.text-white(href="https://www.youtube.com/watch?v=ufdL4VmHt4I&ab_channel=TopSoluci%C3%B3n" target="_blank")
                        span.text-white Ver video
                        i.fas.fa-video
  
    
    h4(data-aos='fade-left') Almacén y/o taller de mantenimiento
    p.mb-5(data-aos='fade-right') De acuerdo con el tamaño de las empresas, los sitios destinados para almacenar las herramientas necesarias para realizar mantenimientos y reparaciones a las máquinas, puede ser el mismo sitio donde se almacenan los repuestos, lubricantes, catálogos, llaves, guías y accesorios, entre otros. 

    .cajon.cajon-color-verderojo.p-4(data-aos='fade-left')
      P 
        strong Es muy importante tener un sitio destinado a estos menesteres para evitar que:
      ul.lista-ul.color2.mb-0
        li
          i.fas.fa-atom
          span.c1 Haya herramientas por todos lados de la empresa.
        li
          i.fas.fa-atom
          span.c1 Se extravíen las herramientas, los documentos y los repuestos.
        li
          i.fas.fa-atom
          span.c1 Se generen accidentes de trabajo ocasionados por el desorden de los lubricantes y piezas sueltas en cualquier parte.
        li
          i.fas.fa-atom
          span.c1 Haya pérdida en la eficiencia de las actividades de mantenimiento, al tener todo bien ubicado facilita la rapidez en la intervención de situaciones que requieran acciones de mejora del equipo técnico.
        li
          i.fas.fa-atom
          span.c1 Se adquieran elementos que ya se tienen en inventario, pero que en medio del desorden no se encuentran, esto elimina sobrecostos.

      


</template>

<script>
export default {
  name: 'Tema4',
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
