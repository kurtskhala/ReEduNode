// 2) Test if a string is a valid date in DD/MM/YYYY format

function isStringValidDate(str) {
  if (!/^([0-2][1-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/.test(str)) return false;
  const arr = str.split("/");
  const date = new Date(
    parseInt(arr[2]),
    parseInt(arr[1]) - 1,
    parseInt(arr[0])
  );
  return (
    date.getFullYear() === parseInt(arr[2]) &&
    date.getMonth() === parseInt(arr[1]) - 1 &&
    date.getDate() === parseInt(arr[0])
  );
}
