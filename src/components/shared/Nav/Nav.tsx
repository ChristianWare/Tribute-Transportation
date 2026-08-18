"use client";

import Link from "next/link";
import styles from "./Nav.module.css";
import Button from "../Button/Button";
import { useEffect, useState, MouseEvent, useRef } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Logo from "../Logo/Logo";
import LayoutWrapper from "../LayoutWrapper";

export interface NavProps {
  navItemColor?: string;
  color?: string;
  hamburgerColor?: string;
  background?: "white" | "cream" | "accent";
}

export default function Nav({
  color = "",
  hamburgerColor = "",
  background,
}: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1368);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const body = document.body;
    body.style.overflow =
      window.innerWidth <= 1368 && isOpen ? "hidden" : "auto";
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  const handleHamburgerClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    toggleMenu();
  };

  const handleServicesMouseEnter = () => {
    if (isMobile) return;
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    if (isMobile) return;
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const setProgress = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p =
        max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
      if (navRef.current)
        navRef.current.style.setProperty("--progress", `${p}%`);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setProgress();
    };

    const optimizedHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    setProgress();
    setScrolled(window.scrollY > 0);

    window.addEventListener("scroll", optimizedHandleScroll);
    window.addEventListener("resize", optimizedHandleScroll);
    return () => {
      window.removeEventListener("scroll", optimizedHandleScroll);
      window.removeEventListener("resize", optimizedHandleScroll);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const items = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/services", hasDropdown: true },
    { text: "Fleet", href: "/fleet" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact", isLast: true },
  ];

  // Permanent light mode: <Nav color='white' /> keeps the bar light from
  // the start and stays light through scroll (never flips to the white
  // background / dark-text scrolled state).
  const light = color === "white";

  const shouldBlend = !scrolled && !isOpen && !background;

  const bgClass =
    background === "white"
      ? styles.bgWhite
      : background === "cream"
        ? styles.bgCream
        : background === "accent"
          ? styles.bgAccent
          : "";

  const forceSolid = Boolean(background);

  // When the bar is on a light surface (scrolled, mobile menu open, or a
  // forced light background) the buttons flip to their navy variants to
  // match the nav items and logo. Transparent top = white variants.
  // In permanent light mode the bar never becomes a light surface, so the
  // buttons keep their white variants throughout.
  const onLightBar = !light && (scrolled || isOpen || Boolean(background));
  const phoneBtnType = onLightBar ? "navyText" : "navWhiteText";
  const reserveBtnType = onLightBar ? "navy" : "navWhite";

  return (
    <LayoutWrapper paddingNone='paddingNone'>
      <header
        className={`${styles.header} ${
          scrolled ? styles.scrolled : styles.transparent
        } ${isOpen ? styles.open : ""} ${bgClass} ${
          forceSolid ? styles.forceSolid : ""
        } ${light ? styles.forceLight : ""}`}
        ref={navRef}
      >
        <nav className={styles.navbar}>
          <div
            className={
              isOpen ? `${styles.navItems} ${styles.active}` : styles.navItems
            }
          >
            {items.map((item) => {
              const active = isActive(item.href);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.href}
                    className={styles.servicesWrapper}
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`${styles.navItem} ${styles[color]} ${
                        active ? styles.navItemActive : ""
                      } ${shouldBlend ? styles.blend : ""}`}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.text}
                    </Link>

                    {servicesOpen && !isMobile && (
                      <div
                        className={styles.servicesDropdown}
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                      >
                        <div className={styles.servicesDropdownFooter}>
                          <Link
                            href='/services'
                            className={styles.servicesDropdownAll}
                            onClick={() => setServicesOpen(false)}
                          >
                            View all services →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navItem} ${styles[color]} ${
                    active ? styles.navItemActive : ""
                  } ${shouldBlend ? styles.blend : ""} ${item.isLast ? styles.navItemLast : ""}`}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                >
                  {item.text}
                </Link>
              );
            })}

            <div className={styles.btnContainerii}>
              <Button href='/book' text='Reserve your Ride' btnType='navBlue' />
            </div>
          </div>

          <div
            className={`${styles.logoContainer} ${
              shouldBlend ? styles.blend : ""
            }`}
          >
            <Logo />
          </div>

          {isOpen &&
            createPortal(
              <div className={styles.overlay} onClick={closeMenu} />,
              document.body,
            )}

          {/* Desktop right side */}
          <div className={styles.btnContainer}>
            <div className={styles.btnContainer}>
              <Button
                href='tel:+15206618289'
                text='(520) 661-8289'
                btnType={phoneBtnType}
              />
            </div>

            <Button
              href='/book'
              text='Reserve your Ride'
              btnType={reserveBtnType}
            />
          </div>

          <span
            className={
              isOpen ? `${styles.hamburger} ${styles.active}` : styles.hamburger
            }
            onClick={handleHamburgerClick}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              handleHamburgerClick(e as any)
            }
            aria-expanded={isOpen}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            role='button'
            tabIndex={0}
          >
            <span
              aria-hidden='true'
              className={`${styles.whiteBar} ${styles[hamburgerColor]} ${
                shouldBlend ? styles.blend : ""
              }`}
            ></span>
            <span
              aria-hidden='true'
              className={`${styles.whiteBar} ${styles[hamburgerColor]} ${
                shouldBlend ? styles.blend : ""
              }`}
            ></span>
            <span
              aria-hidden='true'
              className={`${styles.whiteBar} ${styles[hamburgerColor]} ${
                shouldBlend ? styles.blend : ""
              }`}
            ></span>
          </span>
        </nav>
      </header>
    </LayoutWrapper>
  );
}
