<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-h.p-4.px-lg-5.borde-20
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="Diagrama sobre la calidad de las señales analógicas: parámetros de calidad, modulación y filtros y receptores de radiofrecuencia. Cada sección muestra elementos clave, como el ruido y la relación señal a ruido en los parámetros de calidad; la modulación en AM y FM y sus aplicaciones; y las definiciones y tipos de filtros en los receptores de radiofrecuencia.")
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
