// function for finding less count that means best product selling
export function bestSelling(best) {
  if (best) {
    const bestSellingProducts = best.filter(
      (product) => product.rating.count < 140
    );
    return bestSellingProducts;
  } else {
    return [];
  }
}

// function for reduce string length
export function textGenerator(text) {
  if (text.length) {
    const textTitle = text.split(" ").slice(0, 6).join(" ");
    return textTitle;
  } else {
    return "No Name";
  }
}
