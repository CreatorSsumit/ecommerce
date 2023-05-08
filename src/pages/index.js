import React from "react";
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="text-xs font-medium w-full">
        <div className="flex w-full justify-end gap-4">
          <span className="my-1">
            Hello ! {session?.user?.name} ❣ {session?.user?.email}
          </span>
          <img src={session?.user?.image} className=" rounded-full  w-7 h-7 " />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
