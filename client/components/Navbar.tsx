import React from "react";
import ThemeBtn from "./ThemeButton";
import { GithubIcon } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import fileTransfer from "@/app/fileTransfer.png";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex border font-extrabold text-[24px] px-3 py-1 m-2 rounded-lg w-full items-center justify-between">
        <div className="flex justify-center items-center">
          <Image
            className="h-12 w-12 p-0 rotate-90 scale-0 hidden dark:flex dark:scale-100"
            src={fileTransfer}
            alt="fileShare"
          />
          <Image
            className="h-12 w-12 p-0 rotate-90 scale-100 flex dark:scale-0 dark:hidden"
            src={fileTransfer}
            alt="fileShare"
          />
          File Transfer
        </div>
        <div className="flex gap-x-2">
          <div>
            <Button type="button" className="p-3" variant="ghost">
              <Link href={"#"}>
                <GithubIcon size={18} />
              </Link>
            </Button>
          </div>
          <div>
            <ThemeBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
