import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Mary",
        lastName: "Serna",
        text: "2 Entradas para la boda",
        valid: true,
        instructions: "Confirma tu asistencia, apretando el boton",
    }
  );

  function spendGiftCard() {
    setGiftCard(prevState => {
      return {
        ...prevState, text: "Su asistencia ha sido confirmada",
        valid: false,
        instructions:"Muchas gracias, estamos felices de que nos acompañes."}
    });
    
    }


  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Confirmar asistencia
          </button>
        )
      }
    </div>
  );
}