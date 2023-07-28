export default function(e) {
    e.persist();
    return new Promise((resolve, reject) => {
      if (e.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
  
        reader.onload = function() {
          resolve({ file: reader.result, name: e.target.files[0].name });
        };
        reader.onerror = function() {
          reject(reader.error);
        };
      } else {
        reject("no file selected");
      }
    });
  }
  