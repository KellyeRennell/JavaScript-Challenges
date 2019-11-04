// -------------UFO Reports Level 1 JavaScript-----------------

/* declaring and initializing my variables. from data.js. I am going to assign the data to a descriptive constiable instead of var
 const sightingsData = data;
** Select table and get a reference to the table body using D3
const tbody = d3.select("tbody");
** display the keys and values via Console.log the UFO data from the data.js file
console.log(sightingsData);

Looping through the UFO data and console.log for each UFO report object
 data.forEach(function(sightings) {
    console.log(sightingsData);
 }); 

//Appending one table row `tr` for each UFO report object, appending the tr elements. 
// data.forEach(function(sightings) {
//     console.log(sightingsData);
//     const trow = tbody.append("tr");
// }); 

// console.log each UFO report value using object.entries
// data.forEach(function(sightingsData) {
//     console.log(sightingsData);
//     const row = tbody.append("tr");
    
//     Object.entries(sightingsData).forEach(function([key, value]) {
//         console.log(key, value);
//     });
// });

/* Appending one column or cell per UFO report value(dateTime, city, state, country, shape, comment)
 data.forEach(function(ufoReport) {
     console.log(sightingsData);
     const row = tbody.append("tr");
    
     Object.entries(ufoReport).forEach(function([key, value]) {
         console.log(key, value);
         const cell = tbody.append("td");
     });
 });    */

/* I need to update each column's text with the UFO report values
 Date, City, State, Country, Shape, Duration, Comments
 data appended to data table elements, so I should see that for every table row, there will be 7 table data elements(tr, then td)

 data.forEach(function(sightings) {
     console.log(sightings);
     const row = tbody.append("tr");
    
     Object.entries(sightings).forEach(function([key, value]) {
        console.log(key, value);

         const trow = tbody.append("td");
         trow.text(value);
     });
 });        */

/* I will refactor to use the arrow function to simplify the code and reflect the new data appended to the data table elements.
Declaring variable down here and commented at top*/

const sightingsData = data;

const tbody = d3.select("tbody");

sightingsData.forEach((ufoReport) => {
    const trow = tbody.append("tr");

    Object.entries(ufoReport).forEach(([key, value]) => {
        // console.log(key, value);
        const cell = tbody.append("td");
        cell.text(value);
    });
});
  
/*attach an event listener and create a filter that will give users the ability to search via the datetime column*/

/*Getting a reference to the Filter Table button. the page id set to filter-btn
sightingsData = data */

const button = d3.select("#filter-btn");

button.on("click", function() {
    // console.log("A button was clicked");
    tbody.html("");
//Prevent the default behavior, page from refreshing
    d3.event.preventDefault();

    const inputElement = d3.select("#datetime");
    const inputValue = inputElement.property("value");
        console.log(inputValue);
    // console.log(sightingsData);

    //Using form input to filter the data by date/time
    const filteredData = sightingsData.filter(sighting => sighting.datetime === inputValue);
    // console.log(filteredData);

    //creating the filtered data table 
  filteredData.forEach((dateColumn) => {
      let frow = tbody.append("tr");

      Object.entries(dateColumn).forEach(([key, value]) => {
        let cell = frow.append("td");
        cell.text(value); 
      });
  });
});
    




    


   












