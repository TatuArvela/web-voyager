export const randomString = (stringArray: string[]) => {
  return stringArray[Math.floor(Math.random() * stringArray.length)];
};
