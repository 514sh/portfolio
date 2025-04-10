import { spawn } from "node:child_process";
import path from "path";

const texFilePath = path.join(__dirname, "mark_balagtas_cv.tex");
const pdfFolderPath = path.join(__dirname, "public");
const generatePdf = spawn("pdflatex", [
  "-output-directory",
  pdfFolderPath,
  texFilePath,
]);

generatePdf.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

generatePdf.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

generatePdf.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
