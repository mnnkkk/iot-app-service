<template>
  <div>
    <div class="row">
      <div class="col-sm-4 col-md-3">
        <div class="card mb-3" >
          <div class="card-header font-weight-bold text-nowrap text-truncate">
            <i class="fa fa-file-text mr-2 text-danger"></i>
            <span i18n>Builtin Pipeline Functions</span>
          </div>
          <div class="card-body overflow-auto">
            <table v-if="unSelectedFunc.length === 0" class="border-secondary rounded w-100 text-center" style="height: 70px; border: 1px; border-style: dashed;">
              <tbody>
              <td class="text-muted" i18n>Drop Zone</td>
              </tbody>
            </table>
            <draggable class="draggable-list" :list="unSelectedFunc" group="my-group" @add="drag" @sort="drag">
              <div class="list-item" v-for="element in unSelectedFunc" :key="element.name">
                <span class="badge badge-secondary" role="button">
                  {{ element.name }}
                </span>
              </div>
            </draggable>
          </div>
        </div>
      </div>

      <div class="col-sm-8 col-md-9">
        <div class="card">
          <div class="card-header font-weight-bold">
            <i class="fa fa-file-text mr-2 text-danger"></i>
            <span i18n>Selected Pipeline Functions</span>
          </div>
          <div class="card-body">
            <div class="card mb-3">
              <div class="card-header font-weight-bold text-nowrap text-truncate">
                <i class="fa fa-sort-amount-asc fa-rotate-270 mr-2 text-danger"></i>
                <span i18n>Func Execution Order</span>
                <span class="text-info ml-2">
                            <small>
                                <i class="fa fa-info-circle mr-1"></i>
                                <span i18n>drag sorting is enabled</span>
                            </small>
                        </span>
              </div>
              <div class="card-body" id="funcExecOrderSelectedBody">
                <table v-if="selectedFunc.length === 0" class="border-secondary rounded w-100 text-center" style="height: 70px; border: 1px; border-style: dashed;">
                  <tbody>
                  <td class="text-muted" i18n>Drop Zone</td>
                  </tbody>
                </table>
                <draggable class="draggable-list" :list="selectedFunc" group="my-group" @add="drag" @sort="drag">
                  <div class="list-item" v-for="element in selectedFunc" :key="element.name">
                <span class="badge badge-secondary" role="button">
                  {{ element.name }}
                </span>
                  </div>
                </draggable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-for="(func, funcName) in this.Pipeline.Functions" :key="func">
      <div class="card mb-3">
        <div class="card-header">
          <font-awesome-icon icon="fa fa-tags text-danger mr-2"/>
          <span class="font-weight-bold">{{ funcName }}</span>
        </div>
        <div class="card-body">
          <form>

            <div class="form-group row" v-for="(val, param) in func.Parameters" :key="param">
              <label class="col-sm-2 col-form-label">
                <span>{{ param }}</span>
                <span class="fa fa-question-circle-o fa-lg ml-2" role="button"></span>
              </label>
              <div class="col-sm-10">
                <input type="text" class="form-control" v-model="Pipeline.Functions[funcName].Parameters[param]">
              </div>
            </div>
          </form>
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
