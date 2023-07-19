function countryInfo(named, cap, popu, conti, flag, fact, city) {
    this.name = named;
    this.capital = cap;
    this.population = popu;
    this.continent = conti;   
    this.flag = flag;
    this.funFact = fact;
    this.city = city;
    this.details = function () {
        display.innerHTML = `
        <div class="card">
        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="${this.city}" / class="w-100 w-75">
          <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
          </a>
        </div>
        <div class="card-body">
          <h1 class="card-title">${this.name} <span>${this.flag}</span></h1>
          <p  class="card-text"> The capital of ${this.name} is ${this.capital}</p>
          <p  class="card-text">${this.name} has population of about ${this.population}</p>
          <p  class="card-text">${this.name} is loacted in ${this.continent}</p>
          <p  class="card-text">${this.funFact}</p>
          <p  class="card-text"></p>
        </div>
        </div>
        `
        console.log(`${this.name}`)
    };
}
// let img =`<img src="img/rain.jpg" />`
let Country = new countryInfo("Nigeria", "Abuja", "213.4 million", "Africa", `<img src="img/NGA.jpg" / width="30">`, "Over 500 indegenious languages are spoken in nigeria", `img/nigeriaC.jpg`)
let Country1 = new countryInfo("Ghana", "Accra", '32.83million', "Africa", `<img src="img/Ghana.jpg" / width="30">`, "The second-largest producer of gold in Africa", `img/accral.jpg`)
let Country2 = new countryInfo("Senegal", "Dakar", "16.88million", "Africa", `<img src="img/Senegal.jpg" / width="30">`, "Senegal was once home to the largest slave-trading centre on the African coast", `img/senegal.cc.jpg`)
let Country3 = new countryInfo("Benin", "Port-Novo", "13 million", "Africa", `<img src="img/benin.png" / width="30">`, "Port-Novo is Benin's second largest city.", `img/benin.jpg`)
let Country4 = new countryInfo("Algeria", "Algiers", "44.18 million", "Africa",  `<img src="img/algeria.png" / width="30">`, "Algeria is the largest African nation", `img/alegriaC.jpg`)
let Country5 = new countryInfo("Cameroon", "Yaoundé", "27.2 million", "Africa", `<img src="img/cameroon.jpg" / width="30">`, "Cameroon gained independence in 1960", `img/cameroonc.jpg`)
let Country6 = new countryInfo("Togo", "Lome", "8.645 million", "Africa", `<img src="img/togo.jpg" / width="30">`, "The official language of Togo is French", `img/togoc.jpg`)
let Country7 = new countryInfo("Guinea", "Conakry", "13.53 million", "Africa", `<img src="img/gunea.png" / width="30">`, "Guinea has 25% or more of the world's known bauxite reserves", `img/guineac.jpg`)
let Country8 = new countryInfo("Mali", "Bamako", "21.9 million", "Africa", `<img src="img/mail.jpg" / width="30">`, "Mali is home to the world's largest mud-brick building", `img/malic.jpg`)
let Country9 = new countryInfo("Liberia", "Monrovia", "5.193 million", "Africa",  `<img src="img/liberia.png" / width="30">`, "Liberia was created for formerly enslaved African Americans", `img/liberiac.jpg`)
let Country10 = new countryInfo("Burkina Faso", "Wagadugu", "22.1 million", "Africa",  `<img src="img/burkinafaso.png" / width="30">`, `Burkina Faso means "land of honest men`, `img/burkinac.jpg`)
let Country11 = new countryInfo("Guinea bissau", "Bissau", "2.06 million", "Africa", `<img src="img/gunea-busau.png" / width="30">`, "Guinea has a long and turbulent history", `img/bisauc.png`)
let Country12 = new countryInfo("Sierra Leone", "Freetown", "8.421 million", "Africa", `<img src="img/sierraleone.jpg" / width="30">`, "It was home to freed slaves in the 18th century", `img/sieraC.jpg`)
let Country13 = new countryInfo("Cabo verde", "Praia", 587925, "Africa",  `<img src="img/cabo-verde.png" / width="30">`, "Cape Verde is the third largest nesting site for loggerhead turtles", `img/capeverdC.webp`)
let Country14 = new countryInfo("Mauritania", "Nouakchott", "4.615 million", "Africa", `<img src="img/mauritanoia.jpg" / width="30">`, "Mauritania is the last country to abolish slavery", `img/mauritania.webp`)
let Country15 = new countryInfo("Egypt", "Cairo", "109.3 million", "Africa",  `<img src="img/egypt.png" / width="30">`, "Egypt is home to the only Remaining Ancient Wonder in the World", `img/egyptc.jpg`)
let Country16 = new countryInfo("Chad", `N'Djamena`, `17.18 million`, "Africa",  `<img src="img/chad.jpg" / width="30">`, "Chad is the fifth largest country in Africa and the 20th largest country in the word", `img/chadc.png`)
let Country18 = new countryInfo("Gabon", "Libreville", `2.341 million`, "Africa", `<img src="img/gabon.jpg" / width="30">`, "The Portuguese were the first Europeans to set foot in Gabon", `img/gabonc.jpg`)
let Country19 = new countryInfo("Democratic Republic of Congo", "Kinshasa", `95.89 million`, "Africa",  `<img src="img/congo.jpg" / width="30">`, `The Congo River is the deepest river (220 m) in the world`, `img/drcongoc.jpg`)
let Country20 = new countryInfo("Angola", "Luanda", "34.5 million", "Africa",  `<img src="img/angola.jpg" / width="30">`, "Angola houses the second largest waterfalls in Africa", `img/angolac.jpg`)
let Country21 = new countryInfo("Equatorial Guinea", "Malabo", "1.634 million", "Africa", `<img src="img/gunea.png" / width="30">`, "Equatorial Guinea is the only country in Africa to Spanish as an official language", `<img src="img/eguineac.jpg`)
let Country22 = new countryInfo("Republic of Congo", "Tunis", `12.26 million`, "Africa", `<img src="img/repuclicofcongo.jpg" / width="30">`, "Tunisia is the 4th most important city in the islam World", `img/tunisia.jpg`)
let Country24 = new countryInfo("Cote D'voire", "Yamoussoukro", `27.48 million`, "Africa",  `<img src="img/cotedevoir.jpg" / width="30">`, "Ivory Coast is the world's largest exporter of cocoa beans", `img/cotec.webp`)


const Nigeria = ()=>{
  console.log("its working");
  Country.details();
}
const Cameroon = ()=>{
  Country5.details();
}
const Ghana = () => {
    Country1.details();
}
const Senegal = function() {
    Country2.details();
}
const benin = function() {
  Country3.details();
}
const Algeria = function() {
  Country4.details();
}
const Togo = function() {
  Country6.details();
}
const guinea = function() {
  Country7.details();
}
const mali = function() {
  Country8.details();
}
const liberia = function() {
  Country9.details();
}
const Bfaso = function() {
  Country10.details();
}
const gbisau = function() {
  Country11.details();
}
const Sleone = function() {
  Country12.details();
}
const Cverde = function() {
  Country13.details();
}
const Mauritania = function() {
  Country14.details();
}
const Egypt = function() {
  Country15.details();
}
const Chad = function() {
  Country16.details();
}
const Gabon = function() {
  Country18.details();
}
const Drcongo = function() {
  Country19.details();
}
const Angola = function() {
  Country20.details();
}
const Rcongo = function() {
  Country22.details();
}
const Cotdevoir = function() {
  Country24.details();
}
const Eguinea = function(){
  Country21.details();
}

