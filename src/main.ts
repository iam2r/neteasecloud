import "minireset.css";
import "normalize.css";
import "@/styles/_adapter.scss";
import context, { Events } from "@/context";
import Preloading from "@/preloading";
import resources, { Resource } from "@/resources";
import { loadImage } from "@/common/Utils";

//加载preloading组件
const preloading = new Preloading(2500);

//下载合图等资源
const loadingResources = () => {
  return new Promise(async (resolve, reject) => {
    //loadingImages
    await Promise.all(
      Object.values(resources.images).map(
        (it: Resource) =>
          new Promise(async (resolve) => {
            it.target = await loadImage(it.src);
            resolve();
          })
      )
    );

    //loadingFonts

    resolve();
  });
};

//下载js
const loadingJs = () =>
  import(/* webpackChunkName: "main-async" */ "@/main-async");

Promise.all([
  loadingResources(),
  loadingJs(),
  preloading.visiblePromise(),
]).then(() => {
  context.events.emit(Events.Loaded);
});
