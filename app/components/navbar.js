"use client";
import Image from "next/image";
import styles from "../styling/navbar.module.css";
import { useSize } from "../SizeContext";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { increase, decrease } = useSize();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <div className={styles.navbar}>
        <a href="/"><h1 className={styles.navbarTitle}>Closet Clues</h1></a>
        <div className={styles.navbarLinks}>
          <a href="/">Services</a>
          <a href="/editorial">Editorial</a>
          <a href="/">Commercial</a>
          <a href="/information">Information</a>

          <div className={styles.sizeButtons}>
            <p>Size</p>

            <span className={styles.plus} onClick={increase}>
              [+]
            </span>

            <span>/</span>

            <span className={styles.minus} onClick={decrease}>
              [--]
            </span>
          </div>
        </div>
      </div>

      <div className={` ${styles.navbarContainerMobile} ${open ? styles.openText : ''}`}>
        <a href="/"><h1 className={`${styles.navbarTitle} ${open ? styles.openText : ''}`}>Closet Clues</h1></a>

        {/* Use a button for accessibility */}
        <button
          type="button"
          className={`${styles.menuButton} ${open ? styles.openText : ''}`}
          aria-expanded={open}
          aria-controls="mobile-nav-links"
          onClick={() => setOpen(prev => !prev)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      <div className={styles.navbarMobile}>
        {/* Either show/hide with a class or inline style; id used for aria-controls */}
        <div
          id="mobile-nav-links"
          className={`${styles.navbarLinksMobile} ${open ? styles.open : ''}`}
        >
          <div className={styles.menuImage}>
            <Image
              src="/menu.png"
              alt=""
              className={styles.image}
              width={800}
              height={1200}
              loading="eager"
            ></Image>
          </div>
          <div className={styles.linksContainer}>
            <a href="/">Services</a>
            <a href="/editorial">Editorial</a>
            <a href="/">Commercial</a>
            <a href="/information">Information</a>
          </div>

          {/* <div className={styles.sizeButtons}>
            <p>Size</p>

            <span className={styles.plus} onClick={increase} role="button" tabIndex={0}>
              [+]
            </span>

            <span>/</span>

            <span className={styles.minus} onClick={decrease} role="button" tabIndex={0}>
              [--]
            </span>
          </div> */}

        </div>
      </div >
    </>
  );
}
