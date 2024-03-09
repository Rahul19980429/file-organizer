const fs = require('fs')
const path = require('path')
let a = __dirname
fs.readdirSync(a).forEach(file => {
    let ext = file.split('.')[file.split('.').length - 1] //get extension
    // except js json and without extension files
    if (ext != "js" && ext != "json" && file.split('.').length > 1) { 
        if (fs.existsSync(ext)) { //if dicretory already exist
            fs.rename(path.join(a, file), path.join(a, ext, file), () => { //then move file in respective folder or dir 
                console.log('successfully done')
            })
        }
        else {

            fs.mkdir(ext, (err) => { // create dir or folder first
                if (err) {
                    console.log(err)
                } else {
                    fs.rename(path.join(a, file), path.join(a, ext, file), () => { //then move file in respective folder or dir 
                        console.log('successfully done')
                    })
                }
            })
        }
    }


});
