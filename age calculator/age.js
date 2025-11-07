const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

const birthmonth = document.getElementById("birthmonth");
const birthday = document.getElementById("birthday");
const birthyear = document.getElementById("birthyear");
const currentmonth = document.getElementById("currentmonth");
const currentday = document.getElementById("currentday");
const currentyear = document.getElementById("currentyear");
const calculateDiffBtn = document.getElementById("calculateDiff");
const resultDisplay = document.getElementById("dateDiffResult");

const currentYearValue = new Date().getFullYear();
for (let year = 1900; year <= currentYearValue; year++) {
  const birthOption = document.createElement("option");
  birthOption.value = year;
  birthOption.textContent = year;
  birthyear.appendChild(birthOption);

  const currentOption = document.createElement("option");
  currentOption.value = year;
  currentOption.textContent = year;
  currentyear.appendChild(currentOption);
}

monthNames.forEach((month, index) => {
  const birthOption = document.createElement("option");
  birthOption.value = index;
  birthOption.textContent = month;
  birthmonth.appendChild(birthOption);

  const currentOption = document.createElement("option");
  currentOption.value = index;
  currentOption.textContent = month;
  currentmonth.appendChild(currentOption);
});

function GetDaysInMonth(month, year = new Date().getFullYear()) {
  return new Date(year, month + 1, 0).getDate();
}

function updateBirthdayDays() {
  const selectedMonth = parseInt(birthmonth.value);
  const selectedYear = parseInt(birthyear.value);
  const days = GetDaysInMonth(selectedMonth, selectedYear);
  birthday.innerHTML = ""; 

  for (let day = 1; day <= days; day++) {
    const option = document.createElement("option");
    option.value = day;
    option.textContent = day;
    birthday.appendChild(option);
  }
}

function updateCurrentDays() {
  const selectedMonth = parseInt(currentmonth.value);
  const selectedYear = parseInt(currentyear.value);
  const days = GetDaysInMonth(selectedMonth, selectedYear);
  currentday.innerHTML = ""; 

  for (let day = 1; day <= days; day++) {
    const option = document.createElement("option");
    option.value = day;
    option.textContent = day;
    currentday.appendChild(option);
  }
}

birthmonth.value = new Date().getMonth();
birthyear.value = currentYearValue;
currentmonth.value = new Date().getMonth();
currentyear.value = currentYearValue;

updateBirthdayDays();
updateCurrentDays();

birthmonth.addEventListener("change", updateBirthdayDays);
birthyear.addEventListener("change", updateBirthdayDays);
currentmonth.addEventListener("change", updateCurrentDays);
currentyear.addEventListener("change", updateCurrentDays);

function getDateDifference(date1Str, date2Str) {
  const date1 = new Date(date1Str);
  const date2 = new Date(date2Str);

  const diffInMs = Math.abs(date2 - date1);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays;
}

function calculateDateDifference() {
  const birthY = birthyear.value;
  const birthM = birthmonth.value;
  const birthD = birthday.value;

  const currentY = currentyear.value;
  const currentM = currentmonth.value;
  const currentD = currentday.value;

  if (!birthY || !birthM || !birthD || !currentY || !currentM || !currentD) {
    resultDisplay.textContent = "Please select all date fields.";
    return;
  }

  const birthDateStr = `${birthY}-${parseInt(birthM) + 1}-${birthD}`;
  const currentDateStr = `${currentY}-${parseInt(currentM) + 1}-${currentD}`;

  const daysBetween = getDateDifference(birthDateStr, currentDateStr);
  resultDisplay.textContent = `Difference: ${daysBetween} days`;
}

calculateDiffBtn.addEventListener("click", calculateDateDifference);
