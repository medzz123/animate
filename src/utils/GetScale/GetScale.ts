export const getScale = (w: number, h: number) => {
  const cw = document?.getElementById('container')?.clientWidth;
  const ch = document?.getElementById('container')?.clientHeight;
  const ratio = h / w;

  const x = (cw * ratio) / w;
  const y = (ch * ratio) / h;

  return (x > y ? x : y) * 1.5;
};
