<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Filtros y receptores de radiofrecuencia
    
    p.mb-0(data-aos="fade-right") Dispositivo que modifica una señal analógica de entrada en función de la frecuencia. Utilizan elementos pasivos en sus circuitos electrónicos: resistencias, condensadores, inductores, amplificadores operacionales, entre otros. Son empleados para operaciones de reducción de ruido, ecualizadores gráficos y mejoramiento de señales de vídeo.

    .titulo-decorativo.my-4.mb-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Tipos de filtros
    
    p.mb-4(data-aos="fade-left") A continuación, se describen los principales tipos de filtros utilizados en sistemas de comunicaciones:

    .fondo-personalizado-1.f2(data-aos="fade-up")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.p-4.borde-20
          SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Filtro pasa bajos
                p.mb-0 Este filtro permite el paso de frecuencias bajas con muy poca atenuación, conocidas como frecuencia de corte. Las frecuencias que exceden este límite son significativamente reducidas.
              .col-lg-5
                .borde-12.fondo-color-secundario.p-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/40.svg",style="max-width: 247px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Filtro pasa altos
                p.mb-0 Atenúa mínimamente las frecuencias superiores a la frecuencia de corte, mientras que aplica una mayor atenuación a las frecuencias inferiores a este límite.
              .col-lg-5
                .borde-12.fondo-color-secundario.p-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 247px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Filtro pasa banda
                p.mb-0 Este filtro cuenta con dos frecuencias de corte, una inferior y otra superior. Permite el paso de señales dentro de un rango específico, bloqueando las frecuencias fuera de ese rango.
              .col-lg-5
                .borde-12.fondo-color-secundario.p-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/42.svg",style="max-width: 247px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Filtro rechaza banda
                p.mb-0 Elimina todas las señales cuyas frecuencias se encuentren dentro del rango definido entre la frecuencia de corte inferior y la frecuencia de corte superior.
              .col-lg-5
                .borde-12.fondo-color-secundario.p-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/43.svg",style="max-width: 247px;")
    
    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Aplicaciones de los filtros
    
    p.mb-4(data-aos="fade") Los filtros tienen diversas aplicaciones en sistemas de comunicaciones, cada uno diseñado para cumplir funciones específicas en el procesamiento de señales:

    .row
      .col-lg-3(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/44.png",style="max-width: 295px;")
      .col-lg-9(data-aos="fade-left")
        AcordionA.acordion-personalizado-1.mb-0(tipo="a" clase-tarjeta="tarjeta")
          .div(titulo="Filtros <em>antialiasing</em>")
            .ps-md-5.ms-md-3
              p Empleados en los sistemas de señal mixta: sistemas de conversión A/D (Analógico-Digital) y D/A (Digital-Analógico).
          .div(titulo="Filtros de reconstrucción")
            .ps-md-5.ms-md-3
              p Utilizados para regenerar señales.
          .div(titulo="Ecualizadores")
            .ps-md-5.ms-md-3
              p Adecuan una señal a frecuencias específicas.
          .div(titulo="Amplificadores de señales analógicas")
            .ps-md-5.ms-md-3
              p Funcionan como circuitos selectivos para amplificar las señales a las frecuencias específicas y mitigar las señales fuera de banda.
          .div(titulo="Procesamiento de señales")
            .ps-md-5.ms-md-3
              p Procesa e interpreta las señales.
          .div(titulo="Expulsor de ruido")
            .ps-md-5.ms-md-3
              p Elimina el ruido que aparece junto a una señal, siempre que la frecuencia sea conocida o específica.
    
    .titulo-decorativo.my-4(data-aos="fade")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Receptores de radiofrecuencia
    
    .row.mb-4
      .col-lg-9(data-aos="fade-right")
        p.mb-4 Dispositivos que demodulan una señal analógica de radiofrecuencia para obtener información o la señal original enviada por el sistema de comunicaciones. La señal de radiofrecuencia se presenta en onda continua o modulada en amplitud (AM) y en onda modulada en frecuencia (FM). Por esta razón, existen diferentes receptores de radiofrecuencia clasificados de acuerdo con el tipo de señal a recibir y según el rango de frecuencia en el que deben operar.

        .fondo-color-sistema-q.p-4
          p.mb-0 Si la señal de origen en el receptor presenta una amplitud baja, la función del receptor es amplificar la señal de entrada por un factor de algunos miles, para recuperar la amplitud de la señal original.
      .col-lg-3.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/45.svg",style="max-width: 295px;")
    
    .fondo-personalizado-1.top-1.bottom-1.f1
      .fondo-personalizado-1__contenido
        .row(data-aos="flip-up")
          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/46.svg",style="max-width: 400px;")
          .col-lg-8
            .fondo-color-sistema-r.p-4.h-100.align-content-center
              p.mb-0 La señal de radiofrecuencia se presenta en onda continua o modulada en amplitud (AM) y en onda modulada en frecuencia (FM). Por esta razón, existen diferentes receptores de radiofrecuencia clasificados de acuerdo con el tipo de señal a recibir y según el rango de frecuencia en el que deben operar.
        
        .titulo-decorativo.my-5(data-aos="fade-down")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Amplificador de baja e intermedia frecuencia
        
        p.mb-4(data-aos="fade") Ejerce el filtrado y la amplificación a frecuencia intermedia que es la frecuencia menor a la de la señal de entrada, producto de la suma de la señal de recepción y la generada en el oscilador local (circuito electrónico). Este fenómeno permite mayor estabilidad y sensibilidad en las señales.

        .row.justify-content-center(data-aos="flip-up")
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 3.] Diagrama receptor radiofrecuencia sintonizada
            .fondo-color-sistema-k.p-4
              figure
                img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 792px;",alt="Diagrama de un sistema de recepción de radiofrecuencia. La señal comienza en la antena, pasa al circuito de entrada, luego al amplificador de RF, sigue al detector, pasa por el amplificador de AF y finalmente llega a la carga. Se muestran gráficos de una onda de RF (radiofrecuencia) y una onda de AF (audiofrecuencia) en función de la amplitud y el tiempo.")
    
    .titulo-decorativo.my-4(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Doble conversión
    
    p.mb-4(data-aos="fade-right") Este tipo de receptores se identifican porque efectúan dos combinaciones con el objetivo de lograr la señal de frecuencia intermedia deseada.

    .titulo-decorativo.my-4(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Conversión voltaje a frecuencia y viceversa
    
    p.mb-0(data-aos="fade-right") Circuitos integrados que convierten un voltaje de entrada de una señal análoga en un tren de pulsos cuya frecuencia de salida es similar al nivel de entrada, es decir, su función es la de convertir una señal analógica a una serie de pulsos.

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

<style lang="sass"></style>
