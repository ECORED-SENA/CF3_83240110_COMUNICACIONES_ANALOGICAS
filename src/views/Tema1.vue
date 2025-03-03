<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Parámetros de calidad y transmisión
    
    .fondo-personalizado-1.f1.mb-3
      .fondo-personalizado-1__contenido.pt-5.pb-3
        p.mb-0(data-aos="fade-right") Actores internos o externos que intervienen en la transmisión de la señal analógica. Los que se deben conocer para determinar la calidad de la señal son:

        .titulo-decorativo.my-5
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Ruido
        
        .row.mb-4
          .col-lg-8(data-aos="fade-right")
            p.mb-4 Interferencia no deseada, introducida en el canal de comunicaciones y mezclada con una señal. Se genera por fuentes externas y fuentes internas del sistema de comunicaciones. Los ruidos generados por fuentes propias del sistema se pueden controlar desde el diseño del sistema y la elección de los circuitos analógicos que lo conforman. La absorción del ruido externo se logra, evitando la salida de interferencias al exterior.
            
            p.mb-0 Al amplificar la señal en un medio de transmisión, el ruido que contenga dicha señal se amplificará; lo que obliga a utilizar una mayor cantidad de amplificadores para transportar la señal analógica.

            .titulo-decorativo.mt-5
              .cont-figura
                img(src="@/assets/curso/temas/img-tit-dec.svg")
              .cont-text 
                h3 #[em Signal to Noise Ratio]
          .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/4.png",style="max-width: 400px;")
        
        p.mb-4(data-aos="fade-up") Es la relación existente entre la potencia de la señal y la potencia del ruido. Puede estar dada en función de la relación:

        .row.justify-content-center
          .col-lg-8
            .fondo-color-sistema-j.p-4.py-lg-5.borde-12
              .row
                .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
                  p.fw-bold.mb-4 De voltajes:
                  .fondo-color-secundario.borde-10.p-4
                    figure
                      img.mx-auto(src="@/assets/curso/temas/5.svg")
                .col-lg-6(data-aos="fade-left")
                  p.fw-bold.mb-4 De potencias:
                  .fondo-color-secundario.borde-10.p-4
                    figure
                      img.mx-auto(src="@/assets/curso/temas/6.svg")
    
    p.mb-4(data-aos="fade-up") Para expresar la relación S/N en decibeles (dB), se emplea la función logarítmica:

    .row.justify-content-center
      .col-lg-8
        .fondo-color-sistema-j.p-4.py-lg-5.borde-12
          .row
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-4.d-none.d-lg-block(style="opacity: 0;") .
              .fondo-color-secundario.borde-10.p-4
                figure
                  img.mx-auto(src="@/assets/curso/temas/7.svg")
            .col-lg-6(data-aos="fade-left")
              p.mb-4 Relaciones de potencia:
              .fondo-color-secundario.borde-10.p-4
                figure
                  img.mx-auto(src="@/assets/curso/temas/8.svg")
    
    .titulo-decorativo.my-5(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Relación Portadora a Ruido (C/N)
    
    .row.align-items-center.mb-4
      .col-lg-8(data-aos="fade-up")
        .fondo-color-sistema-k.p-4
          p.mb-0 C/N o CNR #[em (Carrier to Noise Ratio)] es el indicativo del nivel relativo de potencia de la portadora en la señal con respecto al nivel de ruido en el sistema de comunicaciones, es decir, la relación de la potencia de la portadora (señal de información) entre la potencia de ruido en un ancho de banda específico. Esta influye drásticamente en la calidad del sistema.
      .col-lg-4(data-aos="fade-down")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/9.png",style="max-width: 391px;")
    
    p.mb-4.fw-bold(data-aos="fade-down") La portadora se expresa mediante la fórmula:

    .row.mb-4(data-aos="fade-down")
      .col-lg-4.col-md-9
        .fondo-color-sistema-j.borde-12.p-4
          figure
            img.mx-auto(src="@/assets/curso/temas/10.svg")
    
    p.mb-4.fw-bold(data-aos="fade") Y la potencia de la portadora en dB, siendo C la potencia de la portadora, se expresa:

    .row(data-aos="fade-down")
      .col-lg-3.col-md-8
        .fondo-color-secundario.borde-12.p-4
          figure
            img.mx-auto(src="@/assets/curso/temas/11.svg")
    
    .titulo-decorativo.my-5(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Nivel de ruido
    
    p.mb-4(data-aos="fade-right") Degeneración de la señal en la relación de la señal a ruido y se expresa mediante el índice de ruido (NF) y el factor de ruido (F).

    .row.align-items-center
      .col-lg-4(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/12.png",style="max-width: 400px;") 
      .col-lg-8(data-aos="fade-left")
        .fondo-color-sistema-j.borde-12.p-4

          .fondo-color-sistema-l.p-4.borde-12.mb-2
            p.mb-0 F = Es la relación señal a ruido de entrada con la señal de ruido de salida. Matemáticamente es:
          
          .row.justify-content-center.mb-2
            .col-lg-8
              .fondo-color-secundario.borde-12.p-4
                figure
                  img.mx-auto(src="@/assets/curso/temas/13.svg",style="max-width: 304px;")
          
          .fondo-color-sistema-l.p-4.borde-12.mb-2
            p.mb-0 NF = Relación señal a ruido de salida.
          
          .row.justify-content-center
            .col-lg-10
              .fondo-color-secundario.borde-12.p-4
                figure
                  img.mx-auto(src="@/assets/curso/temas/14.svg",style="max-width: 458px;")
    
    .titulo-decorativo.my-5(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Parámetros de transmisión de señales analógicas
    
    p.mb-0(data-aos="fade-right") En la transmisión de señales analógicas, es fundamental considerar ciertos parámetros que afectan su calidad y eficiencia.

    h3.fondo-color-sistema-l.borde-20.d-inline-flex.py-2.px-4.my-4(data-aos="fade-up") Impedancia

    p.mb-4(data-aos="fade") La impedancia representa la oposición de un circuito al cambio de corriente, voltaje o flujo eléctrico en sistemas de corriente alterna (CA). A continuación, se detallan sus principales características:

    .fondo-personalizado-1.top-1.bottom-1.f1
      .fondo-personalizado-1__contenido
        .row.justify-content-center.mb-4
          .col-lg-10(data-aos="fade-right")
            .fondo-color-sistema-m.borde-12.p-4.px-lg-5
              .row.align-items-center
                .col-lg-4
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/15.svg",style="max-width: 284px;")
                .col-lg-8
                  ul.lista-ul.mb-0.pb-0
                    li.d-flex.mb-4
                      i.fas.fa-check-circle.c-color-sistema-n
                      span Oposición de un circuito de corriente alterna (CA) al cambio de la corriente, al cambio del voltaje o al flujo de la corriente eléctrica.
                    li.d-flex.mb-4
                      i.fas.fa-check-circle.c-color-sistema-n
                      span La impedancia de los circuitos eléctricos CA generalmente tiene magnitud, fase y ondas senoidales; mientras que la resistencia, únicamente, magnitud.
                    li.d-flex
                      i.fas.fa-check-circle.c-color-sistema-n
                      span Si un circuito se sustenta con corriente continua (CC), su impedancia es idéntica a la resistencia.
        
        p.mb-4.fw-bold(data-aos="fade-right") La impedancia es la relación división entre el fasor tensión y el fasor intensidad de corriente:

        .row.justify-content-center.align-items-center
          .col-lg-4(data-aos="fade-right")
            .fondo-color-sistema-i.borde-12.p-4
              .row.align-items-center
                .col
                  p.mb-4 Z= es la impedancia.
                  p.mb-4 V= es el fasor tensión.
                  p.mb-0 I= corresponde a la intensidad.
                .col-md-auto.order-first.order-md-last
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/17.svg",style="max-width: 89px;")
          .col-lg-6.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/16.png",style="max-width: 610px;")
        
        .titulo-decorativo.my-5(data-aos="fade-down")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Ancho de banda
        
        p.mb-4(data-aos="fade-right") En señales analógicas:

        .row.justify-content-center.mb-2
          .col-lg-2.col-md-6.mb-4(data-aos="fade-right")
            .fondo-color-secundario.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/18.svg",style="max-width: 96px;")
              
              p.mb-0 Es la longitud de la frecuencia presente en la mayor potencia de una señal.
          .col-lg-2.col-md-6.mb-4(data-aos="fade-up")
            .fondo-color-secundario.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/19.svg",style="max-width: 96px;")
              
              p.mb-0 Se expresa en Hz.
          .col-lg-2.col-md-6.mb-4(data-aos="fade-down")
            .fondo-color-secundario.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 96px;")
              
              p.mb-0 Es la separación de las frecuencias en un rango específico por la potencia de una señal.
          .col-lg-2.col-md-6.mb-4(data-aos="fade-left")
            .fondo-color-secundario.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/21.svg",style="max-width: 96px;")
              
              p.mb-0 Es la separación de las frecuencias en un rango específico por la potencia de una señal.
    
    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 1.] Ancho de banda
        
        .borde-12.fondo-color-sistema-j.p-4(data-aos="flip-up")
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 400px;",alt="Gráfico de un filtro que muestra el ancho de banda en el intervalo entre las frecuencias f1 y f2, con una frecuencia central fc. La altura de -3 dB representa el punto de corte en el que el ancho de banda se define, delimitando las frecuencias permitidas y las atenuadas.")
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.py-4
        .row.justify-content-center
          .col-lg-10
            .fondo-color-sistema-o.p-4.px-lg-5(data-aos="flip-up")
              p.mb-0 En la figura 1 se presenta que el ancho de banda de un filtro es el equivalente a la distancia entre las frecuencias F1 y F2 denominadas también frecuencias efectivas, en las que en su atenuación o pérdida al pasar a través del filtro se mantiene igual o menor a 3 dB, comparada con la frecuencia central (FC) en la gráfica, en la que el ancho de banda tiene su mayor amplitud.
    
        .titulo-decorativo.my-5(data-aos="fade-right")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Ganancia y pérdidas
        
        .row.align-items-center.mb-4
          .col(data-aos="fade-right")
            p.mb-4 La ganancia es la magnitud manifestada entre la amplitud de una señal de salida y una de entrada. Así mismo, es una magnitud adimensional (que no posee una magnitud asociada), se mide en belio (B) o en submúltiplos como el decibelio (dB). Si la ganancia es negativa, es decir menor que 0, es atenuación o pérdida.
            p.mb-0.fw-bold Matemáticamente, la ganancia/pérdida se define así:
          .col-md-auto.order-first.order-md-last(data-aos="fade-left")
            figure.mb-4.mb-md-0
              img.mx-auto(src="@/assets/curso/temas/23.svg",style="max-width: 190px;")
  
        .row.justify-content-center
          .col-lg-3.mb-4(data-aos="fade-right")
            .fondo-color-sistema-j.borde-12.p-4.h-100.align-content-end
              .borde-10.fondo-color-secundario.p-4
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/24.svg",style="max-width: 118px;")
          .col-lg-3.mb-4(data-aos="fade-left")
            .fondo-color-sistema-j.borde-12.p-4.h-100.align-content-end
              p.mb-3 En decibeles, se expresaría así:
              .borde-10.fondo-color-secundario.p-4
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/25.svg",style="max-width: 210px;")
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
