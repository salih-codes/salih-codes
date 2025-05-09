"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    // "Blog",
    // "Projects",
    // "Resources",
    "Contact",
  ];
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="sticky top-0 z-50 w-full flex justify-center px-4 py-2"
    >
      <div className="w-full md:max-w-[50%] bg-white/30 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:bg-white/40">
        <nav className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            <Link href="/">Salih</Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden p-2"
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="w-6 h-6 relative"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{
                  transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </svg>
            </motion.div>
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((item, index) => {
              const path = `/${item.toLowerCase()}`;
              const isActive = pathname === path;
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                >
                  <Button
                    variant={
                      isActive || item === "Contact" ? "default" : "ghost"
                    }
                    asChild
                  >
                    <Link href={path}>{item}</Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {links.map((item, index) => {
                  const path = `/${item.toLowerCase()}`;
                  const isActive = pathname === path;
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        asChild
                        className={cn(
                          "w-full justify-start",
                          item === "Contact" && "w-max bg-primary",
                        )}
                      >
                        <Link href={path} onClick={() => setIsMenuOpen(false)}>
                          {item}
                        </Link>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
