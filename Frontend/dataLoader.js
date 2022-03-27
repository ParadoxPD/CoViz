let data;
async function getData() {
  await axios
    .get("https://api.rootnet.in/covid19-in/stats/latest")
    .then(function (response) {
      data = response.data.data.regional;
    });
}
