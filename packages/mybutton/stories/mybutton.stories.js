import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import DiMybutton from '../src/mybutton.vue'
import README from '../README.md'
import '../index.css'

export default {
  title: 'DiMybutton',
  components: DiMybutton,
  decorators: [withKnobs],
  parameters: {
    notes: { README }
  },
}
export const mybutton = () => ({
  components: { DiMybutton },
  props: {
    isDisabled: {
      default: boolean('Disabled', false),
    },
    text: {
      default: text('Text', 'Hello Storybook'),
    },
  },
  template: `
  <div class='wrap'>
     <DiMybutton :isDisabled="isDisabled">{{ text }}</DiMybutton>
  </div>
  `,
  
});