import React from "react";
import Button from "@/components/button/Button";
import Link from "next/link";
import Nvabar from "@/components/nav/Nvabar";

export default function NotFound() {
  const btnText = <Link href="/">Back To Home Page</Link>;
  return (
    <>
      <Nvabar />
      <section className="not-found">
        <p className="not-found-text">404 Not Found</p>
        <Button type={"button"} btnText={btnText} />
      </section>
    </>
  );
}
