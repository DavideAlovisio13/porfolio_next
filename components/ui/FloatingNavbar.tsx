"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "../../utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [navDimensions, setNavDimensions] = useState({ width: 0, height: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (navRef.current) {
        const { width, height } = navRef.current.getBoundingClientRect();
        setNavDimensions({ width, height });
      }
    };

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (navRef.current) resizeObserver.observe(navRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={navRef} // Assegna il ref alla navbar
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(25, 28, 33, 0.8)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {/* Passa le dimensioni della navbar al componente Vortex */}
        {navItems.map((navItem: any, idx: number) => {
          if (navItem.link === "") {
            return (
              <a
                key={`link=${idx}`}
                href="/"
                className="relative items-center flex space-x-1 text-white hover:text-neutral-500"
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="text-sm !cursor-pointer">{navItem.name}</span>
              </a>
            );
          } else {
            return (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className="relative items-center flex space-x-1 text-white hover:text-neutral-500"
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="text-sm !cursor-pointer">{navItem.name}</span>
              </Link>
            );
          }
        })}
      </motion.div>
    </AnimatePresence>
  );
};
