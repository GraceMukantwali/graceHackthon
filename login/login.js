document.querySelector("form").addEventListener("submit", function(event) {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    if (!username || !password) {
      alert("Please fill in both fields.");
      event.preventDefault();
    }
   });
   document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
   });
   const togglePasswordButton = document.createElement("button");
   togglePasswordButton.innerText = "Show Password";
   togglePasswordButton.addEventListener("click", function() {
    const passwordInput = document.querySelector("#password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePasswordButton.innerText = "Hide Password";
    } else {
      passwordInput.type = "password";
      togglePasswordButton.innerText = "Show Password";
    }
   });
   document.querySelector("form").appendChild(togglePasswordButton);
         