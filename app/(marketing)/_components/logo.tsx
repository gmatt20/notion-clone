import { Poppins } from "next/font/google";
import { NotebookPen } from "lucide-react";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <NotebookPen height={40} width={40}/>
    </div>
  );
};

export default Logo;
