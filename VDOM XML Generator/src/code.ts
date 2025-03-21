// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
import { ParseFigmaObject } from "./figmaObjectParser";

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.

figma.ui.onmessage = msg => {
  switch(msg.type) {
    case 'gen': {
      const selection = figma.currentPage.selection["0"]
      const xml = ParseFigmaObject(selection)
      figma.ui.postMessage({"xml": xml})
      break;
    }
    case 'close': {
      figma.closePlugin();
    }
    default: {
      figma.ui.postMessage({"error":"not valid type"})
    }
  }
};
