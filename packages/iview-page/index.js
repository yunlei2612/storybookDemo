import DiIviewPage from './src/iview-page.vue'

DiIviewPage.install = Vue => {
  Vue.component(LgIviewPage.name, DiIviewPage)
}

export default DiIviewPage
