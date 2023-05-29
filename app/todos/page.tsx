import { supabase } from "@/lib/supabaseClient";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-dynamic";

const Page = async () => {
  let { data: todos, error } = await supabase
    .from("todos")
    .select("*")
    .eq("id", 2);

  if (error) throw new Error(error.message);

  return (
    <div>
      <Link href={"/"}>
        <Button variant={"link"}>Back to home page</Button>
      </Link>
      <div>{JSON.stringify(todos, null, 2)}</div>
    </div>
  );
};

export default Page;
