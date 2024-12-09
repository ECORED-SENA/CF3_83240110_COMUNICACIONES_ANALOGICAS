<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Modulación
    
    .fondo-personalizado-1.bottom-2.f1.pt-4
      .fondo-personalizado-1__contenido
        .row.align-items-center.mb-4
          .col-lg-8(data-aos="fade-right")
            p.mb-0 Modificación sistemática, paso a paso, de una onda portadora de acuerdo con el mensaje o señal modulada. Se utiliza cuando se transmite la señal analógica a una frecuencia diferente o con un ancho de banda menor o mayor. La modulación se puede efectuar con los cambios de amplitud, frecuencia o fase de la señal portadora.
            .titulo-decorativo.mt-5
              .cont-figura
                img(src="@/assets/curso/temas/img-tit-dec.svg")
              .cont-text 
                h3 Características
          .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/26.svg",style="max-width: 400px;")
        
        p.mb-4(data-aos="fade-up") A continuación, se presentan las principales características de la modulación:

        .row.justify-content-center.mb-4
          .col-lg-10(data-aos="fade-right")
            .fondo-color-sistema-m.borde-12.p-4.p-lg-5
              .row.align-items-center
                .col-lg-4
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/27.png",style="max-width: 236px;")
                .col-lg-8
                  ul.lista-ul.mb-0.pb-0
                    li.d-flex.mb-2
                      i.fas.fa-check-circle.c-color-sistema-n
                      span Maximiza el ancho de banda de cada canal.
                    li.d-flex.mb-2
                      i.fas.fa-check-circle.c-color-sistema-n
                      span Permite la propagación de la señal de información por cable o por el aire.
                    li.d-flex.mb-2
                      i.fas.fa-check-circle.c-color-sistema-n
                      span Influye en la calidad de la información transmitida.
                    li.d-flex.mb-2
                      i.fas.fa-check-circle.c-color-sistema-n
                      span Disminuye el tamaño de las antenas.
                    li.d-flex.mb-2
                      i.fas.fa-check-circle.c-color-sistema-n
                      span Minimiza la interferencia entre canales.
                    li.d-flex.mb-2
                      i.fas.fa-check-circle.c-color-sistema-n
                      span Ordena el radio espectro al seleccionar canales para cada información.
                    li.d-flex.mb-2
                      i.fas.fa-check-circle.c-color-sistema-n
                      span Protege la información de las afectaciones por ruido.
    
        .row.mb-4(data-aos="fade-right")
          .col-lg-12
            .titulo-decorativo.mb-5
              .cont-figura
                img(src="@/assets/curso/temas/img-tit-dec.svg")
              .cont-text 
                h3 Tipos de modulación
            
            p.mb-0 Existen diferentes tipos de modulación que se utilizan en comunicaciones analógicas:
          
    
        .fondo-color-sistema-p.p-4.mb-2
          .row
            .col-lg-6(data-aos="fade-right")
              .fondo-color-sistema-l.d-inline-flex.borde-20.py-1.px-4.mb-4
                h3.mb-0 Amplitud Modulada (AM)
              p.mb-0 Este tipo de modulación modifica la amplitud de la onda portadora, de manera que esta varía según los cambios en el nivel de la señal moduladora, aunque la frecuencia de la portadora permanece constante.
            .col-lg-6(data-aos="fade-left")
              figure.mb-4.mb-lg-0.pt-4
                img.me-auto(src="@/assets/curso/temas/29.svg",style="max-width: 505px;")
    .fondo-color-sistema-p.p-4.mb-5(data-aos="fade-down")
      .row
        .col-lg-6
          .fondo-color-sistema-l.d-inline-flex.borde-20.py-1.px-4.mb-4
            h3.mb-0 Frecuencia Modulada (FM)
          p.mb-0 En esta modulación, se establece un nivel mínimo de la señal de RF que el receptor puede detectar, permitiendo obtener una señal clara y nítida de la información transmitida.
        .col-lg-6
          figure.mb-4.mb-lg-0.pt-4
            img.me-auto(src="@/assets/curso/temas/30.svg",style="max-width: 505px;")
    
    p.mb-4(data-aos="fade-left") En la figura 2 se diferencia el comportamiento de la señal portadora con la señal modulada en amplitud y la señal modulada en frecuencia.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 2.] Modulación AM y FM

        .fondo-color-sistema-q.p-4(data-aos="flip-up")
          figure.d-none.d-lg-block
            img.mx-auto(src="@/assets/curso/temas/31.svg",style="max-width: 687px;",alt="Figura que presenta ejemplos de ondas en distintos estados de modulación. La primera es una onda portadora, seguida por una onda moduladora. Luego, se observa una onda modulada FM, donde la frecuencia varía. Finalmente, aparece una onda modulada AM, en la cual la amplitud cambia según la señal moduladora.")
          figure.d-lg-none
            img.mx-auto(src="@/assets/curso/temas/32.svg",style="max-width: 500px;",alt="Figura que presenta ejemplos de ondas en distintos estados de modulación. La primera es una onda portadora, seguida por una onda moduladora. Luego, se observa una onda modulada FM, donde la frecuencia varía. Finalmente, aparece una onda modulada AM, en la cual la amplitud cambia según la señal moduladora.")
    
    .fondo-color-sistema-l.d-inline-flex.borde-20.py-1.px-4.mb-4(data-aos="fade-left")
      h3.mb-0 Aplicaciones en AM y FM
    
    p.mb-2(data-aos="fade-right") Las aplicaciones en las ondas moduladas en amplitud (AM) son:

    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pt-3.pb-5
        .row.justify-content-center.mb-4
          .col-lg-10(data-aos="fade-right")
            .fondo-color-sistema-m.borde-12.p-4.p-lg-5
              .row
                .col-lg-4
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/33.png",style="max-width: 236px;")
                .col-lg-8
                  ul.lista-ul.mb-0.pb-0
                    li.d-flex.mb-2
                      i.fas.fa-check-circle.c-color-sistema-n
                      span Ondas cortas y medias.
                    li.d-flex.mb-2
                      i.fas.fa-check-circle.c-color-sistema-n
                      span VHF 550 a 1.600 kHz usadas en comunicaciones radiales entre los aviones y las torres de control de los aeropuertos.
                    li.d-flex.mb-0
                      i.fas.fa-check-circle.c-color-sistema-n
                      span Radiofonía.
        
        p.mb-4(data-aos="fade") Las aplicaciones para el caso de las ondas moduladas en frecuencia (FM) son:

        .row.justify-content-center.mb-3
          .col-lg-2.col-md-6.col-sm-9.mb-4(data-aos="fade-right")
            .borde-12.fondo-color-sistema-q.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/34.png")
              p.mb-0 La difusión del sonido de la televisión analógica.
          .col-lg-2.col-md-6.col-sm-9.mb-4(data-aos="fade")
            .borde-12.fondo-color-sistema-q.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/35.png")
              p.mb-0 Enviar señales al espacio.
          .col-lg-2.col-md-6.col-sm-9.mb-4(data-aos="fade")
            .borde-12.fondo-color-sistema-q.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/36.png")
              p.mb-0 Radiofrecuencias de muy alta frecuencia.
          .col-lg-2.col-md-6.col-sm-9.mb-4(data-aos="fade")
            .borde-12.fondo-color-sistema-q.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/37.png")
              p.mb-0 La grabación de video.
          .col-lg-2.col-md-6.col-sm-9.mb-4(data-aos="fade-left")
            .borde-12.fondo-color-sistema-q.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/38.png")
              p.mb-0 Recuperación de la cinta magnética sin distorsión extrema.
               

</template>

<script>
export default {
  name: 'Tema2',
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
