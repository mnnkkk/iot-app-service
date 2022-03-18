<template>
  <div class="card">
    <h1>app-service-list</h1>
    <svc-line
      v-for="appSvc in appServiceList"
      :ServiceId = appSvc.ServiceId
      :Port = appSvc.Port
      :key = appSvc.ServiceId
    />
  </div>
</template>

<script>
import { svcService } from '../common/api.service'
import SvcLine from '../components/SvcLine'

export default {
  name: 'app-service-list',
  components: {
    SvcLine
  },
  props: {

  },
  data () {
    return {
      appServiceList: []
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    this.getAllAppSvc()
  },
  methods: {
    getAllAppSvc () {
      const serviceList = svcService.get()
      for (const svc of serviceList) {
        console.log(svc)
        if (svc.ServiceId.startsWith('app-')) {
          this.appServiceList.push(svc)
        }
      }
      // console.log(this.appServiceList)
    }
  }
}
</script>

<style scoped>

</style>
