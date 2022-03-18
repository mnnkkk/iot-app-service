<template>
  <div>
    <div>
      <p> {{ slug }} </p>
      <p> Configurable Setting </p>
      <button>
        Submit
      </button>
    </div>
    <div>
      <li>
        <a @click="setConfigurableSection('Trigger')"> Trigger </a>
      </li>
      <li>
        <a @click="setConfigurableSection('PipelineFunc')"> PipelineFunc </a>
      </li>
      <li>
        <a @click="setConfigurableSection('InsecureSecrets')"> InsecureSecrets </a>
      </li>
      <li>
        <a @click="setConfigurableSection('StoreAndForward')"> StoreAndForward </a>
      </li>
    </div>
    <div>
      <div v-if="this.configurableSection === 'Trigger'">
        <p> Trigger </p>
      </div>
      <div v-if="this.configurableSection === 'PipelineFunc'">
        <p> PipelineFunc </p>
      </div>
      <div v-if="this.configurableSection === 'InsecureSecrets'">
        <p> InsecureSecrets </p>
      </div>
      <div v-if="this.configurableSection === 'StoreAndForward'">
        <p> StoreAndForward </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app-service-configurable',
  components: {

  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      configurableSection: String
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {

  },
  methods: {
    setConfigurableSection (configSection) {
      this.configurableSection = configSection
    }
  }
}
</script>

<style scoped>

</style>
