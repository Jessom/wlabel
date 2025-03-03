export type ProjectItem = {
  id: number | string;
  name: string;
  class: string;
  className: string;
  classify: number;
  image: number;
  created_at: number | string;
  updated_at: number | string;
}


declare enum AffixStatus {
    None = 0,
    Prepare = 1
}
export interface AffixState {
    affixStyle?: CSSProperties;
    placeholderStyle?: CSSProperties;
    status: AffixStatus;
    lastAffix: boolean;
    prevTarget: Window | HTMLElement | null;
}
export declare const affixProps: () => {
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop: NumberConstructor;
    /** 距离窗口底部达到指定偏移量后触发 */
    offsetBottom: NumberConstructor;
    /** 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
    target: {
        type: PropType<() => Window | HTMLElement | null>;
        default: typeof getDefaultTarget;
    };
    prefixCls: StringConstructor;
    /** 固定状态改变时触发的回调函数 */
    onChange: PropType<(lastAffix: boolean) => void>;
    onTestUpdatePosition: PropType<() => void>;
};
export type AffixEmits = {
    change: (lastAffix: boolean) => void;
    testUpdatePosition: () => void;
};
export type AffixExpose = {
    updatePosition: (...args: any[]) => void;
    lazyUpdatePosition: (...args: any[]) => void;
};
