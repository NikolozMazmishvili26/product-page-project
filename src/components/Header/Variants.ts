export const backdropVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.01,
      when: "beforeChildren",
    },
  },
};

export const menuVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};
