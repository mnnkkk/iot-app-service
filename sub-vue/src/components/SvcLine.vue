<template>
  <div>
    <p> SvcLine </p>
    <div>
      {{ ServiceId }}
    </div>
    <div>
      {{ Port }}
    </div>
    <router-link :to='appSvcLink'>
      Configurable
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SvcLine',
  props: {
    ServiceId: String,
    Port: Number
  },
  computed: {
    appSvcLink () {
      return {
        name: 'app-service-configurable',
        params: {
          slug: this.ServiceId
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
