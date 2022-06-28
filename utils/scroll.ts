export const scrollToBottom = () => {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

export const scrollToAbout = (height: number) => {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight - height,
    behavior: "smooth",
  });
};
