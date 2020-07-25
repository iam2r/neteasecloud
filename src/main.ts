import "minireset.css";
import "normalize.css";
import "@/styles/_adapter.scss";
import context, { Events } from "@/context";
import Preloading from "@/preloading";

//加载preloading组件
const preloadingUI = new Preloading(1000);

//下载合图等资源
const loadingResources = () => {
  return new Promise((resolve, reject) => {
    resolve();
  });
};

//下载js
const loadingJs = () =>
  import(/* webpackChunkName: "main-async" */ "@/main-async");

Promise.all([
  loadingResources(),
  loadingJs(),
  preloadingUI.visiblePromise(),
]).then(() => {
  context.events.emit(Events.Loaded);
});
