import type { LocalizedString } from "./common";

/**
 * A single item on the menu.
 */
export type MenuItem = {
  /** Stable unique identifier */
  id: string;

  /** Localized item name */
  name: LocalizedString;

  /** Optional localized item description */
  description?: LocalizedString;

  /** Price in the business's local currency */
  price: number;

  /** Optional path to the item image (relative to public/) */
  image?: string;
};

/**
 * A category grouping related menu items.
 */
export type MenuCategory = {
  /** Stable unique identifier */
  id: string;

  /** Localized category name */
  name: LocalizedString;

  /** Items within this category */
  items: MenuItem[];
};
