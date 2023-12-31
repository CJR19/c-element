import type { VNode,App } from "vue";
import type { TooltipProps } from "../Tooltip/types";

declare module './Dropdown.vue' {
    interface Dropdown {
        install: (app: App) => void;
    }
}

export interface DropdownProps extends TooltipProps {
    menuOptions: MenuOption[];
    hideAfterClick?: boolean;
}

export interface MenuOption {
    label: string | VNode;
    key: string | number;
    disabled?: boolean;
    divided?: boolean;
}

export interface DropdownEmits {
    (e: "visible-change", value: boolean): void;
    (e: "select", value: MenuOption): void;
}

export interface DropDownInstance {
    show: () => void;
    hide: () => void;
}
