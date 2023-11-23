import { render, h } from "vue";
import LoadingInstance from "./Loading.vue";
import type { CreateLoadingProps } from "./types";

let seed = 1;
const instances :any[]= [];
export const createLoading = (
  props: CreateLoadingProps ={lock: true},
  el: any = document.body
) => {
  const id = `_c_loading_${seed++}`;
  const container = document.createElement("div");

  const close = () => {
    el.removeAttribute("loading_child_id");
    el.classList.remove('c-loading-parent--hidden')
    const index = instances.findIndex((item) => item.id === id);

    render(null, container);
    if (index !== -1) {
      instances.splice(index, 1);
    }
  };
  const newProps = {
    ...props,
    id,
    close,
    fullscreen: el === document.body? true: false,
  };
  if (props?.lock) {
    el.classList.add('c-loading-parent--hidden')
  }
  el.setAttribute('loading_child_id', id);
  const vnode = h(LoadingInstance, newProps);
  render(vnode, container);
  el.appendChild(container.firstElementChild);

  const instance = {
    id,
    vnode,
    props: newProps,
    close,
  };

  instances.push(instance);

  return instance;
};

export const removeLoading = (el: any) => {
  const id = el.getAttribute("loading_child_id");
  if (!id) return
  instances.find((item) => item.id === id)?.close();
}

