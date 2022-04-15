<template>
  <div>
    <div class="mt-5 container">
      <div class="row justify-content-center border py-5">
        <div class="col-5">
          <h4 class="mb-3">容器 A</h4>
          <draggable class="draggable-list" :list="unSelectedFunc" group="my-group" @add="drag" @sort="drag">
            <div class="list-item" v-for="element in unSelectedFunc" :key="element.name">
              {{ element.name }}
            </div>
          </draggable>
        </div>

        <div class="col-5">
          <h4 class="mb-3">容器 B</h4>
          <draggable class="draggable-list" :list="selectedFunc" group="my-group" @add="drag" @sort="drag">
            <div class="list-item" v-for="element in selectedFunc" :key="element.name">
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'Pipeline',
  components: {
    draggable
  },
  props: {
    PipelineData: Object
  },
  data () {
    return {
      Pipeline: {
        ExecutionOrder: '',
        Functions: {},
        PerTopicPipelines: {},
        UseTargetTypeOfByteArray: ''
      },
      unSelectedFunc: [],
      selectedFunc: []
    }
  },
  watch: {
    PipelineData: {
      immediate: true,
      handler (val) {
        this.Pipeline = val
      }
    }
  },
  mounted () {
    this.$emit('update:PipelineData', this.Pipeline)

    const selectedFuncList = this.Pipeline.ExecutionOrder.split(',')
    for (const funcName of selectedFuncList) {
      this.selectedFunc.push({
        name: funcName
      })
    }
    for (const funcName in this.Pipeline.Functions) {
      if (!selectedFuncList.includes(funcName)) {
        this.unSelectedFunc.push({
          name: funcName
        })
      }
    }
  },
  methods: {
    drag () {
      console.log('add')
      const funNames = []
      for (const func of this.selectedFunc) {
        funNames.push(func.name)
      }
      this.Pipeline.ExecutionOrder = funNames.join(',')
    }
  }
}
</script>

<style scoped>

</style>
