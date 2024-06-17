<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Herramienta #[i Total Productive Maintenance (TPM)] - Mantenimiento Productivo Total

    .row.mb-5
      .col-lg-4(data-aos='fade-right')
        figure
          img.img-a(src='@/assets/curso/tema_5/img_1.svg', alt='Texto que describa la imagen')
      .col-lg-8(data-aos='fade-left')
        p Es una herramienta de trabajo empresarial que se fundamenta en vincular el tema del equipo de máquinas y herramientas al plano productivo, relaciona de manera directa el impacto que genera en la producción los paros producidos por máquinas que no funcionan; estos paros significan el desaprovechamiento de la capacidad instalada, por lo que el #[em TPM] busca eliminar las causas que originan esos paros y esto se logra por medio de una gestión de mantenimiento efectiva; también se asocian algunos problemas de calidad que se pueden resolver manteniendo un equipo de maquinaria en excelentes condiciones; así mismo, se pueden evitar accidentes de trabajo con una buena administración de los programas de mantenimiento.
        p Según la filosofía #[em TPM], mediante sistemas de mantenimiento preventivo eficaces se logra que las máquinas rara vez paren y no afecten las capacidades instaladas de las plantas de producción; si se cuentan con protocolos definidos para el plan de mantenimiento correctivo, la respuesta a un cese de actividad de máquina intempestivamente se podrá solucionar de manera rápida y con poca pérdida de tiempo. Cuando se implementa la filosofía #[em TPM] los accidentes de trabajo disminuyen debido a que se promueve orden, aseo y limpieza, lo mismo que la buena ubicación de herramientas y repuestos.
      
    .cajon.cajon-color-grisrojo.p-4.mb-5(data-aos='fade-right')
      .row
        .col-lg-8
          P
            strong Esta filosofía se vincula de manera directa con las herramientas de #[i Lean Manufacturing] y para implementarlo se requiere:
      .row.justify-content-center
        .col-lg-6
          ul.lista-ul.color1
            li
              i.fas.fa-atom
              span.c1 Realizar un diagnóstico de la situación actual.
            li
              i.fas.fa-atom
              span.c1 Organizar un equipo con su respectivo líder.
            li
              i.fas.fa-atom
              span.c1 Recibir apoyo de la gerencia.
            li
              i.fas.fa-atom
              span.c1 Definir objetivos y metas.
            li
              i.fas.fa-atom
              span.c1 Generar una cultura y hábito de #[em TPM].
            li
              i.fas.fa-atom
              span.c1 Comunicar el programa a todo el personal.
            li
              i.fas.fa-atom
              span.c1 Identificar puntos críticos para intervenir.
          
        .col-lg-4
          figure
            img.img-a(src='@/assets/curso/tema_5/img_2.svg', alt='Texto que describa la imagen')
      
    p.text-center.mb-5(data-aos='fade-right')
      strong Según BSG #[em Institute] (2020), toda la implementación de #[em TPM], se debe apoyar en 8 pilares para lograr los objetivos de eliminar o reducir las pérdidas.

    .row.justify-content-center(data-aos='fade-left')
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 12.
          span Los ocho pilares #[em TPM]
        figure.mb-5
          img(src='@/assets/curso/tema_5/img_3.svg', alt=': el diagrama presenta los ocho pilares <i>TPM</i>: mejoras enfocadas, mantenimiento autónomo, mantenimiento planificado, mantenimiento de calidad, prevención del mantenimiento, mantenimiento áreas soporte, polivalencia y desarrollo de habilidades, seguridad y entorno. Adicionalmente se menciona 5S-organización, orden y limpieza en el puesto de trabajo.')
  
 
        .row.justify-content-around.align-items-center 
          .col-lg-10
            .tarjeta.color-secundario.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
                  img(src="@/assets/curso/tema_4/video.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p Se invita a profundizar a través del siguiente video sobre la metodología #[em TPM] para la realización de un mantenimiento productivo total:
                      p.text-small #[b Enlace #[em web.]] 
                        span Gemba #[em Academy] Español. (2018). #[em TPM] Mantenimiento productivo total.  
                    .col-sm-auto
                      a.boton.color-acento-botones.text-white(href="https://www.youtube.com/watch?v=QdDPyNolNhk&ab_channel=GembaAcademyEspa%C3%B1ol" target="_blank")
                        span.text-white Consultar video
                        i.fas.fa-video
    
      
</template>

<script>
export default {
  name: 'Tema5',
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
