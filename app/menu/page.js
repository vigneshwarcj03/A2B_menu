"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import menuData from "@/data/menu";

export default function MenuPage() {
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

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-4 py-12">

      <div className="max-w-6xl mx-auto space-y-14">

        {/* HEADER */}
        <div className="text-center space-y-6">

          {/* LOGO (premium ring style) */}
          <div className="flex justify-center">
            <div className="p-[1px] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
              <div className="bg-[#0a0a0a] px-5 py-3 rounded-full">
                <Image
                  src="/logo.png"
                  alt="Restaurant Logo"
                  width={120}
                  height={80}
                  className="opacity-90"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* TITLE */}
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-[0.2em] text-white">
            THE MENU
          </h1>

          {/* Divider */}
          <div className="flex justify-center items-center gap-3">
            <div className="w-10 h-[1px] bg-yellow-500/50"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-10 h-[1px] bg-yellow-500/50"></div>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search dishes..."
            className="mt-4 px-5 py-3 w-full max-w-md mx-auto block bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* GRID MENU */}
        <div className="grid md:grid-cols-2 gap-10">

          {filteredMenu.map((section, index) => (
            <div
              key={index}
              className="relative border border-white/10 bg-[#111] p-6 rounded-sm"
            >

              {/* Inner subtle border (premium print feel) */}
              <div className="absolute inset-2 border border-white/5 pointer-events-none"></div>

              {/* Section Title */}
              <div className="mb-6 text-center">
                <h2 className="text-lg font-semibold tracking-[0.2em] text-yellow-400 uppercase">
                  {section.category}
                </h2>
                <div className="w-12 h-[2px] bg-yellow-400 mx-auto mt-2"></div>
              </div>

              {/* Featured Image */}
              {section.items[0]?.image && (
                <div className="mb-6 relative overflow-hidden rounded-md">
                  <img
                    src={section.items[0].image}
                    alt=""
                    className="w-full h-56 object-cover"
                  />

                  {/* overlay for premium feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              )}

              {/* Items */}
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-start gap-4 text-sm"
                  >

                    {/* LEFT */}
                    <div className="flex flex-col">
                      <span className="font-medium tracking-wide text-white">
                        {item.name}
                      </span>

                      {item.description && (
                        <span className="text-gray-500 text-xs mt-1">
                          {item.description}
                        </span>
                      )}
                    </div>

                    {/* PRICE */}
                    <span className="text-yellow-400 font-semibold tracking-wide">
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