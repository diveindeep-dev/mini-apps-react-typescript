export const isFull = (prev: string) => {
  const onlyNumber = prev.replace(/[^0-9]/g, '');

  if (onlyNumber.length >= 9) {
    return true;
  } else {
    return false;
  }
};
