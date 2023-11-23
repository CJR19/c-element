import { render, h } from "vue";
import LoadingInstance from "./Loading.vue";
import type { CreateMessageProps } from "./types";

let seed = 1;
export const createLoading = (
  props?: CreateMessageProps,
  el: any = document.body
) => {
  const id = `_c_loading_${seed++}`;
  const container = document.createElement("div");

  const close = () => {
    el.removeAttribute("loading_child_id");
    render(null, container);
  };
  const newProps = {
    ...props,
    id,
    close,
  };
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

  return instance;
};

export const removeLoading = (el: any) => {
  const id = el.getAttribute("loading_child_id");
  const loadingElement = document.getElementById(id);
  if (loadingElement) {
    loadingElement.remove();
  }
}

