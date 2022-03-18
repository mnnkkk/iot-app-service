<template>
  <div>
    <h1>app-service-list</h1>
    <li v-for="appSvc in this.appServiceList"
        :key="appSvc.ServiceId">
      <div>
        {{ appSvc.ServiceId }}
      </div>
      <div>
        {{ appSvc.Port }}
      </div>
      <router-link to='app-service-configurable'>
        Configurable
      </router-link>
    </li>
  </div>
</template>

<script>
import { svcService } from '../common/api.service'

export default {
  name: 'app-service-list',
  components: {

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
