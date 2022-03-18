<template>
  <div>
    <p> SvcLine </p>
    <div>
      {{ ServiceId }}
    </div>
    <div>
      {{ Port }}
    </div>
    <router-link to='app-service-configurable'>
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

  }
}
</script>

<style scoped>

</style>
