<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estudio técnico
        
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-5
        .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El estudio técnico es el momento en que el formulador de proyectos determina las condiciones en la que debe operar el sistema productivo, aquí se indica el tamaño de la explotación agropecuaria, cuánta área debe ser destinada para el cultivo o para el semoviente, cuanta área se destinó para la poscosecha o para realizar el faenado, localización de la explotación, etc.
    
    .row.align-items-center.justify-content-center.mb-2
      .col-lg-7.mb-3(data-aos="fade-left") 
        p.mb-3 La importancia de este estudio se deriva de la posibilidad de llevar a cabo una valoración económica de las variables técnicas del proyecto que permitan una apreciación exacta o aproximada de los recursos necesarios para el proyecto; además de proporcionar información de utilidad al estudio económico-financiero. Todo estudio técnico tiene como principal objetivo el demostrar la viabilidad técnica del proyecto que justifique la alternativa técnica que mejor se adapte a los criterios de optimización. (Universidad Nacional Autónoma de México, s.f., p. 1) 
        .cajon.bg-05.p-4.ps-5.bg_18.mb-4.mb-lg-0
          .row
            .col-md-3
              img.mt-1.w-auto.mx-auto.mb-2(src='@/assets/curso/images/tema2/img_2.svg'  alt='')
            .col-md-9
              p.mb-0 En este aparte de la formulación de proyectos se debe realizar la descripción del proceso productivo, teniendo en cuenta que debe especificar materiales, insumos, semilla o pie de cría, fertilizantes, concentrado, cantidades, precios, etc. Además, debe indicar la cantidad y costos de la mano de obra, a continuación, vamos a describir brevemente los componentes del estudio técnico:
      .col-lg-5.mb-3(data-aos="fade-right")
        img.mt-3.mx-auto.img-responsive(src='@/assets/curso/images/tema2/img_3.png'  alt='')
      
    Separador

    #t_2_1.titulo-segundo
      .h2(data-aos="fade-right") 2.1 Localización
    
    .row.align-items-center.justify-content-center.mb-5
      .col-md-1
        img.w-auto.mx-auto.img-responsive.mb-2(src='@/assets/curso/images/tema2/img_4.svg'  alt='')
      .col-md-11
        p.mb-0 En el análisis del estudio técnico, la localización hace referencia a la ubicación espacial de la explotación agrícola o pecuaria; para ello se debe tener en cuenta criterios estratégicos, institucionales, técnicos, sociales y dos aspectos como la macro localización aquí se encuentran los entornos nacional y regional (ubicación del mercado de consumo, las fuentes de materias primas y mano de obra disponible) el segundo aspecto es la micro localización entorno de la zona urbana o rural (cercanía con el mercado consumidor, infraestructura y servicios).

    .row.align-items-center.justify-content-center.mb-2
      .col-lg-7.mb-3(data-aos="fade-left") 
        p.mb-3 Al mismo tiempo la decisión de la ubicación del proyecto está relacionado con aspectos financieros, económicos y sociales que pueden tener repercusiones en el desarrollo económico y social de una región en el largo plazo.
        .col-lg-12.mb-5.align-items-center.justify-content-center
          .tarjeta-avatar-b.mb-3
            .tarjeta-avatar-b__img
              img.img-t.m-auto.mx-auto(src='@/assets/curso/images/tema2/img_5.svg', alt='')
            .tarjeta.bg-13.shadow-sm
              .p-3
              p Con el fin de establecer un método sencillo para cuantificar variables con las que se pueda determinar la ubicación de un proyecto, se pueden utilizar las siguientes:  
      .col-lg-5.mb-3(data-aos="fade-right")
        img.mt-3.w-auto.mx-auto(src='@/assets/curso/images/tema2/img_6.png'  alt='')
      
    
    .row.ordenar_tarjeta.align-items-center.justify-content-star.mb-1.ps-2.mb-3(data-aos="zoom-in-down")
      .col-md-4.order-1.order-md-2.ordenar_tarjeta
        img.w-auto.mx-auto.img-responsive(src='@/assets/curso/images/tema2/img_7.png'  alt='')
      .col-md-8.ordenar_tarjeta.order-2.order-md-1
        .col-sm
          ul.lista-ul--cuadro.lista-ul
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Los costos de transporte tanto de insumos como de productos.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | La disponibilidad de insumos y sus condiciones de precio.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Otros factores, tales como:

            li.pb-0
              ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-angle-right
                  | Condiciones de orden fiscal y tributaria. 
                li 
                  i.fas.fa-angle-right
                  | Existencia suficiente y adecuada de infraestructura (vías, energía, comunicaciones, educación, salud, etc.). 
                li 
                  i.fas.fa-angle-right
                  | Disponibilidad y calidad de servicios públicos. 
                li 
                  i.fas.fa-angle-right
                  | Políticas de desarrollo urbano o rural.
                li 
                  i.fas.fa-angle-right
                  | Condiciones generales de vida.
                li 
                  i.fas.fa-angle-right
                  | Condiciones meteorológicas para el buen desarrollo de la planta y la baja incidencia de plagas y enfermedades (temperatura, humedad, etc.). 
                li 
                  i.fas.fa-angle-right
                  | Precio de la tierra. (Miranda, 2005, p. 133). 
                li 
                  i.fas.fa-angle-right
                  | Disponibilidad, costo y calidad (capacitada en la labor) de la mano de obra en la región, (Miranda, 2005, p. 133).
        
    Separador

    #t_2_2.titulo-segundo
      .h2(data-aos="fade-right") 2.2 Tamaño
    
    .row.align-items-center.justify-content-center.mb-5
      p.mb-3 Cuando se habla del tamaño del proyecto se hace referencia a la capacidad que se tiene de producir el bien durante el tiempo que va a durar el proyecto. Para iniciar con este análisis, debe determinarse la unidad de medida del tamaño del proyecto, si es para una planta de faenado la unidad de medida puede ser el número de sacrificios por día, si es un cultivo de flores para exportación, la unidad puede ser el número de ramos exportados por día o por semana.
      p.mb-0.text-bold Por otro lado, es útil aclarar ciertos términos con respecto a la capacidad del proyecto, podemos distinguir tres situaciones:

    .row.mb-3
      .col-md-4.mb-5.mb-lg-0
        .tarjeta.h-100.bg-03
          .p-4
            img(src='@/assets/curso/images/tema2/img_8.png' alt='AvatarTop').w-50.m-auto.mb-2
            h5.text-center Capacidad diseñada
            p.text-center Corresponde al máximo nivel posible de producción o de prestación del servicio.

      .col-md-4.mb-5.mb-lg-0
        .tarjeta.h-100.bg-06
          .p-4
            img(src='@/assets/curso/images/tema2/img_9.png' alt='AvatarTop').w-50.m-auto.mb-2
            h5.text-center Capacidad instalada
            p.text-center Corresponde a la capacidad máxima disponible permanentemente.

      .col-md-4.mb-5.mb-lg-0
        .tarjeta.h-100.bg-04
          .p-4
            img(src='@/assets/curso/images/tema2/img_10.png' alt='AvatarTop').w-50.m-auto.mb-2
            h5.text-center Capacidad utilizada
            p.text-center Es la fracción de capacidad instalada que se está empleando.
    
    .row.align-items-center.justify-content-center.mb-2
      .col-lg-7.mb-3(data-aos="fade-left") 
        p.mb-3 Estos términos se pueden utilizar en la medida que se vaya incrementando la producción en la capacidad utilizada, hasta el punto en que se utilice toda el área que se tiene disponible colmando la capacidad diseñada.
        p.mb-3 En la estimación del tamaño del proyecto se debe pensar en la dimensión del mercado, capacidad financiera, disponibilidad de insumos, la existencia o no de servicios públicos, oferta de transporte, infraestructura vial, voluntad política, planes de desarrollo municipal, líneas productivas priorizadas en el PDEA, etc.
        .cajon.bg-05.p-4.ps-5.bg_18.mb-4.mb-lg-0
          .row
            .col-md-2
              img.mt-1(src='@/assets/curso/images/tema2/img_11.svg'  alt='').w-auto.mx-auto
            .col-md-10
              p.mb-0 Un factor que puede ayudar en la definición del tamaño del proyecto es la relación del mercado con los costos unitarios, si el resultado es que posee los costos mínimos y además tiene la capacidad de satisfacer el crecimiento de la demanda ese será el tamaño adecuado para el proyecto agropecuario.
      .col-lg-5.mb-3(data-aos="fade-right")
        img.mt-3.mx-auto.img-responsive(src='@/assets/curso/images/tema2/img_12.png'  alt='')

    Separador

    #t_2_3.titulo-segundo
      .h2(data-aos="fade-right") 2.3 Identificación y descripción del proceso
    
    .row.align-items-center.justify-content-center.mb-5
      p.mb-5 En esta etapa se debe realizar una descripción técnica detallada de las actividades, insumos, cantidades, unidades de medida, mano de obra, servicios para la producción, procesos administrativos, cultivo, variedad, especie, raza; aquí es donde debe tener la mayor cantidad de información para la ejecución del proyecto; a continuación, encontrará algunos parámetros que le serán útiles en el momento de realizar esta actividad de formulación:
    
      .col-md-10.mb-3(data-aos="zoom-in-down")
        .tarjeta.bg-03.p-2
          .row.justify-content-around.align-items-center
            .col-md-3
              img(src="@/assets/curso/images/tema2/img_13.png")
            .col-md-9
              p.mb-0 <b>Proceso productivo del componente agropecuario</b>  (cultivo de arándano, cría y levante de cerdos o el proceso de producción escogido).

      .col-md-10.mb-3(data-aos="zoom-in-down")
        .tarjeta.bg-05.p-2
          .row.justify-content-around.align-items-center
            .col-md-3
              img(src="@/assets/curso/images/tema2/img_14.png")
            .col-md-9
              p.mb-0 <b>Condiciones ambientales </b>(identificar variables como temperatura, humedad relativa, régimen y distribución de lluvias, radiación solar, altura sobre el nivel del mar, etc.).

      .col-md-10.mb-3(data-aos="zoom-in-down")
        .tarjeta.bg-06.p-2
          .row.justify-content-around.align-items-center
            .col-md-3
              img(src="@/assets/curso/images/tema2/img_15.png")
            .col-md-9
              p.mb-0 <b>Requerimientos nutricionales </b>(nivel nutricional del suelo, necesidades nutricionales de las plantas, necesidades nutricionales de los semovientes, fertilizantes o abonos orgánicos necesarios, concentrados y porcentaje nutricional necesarios, etc.).

      .col-md-10.mb-3(data-aos="zoom-in-down")
        .tarjeta.bg-04.p-2
          .row.justify-content-around.align-items-center
            .col-md-3
              img(src="@/assets/curso/images/tema2/img_16.png")
            .col-md-9
              p.mb-0 <b>Proceso productivo detallado</b> (listado de equipos, herramienta o maquinaria, distribución espacial, preparación del suelo, enmiendas, siembra, cantidad de semilla, variedad, disponibilidad, riego, fertilización; pie de cría, raza, instalaciones, agua, tiempo de cría o levante, etc.).

      .col-md-10.mb-3(data-aos="zoom-in-down")
        .tarjeta.bg-03.p-2
          .row.justify-content-around.align-items-center
            .col-md-3
              img(src="@/assets/curso/images/tema2/img_17.png")
            .col-md-9
              p.mb-0 <b>Manejo poscosecha o labores de sacrificio, empaque </b>(listado de equipos, herramienta o maquinaria, distribución espacial, describir las actividades de manera muy detallada).

    Separador

    #t_2_4.titulo-segundo
      .h2(data-aos="fade-right") 2.4 Organización y cronograma
    
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-5
        .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_18.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Al igual que los procesos de producción del bien identificado para el proyecto agropecuario, se debe identificar y describir el modelo administrativo que se va a implementar en la empresa; es importante recordar que la organización hace referencia a la conformación de una estructura jerárquica de individuos encargados de administrar los procesos y recursos dentro de la empresa. Además, en el estudio técnico es importante elaborar un cronograma de actividades en el que se relacionen las actividades que se deben hacer para iniciar procesos administrativos, financieros y técnicos para la puesta en marcha del proceso productivo.  

</template>

<script>
export default {
  name: 'Tema2',
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
