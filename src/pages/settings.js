import Layout from "@/components/Layout";
import { signOut } from "next-auth/react";
import React from "react";

function Settings() {
  return (
    <Layout>
      <div onClick={() => signOut()}>logout</div>
    </Layout>
  );
}

export default Settings;
