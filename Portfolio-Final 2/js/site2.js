var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keytwwLIFwiJTtntZ'}).base('app611tk7BYrA0HTQ');

base('Case Study Table').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 1,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {

    
    var myElement2a = document.getElementById('bio1');
    var myElement2b = document.getElementById('bio2');
    var myElement2c = document.getElementById('bio3');
    
    
    if(myElement2a){
        myElement2a.innerHTML = records[0].fields.Description_1;
    }if(myElement2b){
        myElement2b.innerHTML = records[0].fields.Description_2;
    }if(myElement2c){
        myElement2c.innerHTML = records[0].fields.Description_3;
    }



    // This function (`page`) will get called for each page of records.

/*
    records.forEach(function(record) {
        console.log('Retrieved', record.get('WorkTitle'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    
*/
   fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

