"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useDropDownPosition } from "./use-dropdown-postion";
import { SubcategoryMenu } from "./subcategory-menu";
import { CustomCategory } from "../types";
import Link from "next/link";

interface Props {
  category: CustomCategory;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

export const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubcategoryHovered, setIsSubcategoryHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { getDropdownPosition } = useDropDownPosition(dropdownRef);
  const isElevated = isOpen || isSubcategoryHovered;
  const subcategories = category.subcategories ?? [];

  const onMouseEnter = () => {
    if (subcategories.length > 0) {
      setIsOpen(true);
    }
  };

  const onMouseLeave = () => {
    if (!isSubcategoryHovered) {
      setIsOpen(false);
    }
  };

  const dropdownPosition = getDropdownPosition();

  const toggleDropdown = () => {
    if (category.subcategories?.docs?.length) {
      setIsOpen(!isOpen);
    }
  };
  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      //onClick={toggleDropdown}
    >
      <div className="relative">
        <Button
          variant={"elevated"}
          className={cn(
            "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
            isActive && !isNavigationHovered && "bg-white border-primary",
            isElevated &&
              "bg-white border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-1 -translate-y-1 ",
          )}
        >
          <Link href={`/${category.slug === "all" ? "" : category.slug}`}>
            {category.name}
          </Link>
        </Button>
        {subcategories.length > 0 && (
          <div
            className={cn(
              "opacity-0 absolute -bottom-3 w-0 h-0 border-l-10 border-r-10 border-l-transparent border-r-transparent border-b-10 border-b-black left-1/2 -translate-x-1/2",
              isOpen && "opacity-100",
            )}
          />
        )}
      </div>
      <SubcategoryMenu
        category={category}
        isOpen={isOpen}
        position={dropdownPosition}
        onMouseEnter={() => setIsSubcategoryHovered(true)}
        onMouseLeave={() => {
          setIsSubcategoryHovered(false);
          if (!dropdownRef.current?.matches(":hover")) {
            setIsOpen(false);
          }
        }}
      />
    </div>
  );
};
