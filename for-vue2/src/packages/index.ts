import * as utils from "./utils";
import { PluginFunction, VueConstructor } from "vue/types/index";

const install: PluginFunction<VueConstructor> = (Vue: VueConstructor) => {
  // 挂载全局方法
  Vue.prototype.$h = utils;
  // uni.$h = utils;
};

export default {
  install,
};
