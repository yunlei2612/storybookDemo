import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import DiEleTag from '../'
import README from '../README.md'
Vue.use(ElementUI);

export default {
  title: 'DiEleTag',
  component: DiEleTag,
  parameters: {
    notes: { README },
  },
}

export const EleTagWarning= _ => ({
  components: { DiEleTag },
  template: `
    <div>
      <Di-ele-tag :type="type"></Di-ele-tag>
    </div>
  `,
  data(){
    return {
      type:'warning'
    }
  }
})

export const EleTagSuccess= _ => ({
  components: { DiEleTag },
  template: `
    <div>
      <Di-ele-tag :type="type"></Di-ele-tag>
    </div>
  `,
  data(){
    return {
      type:'success'
    }
  }
})