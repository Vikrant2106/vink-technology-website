import React from "react";
import { useRouter } from "next/router";
import SendITQuery from "../../components/SendITDevelopmentQuery/SendITQuery";

export default function ServiceSlug() {
  const router = useRouter();
  return (
    <div>
      <SendITQuery slug={router.query.slug} />
    </div>
  );
}
