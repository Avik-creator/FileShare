import Share from "@/components/Share";
import { SocketProvider } from "@/context/SocketProvider";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <Suspense>
      <SocketProvider>
        <Share />
        <Toaster />
      </SocketProvider>
    </Suspense>
  );
};

export default page;
