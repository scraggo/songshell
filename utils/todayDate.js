const todayDate = () => {
  const today = new Date();
  return today.toDateString();
};

module.exports = todayDate;
