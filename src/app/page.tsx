"use client";
import { useRouter } from "next/navigation";
import { Spinner } from "@chakra-ui/react";

import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/post-list");
  }, []);

  return <Spinner size="xl" marginTop="50px" />;
}

