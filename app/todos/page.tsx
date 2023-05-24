import { supabase } from "@/lib/supabaseClient";
import React from "react";

export const revalidate = 0;

const Page = async () => {
  let { data: todos } = await supabase.from("todo").select();

  return <div>{JSON.stringify(todos, null, 2)}</div>;
};

export default Page;
