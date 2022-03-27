const axios = require('axios');

axios.get('https://api.rootnet.in/covid19-in/stats/latest')
  .then(res => {
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.status);
    console.log('Date in Response header:', headerDate);

    const users = [res.data];

    for(var user of users) {

      console.log(`total: ${user.data.summary.total}`);
      
      for(let i=0;i<36;i++){

        console.log(`Regional: ${user.data.regional[i].loc}`);
        console.log(`Confirmed cases of Indians: ${user.data.regional[i].confirmedCasesIndian}`);
        console.log(`Confirmed cases of Foreigners: ${user.data.regional[i].confirmedCasesForeign}`);
        console.log(`Number of discharged: ${user.data.regional[i].discharged}`);
        console.log(`Number of deaths: ${user.data.regional[i].deaths}`);
        console.log(`Total confirmed cases: ${user.data.regional[i].totalConfirmed}`);
        console.log("\n \n")

      }
      
    }

  })
  .catch(err => {
    console.log('Error: ', err.message);
  });
