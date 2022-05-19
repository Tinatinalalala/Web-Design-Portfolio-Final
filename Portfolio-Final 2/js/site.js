var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keytwwLIFwiJTtntZ'}).base('app611tk7BYrA0HTQ');

base('Case Study Table').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 10,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {

    //Sapor Trace

    var myElement1a = document.getElementById('title1');
    var myElement1b = document.getElementById('year1');
    var myElement1c = document.getElementById('medium1');
    var myElement1d = document.getElementById('role1');
    var myElement1e = document.getElementById('credits1');
    var myElement1f = document.getElementById('description1');
    var myElement1g = document.getElementById('oneImg1');
    var myElement1h = document.getElementById('twoImg1');
    var myElement1i = document.getElementById('threeImg1');
    var myElement1j = document.getElementById('fourImg1');
    var myElement1k = document.getElementById('fiveImg1');
    var myElement1l = document.getElementById('processImg1');
    
    if(myElement1a){
        myElement1a.innerHTML = records[0].fields.WorkTitle;
    }if(myElement1b){
        myElement1b.innerHTML = records[0].fields.WorkYear;
    }if(myElement1c){
        myElement1c.innerHTML = records[0].fields.WorkMedium;
    }if(myElement1d){
        myElement1d.innerHTML = records[0].fields.WorkRole;
    }if(myElement1e){
        myElement1e.innerHTML = records[0].fields.WorkCredits;
    }if(myElement1f){
        myElement1f.innerHTML = records[0].fields.WorkDescription;
    }if(myElement1g){
        myElement1g.src = records[0].fields.Description_Image[0].url;
    }if(myElement1h){
    myElement1h.src = records[0].fields.Displaying_Image1[0].url;
    }if(myElement1i){
    myElement1i.src = records[0].fields.Displaying_Image2[0].url;
    }if(myElement1j){
    myElement1j.src = records[0].fields.Displaying_Image3[0].url;
    }if(myElement1k){
        myElement1k.src = records[0].fields.Displaying_Image4[0].url;
    }if(myElement1l){
        myElement1l.src = records[0].fields.Process[0].url;
    }

   //Travel Together

   var myElement1a = document.getElementById('title2');
    var myElement1b = document.getElementById('year2');
    var myElement1c = document.getElementById('medium2');
    var myElement1d = document.getElementById('role2');
    var myElement1e = document.getElementById('credits2');
    var myElement1f = document.getElementById('description2');
    var myElement1g = document.getElementById('oneImg2');
    var myElement1h = document.getElementById('twoImg2');
    var myElement1i = document.getElementById('threeImg2');
    var myElement1j = document.getElementById('fourImg2');
    var myElement1k = document.getElementById('fiveImg2');
    var myElement1l = document.getElementById('processImg2');
    
    if(myElement1a){
        myElement1a.innerHTML = records[1].fields.WorkTitle;
    }if(myElement1b){
        myElement1b.innerHTML = records[1].fields.WorkYear;
    }if(myElement1c){
        myElement1c.innerHTML = records[1].fields.WorkMedium;
    }if(myElement1d){
        myElement1d.innerHTML = records[1].fields.WorkRole;
    }if(myElement1e){
        myElement1e.innerHTML = records[1].fields.WorkCredits;
    }if(myElement1f){
        myElement1f.innerHTML = records[1].fields.WorkDescription;
    }if(myElement1g){
        myElement1g.src = records[1].fields.Description_Image[0].url;
    }if(myElement1h){
    myElement1h.src = records[1].fields.Displaying_Image1[0].url;
    }if(myElement1i){
    myElement1i.src = records[1].fields.Displaying_Image2[0].url;
    }if(myElement1j){
    myElement1j.src = records[1].fields.Displaying_Image3[0].url;
    }if(myElement1k){
        myElement1k.src = records[1].fields.Displaying_Image4[0].url;
    }if(myElement1l){
        myElement1l.src = records[1].fields.Process[0].url;
    }

  


//design&tech

var myElement1a = document.getElementById('title7');
var myElement1b = document.getElementById('year7');
var myElement1c = document.getElementById('medium7');
var myElement1d = document.getElementById('role7');
var myElement1e = document.getElementById('credits7');
var myElement1f = document.getElementById('description7');
var myElement1g = document.getElementById('oneImg7');
var myElement1h = document.getElementById('twoImg7');
var myElement1i = document.getElementById('threeImg7');
var myElement1j = document.getElementById('fourImg7');
var myElement1k = document.getElementById('fiveImg7');
var myElement1l = document.getElementById('processImg7');

if(myElement1a){
    myElement1a.innerHTML = records[6].fields.WorkTitle;
}if(myElement1b){
    myElement1b.innerHTML = records[6].fields.WorkYear;
}if(myElement1c){
    myElement1c.innerHTML = records[6].fields.WorkMedium;
}if(myElement1d){
    myElement1d.innerHTML = records[6].fields.WorkRole;
}if(myElement1e){
    myElement1e.innerHTML = records[6].fields.WorkCredits;
}if(myElement1f){
    myElement1f.innerHTML = records[6].fields.WorkDescription;
}if(myElement1g){
    myElement1g.src = records[6].fields.Description_Image[0].url;
}if(myElement1h){
myElement1h.src = records[6].fields.Displaying_Image1[0].url;
}if(myElement1i){
myElement1i.src = records[6].fields.Displaying_Image2[0].url;
}if(myElement1j){
myElement1j.src = records[6].fields.Displaying_Image3[0].url;
}if(myElement1k){
    myElement1k.src = records[6].fields.Displaying_Image4[0].url;
}if(myElement1l){
    myElement1l.src = records[6].fields.Process[0].url;
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

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 7){
        counter = 1;
    }
}, 5000);


