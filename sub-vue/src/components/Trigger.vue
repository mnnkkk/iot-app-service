<template>
  <div>
    <div class="alert alert-info mb-3" role="alert">
      <small>
        <font-awesome-icon icon="fa fa-info-circle mr-1"/>
        <span>
                App service needs to restart when Trigger is changed, so this section only lets user to know what Trigger the app service used right now! <br>
                And Next, UI will support user to change the Trigger section.
            </span>
      </small>
    </div>

    <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">
          <span>Type</span>
          <span class="fa fa-question-circle-o fa-lg ml-2" role="button" data-html="false" data-animation="true"  data-trigger="focus" data-toggle="popover" title="tips"
                data-content="Trigger type"></span>
        </label>
        <div class="col-sm-10">
          <select class="custom-select"  v-model="Trigger.Type">
            <option value="edgex-messagebus">edgex-messagebus</option>
            <option value="external-mqtt">external-mqtt</option>
            <option value="http">http</option>
          </select>
        </div>
      </div>
    </form>

    <div v-if="Trigger.Type === 'edgex-messagebus'" class="card mb-3">
      <div class="card-header">
        <font-awesome-icon icons="fa fa-tags mr-2 text-danger"/>
        <span class="font-weight-bold">EdgexMessageBus Trigger</span>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">
              <span>Type</span>
              <span class="fa fa-question-circle-o fa-lg ml-2" role="button"  title="tips" data-content="EdgeX Message Bus type"></span>
            </label>
            <div class="col-sm-10">
              <select class="custom-select"  v-model="Trigger.EdgexMessageBus.Type">
                <option value="redis">redis</option>
                <option value="mqtt">mqtt</option>
                <option value="zero">zero</option>
              </select>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col-sm-6 col-md-6">
            <div class="card mb-3">
              <div class="card-header font-weight-bold">
                <font-awesome-icon icon="fa fa-tag mr-2 text-danger"/>
                <span>Subscribe Host</span>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-nowrap text-truncate">Host</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" name="Host" v-model="Trigger.EdgexMessageBus.SubscribeHost.Host">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-nowrap text-truncate">Port</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" name="Port" v-model="Trigger.EdgexMessageBus.SubscribeHost.Port">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-nowrap text-truncate" >Protocol</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" name="Protocol" v-model="Trigger.EdgexMessageBus.SubscribeHost.Protocol">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-md-3 col-form-label text-nowrap text-truncate" >SubscribeTopics</label>
                    <div class="col-sm-9 col-md-9">
                      <input type="text" class="form-control" name="SubscribeTopics" v-model="Trigger.EdgexMessageBus.SubscribeHost.SubscribeTopics">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6">
            <div class="card mb-3">
              <div class="card-header font-weight-bold">
                <font-awesome-icon icons="fa fa-tag mr-2 text-danger"/>
                <span>Publish Host</span>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-nowrap text-truncate">Host</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" name="Host" v-model="Trigger.EdgexMessageBus.PublishHost.Host">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-nowrap text-truncate">Port</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" name="Port" v-model="Trigger.EdgexMessageBus.PublishHost.Port">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-nowrap text-truncate">Protocol</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" name="Protocol" v-model="Trigger.EdgexMessageBus.PublishHost.Protocol">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label text-nowrap text-truncate">PublishTopic</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" name="PublishTopic" v-model="Trigger.EdgexMessageBus.PublishHost.PublishTopic">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <div class="card">
              <div class="card-header font-weight-bold">
                <font-awesome-icon icon="fa fa-tag mr-2 text-danger"/>
                <span>Optional</span>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">ClientId</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" name="ClientId" v-model="Trigger.EdgexMessageBus.Optional.ClientId">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Qos</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" name="Qos" v-model="Trigger.EdgexMessageBus.Optional.Qos">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">KeepAlive</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" name="KeepAlive" v-model="Trigger.EdgexMessageBus.Optional.KeepAlive">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Retained</label>
                    <div class="col-sm-10">
                      <select class="custom-select"  v-model="Trigger.EdgexMessageBus.Optional.Retained">
                        <option value="false">false</option>
                        <option value="true">true</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">AutoReconnect</label>
                    <div class="col-sm-10">
                      <select class="custom-select"   v-model="Trigger.EdgexMessageBus.Optional.AutoReconnect">
                        <option value="false">false</option>
                        <option value="true">true</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">ConnectTimeout</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" name="ConnectTimeout" v-model="Trigger.EdgexMessageBus.Optional.ConnectTimeout">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">authmode</label>
                    <div class="col-sm-10">
                      <select class="custom-select"  v-model="Trigger.EdgexMessageBus.Optional.authmode">
                        <option value="none">none</option>
                        <option value="usernamepassword">usernamepassword</option>
                        <option value="clientcert">clientcert</option>
                        <option value="cacert">cacert</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">SkipCertVerify</label>
                    <div class="col-sm-10">
                      <select class="custom-select"  v-model="Trigger.EdgexMessageBus.Optional.SkipCertVerify">
                        <option value="false">false</option>
                        <option value="true">true</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">secretname</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" name="secretname" v-model="Trigger.EdgexMessageBus.Optional.secretname">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="Trigger.Type === 'external-mqtt'" class="card mb-3">
      <div class="card-header">
        <font-awesome-icon icon="fa fa-tags mr-2 text-danger"/>
        <span class="font-weight-bold">External MQTT Trigger</span>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Url</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="Url" v-model="Trigger.ExternalMqtt.Url">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">SubscribeTopics</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="SubscribeTopics" v-model="Trigger.ExternalMqtt.SubscribeTopics">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">PublishTopic</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="PublishTopic" v-model="Trigger.ExternalMqtt.PublishTopic">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">ClientId</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="ClientId" v-model="Trigger.ExternalMqtt.ClientId">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">ConnectTimeout</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="ConnectTimeout" v-model="Trigger.ExternalMqtt.ConnectTimeout">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">AutoReconnect</label>
            <div class="col-sm-10">
              <select class="custom-select" v-model="Trigger.ExternalMqtt.AutoReconnect">
                <option value="false">false</option>
                <option value="true">true</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">KeepAlive</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="Trigger.ExternalMqtt.KeepAlive">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">QoS</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="QoS" v-model="Trigger.ExternalMqtt.QoS">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Retain</label>
            <div class="col-sm-10">
              <select class="custom-select" v-model="Trigger.ExternalMqtt.Retain">
                <option value="false">false</option>
                <option value="true">true</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">SkipCertVerify</label>
            <div class="col-sm-10">
              <select class="custom-select" v-model="Trigger.ExternalMqtt.SkipCertVerify">
                <option value="false">false</option>
                <option value="true">true</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">SecretPath</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="SecretPath" v-model="Trigger.ExternalMqtt.SecretPath">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">AuthMode</label>
            <div class="col-sm-10">
              <select class="custom-select" v-model="Trigger.ExternalMqtt.AuthMode">
                <option value="none">none</option>
                <option value="usernamepassword">usernamepassword</option>
                <option value="clientcert">clientcert</option>
                <option value="cacert">cacert</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div v-if="Trigger.Type === 'http'" class="card">
      <div class="card-header">
        <font-awesome-icon icon="fa fa-tags mr-2 text-danger"/>
        <span class="font-weight-bold">HTTP Trigger</span>
      </div>
      <div class="card-body">
        <div class="alert alert-info mb-3" role="alert">
          <small>
            <font-awesome-icon icon="fa fa-info-circle mr-1"/>
            <span>no optional fields needs to setup for http trigger</span>
          </small>
        </div>
      </div>
    </div>
  </div>
<!--  <div v-if="this.Trigger.Type === 'edgex-messagebus'">-->
<!--    <label>-->
<!--      label1：<input type="text" v-model="Trigger.EdgexMessageBus.Optional.KeepAlive">-->
<!--    </label>-->
<!--  </div>-->
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
