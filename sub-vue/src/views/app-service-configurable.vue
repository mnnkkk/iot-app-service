<template>
  <div class="card">
    <div class="card-header">
      <font-awesome-icon icon="fa fa-tags mr-2 text-danger" />
      <span class="font-weight-bold">
            <span class="mr-2 text-info"> {{ slug }} </span>
            <span>Configurable Setting</span>
         </span>
      <button class="btn btn-success btn-sm float-right" @click="submit()">
        <font-awesome-icon icon="fa fa-save mr-1" />
        <span> Submit</span>
      </button>
    </div>
    <div class="card-body">
      <div class="card">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs font-weight-bold">
            <li class="nav-item" @click="setConfigurableSection('Trigger')">
              <a v-bind:class="{'nav-link': true, active: this.configurableSection === 'Trigger'}" role="button">Trigger</a>
            </li>
            <li class="nav-item" @click="setConfigurableSection('PipelineFunc')">
              <a v-bind:class="{'nav-link': true, active: this.configurableSection === 'PipelineFunc'}" role="button">Pipeline Functions</a>
            </li>
            <li class="nav-item" @click="setConfigurableSection('InsecureSecrets')">
              <a v-bind:class="{'nav-link': true, active: this.configurableSection === 'InsecureSecrets'}" role="button">Insecure Secrets</a>
            </li>
            <li class="nav-item" @click="setConfigurableSection('StoreAndForward')">
              <a v-bind:class="{'nav-link': true, active: this.configurableSection === 'StoreAndForward'}" role="button">Store And Forward</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div v-if="this.configurableSection === 'Trigger'">
            <Trigger :TriggerData.sync="appSvcConfig.Trigger"/>
          </div>
          <div v-if="this.configurableSection === 'InsecureSecrets'">
            <InsecureSecrets :InsecureSecretsData.sync="appSvcConfig.Writable.InsecureSecrets"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { appServiceService } from '../common/api.service'
import Trigger from '../components/Trigger'
import InsecureSecrets from '../components/InsecureSecrets'

export default {
  name: 'app-service-configurable',
  components: {
    Trigger,
    InsecureSecrets
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
    this.configurableSection = 'Trigger'
    this.appSvcConfig = appServiceService.getAppSvcConfigBySvcKey(this.slug)
  },
  methods: {
    setConfigurableSection (configSection) {
      this.configurableSection = configSection
    },
    submit () {
      console.log(this.appSvcConfig.Trigger.EdgexMessageBus.Optional.KeepAlive)
      console.log(this.appSvcConfig.Trigger.Type)
      console.log(this.appSvcConfig.Writable.InsecureSecrets.AES.Path)
    }
  }
}
</script>

<style scoped>

</style>
