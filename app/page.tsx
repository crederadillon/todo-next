import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>hello world</div>
      <Link href={"/todos"}>
        <Button>Go to todos</Button>
      </Link>
    </div>
  );
}
