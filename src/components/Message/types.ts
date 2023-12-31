import type { VNode,ComponentInternalInstance } from "vue";
import type { App } from 'vue';
declare module './Message.vue' {
    interface Message {
        install: (app: App) => void;
    }
}
export interface MessageProps {
    message?: string | VNode;
    duration?: number;
    showClose?: boolean;
    type?: 'success' | 'info' | 'warning' | 'danger';
    offset?: number;
    onDestory: () => void ;
    id: string;
    zIndex: number;
    transitionName?: string;
}

export interface MessageContext {
    id: string;
    vnode: VNode;
    props: MessageProps;
    vm:ComponentInternalInstance;
    destory: ()=> void;
}

export type createMessageProps = Omit<MessageProps,'onDestory' | 'id' | 'zIndex'>