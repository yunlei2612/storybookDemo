import diButton from './mybutton/index.js';
import dialog from './dialog/index.js';
const components = [
  diButton,
  dialog
];

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  diButton,
  dialog
};
