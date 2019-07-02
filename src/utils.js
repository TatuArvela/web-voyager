const randomString = stringArray => {
  return stringArray[Math.floor(Math.random() * stringArray.length)];
};

export { randomString };
