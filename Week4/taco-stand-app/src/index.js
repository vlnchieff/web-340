"use strict";

const TacoStandEmitter = require("../src/taco-stand");

const tacoStand = new TacoStandEmitter();

tacoStand.on("serve", (customer) => {
    console.log(`Serving customer: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
    console.log(`Preparing taco: ${taco}`);
});

tacoStand.on("rush", (rush) => {
    console.log(`Handling rush: ${rush}`);
});


tacoStand.serveCustomer("Chieff");
tacoStand.prepareTaco("Chicken Taco");
tacoStand.handleRush("Dinner Rush");
