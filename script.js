// Login page

function handle(e){
    if(e.keyCode === 13 ){
        btnClick("loginsubmit");
    }
}

// crypto page

const tbody = document.querySelector("#bodydata");

//setInterval(fetching,1000);

//function fetching(){
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd").then(
    res => {
        return res.json();
    }).then(data => {
      
        data.forEach((e) => {
             var cp=e.price_change_percentage_24h;
            tbody.innerHTML +=
                `<tr>
                    <td>${e.market_cap_rank}</td>
                    <td id="ancher"><a href="https://coinmarketcap.com/currencies/${e.id}/">${e.id}</a></td>
                    <td><img height="40px" width="40px" src="${e.image}"></td>
                    <td>${e.name}</td>
                    <td>${e.symbol}</td>
                    <td>$${e.current_price}</td>
                    <td style="color:${(Math.round(cp)>=0) ? 'green' : 'red'}">${ff(cp)}%</td>
                    <td>$${e.market_cap}</td>
                    <td>$${e.total_volume}</td>`
        });
    })
//}

function ff(cp){
  if(Math.round(cp)>=0){
    return `<i class="fa-solid fa-caret-up"></i> ${cp}`;
  }
  else{
    return `<i class="fa-solid fa-caret-down"></i> ${cp}`;
  }
}
    
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

 
