<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estudio administrativo
      
    .row.align-items-center.justify-content-center.mb-2
      .col-lg-5.mb-3(data-aos="fade-right")
        img.mt-3.mx-auto.img-responsive(src='@/assets/curso/images/tema3/img_1.png'  alt='')
      .col-lg-7.mb-3(data-aos="fade-left") 
        p.mb-3 El objetivo del estudio administrativo es generar herramientas para poder realizar una adecuada administración del proyecto agropecuario que se desee ejecutar, al igual que los estudios de demanda, técnico, financiero, legal y ambiental, tiene alta relevancia, aquí también se plasma la esencia, las causas y lo que se quiere conseguir en la ejecución del proyecto productivo, además genera orden en los procesos, junto con el registro de las diferentes actividades realizadas día a día en la explotación agropecuaria.
        
        .cajon.bg-05.p-4.ps-5.bg_18.mb-4.mb-lg-0
          .row
            .col-md-3
              img.w-auto.mx-auto(src='@/assets/curso/images/tema3/img_2.svg'  alt='')
            .col-md-9
              p.mb-0 En la implementación del aspecto administrativo para el proyecto agropecuario es importante iniciar con un elemento administrativo que es la planeación estratégica, encargada de definir el rumbo y las acciones a realizar para alcanzar los objetivos que se plantean en el proyecto agropecuario.
    
    Separador

    #t_3_1.titulo-segundo
      .h2(data-aos="fade-right") 3.1 Planeación estratégica

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-5
        .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El propósito de la planeación estratégica es identificar para donde desea que va a ir su empresa, usando las tendencias del mercado, sociales y económicas; luego, comienza el proceso para generar la misión, visión, objetivos, políticas, estrategias, valores, etc, a continuación se relaciona una breve descripción de cada uno:
    
    .row.justify-content-center.align-items-center.mb-2
      .col-md-12
        LineaTiempoD.color-acento-contenido 
          .row(numero="1" titulo="Misión")
            .col-md-7.mb-4.mb-md-0
              p Aquí se establece el propósito o función que se pretende cumplir con el proyecto, ejemplo: ser una empresa reconocida como líder en la producción y comercialización de mojarra roja, tanto a nivel nacional como internacional.
      
            .col-md-5
              figure
                img(src='@/assets/curso/images/tema3/img_4.png', alt='Texto que describa la imagen')

          .row(numero="2" titulo="Visión")
            .col-md-7.mb-4.mb-md-0
              p Para indicar el rumbo de la empresa con el fin de guiar las políticas generadas desde la gerencia y sus colaboradores (operario, supervisores, técnicos, personal administrativo). Ejemplo, comprometernos en ser la empresa agropecuaria líder en Colombia, para lograrlo invertiremos en investigación, desarrollo del capital humano y productivo para alcanzar los resultados financieros establecidos, sin perder de vista la sostenibilidad ambiental de la región.
      
            .col-md-5
              figure
                img(src='@/assets/curso/images/tema3/img_5.png', alt='Texto que describa la imagen')

          .row(numero="3" titulo="Objetivo")
            .col-md-7.mb-4.mb-md-0
              p Son metas propuestas para lograr lo que se pretende con la creación y puesta en marcha del proyecto, se caracterizan por ser medibles o cuantificables, detallados, claros, fáciles de entender, son limitados en el tiempo y deben poder realizarse por las personas que trabajan en la organización. Ejemplo, producir mensualmente 2000 kilos de plátano hartón de primera calidad, durante los dos primeros años del proyecto productivo.
      
            .col-md-5
              figure
                img(src='@/assets/curso/images/tema3/img_6.png', alt='Texto que describa la imagen')
          
          .row(numero="4" titulo="Políticas")
            .col-md-7.mb-4.mb-md-0
              p Generan lineamientos para el trabajo en la empresa agropecuaria, la política es generada desde la gerencia del proyecto. Ejemplo, la dirección de grupo AGROSANA entiende que la calidad de sus servicios y productos debe estar orientada hacia la satisfacción de las expectativas de nuestros clientes, como elemento diferenciador y fundamental que asegura el éxito en la “venta al por mayor de fitosanitarios, fertilizantes y productos auxiliares para uso agrícola”. Pretendemos seguir avanzando para llevar nuestro espíritu de vanguardia y calidad para que de esta forma cada vez más empresas puedan disfrutar de todos nuestros productos y servicios, haciendo de grupo AGROSANA, una empresa de referencia en el mercado nacional. A fin de cumplir con esta política, grupo AGROSANA ha establecido un sistema de gestión de la calidad conforme a los requisitos de la norma UNE-EN-ISO-9001:2015 cuyas estipulaciones son de obligado cumplimiento. AGROSANA, 2015.
      
            .col-md-5
              figure
                img(src='@/assets/curso/images/tema3/img_7.png', alt='Texto que describa la imagen')
          
          .row(numero="5" titulo="Valores")
            .col-md-7.mb-4.mb-md-0
              p Aquí se establecen los principios por medio de los cuales se rigen las personas que hacen parte del proyecto productivo, están dirigidos al cumplimiento de los objetivos y planes. Ejemplo, la confianza que se genera seguridad entre las personas y frente a otros, respecto de nuestra idoneidad, competencia y credibilidad para lograr la transformación sostenible del sector agropecuario. Agrosavia, 2021.
      
            .col-md-5
              figure
                img(src='@/assets/curso/images/tema3/img_8.png', alt='Texto que describa la imagen')
              

    Separador

    #t_3_2.titulo-segundo
      .h2(data-aos="fade-right") 3.2 Análisis DOFA

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.mb-5(data-aos="fade-right")
        img.mt-3.mx-auto.img-responsive(src='@/assets/curso/images/tema3/img_9.png'  alt='')
      .col-lg-7.mb-5(data-aos="fade-left")   
        .cajon.bg-11.p-4.ps-5.bg_18.mb-4.mb-lg-0
          p.mb-0 Es una herramienta o técnica de diagnóstico en procesos de producción y proyectos productivos en la que se identifican las debilidades (D) oportunidades (O) fortalezas (F) y amenazas (A); al finalizar el desarrollo de la herramienta podemos realizar un análisis sobre las fortalezas y debilidades que se identifican dentro del proyecto productivo y también se puede realizar un análisis externo del proyecto oportunidades y amenazas que afectan positiva y negativamente el desarrollo de las actividades del proyecto.
    
      .col-lg-10.mb-5
        .tarjeta.color-primario.p-3.banner_tarjeta  
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/images/tema3/img_10.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Herramienta DOFA
                  p.mb-0 Para conocer más acerca de la herramienta DOFA, puede descargar el siguiente recurso.
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(href="http://www.fao.org/3/CA1923ES/ca1923es.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-file-pdf
      
    Separador
    
    #t_3_3.titulo-segundo
      .h2(data-aos="fade-right") 3.3 Organigrama

    p.mb-5 Consiste en la elaboración de un cuadro de jerarquía en el que se escriben los cargos que se identifican dentro del proyecto, para su elaboración debe identificarse la cadena de mando, las áreas están presentes, identificar las funciones que se desarrollan en cada una de las áreas y sus relaciones jerárquicas.

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-down").img_fondo_1
      .col-lg-10.mb-5
        h4.text-center.mb-5 Para la elaboración del organigrama del proyecto se pueden utilizar los siguientes pasos:
      
        img.mb-5.mt-auto.ocultar(src="@/assets/curso/images/tema3/img_11.png" alt="A continuación se puede apreciar en la figura los pasos para la elaboración del organigrama del proyecto: -Establecer la cadena de mando. -Identificar las áreas de trabajo. -Identificar las funciones de cada una de las áreas. -Establecer hasta dónde llega la responsabilidad de cada uno de los cargos que se encuentran en cada área. -Identificar si la relación jerárquica va de arriba hacia abajo o si es horizontal. -El organigrama ayuda a identificar la toma de decisiones con el fin de delegar funciones y diseñar diferentes estrategias.")
        img.mb-5.mt-auto.mostrar(src="@/assets/curso/images/tema3/img_12.png" alt="A continuación se puede apreciar en la figura los pasos para la elaboración del organigrama del proyecto: -Establecer la cadena de mando. -Identificar las áreas de trabajo. -Identificar las funciones de cada una de las áreas. -Establecer hasta dónde llega la responsabilidad de cada uno de los cargos que se encuentran en cada área. -Identificar si la relación jerárquica va de arriba hacia abajo o si es horizontal. -El organigrama ayuda a identificar la toma de decisiones con el fin de delegar funciones y diseñar diferentes estrategias.")

        .cajon.bg-10.p-4.ps-5.bg_18.mb-4.mb-lg-0
          p.mb-0 El organigrama ayuda a identificar la toma de decisiones con el fin de delegar funciones y diseñar diferentes estrategias.


    Separador
    
    #t_3_4.titulo-segundo
      .h2(data-aos="fade-right") 3.4 Aspecto legal

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.mb-5(data-aos="fade-right")
        img.mt-3.mx-auto.img-responsive(src='@/assets/curso/images/tema3/img_13.png'  alt='')
      .col-lg-7.mb-5(data-aos="fade-left")   
        p.mb-0 En la formulación de proyectos agropecuarios el aspecto legal es de gran relevancia debido a que muchas de las actividades que realizamos en el campo están reguladas por la constitución política de Colombia, por el Ministerio de Agricultura y Medio Ambiente (MADR) por la Agencia de Desarrollo Rural (ADR) y por el Instituto Colombiano Agropecuario (ICA); esta última entidad es la encargada de velar por la sanidad de los productos en el país para su exportación e importación. No debe perder de vista la legislación reciente Sistema Nacional de Innovación Agropecuaria (SNIA) la cual fue vista en el componente formativo 1: diagnóstico de la situación problémica en la población, organización o empresa agropecuaria rural.
          
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-2
        .h3.mx-5.mb-0.mt-1 Normatividad agropecuaria
    
    .row.align-items-center.justify-content-center.mb-2
      .col-lg-7.mb-3(data-aos="fade-left") 
        p.mb-3 Todas las explotaciones agropecuarias del país estén o no formalizadas como empresas están en la obligación de cumplir con una normatividad mínima en aspectos técnicos de sanidad vegetal, animal y agroindustrial; para esto el ICA tiene como misión, “trabajar por la sanidad agropecuaria y la inocuidad agroalimentaria del campo Colombiano”. 
        
        .cajon.bg-05.p-4.ps-5.bg_18.mb-5.mb-lg-0
          .row
            .col-md-2
              img.w-auto.mx-auto(src='@/assets/curso/images/tema3/img_14.svg'  alt='')
            .col-md-10
              p.mb-0 Es así como esta entidad realiza asesoría y acompañamiento a los productores agropecuarios del país para la obtención de certificados tales como se relacionan en la siguiente tabla: 

      .col-lg-5.mb-5(data-aos="fade-right")
        img.mt-3.mx-auto.img-responsive(src='@/assets/curso/images/tema3/img_15.png'  alt='')

      .col-lg-10.mb-3(data-aos="zoom-in-down")
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b
            table 
              tr.bg-08 
                th.text-center.w-35 Norma
                th.text-center Descripción
              tr 
                td.text-bold Resolución 20009 de 2016
                td Por medio de la cual se establecen los requisitos para la certificación en buenas prácticas agrícolas en producción primaria de vegetales y otras especies para consumo humano.
              tr 
                td.text-bold Resolución 2304 de 2015
                td Por la cual se establecen los requisitos sanitarios y de inocuidad para obtener la certificación en Buenas Prácticas Ganaderas (BPG) en la producción primaria de ovinos y caprinos destinados al sacrificio para consumo humano.
              tr 
                td.text-bold Resolución ICA 448 de 2016
                td Por medio de las cuales se establecen los requisitos para el registro ante el ICA de los predios de vegetales para exportación en fresco, el registro de exportadores y el registro de las plantas empacadoras de las plantas para exportación en fresco.
              tr 
                td.text-bold Decreto 616 de 2007
                td Por el cual se establece el reglamento técnico sobre los requisitos que debe cumplir la leche para el consumo humano que se obtenga, procese, envase, transporte, comercialice, expenda, importe o exporte en el país.
              tr 
                td.text-bold Decreto 1880 de 2011
                td Por el cual se señalan los requisitos para la comercialización de leche cruda para consumo humano directo en el territorio nacional.
              tr 
                td.text-bold Decreto 1162 de 2010
                td Por el cual se organiza el sistema administrativo nacional de propiedad intelectual y se crea la comisión intersectorial de propiedad intelectual.
              tr 
                td.text-bold Decreto 3149 de 2006
                td Por el cual se dictan disposiciones sobre la comercialización, transporte, sacrificio de ganado bovino y bufalino y expendio de carne en el territorio nacional.
              tr 
                td.text-bold Decreto 616 de 2006
                td Por el cual se expide el reglamento técnico sobre los requisitos que debe cumplir la leche para el consumo humano que se obtenga, procese, envase, transporte, comercializa, expenda, importe o exporte en el país.
              tr 
                td.text-bold Decreto 1355 de 2001
                td Por el cual se adoptan medidas transitorias sobre las exportaciones de animales vivos de la especie bovina.
              tr 
                td.text-bold Decreto 459 de 2000
                td Por el cual se dictan normas relacionadas con los plaguicidas genéricos.
              tr 
                td.text-bold Resolución 17 de 2012
                td Por la cual se establece el sistema de pago de la leche cruda al proveedor.
              tr 
                td.text-bold Resolución 310 de 2009
                td Por la cual se determina el valor promedio nacional de los costos de establecimiento y mantenimiento por hectárea de bosque plantado, se fija la cuantía máxima porcentual que se reconocerá por concepto de certificado de incentivo forestal y se fija el Incentivo por árbol, para el año 2010.
              tr 
                td.text-bold Resolución 36 de 2009
                td Por la cual se reglamentan para el año 2009 los contingentes de exportación de ganado en pie de la especie bovina. (publicada diario oficial 47262 de 2009).
              tr 
                td.text-bold Resolución 1442 de 2008
                td Por la cual se establece el procedimiento para la expedición del dictamen técnico-ambiental al que alude la norma andina para el registro y control de plaguicidas químicos de uso agrícola, decisión 436, de la comisión de la comunidad andina, y se toman otras determinaciones.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-6.mb-5
        .tarjeta.color-primario.p-2.banner_tarjeta
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/images/tema3/img_16.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Recurso web
                  p.mb-0 Si está interesado en la normatividad para certificarse en buenas prácticas agrícolas y/o buenas prácticas pecuarias, diríjase al siguiente enlace.
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(href="https://www.ica.gov.co/areas/agricola-pecuaria/bpa-bpg.aspx" target="_blank")
                    span Consultar sitio
                    i.fas.fa-file-pdf

      .col-lg-6.mb-5
        .tarjeta.color-primario.p-4.banner_tarjeta
          .row.justify-content-around.align-items-center.p-4
            .col-auto
              img(src="@/assets/curso/images/tema3/img_16.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Recurso web
                  p.mb-0 Para conocer en detalle la normatividad ICA, ingresar al siguiente enlace.
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(href="https://www.ica.gov.co/normatividad/normas-nacionales/resoluciones" target="_blank")
                    span Consultar sitio
                    i.fas.fa-file-pdf
    
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-2
        .h3.mx-5.mb-0.mt-1 Tipos de empresas en Colombia


    .row.align-items-center.justify-content-center.mb-2
      .col-lg-5.mb-5(data-aos="fade-right")
        img.mt-3.mx-auto.img-responsive(src='@/assets/curso/images/tema3/img_17.png'  alt='')

      .col-lg-7.mb-5(data-aos="fade-left") 
        p.mb-3 En el estudio administrativo es preciso determinar el tipo de empresa que se va a crear, para poder realizar las actividades comerciales acordes a las necesidades para la ejecución del proyecto, como la compra de insumos, pago de impuestos, contratación, etc.
        p.mb-3 En el territorio nacional existen dos formas jurídicas que son persona natural cuando la actividad comercial la ejerce una persona a nombre propio; persona jurídica fi­gura en la que el negocio es una sociedad que funciona con patrimonio independiente al de sus accionistas, siempre necesita de un representante legal quien actúa en nombre de la sociedad. (Cámara de comercio de Medellín, 2021, p3).
        
        .cajon.bg-05.p-4.ps-5.bg_18.mb-4.mb-lg-0
          .row
            .col-md-2
              img.w-auto.mx-auto(src='@/assets/curso/images/tema3/img_18.svg'  alt='')
            .col-md-10
              p.mb-0 Cuando se registra como persona jurídica es importante conocer las características de cada una de ellas, según la Cámara de comercio de Medellín, existen los siguientes tipos de sociedades:
      
      .col-lg-10.mb-4(data-aos="zoom-in-down")
        img.mb-5.mt-auto.ocultar(src="@/assets/curso/images/tema3/img_19.png" alt="En la siguiente imagen se relaciona, según la cámara de comercio de Medellín, los siguientes tipos de sociedades: -Sociedad de comandita simple. -Sociedad en comandita por acciones. -Sociedad de responsabilidad limitada. -Sociedad anónima. -Sociedad por Acciones Simplificada (SAS). -Empresa unipersonal.")
        img.mb-5.mt-auto.mostrar(src="@/assets/curso/images/tema3/img_20.png" alt="En la siguiente imagen se relaciona, según la cámara de comercio de Medellín, los siguientes tipos de sociedades: -Sociedad de comandita simple. -Sociedad en comandita por acciones. -Sociedad de responsabilidad limitada. -Sociedad anónima. -Sociedad por Acciones Simplificada (SAS). -Empresa unipersonal.")

      .col-lg-6.mb-5(data-aos="fade-left") 
        .tarjeta.color-primario.p-3.banner_tarjeta
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/images/tema3/img_16.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 Recurso web
                  p.mb-0 Superintendencia de sociedades. Cartillas y guías.
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(href="https://www.supersociedades.gov.co/web/asuntos-economicos-societarios/manuales-y-cartillas" target="_blank")
                    span Consultar sitio
                    i.fas.fa-file-pdf

      .col-lg-6.mb-5(data-aos="fade-right") 
        .tarjeta.color-primario.p-3.banner_tarjeta
          .row.justify-content-around.align-items-center.p-2
            .col-auto
              img(src="@/assets/curso/images/tema3/img_10.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-3 Guía tipo societario
                  p.mb-0.text-small Para ampliar la información puede consultar la guía de tipos societarios de la Cámara de Comercio de Medellín (2021).
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/GuiaTipoSocietario__FormatoPDF_ago20.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-pdf


    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-2
        .h3.mx-5.mb-0.mt-1 Contratación

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-5
        .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_21.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Después de haber conocido los tipos de sociedades que existen en Colombia, es momento de conocer los tipos de contrato que existen junto con sus características, es por esto por lo que en la página del ministerio de trabajo se encuentra esta información para su conocimiento y manejo.

      .col-lg-8.mb-5
        .tarjeta.color-primario.p-3.banner_tarjeta
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/images/tema3/img_16.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Recurso web
                  p.mb-0.text-small Ministerio del trabajo. Tipos de contrato.
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(href="https://www.mintrabajo.gov.co/web/empleosinfronteras/conoce-los-tipos-de-contrato-de-trabajo" target="_blank")
                    span Ir al sitio
                    i.fas.fa-file-pdf
      
      .col-lg-12.mb-3
        .cajon.bg-11.p-4.ps-5.bg_18.mb-4.mb-lg-0
          p.mb-0 También para conocer a detalle la definición de contrato, tipos de contrato, periodo de prueba, salario y demás características que todo emprendedor debe conocer para conformar una empresa que cumpla con los estándares legales y que aporte al desarrollo social, productivo generando procesos de responsabilidad social empresarial.

      .col-lg-6.mb-5
        .tarjeta.color-primario.p-3.banner_tarjeta
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/images/tema3/img_10.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 El contrato de trabajo SENA
                  p.mb-0.text-small Documento SENA.
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Anexo 4_Documento SENA el contrato de trabajo.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-pdf

      .col-lg-6.mb-5
        .tarjeta.color-primario.p-3.banner_tarjeta
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/images/tema3/img_10.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Recurso PDF
                  p.mb-0.text-small Información y orientación laboral para la población colombiana en situación de retorno.
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(href="https://www.mintrabajo.gov.co/documents/20147/59036289/CARTILLA+EMPLEO+RETORNO+op+3+completo+baja+11-10-2017.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-file-pdf

    .row.align-items-center.justify-content-center.mb-2
      .col-lg-5.mb-3(data-aos="fade-right")
        img.mt-3.mx-auto.img-responsive(src='@/assets/curso/images/tema3/img_17.png'  alt='')

      .col-lg-7.mb-3(data-aos="fade-left") 
        p.mb-3 El sector agropecuario en Colombia está enmarcado por la informalidad en la contratación de trabajadores del sector rural, para mejorar las condiciones laborales el gobierno nacional bajo la dirección del ministerio de trabajo y protección social expide el decreto 2616 de 2013 que establece la cotización seguridad social para trabajadores que laboren menos de un mes; este decreto ayuda a mejorar condiciones laborales en términos de aporte a pensión, salud y riesgos laborales de trabajadores de campo, además ayuda a la empresa a cumplir con compromisos de responsabilidad social o políticas orientadas a mejorar las condiciones de vida de los habitantes del área de influencia.
        
      .col-lg-6.mb-5
        .tarjeta.color-primario.p-3.banner_tarjeta
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/images/tema3/img_10.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Recurso PDF
                  p.mb-0.text-small Decreto 2616 del 20 de noviembre de 2013.
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(href="http://wsp.presidencia.gov.co/Normativa/Decretos/2013/Documents/NOVIEMBRE/20/DECRETO%202616%20DEL%2020%20DE%20NOVIEMBRE%20DE%202013.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-file-pdf

      .col-lg-6.mb-5
        .tarjeta.color-primario.p-3.banner_tarjeta
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/images/tema3/img_10.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Recurso PDF
                  p.mb-0.text-small Abecé de la contratación por semanas.
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(href="https://www.mintrabajo.gov.co/documents/20147/241327/abece_cotizacion_por_semanas.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-file-pdf
  
  
</template>

<script>
export default {
  name: 'Tema3',
  components: {},
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
