const axios = require('axios');

axios.get('https://api.rootnet.in/covid19-in/hospitals/medical-colleges')
.then(res => {
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.status);
  console.log('Date in Response header:', headerDate);

  const users = [res.data];

  for(var user of users) {
      for(let i=0;i<500;i++){

          console.log(`State: ${user.data.medicalColleges[i].state}`);
          console.log(`Medical College Name: ${user.data.medicalColleges[i].name}`);
          console.log(`City: ${user.data.medicalColleges[i].city}`);
          console.log(`Ownership: ${user.data.medicalColleges[i].ownership}`);
          console.log(`AdmissionCapacity: ${user.data.medicalColleges[i].admissionCapacity}`);
          console.log(`Number of Beds: ${user.data.medicalColleges[i].hospitalBeds}`);
          
          console.log("\n \n")
     
  
        }
  }
})
.catch(err => {
  console.log('Error: ', err.message);
});