// naive implementation of logger just to demostrate reusability

const error = (value) => {
  console.error(value);
};

const warning = (value) => {
  console.warning(value);
};

const info = (value) => {
  console.log(value);
};

export default {
  error,
  warning,
  info
};
