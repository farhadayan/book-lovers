export interface LayoutConfigChild {
  title: string;
  link: string | null;
}

export interface LayoutConfig {
  icon: string;
  title: string;
  link: string | null;
  open: boolean;
  children: LayoutConfigChild[];
}

export const LAYOUT_CONFIG: LayoutConfig[] = [
  {
    icon: 'assets/icons/item.svg',
    title: 'Landing page',
    open: false,
    link: 'landing-page',
    children: [
      {
        title: 'Books',
        link: 'landing-page/books',
      },
    ],
  },
];
