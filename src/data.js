const Oster = new Blender({
  brand: "Oster",
  speeds: [0, 1, 2, 3, 4],
});

const Corona = new Blender({
  brand: "Corona",
  speeds: [0, 1, 2, 3],
});

const Universal = new Blender({
  brand: "Universal",
  speeds: [0, 1, 2],
});

const brands = [Oster, Corona, Universal];

// export { Oster, Corona, Universal };
module.exports = { Oster, Corona, Universal };