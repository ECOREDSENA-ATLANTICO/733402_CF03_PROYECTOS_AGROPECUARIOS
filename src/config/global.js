export default {
  global: {
    componenteFormativo:
      'Formulación de los componentes de estudio para proyectos agropecuarios',
    descripcionCurso:
      'El tercer paso en proyectos agropecuarios es la formulación del proyecto productivo, compuesto por estudios de mercado, técnico, administrativo, ambiental y financiero. Se define el producto, su presentación y mercado objetivo; se describen los procesos productivos y se selecciona el tipo de empresa y estrategia administrativa. Además, se identifican las normativas ambientales y se calculan costos e ingresos para determinar el punto de equilibrio, asegurando la viabilidad del proyecto.',
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
        titulo: 'Estudio de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Identificación del bien o servicio',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Identificación de la demanda',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Identificación de la oferta',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Identificación del precio',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Estrategia de mercadeo agrícola',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estudio técnico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Localización',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tamaño',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Identificación y descripción del proceso',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Organización y cronograma',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estudio administrativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Planeación estratégica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Análisis DOFA',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Organigrama',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Aspecto legal',
            hash: 't_3_4',
            subMenu: [
              {
                numero: '3.4.1',
                titulo: 'Normatividad agropecuaria',
                hash: 't_3_4_1',
              },
              {
                numero: '3.4.2',
                titulo: 'Tipos de empresas en Colombia',
                hash: 't_3_4_2',
              },
              {
                numero: '3.4.3',
                titulo: 'Contratación',
                hash: 't_3_4_3',
              },
            ],
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estudio ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Legislación ambiental',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estudio financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Flujo de caja',
            hash: 't_5_1',
          },
        ],
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
        download: 'downloads/733402_CF03-DU.pdf',
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
      tema: 'Estudio administrativo',
      referencia:
        'Cámara de Comercio de Medellín. 2021. Guías de tipos societarios.',
      tipo: 'Guía',
      link: 'downloads/GuiaTipoSocietario__FormatoPDF_ago20.pdf',
    },
    {
      tema: 'Estudio técnico',
      referencia: 'FAO. (2018). Análisis FODA.',
      tipo: 'Diapositivas',
      link: 'http://www.fao.org/3/CA1923ES/ca1923es.pdf',
    },
    {
      tema: 'Estudio técnico',
      referencia:
        'Instituto Colombiano Agropecuario. (2021). Buenas prácticas agrícolas y ganaderas.',
      tipo: 'Resolución',
      link: 'https://www.ica.gov.co/areas/agricola-pecuaria/bpa-bpg.aspx',
    },
    {
      tema: 'Estudio técnico',
      referencia: 'Instituto Colombiano Agropecuario. (2021). Normatividad.',
      tipo: 'Artículo',
      link:
        'https://www.ica.gov.co/normatividad/normas-nacionales/resoluciones',
    },
    {
      tema: 'Estudio técnico',
      referencia:
        'Puentes, M. G. 2011. Formulación y evaluación de proyectos agropecuarios.',
      tipo: 'Libro',
      link:
        'downloads/Formulacion-y-evaluacion-de-proyectos-agropecuarios-Vista-preliminar-del-libro.pdf',
    },
    {
      tema: 'Estudio administrativo',
      referencia: 'Superintendencia de sociedades. Cartillas y guías.',
      tipo: 'Cartillas y guías',
      link:
        'https://www.supersociedades.gov.co/web/asuntos-economicos-societarios/manuales-y-cartillas',
    },
    {
      tema: 'Estudio administrativo',
      referencia: 'Ministerio del Trabajo. Tipos de contrato laborales.',
      tipo: 'Otro',
      link:
        'https://www.mintrabajo.gov.co/web/empleosinfronteras/conoce-los-tipos-de-contrato-de-trabajo',
    },
    {
      tema: 'Estudio administrativo',
      referencia:
        'Ministerio del Trabajo. Información y orientación laboral para la población colombiana en situación de retorno.',
      tipo: 'Cartilla',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59036289/CARTILLA+EMPLEO+RETORNO+op+3+completo+baja+11-10-2017.pdf',
    },
    {
      tema: 'Estudio administrativo',
      referencia:
        'Presidencia de la República. Decreto 2616 del 20 de noviembre de 2013.',
      tipo: 'Resolución',
      link:
        'http://wsp.presidencia.gov.co/Normativa/Decretos/2013/Documents/NOVIEMBRE/20/DECRETO%202616%20DEL%2020%20DE%20NOVIEMBRE%20DE%202013.pdf',
    },
    {
      tema: 'Estudio administrativo',
      referencia:
        'Ministerio del Trabajo. Abecé de la contratación por semanas.',
      tipo: 'Cartilla',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/241327/abece_cotizacion_por_semanas.pdf',
    },
    {
      tema: 'Estudio ambiental',
      referencia:
        'Unidad de Planeación Minero Energética (UPME). Normatividad ambiental y sanitaria.',
      tipo: 'Normatividad',
      link:
        'https://www.ica.gov.co/normatividad/indice-de-normatividad.aspx#:~:text=En%20la%20secci%C3%B3n%20encontrar%C3%A1%20la%20normatividad%20aplicable%20al,de%20los%20tratados%20o%20acuerdos%20suscritos%20por%20Colombia',
    },
  ],
  glosario: [
    {
      termino: 'Actividades',
      significado:
        'Corresponde al conjunto de acciones que comprometen recursos y tiempo, que es preciso realizar para alcanzar los objetivos propuestos en un proyecto. (Miranda, 2005).',
    },
    {
      termino: 'Activo',
      significado:
        'Representa los bienes y derechos que posee una empresa, tales como dinero, edificios, maquinaria, cuentas por cobrar, inversiones en papeles de mercado, valorizaciones, inventarios, etc. (Miranda, 2005).',
    },
    {
      termino: 'Administración Estratégica',
      significado:
        "En resumen la 'planeación estratégica' consiste en organizar de una manera disciplinada y sistemática, las tareas que la administración debe ejecutar para conducir a la organización hacia un futuro estable. Queda claro entonces que el fin de la planeación estratégica, es definir los objetivos a largo plazo de la empresa y diseñar los mecanismos para lograrlos; por lo tanto podemos afirmar que la planeación estratégica no pretende predecir el futuro, sino adoptar decisiones con impacto de futuro; tampoco trata de eliminar los riesgos, su finalidad es asegurar que se tomen los riesgos correctos en el momento oportuno. (Miranda, 2005).",
    },
    {
      termino: 'Alternativas',
      significado:
        'Posibilidad de elegir entre opciones o soluciones diferentes. (Nuño, 2012).',
    },
    {
      termino: 'Análisis Financiero',
      significado:
        'Es la presentación en forma procesada de la información de los estados financieros de una empresa y que sirve para la toma de decisiones económicas, tales como nuevas inversiones, fusiones, concesión de crédito, etc. (Miranda, 2005).',
    },
    {
      termino: 'Área de Influencia',
      significado:
        'Son aquellos territorios (nacional, regional, departamental, local, zonal) que serán afectados directa o indirectamente por el proyecto. (Miranda, 2005).',
    },
    {
      termino: 'Balance',
      significado:
        'Demostrativo contable de la situación económica y financiera de una empresa, en un momento determinado. (Miranda, 2005).',
    },
    {
      termino: 'Beneficiario',
      significado:
        'Persona o grupo de personas que reciben los beneficios de un proyecto de inversión. Persona a la cual se transfiere un activo financiero o a favor de quien se emite un título o un contrato de seguro. (Miranda, 2005).',
    },
    {
      termino: 'Capacidad Diseñada',
      significado:
        'Corresponde a la capacidad técnica máxima tolerable de producción o prestación de servicio, y puede eventualmente superar a la capacidad instalada, lo que significa que en situaciones de excepción se puede trabajar con sobrecarga. (Miranda, 2005).',
    },
    {
      termino: 'Ciclo del Proyecto',
      significado:
        'Hace referencia a las etapas de preinversión (identificación, formulación y evaluación), negociación, ejecución, operación y la evaluación ex-<em>post</em>. (Miranda, 2005).',
    },
    {
      termino: 'Debitar',
      significado: 'Retirar fondos de una cuenta (Miranda, 2005).',
    },
    {
      termino: 'Dinero',
      significado:
        'Instrumento de cambio representado en papel o moneda, que cumple cuatro funciones: medio de cambio; medida de valor; patrón de pago; unidad de cuenta. Su característica esencial es ser medio de pago generalmente aceptado a cambio de bienes y servicios y en la cancelación de deudas. (Miranda, 2005).',
    },
    {
      termino: 'Sinergia',
      significado:
        'Acción combinada de dos o más agentes que resulta mayor que la suma de las acciones individuales. (Miranda, 2005).',
    },
  ],
  referencias: [
    {
      referencia: 'Agrosana. (2015). Política de Calidad. Agrosana.',
      link: 'https://agrosana.es/',
    },
    {
      referencia: 'Agrosavia. (2021). Qué hacemos. Valores.',
      link: 'https://www.agrosavia.co/qu%C3%A9-hacemos',
    },
    {
      referencia:
        'Cámara de Comercio de Medellín. (2021). Guías de tipos societarios.',
      link:
        'https://www.camaramedellin.com.co/Portals/0/Documentos/Guias-Mercantil/NuevaGuiaTipoSocietario__2022_002.pdf',
    },
    {
      referencia:
        'Decreto 2616 de 2013. (Ministerio de Trabajo y Protección Social).',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/241327/decreto_2616_del_20_de_noviembre_de_2013.pdf',
    },
    {
      referencia:
        'Enciclopedia Económica (2021). Mercadeo. Funciones del Mercado.',
      link: 'https://economipedia.com/definiciones/mercado.html',
    },
    {
      referencia: 'FAO. (2018). Análisis FODA.',
      link: 'http://www.fao.org/3/CA1923ES/ca1923es.pdf',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2021). Buenas prácticas agrícolas y ganaderas. ICA.',
      link: 'https://www.ica.gov.co/areas/agricola-pecuaria/bpa-bpg.aspx',
    },
    {
      referencia:
        'Jimenez, L.W. (2010). Contabilidad de Costos. FOCO Ediciones Bogotá.',
      link:
        'https://es.slideshare.net/slideshow/libro-contabilidadcostos-jimenez-william/250511946',
    },
    {
      referencia:
        'Martínez, A.J. (2017). El ciclo de vida del producto. Econosublime.',
      link: 'http://www.econosublime.com/2020/01/ciclo-vida-producto.html',
    },
    {
      referencia:
        'Mendieta. (2005). Formulación y evaluación de proyectos de inversión agropecuaria. Universidad Agraria. Nicaragua.',
      link: 'https://repositorio.una.edu.ni/2437/1/ne14m537.pdf',
    },
    {
      referencia:
        'Ministerio de Trabajo y Protección Social. (2014). Abecé de la cotización por semanas.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/241327/abece_cotizacion_por_semanas.pdf',
    },
    {
      referencia:
        'Ministerio de Trabajo y Protección Social. (2021). Conoce los tipos de contrato de trabajo.',
      link:
        'https://www.mintrabajo.gov.co/web/empleosinfronteras/conoce-los-tipos-de-contrato-de-trabajo',
    },
    {
      referencia:
        'Miranda, M.J. (1999). Gestión de proyectos. Cuarta Edición. MM Editores.',
      link:
        'https://www.academia.edu/17688636/Gesti%C3%B3n_de_Proyectos_Juan_Jose_Miranda_Miranda',
    },
    {
      referencia:
        'Nuño, L.P. (2012). Administración de Pequeñas Empresas. Red Tercer Milenio.',
      link:
        'https://www.academia.edu/36532308/Administraci%C3%B3n_de_peque%C3%B1as_empresas_PIERINA_DEL_REFUGIO_NU%C3%91O_DE_LEON',
    },
    {
      referencia:
        'Puentes, M.G. 2011. Formulación y evaluación de proyectos agropecuarios. Ecoe.',
      link:
        'https://www.ecoeediciones.com/producto/formulacion-y-evaluacion-de-proyectos-agropecuarios-ebook/',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2014). El Contrato de Trabajo. SENA.',
      link:
        'https://normograma.sena.edu.co/docs/concepto_sena_2014-02-0010360_2014.htm',
    },
    {
      referencia:
        'Universidad Autónoma de México. Estudio Técnico. Facultad de Economía. (pp. 53-93).',
      link: 'http://www.economia.unam.mx/secss/docs/tesisfe/GomezAM/cap2a.pdf',
    },
    {
      referencia:
        'Unidad de Planeación Minero Energética UPME. (2021). Normatividad Ambiental y Sanitaria.',
      link:
        'http://www.upme.gov.co/guia_ambiental/carbon/gestion/politica/normativ/normativ.htm#BM2_1_Normas_y_principios_ambientales_co',
    },
    {
      referencia:
        'Ministerio de Trabajo y Protección Social. (2017). Información y Orientación laboral para la población colombiana en situación de retorno.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59036289/CARTILLA+EMPLEO+RETORNO+op+3+completo+baja+11-10-2017.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del ecosistema de recursos educativos digitales (red)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Roberto Augusto Bernal Duque',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Yeison Farid Méndez Ortiz',
          cargo: 'Experto temático',
          centro: 'Centro Agropecuario “La Granja” – Regional Tolima',
        },
        {
          nombre: 'Orlando Barón Méndez',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
        {
          nombre: 'Fabian Cuartas Donado',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Alexander Acosta',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Liborio de Jesús Castañeda Valencia',
          cargo: 'Desarrollo <em>Full stack</em> Junior',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
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
