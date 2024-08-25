<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    ol.lista-ol.mb-5
      li 
        span.text-bold.text-primario 1. 
        | <span class="text-bold text-primario">Estudio de mercado:</span> el estudio de mercado en proyectos agropecuarios busca identificar y cuantificar la demanda insatisfecha que puede ser cubierta con el producto del proyecto. Analiza factores como las preferencias del consumidor, proveedores de insumos, normatividad, y requisitos técnicos, sanitarios y legales. Se enfoca en funciones de mercadeo como ejecutar estrategias, investigar al consumidor, fidelizar clientes, explorar mercados innovadores y promocionar la marca. Además, se consideran variables como precio, origen, calidad, y disponibilidad de insumos. El objetivo es describir las características del mercado objetivo, identificar segmentos de consumidores y establecer una estrategia de mercadeo efectiva para el producto.
      li 
        span.text-bold.text-primario 2. 
        | <span class="text-bold text-primario">Estudio técnico:</span> el estudio técnico en proyectos agropecuarios es crucial para determinar las condiciones operativas del sistema productivo, como el tamaño de la explotación, la localización, y la descripción detallada del proceso productivo. Este estudio permite valorar económicamente las variables técnicas del proyecto y proporciona información fundamental para el estudio económico-financiero. Los componentes clave del estudio técnico incluyen la localización, el tamaño del proyecto, la identificación y descripción del proceso productivo, y la organización y cronograma de actividades. La viabilidad técnica del proyecto se demuestra al encontrar la alternativa técnica que mejor se adapte a los criterios de optimización.
      li 
        span.text-bold.text-primario 3. 
        | <span class="text-bold text-primario">Estudio administrativo:</span> el estudio administrativo en proyectos agropecuarios busca establecer herramientas para una gestión efectiva del proyecto. Incluye la planeación estratégica para definir metas y acciones, como la misión (propósito), visión (rumbo), objetivos (metas medibles), políticas (lineamientos), y valores (principios). También se emplea el análisis DOFA para identificar debilidades, oportunidades, fortalezas y amenazas, el organigrama para establecer la jerarquía de cargos y responsabilidades, y el aspecto legal para cumplir con la normatividad agropecuaria vigente.

      li 
        span.text-bold.text-primario 4. 
        | <span class="text-bold text-primario">Estudio ambiental:</span> el estudio ambiental en proyectos agropecuarios se enfoca en cumplir con la legislación colombiana sobre el uso de recursos naturales y la gestión de residuos. Busca reducir impactos negativos y promover prácticas sostenibles en la producción agropecuaria.

      li 
        span.text-bold.text-primario 5. 
        | <span class="text-bold text-primario">Estudio financiero:</span> el estudio financiero del proyecto agropecuario se divide en dos partes: la organización de costos e ingresos y la evaluación financiera utilizando herramientas como VPN, TIR y relación B/C. Se analizan los costos fijos y variables junto con los ingresos esperados durante cinco años. Además, se elabora un flujo de caja que muestra las entradas y salidas de efectivo, considerando beneficios de operación, costos de inversión y operación, y valor de desecho de activos.
        
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis de formulación de los componentes de estudio para proyectos agropecuarios son: estudio de mercado, estudio técnico, estudio administrativo, estudio ambiental y estudio financiero.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
