import warData from "../data/output.json";
export function expandYears(yearsArray) {
  const expandedArray = [];
  yearsArray.forEach((year) => {
    if (typeof year === "string" && year.includes("-")) {
      const [start, end] = year.split("-").map(Number);
      for (let i = start; i <= end; i++) {
        expandedArray.push(i);
      }
    } else {
      expandedArray.push(year);
    }
  });
  return expandedArray;
}

function getCentury(year) {
  if (year < 0) {
    const start = Math.ceil(year / 100) * 100 - 99;
    const end = start + 99;
    return `${start}-${end} BC`;
  } else {
    const centuryStart = Math.floor(year / 100) * 100 + 1;
    const centuryEnd = centuryStart + 99;
    return `${centuryStart}-${centuryEnd}`;
  }
}

export function groupByCentury(years) {
  const groups = {};

  years.forEach((year) => {
    const century = getCentury(year);
    if (!groups[century]) {
      groups[century] = [];
    }
    groups[century].push(year);
  });

  return groups;
}

export function processYears() {
  const allyears = warData.map((war) => war.Year);
  const expandedYears = expandYears(allyears);
  const years = [...new Set(expandedYears)];
  const groupedYears = groupByCentury(years);
  return groupedYears;
}

export function allyears() {
  const allyears = warData.map((war) => war.Year);
  const expandedYears = expandYears(allyears);
  const years = [...new Set(expandedYears)];
  return years;
}
