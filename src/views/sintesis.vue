<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El mantenimiento de la maquinaria y herramientas es una actividad esencial para el buen funcionamiento de una planta de producción de confecciones. Un buen mantenimiento requiere planear y ejecutar tareas que incluyan la definición de recursos técnicos, humanos, económicos y logísticos. La persona encargada de la administración de la planta debe tener conocimientos técnicos, físicos e informativos sobre el manejo de las máquinas y herramientas. A continuación, puede revisar un mapa conceptual que explica dicho procedimiento.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
