const fs = require('fs-extra')
const path = require('path')

const myFolder = "D:\\Umar\\Personal Works\\Node\\Clear the clutter"
let selectedFiles = []
let exts = []

fs.readdir(myFolder, (err, files) => {
    files.forEach(file => { 
      if(!file.endsWith('js') && !file.endsWith('json')){
        // Getting extention of file
       let folderName = path.extname(file).substring([1])
       if (folderName.length != 0){
           exts.push(folderName)
        }
        if (file.includes('.')) {
            selectedFiles.push(file)
            // console.log(selectedFiles)
       }
    }
    });

    // Create folders
    exts.forEach(ext => {
        if (!fs.existsSync(ext)){
            fs.mkdirSync(ext)
       }
    })

    // Move files towards respective folders
    // Looping through selected files and building destinations
    selectedFiles.forEach(selectedFile => {
        let cdirectory = selectedFile
        let destination = `${path.extname(selectedFile).substring([1])}/${selectedFile}`
        console.log(cdirectory)
        console.log(destination)

        // Move The File
        fs.move(cdirectory, destination)
    })
  });