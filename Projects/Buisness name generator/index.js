
function generateCompanyName() {
  let rand = Math.random();
  let first, second, third;

  
  const firstOptions = [
    "ascorp",
    "acasia",
    "retract",
    "nexa",
    "synergo",
    "omni",
    "ventura",
  ];
  const secondOptions = [
    "woods",
    "oil",
    "steel",
    "tech",
    "dynamics",
    "solutions",
    "enterprises",
  ];
  const thirdOptions = [
    "Company",
    "Co",
    "Corporation",
    "Industries",
    "Group",
    "LLC",
    "Innovations",
  ];


  first = firstOptions[Math.floor(rand * firstOptions.length)];
  second = secondOptions[Math.floor(rand * secondOptions.length)];
  third = thirdOptions[Math.floor(rand * thirdOptions.length)];

  let companyName = `${first} ${second} ${third}`;
  document.getElementById("generated-name").textContent = companyName;
}
