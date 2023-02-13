// Login page

function handle(e){
    if(e.keyCode === 13 ){
        submitclick();
    }
}


function submitclick() {

    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    if (email == "ram@gmail.com" && password == "Ram@123") {
        location.replace("./index.html");
    } else {
        alert("Please enter valid username/password");
    }
} 

// crypto page

const tbody = document.querySelector("#bodydata");



fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd").then(
    res => {
        return res.json();
    }).then(data => {
      
        data.forEach((e) => {
            tbody.innerHTML +=
                `<tr>
                    <td>${e.market_cap_rank}</td>
                    <td id="ancher"><a href="https://coinmarketcap.com/currencies/${e.id}/">${e.id}</a></td>
                    <td><img height="40px" width="40px" src="${e.image}"></td>
                    <td>${e.name}</td>
                    <td>${e.symbol}</td>
                    <td>$${e.current_price}</td>
                    <td id="per">${Math.round(e.price_change_percentage_24h)}%</td>
                    <td>$${e.market_cap}</td>
                    <td>$${e.total_volume}</td>`
        });
       

    })

    
// Search Functionality

function myFunction() {
    var input, filter, table, tr, td, i, txtValue, noResult;
    input = document.getElementById("searchbox");
    filter = input.value.toUpperCase();
    table = document.getElementById("bodydata");
    tr = table.getElementsByTagName("tr");


    noResult = document.querySelector('h2')

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
      noResult.style.display='none'
    } else {
      noResult.style.display=''
    }
  }

  function loginClick() {
  
    location.replace("./login.html");
    
  }
  function cancelclick(){
   
    location.replace("./index.html");
  }

  function signupClick(){
    location.replace("./signup.html");
  }
  function signup(){
    alert("Please fill all the fields")
  }

  //loading part

  $(window).load(function(){
    $("#loader").fadeOut(1000);
  })

 