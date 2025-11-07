"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import css from "./SideBarMenu.module.css";

type SideBarItem = {
  link: string;
  title: string;
  children?: {
    link: string;
    title: string;
  }[];
};

interface SideBarMenuProps {
  menu: SideBarItem[];
}

export const SideBarMenu = ({ menu }: SideBarMenuProps) => {
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutSideBar = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(`.${css.sideBar}`) &&
        !target.closest(`.${css.arrowSideBar}`)
      ) {
        setIsOpenSideBar(false);
      }
    };

    document.addEventListener("click", handleClickOutSideBar);

    return () => {
      document.removeEventListener("click", handleClickOutSideBar);
    };
  }, []);

  const handleOpenList = () => {
    setIsOpenList(!isOpenList);
  };

  const handleOpenSidebar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  return (
    <div className={css.wrapper}>
      <aside className={`${css.sideBar} ${isOpenSideBar ? css.isOpen : ""}`}>
        {!isOpenSideBar && (
          <button className={css.arrowSideBar} onClick={handleOpenSidebar}>
            🢀
          </button>
        )}
        <p className={css.menuTitle}>Menu</p>
        <ul className={css.mainList}>
          {menu.map((element) => {
            return (
              <li key={element.link}>
                {!element.children && (
                  <Link href={element.link} className={css.link}>
                    {element.title}
                  </Link>
                )}

                {element.children && (
                  <>
                    <button onClick={handleOpenList} className={css.openBtn}>
                      {element.title}{" "}
                      <span
                        className={!isOpenList ? css.arrowDown : css.arrowUp}
                      >
                        {!isOpenList ? "🢃" : "🢁"}
                      </span>
                    </button>
                    {isOpenList && (
                      <ul className={css.secondList}>
                        {element.children.map((childElement) => {
                          return (
                            <li key={childElement.link}>
                              <Link
                                href={`${element.link}/${childElement.link}`}
                                className={css.link}
                              >
                                {childElement.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};
