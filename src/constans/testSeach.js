const checkSeach = (item, keyword, arr) => {
  for (let index = 0; index < arr.length; index++) {
    if (item[arr[index]].toLowerCase().indexOf(keyword) !== -1) {
      return true;
    }
  }
};

export default (data, keyword, ...arr) => {
  if (!data) return;
  const newdata = data.filter((item) => {
    return checkSeach(item, keyword, arr);
  });
  return newdata;
};