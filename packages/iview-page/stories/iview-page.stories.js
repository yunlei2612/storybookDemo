import Vue from 'vue';
import DiIviewPage from '../src/iview-page.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import README from '../README.md'
Vue.use(ViewUI)
export default {
  title: 'DiIviewPage',
  component: DiIviewPage,
  parameters: {
    notes: { README },
  },
}

export const IviewPage = _ => ({
  components: { DiIviewPage },
  template: `
    <div>
      <Di-iview-page :total="total"></Di-iview-page>
    </div>
  `,
  data() {
    return {
      total: 100
    }
  }
})