export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small' 
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
    /**
     * 按钮类型
     * @type {'primary' | 'success' | 'warning' | 'danger' | 'info'}
     */
    type?: ButtonType,
    /**
     * 按钮尺寸
     * @type {'large' | 'small'}
     */
    size?: ButtonSize,
    /**
     * 是否为朴素按钮
     * @type {boolean}
     */
    plain?: boolean,
    /**
     * 是否为圆形按钮
     * @type {boolean}
     */
    round?: boolean,
    /**
     * 是否为圆角按钮
     * @type {boolean}
     */
    circle?: boolean,
    /**
     * 是否禁用按钮
     * @type {boolean}
     */
    disabled?: boolean,
    /**
     * 原生按钮类型
     * @type {'button' | 'submit' | 'reset'}
     */
    nativeType?: NativeType,
    /**
     * 是否自动获取焦点
     * @type {boolean}
     */
    autofocus?: boolean
}

export interface ButtonInstance {
    ref: HTMLButtonElement
}