import type { CommonComponentType } from "@/types/component";

/**
 * Menu의 Item type
 */
export interface MenuItem {
  /**
   * 자식 Menu는 CommonComponentType에 속한 type 이어야만 한다
   */
  children?: MenuItems;

  /**
   * 최상위 부모의 Component type
   */
  rootComponentType?: CommonComponentType;
}

/**
 * 위와 같은 MenuItem의 type인데 CommonComponentType에 있는
 * Type들을 하나씩 뽑아온 후, MenuItem type으로 합쳐 버린다.
 * 즉, 아래의 예시와 같이 Type이 정의된다.
 *
 * @example
 * Form: {
 *   children: {
 *      Input: {
 *          // ...
 *      },
 *   }
 * }
 */
type MenuKeys = Partial<CommonComponentType | string>;

interface MenuItems {
  [name: MenuKeys]: MenuItem;
}

export const menuItems: MenuItems = {
  Box: {},
  Form: {
    children: {
      Input: {},
    },
  },
  Button: {},
};
