function showSelectedCountry() {
    var selectedCountry = document.getElementById("countrySelect").value;
    if (selectedCountry !== "") {
      window.location.href = "selected_country.html?country=" + selectedCountry;
    } else {
      document.getElementById("selectedCountry").innerText = "";
    }
  }
  