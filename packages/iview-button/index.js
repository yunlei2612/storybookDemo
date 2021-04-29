import DiIviewButton from './src/iview-button.vue'

DiIviewButton.install = Vue => {
  Vue.component(LgIviewButton.name, DiIviewButton)
}

export default DiIviewButton
