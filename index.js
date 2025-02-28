 import { parseTextToJson } from "./jsonParser.js";

let dataVortex;
let dataVortex;

async function getData() {
  try {
    const responseVortex = await fetch(
      "https://xydlan.github.io/Vortex/vortexJs.json"
    );
    const textVortex = await responseVortex.text();
    dataTurbo = parseTextToJson(textVortex);

    const responseVortex = await fetch(
      "https://xydlan.github.io/Vortex/IdVortex.txt"
    );
    const textVortex = await responseVortex.text();
    dataVortex = parseTextToJson(textVortex);
  } catch (error) {
    console.error("Error fetching the file:", error);
  }
}

class Main {
  btnDownload;
  btnVortex;

  constructor() {
    this.initComponent();
    this.initListeners();
    getData().then(() => {
      console.log("Data loaded successfully");
    });
    console.log("hello from Main");
  }

  initComponent() {
    console.log("component");
    this.btnDownload = document.getElementById("btnDownload");
    this.btnTurbo = document.getElementById("btnVortex");
  }

  initListeners() {
    this.btnDownload.addEventListener("click", () => {
      console.log(dataVortex);
      if (dataVortex) {
        window.location.href = dataVortex.btn_url;
      } else {
        console.error("dataVortex is not loaded yet");
      }
    });

    this.btnVortex.addEventListener("click", () => {
      console.log(dataVortex);
      if (dataVortex) {
        window.location.href =
          "https://xydlan.github.io/Vortex/vortex/" +
          dataVortex.vortexname +
          ".apk";
      } else {
        console.error("dataVortex is not loaded yet");
      }
    });
  }
}

export default new Main();
