// Login page

function handle(e){
    if(e.keyCode === 13 ){
        btnClick("loginsubmit");
    }
}

// crypto page API fetch

const tbody = document.getElementById("bodydata");

fetch(new Request("https://api.livecoinwatch.com/coins/list"), {
  method: "POST",
  headers: new Headers({
    "content-type": "application/json",
    "x-api-key": "a4c75585-1604-4b98-bfe0-f70811c62424",
  }),
  body: JSON.stringify({
    currency: "USD",
    sort: "rank",
    order: "ascending",
    offset: 0,
    limit: 50,
    meta: true,
  }),
}).
 then(res => res.json()).then(data => {

      data.forEach(e=>{
        tbody.innerHTML+=`
        <tr>
        <td>${e.rank}</td>
        <td>${e.name}</td>
        <td><img height="40px" width="40px" src="${e.png32}"></td>
        <td>${e.code}</td>
        <td>$${e.rate}</td>
        <td>$${e.volume}</td>
        <td>$${e.cap}</td>
        <td>${e.delta.hour}%</td>
        <td>${e.delta.day}%</td>
        <td>${e.delta.week}%</td>
        </tr>
        
        `
      } )     
});

// Price updation code

const getBTC = async () => {

    fetch(new Request("https://api.livecoinwatch.com/coins/list"), {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
        "x-api-key": "a4c75585-1604-4b98-bfe0-f70811c62424",
      }),
      body: JSON.stringify({
        currency: "USD",
        sort: "rank",
        order: "ascending",
        offset: 0,
        limit: 50,
        meta: true,
      }),
    }).then(res => res.json()).then(data => {
        var count = 0;
        data.forEach((e) =>{
          tbody.rows[count].getElementsByTagName("td")[4].innerText = `$${e.rate}`;
          tbody.rows[count].getElementsByTagName("td")[5].innerText = `$${e.volume}`;
          tbody.rows[count].getElementsByTagName("td")[6].innerText = `$${e.cap}`;
          tbody.rows[count].getElementsByTagName("td")[7].innerText = `${e.delta.hour}%`;
          tbody.rows[count].getElementsByTagName("td")[8].innerText = `${e.delta.day}%`;
          tbody.rows[count].getElementsByTagName("td")[9].innerText = `${e.delta.week}%`;
          count++;
        })
    });
 
}

setInterval(function () {
  getBTC();
}, 2000);


// function ff(cp){
//   if(Math.round(cp)>=0){
//     return `<i class="fa-solid fa-caret-up"></i> ${cp}`;
//   }
//   else{
//     return `<i class="fa-solid fa-caret-down"></i> ${cp}`;
//   }
// }
    
// Search Functionality

function myFunction() {
    var input, filter, table, tr, td, i, txtValue, noResult;
    input = document.getElementById("searchbox");
    filter = input.value.toUpperCase();
    table = document.getElementById("bodydata");
    tr = table.getElementsByTagName("tr");


    noResult = document.querySelector('#noresults')

    let found  = false;


    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          found = true
        } else {
          tr[i].style.display = "none";
        }    
    }
    if(found){
      noResult.innerHTML=''
    } else {
      noResult.innerHTML='No Results Found'
    }
  }
                     //Button Functionality  

  function btnClick(id){
      if (id === "signup") {
        location.replace("./signup.html");
      }
      else if (id === "login") {
        location.replace("./login.html");
      }
      else if (id === "loginsubmit") {
        var password = document.getElementById("password").value;
        var email = document.getElementById("email").value;
    
        if (email == "ram@gmail.com" && password == "Ram@123") {
            location.replace("./index.html");
        } else {
            alert("Please enter valid username/password");
        }
      }
      else if (id === "cancel") {
        location.replace("./index.html");
      }
      else if (id === "signupsubmit") {
        alert("Please fill all the fields")
      }
  }

  // Filtering
  function rangeclick(){

    var minValue = document.getElementById('minvalue').value;
    var maxValue = document.getElementById('maxvalue').value;
  
    if(parseInt(maxValue) < parseInt(minValue)){
      alert('second field must be big');
    }

    else if(minValue !='' && maxValue !=''){
    var noResult = document.querySelector('#noresults')
    let found  = false;
    

    var table = document.getElementById("bodydata");
    var tr = table.getElementsByTagName("tr");
    for(let i=0;i<table.rows.length;i++){
      tdPrice = tr[i].getElementsByTagName("td")[5].innerText;
      tdPrice=parseInt(tdPrice.slice(1,tdPrice.length));
    
      if((tdPrice >= minValue) && (tdPrice <= maxValue)){
        // console.log(tdPrice)
        tr[i].style.display = "";
          found = true;
        } else {
          tr[i].style.display = "none";
        }    
    }
    if(found){
      noResult.innerHTML=''
    } else {
      noResult.innerHTML='No Results Found'
    }
    
  }
  
  else{
    alert('Fill all the filelds');
  }
}
  // loading part

//   $(window).load(function(){
//     $("#loader").fadeOut(1000);
//   })

 
