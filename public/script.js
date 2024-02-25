document
  .getElementById("myForm")
  .addEventListener("submit", async function (event) {
    debugger
    event.preventDefault();
    console.log("form submitted");

    const data = {
      email: event.target.email.value,
      name: event.target.name.value,
    };
    const formData = JSON.stringify(data);
    try {
        
      const response = await fetch(
        `http://${window.location.hostname}:3000/`,
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if(response.redirected){
        window.location.href = response.url;
        }
    } catch (e) {
      console.log(e);
    }
  });
