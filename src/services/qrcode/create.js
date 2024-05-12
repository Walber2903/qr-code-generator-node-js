import prompt from "prompt";
import promptSchemaQRCode from "../../prompts/prompt-schema-qrcode.js";
import handleQRCode from "./handle-qrcode.js";

async function createQRCode() {
  prompt.get(promptSchemaQRCode, handleQRCode);

  prompt.start();
}

export default createQRCode;