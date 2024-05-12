import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold("Choice tool (1 - QRCODE or (2 - PASSWORD"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Choice onle between 1 and 2"),
    required: true,
  },
]

export default promptSchemaMain;