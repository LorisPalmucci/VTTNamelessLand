// Register the system
Hooks.once("init", async function () {
    console.log("MySimpleRPG | Inizializzazione del sistema");
  
    // Registra il tipo di attore e la sua scheda
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("mysimplerpg", MySimpleActorSheet, { makeDefault: true });
  });
  
  // Definizione della scheda personalizzata
  class MySimpleActorSheet extends ActorSheet {
    get template() {
      return "modules/mysimplerpg/templates/actor-sheet.html";
    }
  
    getData() {
      const data = super.getData();
      data.stats = this.actor.data.data.stats;
      return data;
    }
  }
  