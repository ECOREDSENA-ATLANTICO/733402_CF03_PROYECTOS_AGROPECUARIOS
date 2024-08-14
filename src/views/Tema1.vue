<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estudio de mercado
      
    .row.align-items-center.justify-content-center.mb-2
      .col-lg-5.mb-3(data-aos="fade-right")
        img.mt-3(src='@/assets/curso/images/tema1/img_1.png'  alt='')
      .col-lg-7.mb-3(data-aos="fade-left") 
        p.mb-3 El estudio de mercado tiene como finalidad hallar y cuantificar el fragmento de demanda que no ha sido cubierta por la oferta y que puede abastecerse con el producto generado en el proyecto agropecuario.
        
        .cajon.color-secundario.p-4.ps-5.bg-05.mb-4.mb-lg-0
          p.mb-0 Cuando se hace referencia al mercado, se está hablando de los factores que influyen en este y la comercialización del bien agrícola o pecuario que será objeto del proyecto; para el desarrollo de este estudio se debe hacer referencia de la identificación del bien (piscicultura, ganadería de leche o de carne, cacao, arándano).

      p.mb-5 En el análisis de mercado es necesario conocer las preferencias de los consumidores, identificar quienes van a proveer los insumos necesarios para el proceso de producción, transporte de insumos y productos, conocer la normatividad que rige el sector o que es necesaria para iniciar el trámite para exportación si es del caso, además de los requerimientos técnicos, sanitarios y legales del país donde va a ser enviado el producto.
    
    .row.justify-content-center.align-items-center.mb-3
      h3.text-center.mb-4 Se debe recordar que las funciones del mercadeo son: 

      .col-md-6.mb-3
        .tarjeta.bg-03.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Ejecutar el mercado tomando en cuenta al <b>consumidor.</b>

      .col-md-6.mb-3
        .tarjeta.bg-04.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Investigar permanentemente al <b> consumidor, considerar la competencia, los productos más vendidos y los diferentes mercados.</b>
      
      .col-md-6.mb-3
        .tarjeta.bg-05.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Seleccionar los clientes importantes y buscar <b>fidelizarlos.</b>
      
      .col-md-6.mb-3
        .tarjeta.bg-06.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Explorar los mercados <b>innovadores.</b>
      
      .col-md-6.mb-3
        .tarjeta.bg-06.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_5.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Acoplarse y responder rápido a <b>la innovación.</b>
      
      .col-md-6.mb-3
        .tarjeta.bg-05.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_6.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Proteger el producto de diversas <b> amenazas del mercado.</b>
      
      .col-md-6.mb-5
        .tarjeta.bg-04.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_7.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Realizar y promocionar <b>la marca.</b>
      
      .col-md-6.mb-5
        .tarjeta.bg-03.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Buscar <b>liderar el mercado.</b> (enciclopedia económica, 2021).

      p.mb-3 De manera alterna se debe identificar variables como: <b>el precio, origen, calidad, disponibilidad en el mercado local o regional</b> de los insumos que son necesarios para la producción del bien que se pretende producir.


    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-5
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el estudio de mercado es <b>imprescindible realizar una descripción del motivo por el cual se realiza el proyecto</b>, si se formula para abrir nuevos mercados en el exterior, para comercializar como un nuevo producto, para sustituir importaciones o con el fin de competir con productos tradicionales; otro ítem a tener en cuenta, son <b>las condiciones del mercado objetivo</b>, aquí es preciso tener el conocimiento de las características que presenta el mercado local, mercado regional, mercado nacional o el mercado externo al cual va dirigido el proyecto.
    
    Separador

    #t_1_1.titulo-segundo
      .h2(data-aos="fade-right") 1.1 Identificación del bien o servicio
    
    .row.align-items-center.justify-content-center.mb-3
      .col-lg-5.mb-3(data-aos="fade-right")
        img.mt-3(src='@/assets/curso/images/tema1/img_9.png'  alt='')
      .col-lg-7.mb-3(data-aos="fade-left") 
        p.mb-3 El primer factor es la identificación del bien, en este aspecto se debe hacer una caracterización detallada de las condiciones que va a presentar el producto en el momento de la venta al destino final; para la identificación inicialmente debemos tener presente a qué sector productivo pertenece el producto agropecuario.
        
        .cajon.color-acento-contenido.p-4.ps-5.bg_18.mb-4.mb-lg-0
          p.mb-0 En Colombia se han identificado tres sectores productivos que son: 


    .row.mb-5
      .col-md-2.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema1/img_10.svg' alt='AvatarTop')
          .tarjeta.bg-03
            .p-4
              h5.text-center Sector primario
              p.text-center Realiza la explotación de recursos naturales como minería, agricultura, caza, pesca y silvicultura.

      .col-md-2.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema1/img_11.svg' alt='AvatarTop')
          .tarjeta.bg-05
            .p-4
              h5.text-center Sector secundario
              p.text-center Realiza la transformación de los productos del sector primario.

      .col-md-2.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema1/img_12.svg' alt='AvatarTop')
          .tarjeta.bg-06
            .p-4
              h5.text-center Sector terciario
              p.text-center O de servicios que realiza actividades de comercialización o prestación de servicios, turismo, educación, transporte, servicios financieros y las TIC.
  
    .row.align-items-center.justify-content-center.mb-2
      .col-lg-7.mb-3(data-aos="fade-left") 
        p.mb-3 En el estudio de mercado del sector agropecuario (primario), se debe tener en cuenta que los productos o bienes que son objeto de comercialización son organismos vivos, por lo tanto, para la identificación del producto se debe tener en cuenta características que le otorgan valor en el mercado como: el grado de madurez, la firmeza, color, presentación, peso o si es un producto transformado que necesita condiciones de conservación específicas; en este componente se debe identificar los parámetros que generan valor en el producto y o van a diferenciar del producto de la competencia.
        
        .cajon.bg-04.p-3.bg_18.mb-4.mb-lg-0
          .row
            .col-md-2
              img.mt-1.m-auto.mx-auto.w-auto(src='@/assets/curso/images/tema1/img_14.svg'  alt='')
            .col-md-10.mb-4.mb-md-0.justify-content-center.flex-column.d-flex
              p.mb-0 <b> Una posible caracterización para los productos agrícolas y pecuarios es el que se propone a continuación:</b>
      
      .col-lg-5.mb-3(data-aos="fade-right")
        img.mt-3(src='@/assets/curso/images/tema1/img_13.png'  alt='')
      
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .col-lg-10.bg-color-1.px-3.py-2.mb-5
        .h3.mx-5.mb-0.mt-1 Sector
    
      p.mb-3 Aquí se debe identificar el sector productivo al que pertenece el producto o servicio; si pertenece al primario agropecuario se puede clasificar de la siguiente forma:

    .row.align-items-center.justify-content-star.mb-1.ps-2.mb-3(data-aos="zoom-in-down")
      .col-md-4.mb-4 
        img.w-auto(src='@/assets/curso/images/tema1/img_16.png'  alt='')
      .col-md-8 
        .col-sm
          .row.div.bg-c1.mb-4 
            .col-sm.justify-content-left.w-auto
              img(src='@/assets/curso/images/tema1/img_15.png'  alt='').h-45.w-auto

            .col-auto.mb-4.mb-md-0.justify-content-center.flex-column.d-flex
              h4.text-white.mb-0 Agrícola

          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-angle-right
              | <b> Frutos: </b> pomo (manzana y níspero, entre otros), vainas en fresco (frijol y habas, entre otros), cereza (uva y tomate, entre otros), agregado (fresa, mora, frambuesa), colectivo (piña e higo), aguacate, arándano, plátano, banano.
            li 
              i.fas.fa-angle-right
              | <b> Semillas: </b> cariópside (trigo, maíz), frijol, arveja, cacao, café.
            li 
              i.fas.fa-angle-right
              | <b> Estructuras vegetativas: </b> tallos (apio, palmito y espárragos), hojas (lechuga y acelga, entre otros).
            li 
              i.fas.fa-angle-right
              | <b> Estructuras reproductivas: </b>  flores ornamentales, coliflor y brócoli.
            li 
              i.fas.fa-angle-right
              | <b> Estructuras subterráneas: </b> raíces (zanahoria y remolacha, entre otros), tubérculos (papa), rizomas (jengibre). (Puentes, 2011, p.46). Adaptación realizada por el autor, 2021.

    .row.align-items-center.justify-content-center.mb-4.ps-2(data-aos="zoom-in-down")
      .col-lg-10
        .row
          .col-md-7.mb-3 
            .col-sm
              .row.div.bg-c1.mb-4 
                .col-sm.justify-content-left.w-auto
                  img(src='@/assets/curso/images/tema1/img_17.png'  alt='').h-45.w-auto

                .col-auto.mb-4.mb-md-0.justify-content-center.flex-column.d-flex
                  h4.text-white.mb-0 Pecuario
              ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-angle-right
                  | <b> Subproductos agropecuarios:</b> huevos, derivados lácteos, cueros.
                li 
                  i.fas.fa-angle-right
                  | <b> Especies menores </b>
                li 
                  i.fas.fa-angle-right
                  | <b> Ganado doble propósito </b>
                li 
                  i.fas.fa-angle-right
                  | <b> Ganado lechero </b>
                li 
                  i.fas.fa-angle-right
                  | <b> Ganado para carne. </b> (Puentes, 2011, p.46). Adaptación realizada por el autor, 2021.
          
          .col-md-5.mb-3 
            img(src='@/assets/curso/images/tema1/img_18.png'  alt='')
          

    .row.align-items-center.justify-content-center.mb-3.ps-2(data-aos="zoom-in-down")
      .col-lg-10.mb-5
        .tarjeta.color-primario.p-3.banner_tarjeta
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/images/tema1/img_19.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Identificación del bien o servicio
                  p.mb-0 Estimado aprendiz, para la identificación inicialmente debemos tener presente a qué sector productivo pertenece el producto agropecuario. A continuación más detalle a través del siguiente video: 
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(href="https://docs.google.com/document/d/1PPRatnr8cI2Hxkv8hzg_e3qw3N0FVQs3yvO0rZLNaJE/edit?usp=sharing" target="_blank")
                    span Ver video
                    i.fas.fa-file-video

    .tarjeta.tarjeta.bg-05.p-4.slyder_1
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-8.mb-4.mb-md-0
            h4 Uso
            p Se debe identificar ¿para qué se usa?, ¿cómo se usa? y ¿cuáles son sus principales aplicaciones? si aplica para el bien o servicio.  (Miranda, 2005, p.92).

          .col-md-4
            figure
              img(src='@/assets/curso/images/tema1/img_20.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-4.mb-4.mb-md-0
            h4 Usuario
            p Aquí se establece la ubicación espacial de los consumidores finales, además identificar, gustos, fiestas nacionales, credo religioso, actividades comunitarias, nivel de ingreso, sexo, estrato. (Miranda, 2005, p.93)

          .col-md-8
            figure
              img(src='@/assets/curso/images/tema1/img_21.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-8.mb-4.mb-md-0
            h4 Presentación
            p La forma de presentación es uno de los factores que más liga al producto con el usuario, y que suele tener alguna importancia en la estructura de costos, es el caso de la leche pasteurizada, por ejemplo, que su precio varía significativamente dependiendo de que su presentación sea en botella, en bolsa, o en caja de cartón. (Miranda, 2005, p.93).

          .col-md-4
            figure
              img(src='@/assets/curso/images/tema1/img_22.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-4.mb-4.mb-md-0
            h4 Características físicas
            p Tamaño, color, peso, textura, olor, sabor, aroma, si es perecedero o no, etc. (Miranda, 2005, p.93).

          .col-md-8
            figure
              img(src='@/assets/curso/images/tema1/img_23.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-8.mb-4.mb-md-0
            h4 Composición
            p Si es un producto procesado se indica que insumos se usaron en la producción, esto también ayuda a identificar si los insumos usados en el proceso se consiguen en la región, el costo, tipo de transporte, la disponibilidad, etc. (Miranda, 2005, p.93).

          .col-md-4
            figure
              img(src='@/assets/curso/images/tema1/img_24.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-4.mb-4.mb-md-0
            h4 Producto
            p Establecer si el producto es de consumo final (duradero o perecedero, necesario o suntuario, habitual no habitual, etc.); producto de temporada, tradicionales, de alta o baja rotación, etc. (Miranda, 2005, p.93).

          .col-md-8
            figure
              img(src='@/assets/curso/images/tema1/img_25.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-8.mb-4.mb-md-0
            h4 Sustitutos
            p Se debe indicar la existencia y características de otros productos que pueden competir en su consumo. Un bien puede convertirse en sustituto por efectos de cambio en la calidad, en la presentación, en los precios, en el gusto de los consumidores, en la presión publicitaria o a causa de los desarrollos tecnológicos, etc. (Miranda, 2005, p.93).

          .col-md-4
            figure
              img(src='@/assets/curso/images/tema1/img_26.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-4.mb-4.mb-md-0
            h4 Precios y costos
            p El objetivo de establecer los costos y precios es poder usar esos valores que deben ser indagados con los comercializadores a nivel minorista, mayorista y al consumidor final, para establecer los rangos de precios y costos que puede tener el producto para usarlo en la valoración del posible margen de ganancia y precio de comercialización del producto.
          .col-md-8
            figure
              img(src='@/assets/curso/images/tema1/img_27.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center.my-lg-4.p-5
          .col-md-8.mb-4.mb-md-0
            h4 Condiciones legales
            p En este ítem debe realizarse una revisión de la normatividad vigente que pueda afectar el proceso de producción y comercialización; por ejemplo la resolución 407 de 2019 en la que establecen los Planes Departamentales de Extensión Agropecuaria PDEA, en los que se priorizan las líneas productivas que van a recibir recursos públicos para inversión; o la resolución del Instituto Colombiano Agropecuario ICA 4174 de 2009 en la que se reglamenta la certificación en buena prácticas agrícolas en la producción primaria de fruta y vegetales para consumo en fresco o incluso, la resolución ICA 448 de 2016 que permite el registro de predios de producción de fruta fresca para exportación y el registro de los exportadores y plantas empacadoras.

          .col-md-4
            figure
              img(src='@/assets/curso/images/tema1/img_28.png', alt='Texto que describa la imagen')
    Separador
    
    #t_1_2.titulo-segundo
      .h2(data-aos="fade-right") 1.2 Identificación de la demanda
    
    .row.align-items-center.justify-content-center.mb-2
      .col-lg-5.mb-3(data-aos="fade-right")
        img.mt-3(src='@/assets/curso/images/tema1/img_29.png'  alt='')
      .col-lg-7.mb-3(data-aos="fade-left") 
        p.mb-3 Cuando se realiza el estudio de la demanda se hace una labor de búsqueda de información la cual debe ser sistemática, enfocada en registrar eventos como cantidad de producto que puede llegar a ser vendido, cantidad de producto que una comunidad puede llegar a adquirir, analizar los precios, identificar los gustos o preferencias y la capacidad de compra de los consumidores.
        
        .cajon.bg-04.p-4.ps-5.bg_18.mb-4.mb-lg-0
          .row
            .col-md-3
              img.mt-1.w-auto.mx-auto(src='@/assets/curso/images/tema1/img_30.svg'  alt='')
            .col-md-9
              p.mb-0 La información recolectada y analizada al finalizar la identificación de la demanda aporta elementos básicos para el estudio técnico, esto se traduce en el tamaño o la capacidad de producción, esta información describe la disponibilidad de insumos lo que debe concordar con otros elementos como la capacidad financiera, técnica y administrativa.
    
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-5
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_31.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para orientar mejor el estudio de la demanda debemos reconocer el objetivo, este depende de la intención del formulador del proyecto, puede ser para la generación de ingresos caso en el que se busca una retribución económica satisfaciendo el interés privado o por el contrario puede plantearse un objetivo que solicite el bienestar de una comunidad (social), en este caso el proyecto generaría unos impactos positivos en un grupo de personas o región, sin perseguir la retribución económica.
    
    .row.align-items-center.justify-content-center.mb-2
      .col-lg-4.mb-3(data-aos="fade-right")
        img.mt-3(src='@/assets/curso/images/tema1/img_32.png'  alt='')
      .col-lg-8.mb-3(data-aos="fade-left") 
        .cajon.bg-05.p-4.ps-5.mb-4.mb-lg-0
          p.mb-0 En el desarrollo del análisis de la demanda, se debe determinar la población objetivo, es el grupo de personas a las cuales se les desea vender el producto, esta población debe caracterizarse teniendo en cuenta valores como edad, sexo, nivel escolar, estado civil, tamaño de la población (número de personas), tasa de crecimiento; además se debe obtener información sobre nivel actual del ingreso y establecer la zona de influencia que es identificar en lo posible sobre un mapa la zona geográfica en la que se desea comercializar el producto objeto del proyecto; la información anterior también es conocida como área de mercado.
        
    .row.align-items-center.justify-content-center.mb-2
      .col-lg-7.mb-3(data-aos="fade-right") 
        p.mb-1 Otra de las variables que es de gran importancia en el estudio de la demanda es el comportamiento del precio del producto a través de los años; para esto una de las formas de determinar los momentos de mayor o de menor oferta y de mejores o menores precios es utilizando las series de volúmenes de producto comercializado y las series de precios al consumidor.
        .bloque-texto-b.bg-02.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Todos los mercados están compuestos por una serie de submercados o “segmentos” de consumidores que tienen entre ellos características comunes de tipo demográfico, geográfico, psicológico, económico, étnico, cultural, etc. <br>
            p.mb-1 <b> - (Miranda, 2005, p.99).</b>
            i.fas.fa-quote-right
      .col-lg-5.mb-3(data-aos="fade-left")
        img.mt-3(src='@/assets/curso/images/tema1/img_33.png'  alt='')
      
      p.mb-5 La “segmentación” del mercado permite, entonces, organizar y clasificar la demanda, de acuerdo a ciertos y determinados atributos; en efecto, este proceso nos conduce a conocer, entre otros:

      .col-md-6.mb-3
        .tarjeta.bg-03.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_34.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 El número actual de <b>demandantes.</b>

      .col-md-6.mb-3
        .tarjeta.bg-04.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_35.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 El número potencial estimado de <b>compradores del bien o servicio.</b>
      
      .col-md-6.mb-3
        .tarjeta.bg-05.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_36.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 <b>Los lugares donde suelen hacer las compras </b> los consumidores (zonas urbanas/rurales, grandes supermercados, pequeños expendios, tiendas virtuales, si el bien o servicio entrega a nivel domiciliario)
      
      .col-md-6.mb-3
        .tarjeta.bg-06.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_37.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 La <b>ubicación geográfica</b> de los productores y distribuidores.
      
      .col-md-6.mb-3
        .tarjeta.bg-06.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_38.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Frecuencia con que se efectúan las compras (mensual, semanal, diaria).
      
      .col-md-6.mb-3
        .tarjeta.bg-05.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_39.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 <b>Motivación y actitudes</b> con respecto a la mercancía adquirida, el ritual de compra.
      
      .col-md-6.mb-5
        .tarjeta.bg-04.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_40.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Indicadores de <b>cambio en los hábitos de compra.</b>
      
      .col-md-6.mb-5
        .tarjeta.bg-03.p-2
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema1/img_41.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 <b>Características de los compradores o usuarios</b> (edad, sexo, raza, nivel de ingresos, tamaño de la familia, etc.) (Miranda, 2005, p.99).
    
    .row.align-items-center.justify-content-center.mb-3.ps-2(data-aos="zoom-in-down")
      .col-lg-10.mb-5
        .tarjeta.color-primario.p-3.banner_tarjeta
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/images/tema1/img_42.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Recurso PDF
                  p.mb-0 Infografía - Identificación de la demanda.
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(href="https://docs.google.com/document/d/1PPRatnr8cI2Hxkv8hzg_e3qw3N0FVQs3yvO0rZLNaJE/edit?usp=sharing" target="_blank")
                    span Descargar
                    i.fas.fa-file-pdf

    Separador  
    
    #t_1_3.titulo-segundo
      .h2(data-aos="fade-right") 1.3 Identificación de la oferta
      
    .row.align-items-center.justify-content-center.mb-2
      .col-lg-3.mb-3(data-aos="fade-right")
        img.mt-3(src='@/assets/curso/images/tema1/img_43.png'  alt='')
      .col-lg-9.mb-3(data-aos="fade-left") 
        p.mb-1 En la identificación de la oferta se busca establecer la cantidad de producto que se necesita para cubrir la demanda o necesidades de una población en el futuro; esa no es una labor fácil debido a que para tener una aproximación real es necesario tener la información de la competencia para poder tener una visión global de la cantidad de producto sembrado y por lo tanto estimar la posible cantidad (oferta) de producto a ofrecer.
        .bloque-texto-b.bg-02.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 La oferta es también una variable que depende de otras, tales como: los costos y disponibilidad de los insumos, las restricciones determinadas por el gobierno, los desarrollos tecnológicos, las alteraciones del clima (especialmente en la oferta agrícola y agroindustrial), los precios de los bienes sustitutos y complementarios, la capacidad instalada de la competencia, etc. <br>
            p.mb-1 <b> - (Miranda, 2005, p.99).</b>
            i.fas.fa-quote-right
    
    p.mb-5 <b>Para iniciar la identificación de la oferta, es necesario generar una lista con los datos de los proveedores de insumos con la siguiente información:</b>
      
    .row.justify-content-center
      .col-lg-12
        SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-3")
          .tarjeta.tarjeta--slyder.bg-05.p-4
            .row.justify-content-center.mb-3
              .col-12
                img(src="@/assets/curso/images/tema1/img_43.svg", alt="alt").w-50.m-auto
            p.text-center.mb-0 Nombre de la empresa

          .tarjeta.tarjeta--slyder.bg-06.p-4
            .row.justify-content-center.mb-3
              .col-12
                img(src="@/assets/curso/images/tema1/img_44.svg", alt="alt").w-50.m-auto
            p.text-center.mb-0 Características de su producción (artesanal o industrial)

          .tarjeta.tarjeta--slyder.bg-03.p-4
            .row.justify-content-center.mb-3
              .col-12
                img(src="@/assets/curso/images/tema1/img_45.svg", alt="alt").w-50.m-auto
            p.text-center.mb-0 Precios de los insumos

          .tarjeta.tarjeta--slyder.bg-04.p-4
            .row.justify-content-center.mb-3
              .col-12
                img(src="@/assets/curso/images/tema1/img_46.svg", alt="alt").w-50.m-auto
            p.text-center.mb-0 Participación en el mercado

          .tarjeta.tarjeta--slyder.bg-05.p-4
            .row.justify-content-center.mb-3
              .col-12
                img(src="@/assets/curso/images/tema1/img_47.svg", alt="alt").w-50.m-auto
            p.text-center.mb-0 Sistemas de comercialización

          .tarjeta.tarjeta--slyder.bg-06.p-4
            .row.justify-content-center.mb-3
              .col-12
                img(src="@/assets/curso/images/tema1/img_48.svg", alt="alt").w-50.m-auto
            p.text-center.mb-0 Sistema de ventas (crédito, contado) y canales de comercialización

          .tarjeta.tarjeta--slyder.bg-05.p-4
            .row.justify-content-center.mb-3
              .col-12
                img(src="@/assets/curso/images/tema1/img_49.svg", alt="alt").w-50.m-auto
            p.text-center.mb-0 Localización

      .col-lg-10.mb-3
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-t.m-auto(src='@/assets/curso/images/tema1/img_50.svg', alt='')
          .tarjeta.bg-07.shadow-sm
            .p-4
              p Al igual que en la demanda, para la oferta es posible realizar de manera estadística el análisis histórico, actual y futuro con el fin de verificar las cantidades que se ofrecieron, que se ofrecen y que se ofrecerán; recuerde que para este estudio necesita recolectar buena información, esta se clasifica en dos clases, primaria, que es la que se obtiene directamente de los productores, o de una organización o del cultivo o explotación pecuaria; y la segunda clase de información es la secundaria, que se obtiene de las encuestas realizadas por alguna entidad como el DANE, un artículo de investigación, o de un trabajo escrito realizado por instituciones o personas.
                
    Separador  
    
    #t_1_4.titulo-segundo
      .h2(data-aos="fade-right") 1.4 Identificación del precio
   
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-5
        .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_51.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la determinación de precio de los productos se tiene en cuenta el valor de los insumos, condiciones de la oferta y la demanda; una definición de precio es la siguiente: es lo que se da a cambio por un bien o servicio, puede ser el dinero que se entrega por un producto deseado. Es un condicionante, puesto que está sujeto a los precios que maneja la competencia. (Puentes, 2011, p.55). 
    
    
    h4.text-center.mb-5 Existen cinco objetivos que se pueden utilizar para la fijación del precio por parte de una empresa o productor:
    
    .row.justify-content-center.align-items-center.mb-2
      .col-md-8
        LineaTiempoD.color-acento-contenido 
          .row(numero="1" titulo="Objetivos de ventas o participación en el mercado")
            p Estos objetivos persiguen el incremento de las ventas o el aumento de la participación en el mercado (porcentaje de las ventas de un producto con respecto a las ventas totales de esa industria) y se logra al asignar un precio más bajo que el ofrecido por la competencia. (Puentes, 2011, p.53).

          .row(numero="2" titulo="Objetivos orientados a utilidades")
            p Persiguen elevar al máximo el nivel de las utilidades.

          .row(numero="3" titulo="Objetivos de efecto competitivo")
            p Buscan generar en la competencia una disminución en sus ventas. (Puentes, 2011, p.53).
      
          .row(numero="4" titulo="Objetivos de satisfacción del cliente")
            p Asignación de precios que busca la satisfacción del cliente como principal objetivo. (Puentes, 2011, p.53).
      
          .row(numero="5" titulo="Objetivos de mejoramiento de imagen")
            p El precio permite hacer inferencias acerca de la calidad del producto. Este objetivo tiene como particularidad su importancia en los productos de lujo. (Puentes, 2011, p.53).
      
      .col-md-4 
        img(src='@/assets/curso/images/tema1/img_52.png'  alt='')
    Separador  
    
    #t_1_5.titulo-segundo
      .h2(data-aos="fade-right") 1.5 Estrategia de mercadeo agrícola
      
    p.mb-4 La parte final del estudio de mercado se debe establecer una estrategia del producto seleccionado, por lo que establecer una estrategia de mercadeo, esta debe presentar una combinación de elementos comerciales conocida como las cuatro P:
    
    .row.align-items-center.justify-content-center.mb-5.img_fondo_1
      .col-md-8.mb-5
        figure
          img(src='@/assets/curso/images/tema1/img_53.png', alt='Texto que describa la imagen')
          //- figcaption Leyenda de la imagen 
    
      .col-md-8.mb-4
        .titulo-sexto.color-acento-contenido.mb-0
            h5 Gráfico 1. 
            span Ciclo de la vida de un producto 

        figure
          img(src='@/assets/curso/images/tema1/img_54.png', alt='Texto que describa la imagen')
          figcaption Nota. Tomado de Martínez (2017) 
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.mb-3(data-aos="fade-right")
        img.mt-3(src='@/assets/curso/images/tema1/img_55.png'  alt='')
      .col-lg-8.mb-3(data-aos="fade-left") 
        .cajon.bg-05.p-4.ps-5.mb-4.mb-lg-2
          p.mb-0 Para definir el <b>producto</b> es necesario responder a la pregunta ¿es un producto final o es un producto industrial?, el segundo paso es determinar la calidad del producto y estandarizarlo; para esto debe tener en cuenta el ciclo de vida del producto y sus cuatro etapas introducción, aceptación o crecimiento acelerado, maduración y declinación. Recuerde que las especificaciones y calidad del producto deben ser muy específicas para que puedan ser comercializadas en el mercado deseado.
        
        p.mb-3 El precio también debe estar establecido de acuerdo con la calidad del producto; por ejemplo tres clases de café con combinaciones de calidad y precio diferentes, el primer café de baja calidad que proviene de mezcla de variedades, malas pasillas, mohoso, con fermento y reposado por lo que se comercializa a un precio económico; Una segunda clase de café de calidad media con pocos defectos, pero con sabor a grano verde, posee un precio que corresponde a una adecuada relación precio/calidad; por último un café especial con una prueba de tasa superior a 85 puntos, de tostión y molienda media, proveniente de cafés arábigos y con denominación de origen.
        
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.mb-4
        .titulo-sexto.color-acento-contenido.mb-0
            h5 Gráfico 2. 
            span Estrategia según precio y calidad. 

        figure
          img(src='@/assets/curso/images/tema1/img_56.png', alt='Texto que describa la imagen')
          figcaption Nota. Tomado de Sanchez, L.J. (2021)
      
      .col-lg-10.mb-3
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-t.m-auto(src='@/assets/curso/images/tema1/img_57.svg', alt='').w-75.mt-2
          .tarjeta.bg-06.shadow-sm
            .p-4
              p En la <b>promoción</b> se debe resaltar las cualidades del producto para poder diferenciarlo de los demás, otorgándole una característica de valor que lo identifique; para poder tener éxito en el proceso es necesario realizar no solo la publicidad del producto sino establecer relaciones públicas y promoción. Tenga en cuenta en el momento de realizar la publicidad de:
    
      .col-lg-5.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema1/img_58.svg' alt='AvatarTop')
          .tarjeta.bg-08
            .p-4
              p.text-center Resaltar las características de valor de su producto informando sus beneficios.

      .col-lg-5.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema1/img_59.svg' alt='AvatarTop')
          .tarjeta.bg-09
            .p-4
              p.text-center Indicar la razón porque su producto es mejor que el de la competencia y por eso deben adquirirlo.
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-7.mb-3(data-aos="fade-right") 
        .cajon.bg-10.p-4.ps-5.mb-4.mb-lg-2
          p.mb-0 Con la finalidad de mejorar el precio de venta del producto se debe diseñar la estrategia para la distribución en la <b>plaza</b> o sitio de venta final del producto y los costos que implican realizar esta labor; la idea de este ejercicio es realizar el trabajo que hacen los intermediarios de conocer los contactos para realizar las transacciones y poseer la información de los mercados, además financiar las promociones y agregar valor en tiempo, espacio y volumen para facilitar la comercialización de la mercancía.
      .col-lg-5.mb-3(data-aos="fade-left")
        img.mt-3(src='@/assets/curso/images/tema1/img_60.png'  alt='')


</template>

<script>
export default {
  name: 'Tema1',
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
