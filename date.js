const date = document.getElementById("date");

const getDate = () => {
  const newDate = new Date();
  const year = String(newDate.getFullYear());
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const day = String(newDate.getDate()).padStart(2, "0");
  date.innerText = `${year}.${month}.${day}`;
};
getDate();
