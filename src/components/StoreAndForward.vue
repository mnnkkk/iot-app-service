<template>
  <div>
    <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">
          <span>Enabled</span>
          <span class="fa fa-question-circle-o fa-lg ml-2" role="button"></span>
        </label>
        <div class="col-sm-10">
          <select class="custom-select"  v-model="StoreAndForward.Enabled">
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">
          <span>MaxRetryCount</span>
          <span class="fa fa-question-circle-o fa-lg ml-2" role="button"></span>
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" name="MaxRetryCount" v-model="StoreAndForward.MaxRetryCount">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">
          <span>RetryInterval</span>
          <span class="fa fa-question-circle-o fa-lg ml-2" role="button"></span>
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" name="RetryInterval" v-model="StoreAndForward.RetryInterval">
        </div>
      </div>
    </form>
  </div>

</template>

<script>
export default {
  name: 'StoreAndForward',
  data () {
    return {
      StoreAndForward: { Enabled: '', MaxRetryCount: '', RetryInterval: '' }
    }
  },
  props: {
    StoreAndForwardData: Object
  },
  watch: {
    StoreAndForwardData: {
      immediate: true,
      handler (val) {
        this.StoreAndForward = val
      }
    }
  },
  mounted () {
    this.$emit('update:StoreAndForwardData', this.StoreAndForward)
  }
}
</script>

<style scoped>

</style>
