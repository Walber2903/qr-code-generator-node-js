import prompt from "prompt";

import promptSchemaMain from "./prompts/prompt-schema-main.js"
import createQRCode from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, choose) => {
    if(choose.select == 1) await createQRCode();
    if(choose.select == 2) await createPassword();
  });

  prompt.start();
}

main();