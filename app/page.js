"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import menuData from "@/data/menu";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMenu = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) return menuData;

    return menuData
      .map((category) => {
        const filteredItems = category.items.filter((item) =>
          item.name.toLowerCase().includes(term)
        );

        if (filteredItems.length === 0) return null;

        return {
          ...category,
          items: filteredItems,
        };
      })
      .filter((section) => section !== null);
  }, [searchTerm]);

  /* ================= MENU PAGE ================= */
  if (showMenu) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#070707] via-[#0d0d0d] to-black text-white px-4 sm:px-6 py-10 sm:py-14 font-sans">

        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

          {/* HEADER */}
          <div className="text-center space-y-4 sm:space-y-5">

            {/* LOGO */}
            <div className="flex justify-center">
              <Image src="/logo.png" alt="Logo" width={80} height={55} style={{ width: "auto", height: "auto" }} />
            </div>

            {/* TITLE */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.25em] sm:tracking-[0.35em] uppercase">
              The Menu
            </h1>

            <div className="w-20 sm:w-28 h-[1px] mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search dishes..."
              className="mt-6 sm:mt-8 px-4 sm:px-6 py-3 sm:py-4 w-full max-w-md mx-auto block 
              bg-white/5 backdrop-blur-xl border border-white/10 
              rounded-xl sm:rounded-2xl text-sm
              focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* BACK */}
            <button
              onClick={() => setShowMenu(false)}
              className="text-white/40 hover:text-amber-300 text-xs sm:text-sm tracking-wide transition"
            >
              ← Back to Home
            </button>
          </div>

          {/* GRID MENU */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

            {filteredMenu.map((section, index) => (
              <div
                key={index}
                className="relative group rounded-2xl sm:rounded-3xl overflow-hidden 
                border border-white/10 
                bg-gradient-to-b from-white/5 to-white/[0.02]
                backdrop-blur-2xl p-5 sm:p-7 transition hover:scale-[1.01]"
              >

                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-amber-400/5 blur-2xl"></div>

                {/* CATEGORY */}
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-amber-300/90 uppercase font-light">
                    {section.category}
                  </h2>
                  <div className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-amber-300 to-transparent mt-2 sm:mt-3"></div>
                </div>

                {/* FEATURE IMAGE */}
                {section.items[0]?.image && (
                  <div className="mb-5 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                      src={section.items[0].image}
                      alt=""
                      className="w-full h-62 sm:h-72 object-cover rounded-xl sm:rounded-2xl 
                      group-hover:scale-105 transition duration-700 
                      contrast-110 brightness-90"
                    />
                  </div>
                )}

                {/* ITEMS */}
                <div className="space-y-1">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-start gap-4 py-3 border-b border-white/5 last:border-0"
                    >

                      <div>
                        <h3 className="font-light text-sm sm:text-base text-white group-hover:text-amber-300 transition">
                          {item.name}
                        </h3>

                        {item.description && (
                          <p className="text-white/40 text-[11px] sm:text-xs mt-1 max-w-[200px] sm:max-w-[260px] leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>

                      {/* PRICE */}
                      <span className="text-amber-300 font-light text-xs sm:text-sm tracking-wider whitespace-nowrap">
                        ₹{item.price}
                      </span>

                    </div>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    );
  }

  /* ================= HOME PAGE ================= */
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      {/* Background */}
      <Image
        src="/food-hero.jfif"
        alt="Food"
        fill
        priority
        className="object-cover opacity-50 scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/95"></div>

      {/* Glow */}
      <div className="absolute top-16 left-6 sm:top-20 sm:left-10 w-52 sm:w-72 h-52 sm:h-72 bg-amber-500/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-6 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 bg-orange-400/10 blur-3xl"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-5 sm:px-6 max-w-3xl space-y-6 sm:space-y-8">

        {/* LOGO */}
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Logo" width={90} height={70} style={{ width: "auto", height: "auto" }} />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-widest">
          A2B RESTAURANT
        </h1>

        {/* TAGLINE */}
        <p className="text-white/60 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
          Experience a refined journey of South Indian cuisine — where tradition meets elegance.
        </p>

        {/* IMAGE SECTION */}
        <div className="flex flex-col items-center justify-center space-y-5 sm:space-y-6 pt-2">

          {/* DIVIDER */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(255,200,0,0.8)]"></div>
            <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>

          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute inset-0 bg-amber-400/10 blur-3xl rounded-full scale-110"></div>

            <Image
              src="/main.png"
              alt="Dish"
              width={220}
              height={220}
              className="sm:w-[260px] sm:h-[260px] relative drop-shadow-2xl group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* DIVIDER */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(255,200,0,0.8)]"></div>
            <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>

        </div>

        {/* CTA */}
        <button
          onClick={() => setShowMenu(true)}
          className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 
          bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 
          text-black font-light tracking-wide rounded-full 
          shadow-lg shadow-amber-500/20 hover:scale-105 transition"
        >
          Explore Menu →
        </button>

      </div>
    </div>
  );
}