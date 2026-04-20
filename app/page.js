"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import menuData from "@/data/menu";

export default function Home() {
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
        <Link
          href="/menu"
          className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 
          bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 
          text-black font-light tracking-wide rounded-full 
          shadow-lg shadow-amber-500/20 hover:scale-105 transition inline-block text-center"
        >
          Explore Menu →
        </Link>

      </div>
    </div>
  );
}