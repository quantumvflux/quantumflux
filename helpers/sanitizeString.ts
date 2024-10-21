export const sanitizeString = (input: string): string => {
  return decodeURIComponent(input).replace(/\s+/g, "");
};
