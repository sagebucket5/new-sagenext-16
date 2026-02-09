import React, { useEffect, useState, useRef } from "react";
import Classes from "@styles/component/header.module.css";
import navbarList from "@lib/headerJson";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";

export default function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [selectedItem, setSelectedItem] = useState(navbarList[0].children[0]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const subMenuRefs = useRef([]);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const closeTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const subHandleMouseEnter = (item, index) => {
    setSelectedItem(item);
    if (!subMenuRefs.current[index]) return;
    // gsap.fromTo(
    //   subMenuRefs.current[index],
    //   { autoAlpha: 0, y: 10, visibility: "hidden" },
    //   { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out", visibility: "visible", }
    // );
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleMobileMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const handleSubItemClick = (index) => {
    setActiveSubIndex(activeSubIndex === index ? null : index);
  };

  const handleMobileMenu = () => { setMobileMenu(true); };
  const handleMobileMenuClose = () => { setMobileMenu(false); };

  return (
    <>
      <div className={`${Classes.headerMain} ${!isNavbarVisible ? Classes.hideNavbar : ""}`} id="smooth">
        <div className={Classes.navbarContainer}>
          <a href="/"> <Image src="https://sage-storage.sfo3.cdn.digitaloceanspaces.com/public/logo/logo.png" priority alt="sagenext logo" width={170} height={30} /> </a>
          <div className={Classes.menuContainer}>
            <ul className={Classes.navbarList}>
              {navbarList.map((topBarItem, index) => (
                <li key={index}
                  onMouseEnter={() => { clearTimeout(closeTimeout.current); setOpenMenuIndex(index); }}
                  onMouseLeave={() => { closeTimeout.current = setTimeout(() => { setOpenMenuIndex(null); }, 300); }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}> {topBarItem.name} {topBarItem.anim === true && (<IoIosArrowDown className={Classes.rotateIcon} />)} </span>
                  {topBarItem.children && (
                    <div className={`${Classes.megaMenu} ${openMenuIndex === index ? Classes.megaMenuOpen : Classes.megaMenuClosed} ${topBarItem.Sstyle ? Classes.megaMenuDiff : ""} ${topBarItem.name === "Hosting Solutions" ? `${Classes.sideMegaMenu} ${Classes.SidebarmegaMenu}` : ""}`}>
                      {/* sidebar */}
                      {topBarItem.name === "Hosting Solutions" && (
                        <div className={Classes.sidebar}>
                          <ul>
                            {topBarItem.children.map((sidebar, i) => (
                              <li key={i} ref={(el) => (subMenuRefs.current[i] = el)} style={{ display: 'flex', alignItems: "center", gap: '4px' }} className={`${Classes.sideList} ${selectedItem?.name === sidebar.name ? Classes.active : ""}`}
                                onMouseEnter={() => { setSelectedItem(sidebar), subHandleMouseEnter(sidebar, i) }}>
                                <img src={sidebar.icon} alt="sidebar" height={27} width={28} loading="lazy" />{" "} {sidebar.name} <IoIosArrowForward size={19} className={Classes.subArrow} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* center container */}
                      <div style={{ width: '62%' }}>
                        {topBarItem.name === "Hosting Solutions" && (
                          <div className={Classes.line}> {selectedItem?.name} <span></span> </div>
                        )}
                        <div
                          className={`${Classes.subMenu} ${topBarItem.name === "Hosting Solutions" ? selectedItem?.name === "QuickBooks Hosting" && Classes.SubMenuDimension : ""
                            } ${topBarItem.Sstyle ? Classes.subMenuDiff : ""} ${selectedItem?.name === "Others" ? Classes.otherSubMenuCenter : Classes.subChildrenMenu}`}
                        >
                          {topBarItem.name === "Hosting Solutions" &&
                            selectedItem &&
                            selectedItem.subChildren
                            ? selectedItem.subChildren.map((sub, i) => (
                              <Link href={sub.href} key={i}
                                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                                className={`${Classes.subItem
                                  } ${topBarItem.name === "Hosting Solutions" ? Classes.subItemCenter : ""
                                  } ${selectedItem?.name === "Tax Hosting" ? Classes.subChildrenItem : ""
                                  } ${selectedItem?.name === "Sage Applications" ? Classes.subChildrenItem : ""
                                  } ${selectedItem?.name == "Others" ? Classes.otherSubChildrenItem : ""
                                  } ${topBarItem.Sstyle ? Classes.subItemDiff : ""}`}
                              >
                                {/* <img src={sub.icon} height={35} width={35} loading="lazy" />{" "} */}
                                {sub.name}{" "} <IoIosArrowForward size={19} className={Classes.subArrow} />
                              </Link>
                            ))
                            : topBarItem.children.map((item, i) => (
                              <React.Fragment key={i}>
                                <Link
                                  href={item.href || ""}
                                  className={`${Classes.subItem} ${topBarItem.Sstyle ? Classes.subItemDiff : ""}`}>
                                  <Image src={item.icon} height={46} loading="lazy" width={45} alt="icon" />{" "}
                                  {item.name}{" "} <IoIosArrowForward size={19} className={Classes.subArrow} />
                                </Link>
                                {item.subChildren &&
                                  item.subChildren.map((subChild, j) => (
                                    <Link href={subChild.href} key={j} className={`${Classes.subItem} ${topBarItem.Sstyle ? Classes.subItemDiff : ""}`}>
                                      <Image src={subChild.icon} height={46} width={45} loading="lazy" alt="sb_icon" />{" "}
                                      {subChild.name}{" "}
                                      <IoIosArrowForward size={19} className={Classes.subArrow} />
                                    </Link>
                                  ))}
                              </React.Fragment>
                            ))}
                        </div>
                        {/* submenus footer */}
                        {topBarItem.name == "Hosting Solutions" &&
                          selectedItem &&
                          selectedItem.footer && (
                            <div className={Classes.subChildrenBottomBar}>
                              {selectedItem.footer.map((item, i) => (
                                <Link href={item.href} className={Classes.subMenuFooter} key={i}>
                                  <span> <img src={item.icon} alt={`item${i}`} className={`${Classes.bottomBarImg}`} height={54} width={54} loading="lazy" /> </span>
                                  <span> <h3>{item.title}</h3> <p>{item.lable}</p> </span>
                                </Link>
                              ))}
                            </div>
                          )}

                        {/* {topBarItem?.name === "Hosting Solutions" && selectedItem?.name == 'Others' && (
                            <div className={Classes.otherBottomBar}>
                                <Link href="/trial"  className="hover:color-[#0151c1]">
                                    <h3>Looking Forward to Moving to the Cloud?</h3>
                                </Link>
                            </div>
                        )} */}
                      </div>
                      {topBarItem?.name === "Hosting Solutions"
                        ? selectedItem?.banner && (
                          <a className="p-2" href={selectedItem.bannerHref}>
                            <img src={selectedItem.banner} className={`${Classes.bottomBarImg}`} height={386} width={296} alt="banner-image" loading="lazy" />
                          </a>
                        )
                        : topBarItem?.banner && (
                          <a className="p-2" href={topBarItem.bannerHref}>
                            <img src={topBarItem.banner} className={`${Classes.bottomBarImg}`} height={386} width={296} alt="banner-image-1" loading="lazy" />
                          </a>
                        )}
                      {/* bottombar */}
                      {topBarItem.footer && (
                        <div className={Classes.bottomBar}>
                          {topBarItem.footer.map((item, i) => (
                            <span key={i}>
                              <aside> <img src={item.icon} alt={`footerIcon${i}`} className={`${Classes.bottomBarImg}`} height={54} width={54} loading="lazy" /> </aside>
                              <aside> <h3>{item.title}</h3> <p>{item.lable}</p> </aside>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
              <li>
                <Link href="/app-directory">App Directory</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          <div className={Classes.navRight}>
            <Link
              href="tel:1-855-922-7243"
              className={Classes.Link}
            >
              <FiPhoneCall size={22} className="mt-1" /> 1-855-922-7243
            </Link>
            <Link href="/schedule-meeting" className={Classes.cta}>
              Schedule a call
            </Link>
          </div>

          <span className={Classes.openMobile} onClick={handleMobileMenu}>
            <HiOutlineMenuAlt3 />
          </span>
        </div>
      </div>

      {/* mobile Menu */}
      {mobileMenu && mobileMenu === true && (
        <div className={Classes.mobileHeader} id="mobileHeader">
          <div className={Classes.head}>
            <span></span>
            <span onClick={handleMobileMenuClose} className={Classes.button}>
              <RxCross2 size={23} color="white" />
            </span>
          </div>
          <div className={Classes.mobileBody}>
            <ul>
              {navbarList.map((topBarItem, index) => (
                <React.Fragment key={index}>
                  <li
                    onClick={() => {
                      handleMobileMenuClick(index);
                    }}
                  >
                    {topBarItem.name}{" "}
                    {topBarItem.anim === true && (
                      <IoIosArrowDown className={Classes.rotateIcon} />
                    )}
                  </li>
                  {activeIndex === index &&
                    topBarItem.children &&
                    topBarItem.children.map((item, i) => (
                      <ul key={i}>
                        <li className={Classes.subChildren}>
                          <Link
                            href={item.href || ""}
                            className={`${Classes.subItem} ${topBarItem.Sstyle ? Classes.subItemDiff : ""}`}
                            onClick={() => {
                              handleSubItemClick(i);
                              topBarItem.name !== "Hosting Solutions" &&
                                handleMobileMenuClose();
                            }}
                          >
                            <img src={item.icon} height={23} width={23} loading="lazy" />{" "}
                            {item.name}{" "} {topBarItem.name == "Hosting Solutions" && (<IoIosArrowDown size={19} />)}
                          </Link>
                          {activeSubIndex === i && (
                            <ul className={Classes.subChildrenMobile}>
                              {item.subChildren &&
                                item.subChildren.map((subChild, j) => (
                                  <li key={j} onClick={handleMobileMenuClose}>
                                    <Link
                                      href={subChild.href}
                                      className={`${Classes.subItem} ${topBarItem.Sstyle ? Classes.subItemDiff : ""}`}
                                    >
                                      {subChild.name}
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          )}
                        </li>
                      </ul>
                    ))}
                </React.Fragment>
              ))}
              <li onClick={handleMobileMenuClose}>
                <Link href="/app-directory" style={{ color: "black" }}>
                  App Directory
                </Link>
              </li>
              <li onClick={handleMobileMenuClose}>
                <Link href="/pricing" style={{ color: "black" }}>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
