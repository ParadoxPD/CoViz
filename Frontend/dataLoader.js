let data;
let hospitals;
let helpline;
async function getData() {
  await axios
    .get("https://api.rootnet.in/covid19-in/stats/latest")
    .then(function (response) {
      data = response.data.data.regional;
    });

  await axios
    .get("https://api.rootnet.in/covid19-in/hospitals/medical-colleges")
    .then(function (response) {
      hospitals = response.data.data.medicalColleges;
    });

  await axios
    .get("https://api.rootnet.in/covid19-in/contacts")
    .then(function (response) {
      helpline = response.data.data.contacts.regional;
    });
}
