import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow("Type QR code link to generate QR Code"),
  },
  {
    name: "type",
    description: chalk.yellow("Choice between QRCode type (1 - NORMAL or 2 - Terminal"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Choice onle between 1 and 2"),
    required: true,
  },
];

export default promptSchemaQRCode;