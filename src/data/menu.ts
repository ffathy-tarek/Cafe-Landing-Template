import type { MenuCategory } from "../types";

/**
 * Hala Cafe menu data.
 *
 * Each category contains items with bilingual names, localized Arabic labels,
 * item prices in EGP, and optional images placed under public/images/menu.
 */
export const menuCategories: MenuCategory[] = [
  {
    id: "hot-coffee",
    name: {
      en: "Hot Coffee",
      ar: "قهوة ساخنة",
    },
    items: [
      {
        id: "hot-coffee-001",
        name: {
          en: "Caramel Macchiato",
          ar: "كراميل ماكياتو",
        },
        price: 110,
        image: "/images/menu/hot-coffee/001.png",
      },
      {
        id: "hot-coffee-002",
        name: {
          en: "Single Espresso",
          ar: "سنجل اسبريسو",
        },
        price: 65,
        image: "/images/menu/hot-coffee/002.png",
      },
      {
        id: "hot-coffee-003",
        name: {
          en: "Double Espresso",
          ar: "دوبل اسبريسو",
        },
        price: 75,
        image: "/images/menu/hot-coffee/003.png",
      },
      {
        id: "hot-coffee-004",
        name: {
          en: "Cappuccino",
          ar: "كابوتشينو",
        },
        price: 95,
        image: "/images/menu/hot-coffee/004.png",
      },
      {
        id: "hot-coffee-005",
        name: {
          en: "Latte",
          ar: "لاتيه",
        },
        price: 95,
        image: "/images/menu/hot-coffee/005.png",
      },
      {
        id: "hot-coffee-006",
        name: {
          en: "Spanish Latte",
          ar: "سبانيش لاتيه",
        },
        price: 120,
        image: "/images/menu/hot-coffee/006.png",
      },
      {
        id: "hot-coffee-007",
        name: {
          en: "Mocha",
          ar: "موكا",
        },
        price: 105,
        image: "/images/menu/hot-coffee/007.png",
      },
      {
        id: "hot-coffee-008",
        name: {
          en: "Turkish Coffee Single",
          ar: "قهوة تركى سنجل",
        },
        price: 65,
        image: "/images/menu/hot-coffee/008.png",
      },
    ],
  },
  {
    id: "iced-coffee",
    name: {
      en: "Iced Coffee",
      ar: "قهوة مثلجة",
    },
    items: [
      {
        id: "iced-coffee-001",
        name: {
          en: "Iced Black Coffee",
          ar: "ايس بلاك كوفي",
        },
        price: 100,
        image: "/images/menu/iced-coffee/001.png",
      },
      {
        id: "iced-coffee-002",
        name: {
          en: "Iced Latte",
          ar: "ايس لاتيه",
        },
        price: 105,
        image: "/images/menu/iced-coffee/002.png",
      },
      {
        id: "iced-coffee-003",
        name: {
          en: "Iced Caramel Macchiato",
          ar: "ايس كراميل ميكاتو",
        },
        price: 110,
        image: "/images/menu/iced-coffee/003.png",
      },
      {
        id: "iced-coffee-004",
        name: {
          en: "Ice Spanish Latte",
          ar: "ايس سبانيش لاتيه",
        },
        price: 125,
        image: "/images/menu/iced-coffee/004.png",
      },
      {
        id: "iced-coffee-005",
        name: {
          en: "Ice Pistachio Latte",
          ar: "ايس بيستاشيو لاتيه",
        },
        price: 130,
        image: "/images/menu/iced-coffee/005.png",
      },
    ],
  },
  {
    id: "fresh-juice",
    name: {
      en: "Fresh Juice",
      ar: "عصائر طازجة",
    },
    items: [
      {
        id: "fresh-juice-001",
        name: {
          en: "Mango",
          ar: "مانجو",
        },
        price: 105,
        image: "/images/menu/fresh-juice/001.png",
      },
      {
        id: "fresh-juice-002",
        name: {
          en: "Guava",
          ar: "جوافة",
        },
        price: 95,
        image: "/images/menu/fresh-juice/002.png",
      },
      {
        id: "fresh-juice-003",
        name: {
          en: "Strawberry",
          ar: "فراولة",
        },
        price: 95,
        image: "/images/menu/fresh-juice/003.png",
      },
      {
        id: "fresh-juice-004",
        name: {
          en: "Orange",
          ar: "برتقال",
        },
        price: 100,
        image: "/images/menu/fresh-juice/004.png",
      },
      {
        id: "fresh-juice-005",
        name: {
          en: "Avocado with Honey",
          ar: "افوكادو بالعسل",
        },
        price: 125,
        image: "/images/menu/fresh-juice/005.png",
      },
      {
        id: "fresh-juice-006",
        name: {
          en: "Lemon Mint",
          ar: "ليمون نعناع",
        },
        price: 90,
        image: "/images/menu/fresh-juice/006.png",
      },
    ],
  },
  {
    id: "milkshake",
    name: {
      en: "Milkshake",
      ar: "ميلك شيك",
    },
    items: [
      {
        id: "milkshake-001",
        name: {
          en: "Chocolate Milkshake",
          ar: "شوكوليت ميلك شيك",
        },
        price: 120,
        image: "/images/menu/milkshake/001.png",
      },
      {
        id: "milkshake-002",
        name: {
          en: "Vanilla Milkshake",
          ar: "فانيليا ميلك شيك",
        },
        price: 120,
        image: "/images/menu/milkshake/002.png",
      },
      {
        id: "milkshake-003",
        name: {
          en: "Oreo Milkshake",
          ar: "اوريو ميلك شيك",
        },
        price: 125,
        image: "/images/menu/milkshake/003.png",
      },
      {
        id: "milkshake-004",
        name: {
          en: "Lotus Milkshake",
          ar: "لوتس ميلك شيك",
        },
        price: 125,
        image: "/images/menu/milkshake/004.png",
      },
      {
        id: "milkshake-005",
        name: {
          en: "Pistachio Milkshake",
          ar: "بيستاشيو ميلك شيك",
        },
        price: 125,
        image: "/images/menu/milkshake/005.png",
      },
    ],
  },
  {
    id: "desserts",
    name: {
      en: "Desserts",
      ar: "حلويات",
    },
    items: [
      {
        id: "desserts-001",
        name: {
          en: "Molten Nutella",
          ar: "مولتن نوتيلا",
        },
        price: 125,
        image: "/images/menu/desserts/001.png",
      },
      {
        id: "desserts-002",
        name: {
          en: "Plain Cheesecake",
          ar: "تشيز كيك سادة",
        },
        price: 110,
        image: "/images/menu/desserts/002.png",
      },
      {
        id: "desserts-003",
        name: {
          en: "Tiramisu",
          ar: "تیرامیسو",
        },
        price: 125,
        image: "/images/menu/desserts/003.png",
      },
      {
        id: "desserts-004",
        name: {
          en: "Brownies",
          ar: "براونيز",
        },
        price: 100,
        image: "/images/menu/desserts/004.png",
      },
      {
        id: "desserts-005",
        name: {
          en: "Waffle Special",
          ar: "وافل سبيشيال",
        },
        price: 140,
        image: "/images/menu/desserts/005.png",
      },
    ],
  },
];
