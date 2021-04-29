import DiEleTag from './src/ele-tag.vue'

DiEleTag.install = Vue => {
  Vue.component(LgEleTag.name, DiEleTag)
}

export default DiEleTag
