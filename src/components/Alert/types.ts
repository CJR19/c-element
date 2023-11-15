
import type { App } from "vue"
declare module './Alert.vue' {
    interface Alert {
      install: (app: App) => void;
    }
}

export interface AlertProps {
    /**
     * 标题
     * @type {string}
     */
    title?: string;

    /**
     * 主题
     * @type {string}
     * @default info
     */
    type?: 'success' | 'warning' | 'info' | 'danger';

    /**
     * 辅助性文字。也可通过默认 slot 传入
     * @type {string}
     */
    description?: string;

    /**
     * 是否可关闭
     * @type {boolean}
     * @default true
     */
    closable?: boolean;

    /**
     * 文字是否居中
     * @type {boolean}
     * @default true
     */
    center?: boolean;

    /**
     * 是否显示图标
     * @type {boolean}
     * @default false
     */
    showIcon?: boolean;

    /**
     * 选择提供的主题
     * @type {string}
     * @default light
     */
    effect?: 'light' | 'dark';
}

