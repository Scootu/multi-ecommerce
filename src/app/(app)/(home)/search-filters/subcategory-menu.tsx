import { Category } from "@/payload-types";
import Link from "next/link";
import { CustomCategory } from "../types";

interface Props {
  category: CustomCategory;
  isOpen: boolean;
  position: { top: number; left: number };
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const SubcategoryMenu = ({
  category,
  isOpen,
  position,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  const subcategories = category.subcategories;

  if (!isOpen || !subcategories || subcategories.length === 0) {
    return null;
  }

  const backgroundColor = category.color || "#f5f5f5";
  return (
    <div
      className="fixed z-100"
      style={{
        top: position.top,
        left: position.left,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Invisible bridge to maintain hover */}
      <div className="h-3 w-60"></div>
      <div
        style={{ backgroundColor }}
        className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-0.5 -translate-y-0.5"
      >
        <div>
          {subcategories.map((subcategory: Category, index: number) => (
            <Link
              key={
                subcategory.id ??
                subcategory.slug ??
                `${subcategory.name}-${index}`
              }
              href={`/${category.slug}/${subcategory.slug}`}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between 
            items-center underline font-medium"
            >
              {subcategory.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
