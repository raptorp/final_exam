"use client"; // has to be a client side component because we are using a hook

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  //CLIENT SIDE NAVIGATION
  const router = useRouter(); //this is a use router hook

  const pathname = usePathname();
  console.log(pathname);

  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  console.log(q);

  const handleCLick = () => {
    console.log("clicked");
    router.push("/");
    // router.replace("/"); //replaces the current page in the browser history
    // router.refresh(); //reloads the current page
    // router.back(); //goes back to previous page in browser history
    // router.forward(); //goes forward to the next page in browser history
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click Here
      </Link>
      <button onClick={handleCLick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
