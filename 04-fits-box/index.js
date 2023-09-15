function fitsInOneBox(boxes) {
  const sortBoxes = boxes.sort((a, b) => {
    const sumaA = a.l + a.w + a.h;
    const sumaB = b.l + b.w + b.h;
    return sumaA - sumaB;
  });

  return sortBoxes.every(({ l, w, h }, index) => {
    const nextBox = sortBoxes[index + 1];

    return !nextBox || (l < nextBox.l && (w < nextBox.w) & (h < nextBox.h));
  });
}
