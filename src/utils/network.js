// naive implementation of network requests just to demostrate reusability

import logger from './logger';

const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

const request = async (path, options = {}) => {
  try {
    if (options.mockData) {
      await delay(1500);
      return options.mockData;
    }
    const response = await fetch(`${process.env.API_URL}/${path}`, options);
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

export default request;
