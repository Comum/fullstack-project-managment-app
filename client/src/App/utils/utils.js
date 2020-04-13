const padNumber = (num) => num.toString().padStart(2, "0");

const getFormatedDate = (date) => {
  if (!date) {
    return null;
  }

  const newDate = date ? new Date(date) : new Date();
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();

  return `${year}-${padNumber(month)}-${padNumber(day)} ${padNumber(
    hours
  )}:${padNumber(minutes)}:${padNumber(seconds)}`;
};

export { getFormatedDate };
