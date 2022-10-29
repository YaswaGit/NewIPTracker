  var ip_address;//61.12.88.94 //182.73.153.94
  var geolocation;
  var ip_info =new Object();
  var full_ip;
  function ipAddress(){
     $.getJSON("https://api.ipify.org?format=json", function (data) {
    console.log(data.ip);
    ip_address=data.ip;
    $("#ipDisplay").html(ip_address);
    document.getElementById("ipbutton").style.display="none";
    document.getElementById("currentIp").style.display="block";
    // geolocationIpAddress();
    getFullIpLocation(ip_address);
    })
    }

    

    //axios call to get data from current ip address
    // async function geolocationIpAddress(){
    //     await console.log("after function"+ip_address);
    //     await getFullIpLocation(ip_address);
    // }
    
    function getFullIpLocation(fullip){
       full_ip=fullip;
      if(full_ip!='')
      {      
       geolocation= ("https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0/").concat(full_ip);
       console.log("current api location call "+geolocation);
       gelocationCall(geolocation);
      }
      else{
          window.alert("Enter valid IP Address");
      }
    }
    
  function gelocationCall(geolocation){
      $.getJSON(geolocation, function(data){
            ip_info.country_code=data.country_code;
            ip_info.country_name=data.country_name;
            ip_info.city=data.city;
            ip_info.postal=data.postal;
            ip_info.latitude=data.latitude;
            ip_info.longitude=data.longitude;
            ip_info.ipv4=data.IPv4;
            ip_info.state=data.state;
            $("#ipDisplay").html(full_ip);
            // console.log("After geolocation"+ip_info.country_code);
            // console.log(ip_info.country_name);
            // console.log(ip_info.postal);
            // console.log(ip_info.city);
            // console.log(ip_info.state);
            // console.log(ip_info.latitude);
            // console.log(ip_info.longitude);
            // console.log(ip_info.ipv4);   
            advanced()   
        })
    }
     
    

function advanced(){
    document.getElementById("appv").innerHTML="App Version :-" +window.navigator.appVersion;
    document.getElementById("appc").innerHTML="Browser Name :-" +window.navigator.appCodeName;
    (ip_info.country_code!=null )?$("#countryCode").html(ip_info.country_code):$("#countryCode").html("No Data");
    (ip_info.country_name!=null )?$("#countryName").html(ip_info.country_name):$("#countryName").html("No Data");
    (ip_info.state!=null )?$("#state").html(ip_info.state): $("#state").html("No Data");
    (ip_info.city!=null )?$("#city").html(ip_info.city): $("#city").html("No Data"); 
    (ip_info.postal!=null)?$("#postal").html(ip_info.postal):$("#postal").html("No Data");
    (ip_info.latitude!=null)?$("#latitude").html(ip_info.latitude):$("#latitude").html("No Data");
    (ip_info.longitude!=null)?$("#longitude").html(ip_info.longitude):$("#longitude").html("No Data");

            // console.log("00000000000000000000"+ip_info.country_code);
            // console.log(ip_info.country_name);
            // console.log(ip_info.postal);
            // console.log(ip_info.city);
            // console.log(ip_info.state);
            // console.log(ip_info.latitude);
            // console.log(ip_info.longitude);
            // console.log(ip_info.ipv4);
    document.getElementById("ipinput").setAttribute("value", ip_info.ipv4);
}

function advancedButton(){
    document.getElementById("advancedbutton").style.display="none";
    document.getElementById("advancedIp").style.display="block";
}


//if its true user is online(green) otherwise the user is offline(red)
if(window.navigator.onLine==true)
{
    document.getElementById("ipTracker").style.backgroundColor="green";
}
else{
    document.getElementById("ipTracker").style.backgroundColor="red";
}



function printPage(){
    window.print();
}






