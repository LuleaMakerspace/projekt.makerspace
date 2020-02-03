<template>
  <div class="container">
      <h1>Så du vill ladda upp ditt spel till Luleå Makerspace Projekt</h1>
      <div class="section">
          <p>Tanken med Luleå Makerspace Projekt är att medlemmar av Luleå Makerspace ska kunna dela spelprojekt som de har jobbat på.
            Men det finns några krav och saker du behöver tänka på innan du kan publicera ditt spel här.</p>
      </div>
      <div class="section section-highlight">
        <h2>Tänk på att...</h2>
        <ul>
          <li>Beskrivningen av spelet ska vara relativt kort, helst mindre än 100 ord</li>
          <li>För miniatyrbilden av spelet kan du använda en hemsida som <a href="https://imgur.com">Imgur</a> för att lägga upp bilden på, tänk på att göra bilden synlig för alla och inte bara för dig. Annars kan du också ladda upp en bild direkt från formuläret genom Google Drive.</li>
          <li>Miniatyrbilden rekommenderas ha sidförhållande 16:9, men andra liknande sidförhållanden fungerar också; delar av bilden kan bli bortklippta genom att använda ett annat sidförhållande</li>
          <li>Använd helst en screenshot från spelet som miniatyrbild</li>
        </ul>
        <h2>Villkor</h2>
        <ul>
          <li>Minst 1 av skaparna ska vara medlem i organisationen Luleå Makerspace</li>
          <li><b>Du ska ha uppehovsrätten till spelet och allt innehåll</b>, t.ex musik och grafik</li>
          <li>Alla personer som har arbetat på spelet ska ge tillåtelse till att programvaran får publiceras</li>
          <li>Spelet måste gå att spela <b>gratis</b>, extra köp i programvara är ej tillåtet (dvs. inga microtransactions)</li>
          <li>Spelet får inte bestå av extremt innehåll</li>
          <li>Det är du som laddar upp spelet som bär ansvaret för programvaran</li>
        </ul>
      </div>
      <div class="section">
        <h2>Hur bra är nog bra?</h2>
        <p>Det är svårt att definitivt säga av vilken kvalité ett spel måste vara för att det ska platsa på sidan eftersom efarenheten mellan skaparna skiljer stort.
          Så välj ett projekt som du är nöjd med och som du har finslipat lite på, <b>men tänk på att de största spelen inte alltid är dem bästa</b>. Många kan komma att uppskatta ett litet
          men välpolerat spel mycket mer än ett tappert försök att återskapa GTA V på sin egen hand.
        </p>
        <p>Dela gärna med dig av spel du skapat på diverse game jams, glöm bara inte att skriva vilket game jam när du laddar upp spelet.</p>
      </div>
      <a href="https://forms.gle/kFHMRyrgkB6LjjtFA" class="button">
          <b-button
            variant="success"
            style="border-bottom: solid 3px green; width: 100%;"
            target="_blank"
          >Tryck här för att ladda upp ditt spel.</b-button>
        </a>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Att tänka på om du vill ladda upp ditt spel på Luleå Makerspace Projekt"
    }
  }
}
</script>

<style>

</style>