import { useTransition } from "react";
// import { useRouter } from "next/navigation";
// import { Input } from "@/presentation/components/input/input";

import { Search } from "lucide-react";
import { Spinner } from "../../../common/icons/spinner";
import { Input } from "../input/input";

export function SearchInput() {
  // const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function searchAction(formData: FormData) {
    let value = formData.get("q") as string;
    // let params = new URLSearchParams({ q: value });

    startTransition(() => {
      // router.replace(`/?${params.toString()}`);
    });
  }

  return (
    <form className="relative ml-auto flex-1 md:grow-0">
      <Search className="absolute left-2.5 top-[.75rem] h-4 w-4 text-muted-foreground" />
      <Input
        name="q"
        type="search"
        placeholder="Pesquisar..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px] focus:outline-none"
      />
      {isPending && <Spinner />}
    </form>
  );
}
