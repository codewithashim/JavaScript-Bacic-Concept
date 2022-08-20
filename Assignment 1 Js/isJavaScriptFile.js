function isJavaScriptFile(value) {
  if (value.endsWith(".js")) {
    if (typeof value !== "string") {
      return "Pless enter valid num";
    }
    return true;
  } else {
    return false;
  }
}

// const fileName = "index.pdf";
const fileName = "index.js";
const isJavaScript = isJavaScriptFile(fileName);
console.log(isJavaScript);
