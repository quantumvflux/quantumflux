export interface IDialog {
  text: string;
  options?: [string, string];
}

export const dialogScript: IDialog[] = [
  {
    text: "howdy howwwww",
  },
  {
    text: "my kitten is missing and i need a little help",
  },
  {
    text: "i know we barely know each other but please...",
  },
  {
    text: "would you? it must be around here somewhere",
    options: ["yes!", "no"],
  },
];

export const completedDialogScript: IDialog[] = [
  {
    text: "thank you for helping me",
  },
];
