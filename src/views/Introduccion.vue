<template lang="pug">
.curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1(data-aos="fade-right") Introducción
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.mb-5
          p.mb-0 Cuando se realiza una inversión en el sector agropecuario lo que se espera es generar una utilidad, ya sea en dinero o una utilidad social que beneficie a la comunidad o al productor; para poder lograr este fin, sin tener un alto grado de riesgo financiero, se realiza un análisis de la inversión a través de lo que se conoce comúnmente como la identificación, formulación, evaluación y gestión de proyectos.
        
        figure.mb-5(data-aos="fade-right")
          .video.mb-2
            <iframe width="560" height="315" src="https://www.youtube.com/embed/11nSFfxNmQ4" alt="A continuación en el enlace se muestra la formulación de los componentes de estudio para proyectos agropecuarios." title="Introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        .col-lg-12
          .cajon.color-acento-contenido.p-4.ps-5.bg_18.mb-4.mb-lg-0
            p.mb-0 La formulación del proyecto también es conocida como la etapa o estudio de pre-inversión; la formulación está compuesta por componentes o estudios que son una serie de acciones que continuamente van afianzando la toma de decisión de realizar la inversión del recurso dinero, en un objetivo determinado;  estas acciones son el paso siguiente a la identificación del problema (enfoque de marco lógico); los cinco (5) componentes o estudios necesarios para la formulación del proyecto agropecuario son: estudio de mercado, estudio técnico, estudio administrativo, estudio ambiental y estudio financiero, estos se describen a continuación. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
