"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import News from "./News";

export default function RightSideBar() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/${input}`);
  };
  return (
    <>
      <div className="sticky top-0 bg-white py-2">
        <form onSubmit={handleSubmit}>
          <input
            className="bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2 outline-none"
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
      <News/>
    </>
  );
}
