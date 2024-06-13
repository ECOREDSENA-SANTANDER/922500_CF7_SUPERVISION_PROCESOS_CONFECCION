export default {
  global: {
    componenteFormativo: 'Planes de mantenimiento de maquinaria y equipos',
    descripcionCurso:
      'El siguiente componente ilustra cómo diseñar e implementar un programa de mantenimiento para maquinaria y equipos de confección industrial, mediante el conocimiento de los sistemas de funcionamiento de dichos equipos. Asimismo, se destaca la importancia de una gestión adecuada que permita aprovechar al máximo las máquinas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        titulo: 'Máquinas y herramientas para confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Terminología técnica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Máquinas de confección',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Herramientas o equipos de mantenimiento de máquinas de coser',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mantenimiento de las máquinas de confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de mantenimiento',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Seguimiento a las máquinas y acciones de mantenimiento',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de lubricación en máquinas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de lubricación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de lubricantes',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Proceso de lubricación de máquinas de coser ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión del mantenimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Plan de mantenimiento',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Herramienta Total Productive Maintenance (TPM) - Mantenimiento Productivo Total',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Guías y accesorios para la confección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Mantenimiento y atención a problemas menores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Buenas prácticas para el mantenimiento de máquinas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Puesta a punto de la máquina y el puesto de trabajo',
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
        download: 'downloads/CF07_922500_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/CF07_922500_DU.zip',
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
      tema: 'Mantenimiento',
      referencia:
        'Escuela Europea de Formación Empresarial, S. A. (2012). Preparación de herramientas, máquinas y equipos para la confección de productos textiles: cortinaje y complementos de decoración. IC Editorial.',
      tipo: 'Libro',
      link:
        'https://www.iceditorial.com/cortinaje-y-complementos-de-decoracion-tcpf0309/8438-preparacion-de-herramientas-maquinas-y-equipos-para-la-confeccion-de-productos-textiles-uf1037-2-ed-9788491984467.html ',
    },
    {
      tema: 'Agujas',
      referencia:
        'Coser fácil y más. (2019). Tipos de agujas para máquinas de coser doméstica.',
      tipo: 'Video',
      link: 'https://youtu.be/kVNt52lzehQ',
    },
    {
      tema: 'Lazada',
      referencia:
        'Mecánica confección. (s.f.). Cómo funciona una máquina de coser y forma la pintada I.',
      tipo: 'Video',
      link: 'https://youtu.be/SKTaW5NOjqw',
    },
    {
      tema: 'Lubricantes',
      referencia: 'Lubricantes Raloy. (s.f.). Manual técnico de lubricantes. ',
      tipo: 'PDF',
      descarga: '/downloads/Manual_Tecnico_2013.pdf',
    },
    {
      tema: 'Gestión del mantenimiento',
      referencia:
        'Dr. Buchelli UNT. (2014). La gestión del mantenimiento en las empresas.',
      tipo: 'Video',
      link: 'https://youtu.be/-5nxVsKSNaI',
    },
    {
      tema: 'plan mantenimiento',
      referencia:
        'Valbor Soluciones. (2018). Plan de mantenimiento: 5 elementos indispensables.',
      tipo: 'Video',
      link: 'https://youtu.be/av7JwCDox3A',
    },
    {
      tema: 'Plan mantenimiento',
      referencia: 'Top Solución. (s.f.). Plan de mantenimiento.',
      tipo: 'Video',
      link: 'https://youtu.be/ufdL4VmHt4I',
    },
    {
      tema: 'TPM',
      referencia:
        'Gemba Academy Español. (2018). TPM Mantenimiento productivo total.',
      tipo: 'Video',
      link: 'https://youtu.be/QdDPyNolNhk',
    },
    {
      tema: 'Puesta a punto de la máquina',
      referencia:
        'Mecánica de confección. (2018). Puesta a punto de las máquinas de coser.',
      tipo: 'Video',
      link: 'https://youtu.be/YNf0salcrlc',
    },
  ],
  glosario: [
    {
      termino: 'Asertiva',
      significado: 'expresión caracterizada por afirmar de manera categórica.',
    },
    {
      termino: 'Costura',
      significado:
        'resultado de unir dos o más hilos, con el fin de unir piezas o dobladillarlas.',
    },
    {
      termino: 'Diagrama de flujo',
      significado:
        'gráfica que muestra la secuencia de actividades de un proceso, de manera organizada y por medio de símbolos.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'relación entre los resultados y logros, y los recursos utilizados.',
    },
    {
      termino: 'Embonar',
      significado: 'unir dos piezas doblándolas y ocultando sus extremos.',
    },
    {
      termino: 'Ensamble',
      significado:
        'unir de manera correcta las piezas que componen un producto.',
    },
    {
      termino: 'Gestión',
      significado:
        'acciones u operaciones que se realizan para dirigir y administrar un negocio o empresa, con el fin de lograr los objetivos propuestos.',
    },
    {
      termino: 'Flujo',
      significado:
        'manera como una serie de actividades se dirigen a un propósito planeado.',
    },
    {
      termino: 'Intempestiva',
      significado: 'que sucede de manera sorpresiva, cuando no se espera.',
    },
    {
      termino: 'Maquila',
      significado:
        'es un sistema de producción que consiste en vender servicio de ensamble de productos de empresas que fungen como clientes; servicio de mano de obra.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amazon.com.mx. (2021). Piezas y accesorios para máquinas de coser.',
      link:
        'https://www.amazon.com.mx/143169LGB-1conjunto-m%C3%A1quina-M%C3%A1quina-TRABAJO/dp/B078G7MRN6',
    },

    {
      referencia:
        'AMERICAN SEWING MACHINE OIL Aceite American Para Máquinas de Coser. Recuperado en',
      link: 'https://www.widman.biz/specs/coser.pdf',
    },

    {
      referencia:
        'Ananas Labores y Manualidades. (2016). Conociendo la máquina de coser VI: Mantenimiento de la máquina. [Artículo de blog].',
      link:
        'https://ananaslaboresymanualidades.wordpress.com/2016/07/07/mantenimiento-la-maquina-de-coser-limpieza-y-engrasado/',
    },

    {
      referencia:
        'Armando SK. (2015). Consejos de mantenimiento para que tu máquina de coser dure para siempre jamás. [Blog].',
      link: 'https://skarlett.es/mantenimiento-para-tu-maquina-de-coser/',
    },

    {
      referencia:
        'BSG Instituto. (2020). Los 8 pilares del TPM. [Artículo de blog].',
      link:
        'https://bsginstitute.com/bs-campus/blog/los-8-pilares-del-tpm-1134',
    },

    {
      referencia:
        'Cabanillas, R. (2018). Mantenimiento de las máquinas de coser industrial de clase 500. [Tesis de grado]. Universidad Nacional de Educación Enrique Guzmán y Valle.',
      link:
        'https://alicia.concytec.gob.pe/vufind/Record/UNEI_c9f3c0d5649a7644872bc7ad05ba56ec',
    },

    {
      referencia: 'Coats Group. (s.f.) Todo sobre agujas. Coats.',
      link:
        'https://coats.com/en/information-hub/All-About-Needles#Needle_Identification',
    },

    {
      referencia:
        'Confecciones Badaam Ltda. (2020). Ficha técnica máquina plana CF-MP-002.',
      link: 'https://es.calameo.com/books/006407866f35c2a55d005',
    },

    {
      referencia:
        'Durán, P., D. (2013). Preparación de máquinas de corte, ensamblado y acabado. IC Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/43646',
    },

    {
      referencia: 'Lubricantes Raloy. (s.f.) Manual técnico de lubricantes.',
      link: 'http://www.raloy.com.mx/descargas/files/Manual_Tecnico_2013.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Pedro Luis Sossa Ramírez',
          cargo: 'Contratista diseño y desarrollo curricular',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda',
        },
        {
          nombre: 'Liliana María Ceballos Gutiérrez',
          cargo: 'Contratista diseño y desarrollo curricular',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda',
        },
        {
          nombre: 'Carlos Parra Carrillo',
          cargo: 'Instructor',
          centro:
            'Regional Huila - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Zvi Daniel Grosman Landáez',
          cargo: 'Contratista - Diseñador instruccional',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Revisora pedagógica y metodológica',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julián Fernando Vanegas Vera',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <i>Fullstack</i>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para Contenidos Inclusivos y Accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
