<template>
  <div v-if="this.Trigger.Type === 'edgex-messagebus'">
    <label>
      label1：<input type="text" v-model="Trigger.EdgexMessageBus.Optional.KeepAlive">
    </label>
  </div>
</template>

<script>
export default {
  name: 'Trigger',
  data () {
    return {
      Trigger: {
        EdgexMessageBus: {
          Optional: {
            AutoReconnect: '',
            ClientId: '',
            ConnectTimeout: '',
            KeepAlive: '',
            Qos: '',
            Retained: '',
            SkipCertVerify: '',
            authmode: '',
            secretname: ''
          },
          PublishHost: { Host: '', Port: '', Protocol: '', PublishTopic: '' },
          SubscribeHost: { Host: '', Port: '', Protocol: '', SubscribeTopics: '' },
          Type: ''
        },
        ExternalMqtt: {
          AuthMode: '',
          AutoReconnect: '',
          ClientId: '',
          ConnectTimeout: '',
          KeepAlive: '',
          PublishTopic: '',
          QoS: '',
          Retain: '',
          SecretPath: '',
          SkipCertVerify: '',
          SubscribeTopics: '',
          Url: ''
        },
        Type: ''
      }
    }
  },
  props: {
    TriggerData: Object
  },
  watch: {
    TriggerData: {
      immediate: true,
      handler (val) {
        this.Trigger = val
      }
    }
  },
  mounted () {
    this.$emit('update:TriggerData', this.Trigger)
  }
}
</script>

<style scoped>

</style>
