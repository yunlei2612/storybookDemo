import Vue from 'vue';
import DiIviewButton from '../src/iview-button.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import { action } from '@storybook/addon-actions';
import README from '../README.md'
Vue.use(ViewUI)
export default {
  title: 'DiIviewButton',
  component: DiIviewButton,
  parameters: {
    notes: { README },
  },
}

export const IviewButtonPrimary = _ => ({
  components: { DiIviewButton },
  template: `
    <div>
      <Di-iview-button :type="type" @btnClick="btnClick"></Di-iview-button>
    </div>
  `,
  data() {
    return {
      type: 'primary'
    }
  },
  methods: {
    btnClick: action('btnClick')
  }
})

export const IviewButtonError = _ => ({
  components: { DiIviewButton },
  template: `
    <div>
      <Di-iview-button :type="type"></Di-iview-button>
    </div>
  `,
  data() {
    return {
      type: 'error'
    }
  }
})