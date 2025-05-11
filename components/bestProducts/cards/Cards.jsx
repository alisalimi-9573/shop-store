import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionAreaCard({ title, price, rate, img }) {
  return (
    <Card
      sx={{
        maxWidth: 271,
        // height: 550,
        border: "none",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ width: 271, height: 350, objectFit: "contain" }}
          component="img"
          height="10"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            <div>{price} $</div>
            <div>rate : {rate}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
