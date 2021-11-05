const calculateAge = (date1, date2) => {
  // Given two dates, calculate and return the amount of time in between, in years and months
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const [y1,m1] = [d1.getFullYear(),d1.getMonth()];
  const [y2,m2] = [d2.getFullYear(), d2.getMonth()];
  const diff = d1.getTime() - d2.getTime();
  const diffDate = new Date(diff);
  const [year,month] = [diffDate.getFullYear(),diffDate.getMonth()];
  if(!isNaN(year)) {
  if(year - 1970 == 0) {
    return "Age: "+ month + " months";
  } else if(month == 0) {
    return "Age: "+(year-1970) + " years";
  } else {
    return "Age: "+(year-1970 )+ " years, " +month+" months";
  }
} else {
  return "Error: Invalid input provided";
}
};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateAge(1635176171332, 'May 1, 1995'));
// Age: 26 years, 5 months
console.log(calculateAge(1635176171332, '1975-8-11'));
// Age: 46 years, 2 months
console.log(calculateAge(1635176171332, [2021, 5, 23]));
// Age: 4 months
console.log(calculateAge(1635176171332, 1031814000000));
// Age: 19 years, 1 month
console.log(calculateAge(1635176171332, 'birthdate'));
// Error: Invalid input provided.
