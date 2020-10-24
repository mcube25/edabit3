function spinAround(r) {
  return Math.floor(
    Math.abs(
      r.filter((x) => x === "left").length -
        r.filter((x) => x === "right").length
    ) / 4
  );
}
