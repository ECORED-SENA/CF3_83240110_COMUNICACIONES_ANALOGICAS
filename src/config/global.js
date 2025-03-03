export default {
  global: {
    Name: 'Calidad de las señales analógicas',
    Description:
      'Los sistemas de comunicaciones analógicas requieren procesos de modulación y filtros para transmitir señales con calidad. Parámetros como el ruido, la relación señal a ruido, y la impedancia son fundamentales. La modulación AM y FM y los filtros para diversas frecuencias permiten una transmisión eficiente y minimizan interferencias, mejorando así la fidelidad de la señal transmitida.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Parámetros de calidad y transmisión',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modulación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Filtros y receptores de radiofrecuencia',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/83240110_CF03_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Parámetros de calidad y transmisión',
      referencia:
        'javier6 diaz. (2024). Parámetros de Calidad de transmisión. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=VjCrAjOcYB8&ab_channel=javier6diaz',
    },
    {
      tema: 'Modulación',
      referencia:
        'Universitat Politécnica de Valéncia - UPV. (2021). Introducción a las radiocomunicaciones. Modulaciones analógicas | 35/97 | UPV. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=W-4hvDam7Uo&ab_channel=UniversitatPolit%C3%A8cnicadeVal%C3%A8ncia-UPV',
    },
    {
      tema: 'Filtros y receptores de radiofrecuencia',
      referencia:
        'Universitat Politécnica de Valéncia - UPV. (2021). Emisores y receptores. Modulación de frecuencia (FM) | | UPV [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=tgf3CuUuBj4&ab_channel=UniversitatPolit%C3%A8cnicadeVal%C3%A8ncia-UPV',
    },
  ],
  glosario: [
    {
      termino: 'Amplificador de señal',
      significado:
        'dispositivo que incrementa la potencia de una señal eléctrica, utilizado para mejorar la transmisión en sistemas de comunicación.',
    },
    {
      termino: 'Ecualizador',
      significado:
        'dispositivo o filtro que ajusta la amplitud de las frecuencias de una señal para mejorar su calidad o adaptarla a un propósito específico.',
    },
    {
      termino: 'Filtro <em>antialiasing</em>',
      significado:
        'filtro que evita la distorsión en señales digitalizadas, eliminando frecuencias superiores al doble de la frecuencia de muestreo antes de la conversión digital.',
    },
    {
      termino: 'Filtro pasa altos',
      significado:
        'filtro que permite el paso de frecuencias altas y atenúa las frecuencias por debajo de la frecuencia de corte.',
    },
    {
      termino: 'Filtro pasa bajos',
      significado:
        'tipo de filtro que permite el paso de frecuencias bajas y atenúa las altas a partir de la frecuencia de corte.',
    },
    {
      termino: 'Frecuencia de corte',
      significado:
        'punto en el que un filtro empieza a atenuar significativamente las frecuencias superiores o inferiores en un sistema de filtrado.',
    },
    {
      termino: 'Impedancia',
      significado:
        'oposición de un circuito de corriente alterna al cambio de la corriente o voltaje, con magnitud y fase.',
    },
    {
      termino: 'Modulación',
      significado:
        'proceso mediante el cual se altera la señal portadora en amplitud o frecuencia para transmitir información en comunicaciones analógicas.',
    },
    {
      termino: 'Onda portadora',
      significado:
        'señal que se utiliza para transportar la información en sistemas de modulación, ya sea en frecuencia o amplitud.',
    },
    {
      termino: 'Relación señal a ruido',
      significado:
        'medida que compara la potencia de la señal deseada con la potencia del ruido de fondo, afectando la claridad de la comunicación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Departamento de Ingeniería Telemática. (2004). <em>Transmisión y digitalización</em>.',
      link: '',
    },
    {
      referencia:
        'Franco, M. (2016). <em>Filtros analógicos</em>. Universidad Complutense de Madrid.',
      link: '',
    },
    {
      referencia:
        'Couch, L. W. (2008). <em>Sistemas de comunicación digitales y analógicos</em>. Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Molina, C. E. (s. f.). <em>Factores que afectan la transmisión de señales</em>.',
      link: '',
    },
    {
      referencia: 'Pérez Vega, C. (s. f.). <em>Ruido</em>.',
      link: '',
    },
    {
      referencia:
        'Santa Cruz, Ó. M. (2010). <em>Transmisión de modulación de amplitud</em>.',
      link: '',
    },
    {
      referencia:
        'Sabando, M. V. (2014). <em>Transformadas de Fourier y telecomunicaciones</em>.',
      link: '',
    },
    {
      referencia:
        'Universidad Tecnológica Nacional. (s. f.). <em>Receptores de RF</em>.',
      link: '',
    },
    {
      referencia:
        'Wayne, T. (2003). <em>Sistemas de comunicaciones electrónicas</em>. Pearson Educación.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Fabio Enrique Combariza',
          cargo: 'Experto temático',
          centro:
            'Equipo de Adecuación Gráfica y Didáctica de Recursos Educativos - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
