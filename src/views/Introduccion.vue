<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center.mb-4
      .col-lg-7
        p.mb-4(data-aos="fade-up") Los sistemas de comunicaciones analógicas desempeñan un papel crucial en la transmisión de información a través de señales que requieren procesos específicos para garantizar su calidad y fiabilidad. En este contexto, parámetros como el ruido y la relación señal a ruido son esenciales para evaluar y mejorar la calidad de la señal transmitida. La correcta comprensión de estos elementos permite optimizar la eficiencia en la transferencia de información.

        .fondo-color-sistema-i.p-4.borde-10(data-aos="fade-right")
          .row
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
            .col
              p.mb-0 Uno de los aspectos fundamentales en las comunicaciones analógicas es la modulación, que ajusta la señal portadora en amplitud o frecuencia para adaptarla a los medios de transmisión. La modulación en amplitud (AM) y frecuencia (FM) permite que las señales se transmitan de manera efectiva, minimizando interferencias y facilitando el uso del espectro de frecuencias de manera organizada y segura.
      .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 505px;")
    
    .row
      .col-lg-4(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 400px;")
      .col-lg-8(data-aos="fade-left")
        p.mb-0 Para complementar estos procesos, se utilizan filtros que permiten el paso, rechazo o ajuste de ciertas frecuencias, contribuyendo a una transmisión de alta fidelidad. La impedancia y otros parámetros de transmisión también son factores clave en el diseño de estos sistemas, ya que influyen en la forma en que las señales viajan a través de distintos medios, garantizando que lleguen al receptor de forma clara y con la mínima distorsión posible.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
