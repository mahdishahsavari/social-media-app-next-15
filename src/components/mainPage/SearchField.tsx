"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

const SearchField = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.q as HTMLInputElement).value.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };
  return (
    <form onSubmit={handleSubmit} action="/search" method="GET">
      <div className="relative">
        <Input name="q" placeholder="Search..." className="pe-10" />
        <button
          onClick={() => handleSubmit}
          className="flex items-center justify-center"
        >
          <SearchIcon className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground" />
        </button>
      </div>
    </form>
  );
};

export default SearchField;
