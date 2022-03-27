const axios = require('axios');

axios.get('https://api.rootnet.in/covid19-in/contacts')
.then(res => {
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.status);
  console.log('Date in Response header:', headerDate);

  const users = [res.data];

  for(var user of users) {
      for(let i=0;i<37;i++){

          console.log(`State: ${user.data.contacts.regional[i].loc}`);
          console.log(`Helpline Number: ${user.data.contacts.regional[i].number}`);
          console.log("\n \n")
     
  
        }
  }
})
.catch(err => {
  console.log('Error: ', err.message);
});