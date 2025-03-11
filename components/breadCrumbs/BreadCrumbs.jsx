import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { textGenerator } from "../../helper/helper";

export default function BreadCrumbs({ product }) {
  const router = useRouter();
  const { pathname } = router;

  const pathNames = pathname.split("/").filter((x) => x);

  const handleNavigation = (e) => {
    router.push(e);
  };

  return (
    <div className="breadcrumbs">
      <Breadcrumbs sx={{ fontSize: 10 }} aria-label="breadcrumb">
        <Link
          onClick={(e) => handleNavigation}
          underline="hover"
          color="inherit"
          href="/"
        >
          home
        </Link>
        {pathNames.map((path, index) => {
          const to = `/${pathNames.slice(0, index + 1).join("/")}`;
          console.log("toooo", to);
          const isLastPath = index === pathNames.length - 1;

          return isLastPath ? (
            <Typography sx={{ fontSize: 10 }} color="text.primary" key={index}>
              {path === "[slug]" ? textGenerator(product.title) : path}
            </Typography>
          ) : (
            <Link
              underline="hover"
              color="inherit"
              onClick={() => handleNavigation(to)}
              style={{ cursor: "pointer" }}
              key={index}
            >
              {path === "[slug]" ? textGenerator(product.title) : path}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
