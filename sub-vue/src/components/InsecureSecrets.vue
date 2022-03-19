<template>
  <div>
    <div class="alert alert-info mb-3" role="alert">
      <small>
        <font-awesome-icon icon="fa fa-info-circle"/>
        <span>Insecure Secrets that are used when running in non-secure mode, i.e. when Vault isn't available. This is a dynamic map of configuration, so can empty if no secrets are used or can have as many or few user-defined secrets. It simulates a Secret Store in non-secure mode. </span>
      </small>
    </div>
    <div class="card mb-3">
      <div class="card-header">
        <font-awesome-icon icon="fa fa-tags text-danger mr-2"/>
        <span class="font-weight-bold">DB</span>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">path</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="path" v-model="InsecureSecrets.DB.Path">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">username</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="username" v-model="InsecureSecrets.DB.Secrets.username">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">password</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="password" v-model="InsecureSecrets.DB.Secrets.password">
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="card mb-3" >
      <div class="card-header">
        <font-awesome-icon icon="fa fa-tags text-danger mr-2"/>
        <span class="font-weight-bold">mqtt</span>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">path</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="path" v-model="InsecureSecrets.mqtt.Path">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">username</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="username" v-model="InsecureSecrets.mqtt.Secrets.username">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">password</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="password" v-model="InsecureSecrets.mqtt.Secrets.password">
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">cacert</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="cacert" v-model="InsecureSecrets.mqtt.Secrets.cacert">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">clientcert</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="clientcert" v-model="InsecureSecrets.mqtt.Secrets.clientcert">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">clientkey</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="clientkey" v-model="InsecureSecrets.mqtt.Secrets.clientkey">
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header">
        <font-awesome-icon icon="fa fa-tags text-danger mr-2"/>
        <span class="font-weight-bold">http</span>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">path</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="path" v-model="InsecureSecrets.http.Path">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">headervalue</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="headervalue" v-model="InsecureSecrets.http.Secrets.headervalue">
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header">
        <font-awesome-icon icon="fa fa-tags text-danger mr-2"/>
        <span class="font-weight-bold">AES</span>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">path</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="path" v-model="InsecureSecrets.AES.Path">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">key</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="key" v-model="InsecureSecrets.AES.Secrets.key">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InsecureSecrets',
  data () {
    return {
      InsecureSecrets: {
        AES: {
          Path: '',
          Secrets: { key: '' }
        },
        DB: { Path: '', Secrets: { password: '', username: '' } },
        http: { Path: '', Secrets: { headervalue: '' } },
        mqtt: { Path: '', Secrets: { cacert: '', clientcert: '', clientkey: '', password: '', username: '' } }
      }
    }
  },
  props: {
    InsecureSecretsData: Object
  },
  watch: {
    InsecureSecretsData: {
      immediate: true,
      handler (val) {
        this.InsecureSecrets = val
      }
    }
  },
  mounted () {
    this.$emit('update:InsecureSecretsData', this.InsecureSecrets)
  }
}
</script>

<style scoped>

</style>
