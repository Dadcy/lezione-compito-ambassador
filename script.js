console.log("tutto ok");
// oggetti che rappresentano gli utenti dell'e-commerce//
const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }
//lista prezzi del carrello//
let prices = [0, 0, 0,];
let priceCarrello = 0;
let price = 0;
const shippingCost = 50// costo fisso spedizione
let utenteCheEffettuaLAcquisto = marco;

 
     for (let i = 0; i < prices.length; i++) { // Ciclo for per sommare il valore degli articoli nel carrello //
            priceCarrello = priceCarrello + prices[i];
          }console.log(priceCarrello);// Valore del carrello //

    // Ciclo if/else con else if per avere il prezzo finale del carrello con le varie opzioni richieste //
      if (utenteCheEffettuaLAcquisto.isAmbassador && priceCarrello < 100 && priceCarrello !== 0) { 
            price = priceCarrello;
            price = (price * 0.7) + shippingCost;
        console.log(price);
    }  else if (!utenteCheEffettuaLAcquisto.isAmbassador && priceCarrello < 100 && priceCarrello !== 0){
          price = priceCarrello;
          price = priceCarrello + shippingCost;
          console.log(price);
    } else if ( priceCarrello > 100 && priceCarrello !== 0) {
          price = priceCarrello;
          console.log(price);
    } else {
      console.log("Inserire articoli nel carrello");
    }
  
  
  
  //Creare un array con descrizione dell'utente //
  
    let utenti = [];
  utenti.push ( marco, paul, amy);
  console.log(utenti);
 
  for (let i = 0; i < utenti.length; i++) {
      let frase = `${utenti[i].name} ${utenti[i].lastName} `

      if (utenti[i].isAmbassador) {
         frase += "è"
      }else {
        frase += "non è"
      }
       frase += " un ambassador"
       console.log(frase);
  }
  
    