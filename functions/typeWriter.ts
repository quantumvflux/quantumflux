export const typeWriter = (
  text: string,
  elementId: string,
  speed: number = 100
): void => {
  let i = 0;
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Elemento con id ${elementId} no encontrado.`);
    return;
  }

  const writeChar = () => {
    if (i < text.length && element) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(writeChar, speed); // Llama recursivamente con un delay
    }
  };

  writeChar();
};
