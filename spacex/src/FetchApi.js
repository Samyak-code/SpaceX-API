import React from "react";

function FetchAPI() {


  //Get Method
  const apiGet = () => {
    fetch('https://api.spacexdata.com/v3/launches/upcoming')
      .then((response) => response.json())
      .then((result) => {console.log(result);
      var i;
      for(i=0;i<result.length; i++){
      document.write(result[i].mission_name+"\n"+"-"+result[i].details+"<br>"+"<br>")
      }
      });
      
      document.write("Upcoming Spacex projects"+"<br>"+"<br>")
        // console.log(json)
        // document.write(json)
      
  }
  return(
      <>
      <h1>Click on the button to run the API </h1>
      <button onClick={apiGet}  >Click here </button>
      </>
  )


  

}
export default FetchAPI;
