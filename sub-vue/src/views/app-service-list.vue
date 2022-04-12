<template>
  <div class="card">
    <div class="card-header">
      <font-awesome-icon icon="fa-solid fa-list mr-2 text-danger" />
      <span class="font-weight-bold">App Service List</span>
    </div>
    <div class="card-body">
      <ul class="list-group p-0">
        <svc-line
          v-for="appSvc in appServiceList"
          :ServiceId = appSvc.ServiceId
          :Port = appSvc.Port
          :key = appSvc.ServiceId
        />
      </ul>
    </div>
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
    async getAllAppSvc () {
      const serviceList = await svcService.get()
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
