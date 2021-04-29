/* Automatically generated by './build/bin/build-entry.js' */

import Tag from './ele-tag/index.js';
import IviewButton from './iview-button/index.js';
import Page from './iview-page/index.js';

const components = [
  Tag,
  IviewButton,
  Page
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
  Tag,
  IviewButton,
  Page
};
