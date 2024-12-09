<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Parámetros de calidad en señales analógicas',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar los conceptos fundamentales de la calidad en las señales analógicas, incluyendo la modulación, los filtros de radiofrecuencia, la impedancia y los parámetros clave como el ruido y la relación señal a ruido.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué representa la impedancia en un circuito de corriente alterna?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La resistencia al flujo de corriente continua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La oposición al cambio de corriente o voltaje en corriente alterna.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La amplificación de la señal en el circuito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La velocidad de transmisión de la señal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el propósito principal de la modulación en comunicaciones analógicas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el tamaño de la antena.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Reducir el ancho de banda.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'Transmitir la señal de información a una frecuencia diferente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar el ruido en la señal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'En un filtro pasa bajos, ¿qué ocurre con las frecuencias que superan la frecuencia de corte?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Son amplificadas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Son atenuadas significativamente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Son mantenidas sin cambios.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Son reflejadas de vuelta.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de modulación cambia la amplitud de la onda portadora?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Frecuencia modulada (FM).', esCorrecta: false },
            { id: 'b', texto: 'Amplitud modulada (AM).', esCorrecta: true },
            { id: 'c', texto: 'Modulación de fase.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Modulación de onda completa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes es un parámetro de calidad en las señales analógicas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Relación señal a ruido (S/N).',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Modulación en fase.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Número de amplificadores en la señal.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Duración de la señal.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿En qué sistema se emplean los filtros <em>antialiasing</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'En señales de audio.', esCorrecta: false },
            {
              id: 'b',
              texto: 'En sistemas de amplificación de señal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En sistemas de conversión A/D y D/A.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'En sistemas de filtrado de ruido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué función cumple un filtro pasa banda?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite el paso de todas las frecuencias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permite el paso de un rango específico de frecuencias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Atenúa todas las frecuencias a partir de un límite inferior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo permite el paso de frecuencias bajas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes opciones es una aplicación de la modulación en frecuencia (FM)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Transmisión de video.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Difusión de sonido en televisión analógica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Comunicaciones de baja frecuencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Generación de ruido blanco.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La relación señal a ruido (S/N) es un parámetro que afecta la calidad de las señales analógicas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'En un circuito de corriente continua (CC), la impedancia es idéntica a la resistencia.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué ocurre cuando la relación señal a ruido (S/N) es baja en una señal de comunicación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La señal se amplifica automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La calidad de la señal disminuye.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La frecuencia de la señal aumenta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La señal es menos afectada por interferencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué función cumple un filtro rechaza banda en un sistema de comunicación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite el paso de todas las frecuencias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo permite el paso de frecuencias bajas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Atenúa un rango específico de frecuencias alrededor de la frecuencia central.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementa la amplitud de todas las frecuencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de los siguientes NO es un parámetro de calidad en las señales analógicas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Relación portadora a ruido.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Nivel del ruido.', esCorrecta: false },
            { id: 'c', texto: 'Velocidad de la señal.', esCorrecta: true },
            { id: 'd', texto: 'Relación señal a ruido.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué sucede si la frecuencia de una señal supera la frecuencia de corte en un filtro pasa bajo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La señal es atenuada drásticamente.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'La señal pasa sin cambio.', esCorrecta: false },
            { id: 'c', texto: 'La señal es amplificada.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La frecuencia de corte se ajusta automáticamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿En qué se diferencia la impedancia de la resistencia en circuitos de corriente alterna (CA)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La resistencia varía con el tiempo, mientras que la impedancia es constante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La impedancia solo tiene magnitud, mientras que la resistencia tiene magnitud y fase.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La resistencia es una forma de impedancia en corriente continua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La impedancia tiene magnitud y fase, mientras que la resistencia solo tiene magnitud.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
