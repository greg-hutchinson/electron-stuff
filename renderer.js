// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var app = require('electron').remote;
var dialog = app.dialog;
var fs = require('fs');
alert("Made it here");

document.getElementById('openButton').onclick = {} => {
    dialog.showOpenDialog((fileNames) => {
      if (fileNames === undefined) {
        alert('No File selected');
      }
      else {
        readFile(filenames[0]);
      }
    });
};

function readFile(filepath) {
  fs.readFile(filepath, 'utf-8', {err, data} => {
      if (err) {
        alert(err);
        return;
      }
      var textArea = document.getElementById('editor');
      textArea.value = data
  });
}
