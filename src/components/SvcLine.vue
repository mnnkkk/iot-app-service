<template>
  <li class="list-group-item list-group-item-action list-group-item-light">
    <div class="media">
      <div class="align-self-center mr-3">
        <font-awesome-icon icon="fa fa-tags fa-2x text-secondary" />
      </div>
      <div class="media-body">
        <div class="mt-0 mb-3">
          <h5 class="d-inline mr-3 align-middle text-dark">
            {{ ServiceId }}
          </h5>
        </div>
        <div>
          <span class="badge badge-info mr-3" role="button" >port {{ Port }}</span>
          <router-link class="badge badge-secondary float-right" role="button" :to='appSvcLink'>
            <font-awesome-icon icon="fa fa-cog mr-1" />
            <span>{{ $t('Configurable') }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </li>
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
