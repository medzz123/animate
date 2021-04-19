export const htmlTemplate = ({
  currentAnimationName,
  css,
  parsed,
  nodes,
  markup,
}) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
  
      <title>${currentAnimationName}</title>
      <meta name="description" content="Animating ${currentAnimationName}" />
  
      <style>
        body,
        html {
          margin: 0;
          padding: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }
  
        * {
          box-sizing: border-box;
        }

        ${css}
        ${parsed}
        ${nodes} { animation-play-state: running; }
      </style>
    </head>
  
    <body>${markup}</body>
  </html>`;
};
