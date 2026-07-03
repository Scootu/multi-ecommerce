import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";

import configPromise from "@payload-config";
import { getPayload } from "payload";
import { CustomCategory } from "./types";
import { Category } from "@/payload-types";

export const dynamic = "force-dynamic";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });
  const data = await payload.find({
    collection: "categories" as any,
    depth: 1,
    where: {
      parent: {
        exists: false,
      },
    },
    sort:"name"
    
  });

  const formattedData: CustomCategory[] = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? [])
      .filter((subdoc: string | Category): subdoc is Category => typeof subdoc !== "string")
      .map((subdoc: Category) => ({
        ...subdoc,
        subcategories: undefined,
      })),
  }));
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
