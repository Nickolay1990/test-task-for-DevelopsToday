import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SideBarMenu } from "@/components/SideBarMenu/SideBarMenu";

const meta = {
  title: "Components/SidebarMenu",
  component: SideBarMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof SideBarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarMenu1list: Story = {
  args: {
    menu: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "About",
        link: "/about",
      },
      {
        title: "Catalog",
        link: "/catalog",
      },
      {
        title: "Contacts",
        link: "/contacts",
      },
    ],
  },
};

export const SidebarMenu2list: Story = {
  args: {
    menu: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "About",
        link: "/about",
      },
      {
        title: "Catalog",
        link: "/catalog",
        children: [
          {
            title: "Products",
            link: "/products",
          },
          {
            title: "Materials",
            link: "/materials",
          },
          {
            title: "Furniture",
            link: "/furniture",
          },
          {
            title: "Decor",
            link: "/decor",
          },
        ],
      },
      {
        title: "Contacts",
        link: "/contacts",
      },
    ],
  },
};
