function mapEvent(e) {}

function handleState(e) {
  // await getData();
  let info = data[e.selectedIndex];
  let stateHelpline = helpline[e.selectedIndex]["number"];
  let hospitalsForStates = getHospitals(data[e.selectedIndex]["loc"]);
  document.querySelector(".info").innerHTML = `<div>
        Confirmed Cases : ${info.confirmedCasesIndian}<br />
        Deaths : ${info.deaths}<br />
        Discharged : ${info.discharged}<br />
        HelpLine : ${stateHelpline}<br />
        </div>
    `;

  for (hospital in hospitalsForStates) {
    document.querySelector(".info").innerHTML += `
      Hospital Name : ${hospitalsForStates[hospital]["name"]}<br />
      City : ${hospitalsForStates[hospital]["city"]}<br />
      Admission Capacity : ${hospitalsForStates[hospital]["admissionCapacity"]}<br />
      Hospital Beds : ${hospitalsForStates[hospital]["hospitalBeds"]}<br />
    `;
  }
}

function getHospitals(state) {
  let hospitalsForStates = [];
  console.log(state);
  hospitals.forEach((hospital) => {
    if (hospital["state"] == state) {
      hospitalsForStates.push(hospital);
    }
  });
  return hospitalsForStates;
  // for()
}
