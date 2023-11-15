import type { App } from "vue"
declare module './Button.vue' {
    interface Button {
      install: (app: App) => void;
    }
}

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small' 
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
    /**
     * button size 
     * @type {'primary' | 'success' | 'warning' | 'danger' | 'info'}
     */
    type?: ButtonType,
    /**
     * button type 
     * @type {'large' | 'small'}
     */
    size?: ButtonSize,
    /**
     * determine whether it's a plain button  
     * @type {boolean}
     */
    plain?: boolean,
    /**
     * determine whether it's a round button 
     * @type {boolean}
     */
    round?: boolean,
    /**
     * determine whether it's a circle button
     * @type {boolean}
     */
    circle?: boolean,
    /**
     * disable the button
     * @type {boolean}
     */
    disabled?: boolean,
    /**
     * same as native button's type 
     * @type {'button' | 'submit' | 'reset'}
     */
    nativeType?: NativeType,
    /**
     * same as native button's autofocus
     * @type {boolean}
     */
    autofocus?: boolean,
    /**
     * icon component
     * @type {string}
     */
    icon?: string,
    /**
     * determine whether it's loading
     * @type {boolean}
     */
    loading?: boolean,
}

export interface ButtonInstance {
    ref: HTMLButtonElement
}