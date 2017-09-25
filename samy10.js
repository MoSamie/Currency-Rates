$.ajax({url: "http://www.apilayer.net/api/live?access_key=7a346767b044d9ff3c269bca33dbbcac", success: function(result){
        document.getElementById("pst").innerHTML=document.getElementById("pst").innerHTML+" "+result.quotes.USDEGP+" "+"EGP";
        document.getElementById("pnd").innerHTML=document.getElementById("pnd").innerHTML+" "+result.quotes.USDEUR+" "+"EUR";
        document.getElementById("prd").innerHTML=document.getElementById("prd").innerHTML+" "+result.quotes.USDCAD+" "+"CAD";
        document.getElementById("pfth").innerHTML=document.getElementById("pfth").innerHTML+" "+result.quotes.USDGBP+" "+"GBP";

           }});

