<template>
  <div>
    <div>
      <p> {{ slug }} </p>
      <p> Configurable Setting </p>
      <button @click="submit()">
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
        <Trigger :TriggerData.sync="appSvcConfig.Trigger"/>
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
import { appServiceService } from '../common/api.service'
import Trigger from '../components/Trigger'

export default {
  name: 'app-service-configurable',
  components: {
    Trigger
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      configurableSection: String,
      appSvcConfig: Object
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    this.appSvcConfig = appServiceService.getAppSvcConfigBySvcKey(this.slug)
  },
  methods: {
    setConfigurableSection (configSection) {
      this.configurableSection = configSection
    },
    submit () {
      console.log(this.appSvcConfig.Trigger.EdgexMessageBus.Optional.KeepAlive)
    }
  }
}
</script>

<style scoped>

</style>
