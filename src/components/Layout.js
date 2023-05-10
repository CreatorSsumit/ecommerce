"use client";

import React, { Children } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navigation from "@/components/Navigation";

function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <div className="bg-gray-200 w-screen h-screen  flex items-center ">
          <div className="w-full text-center ">
            <button
              onClick={async () => {
                await signIn("google");
              }}
              className="bg-white p-2 px-7 rounded-md"
            >
              Login with google
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-slate-900 h-full flex">
        <Navigation />
        <div className="bg-white w-full min-h-screen  rounded-md m-3 p-3 ">
          {children}
        </div>
        {/* <button onClick={signOut}>logout</button>{" "} */}
      </div>
    </>
  );
}

export default Layout;
