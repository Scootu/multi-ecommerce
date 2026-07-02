"use client";

import Link from "next/link";
import { BookmarkCheckIcon, ListFilterIcon, SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  disabled?: boolean;
  onCategoriesViewAllClick?: () => void;
}

export const SearchInput = ({ disabled, onCategoriesViewAllClick }: Props) => {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input className="pl-8" placeholder="Search products" disabled={disabled} />
      </div>

      {/* Categories view all button */}
      <Button
        variant="elevated"
        className="size-12 shrink-0 flex lg:hidden"
        onClick={onCategoriesViewAllClick}
      >
        <ListFilterIcon />
      </Button>

      {/* Library button */}
      <Button asChild variant="elevated">
        <Link href="/library">
          <BookmarkCheckIcon />
          Library
        </Link>
      </Button>
    </div>
  );
};
