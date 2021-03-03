const
    path = require('path'),
    fs = require('fs'),
    inliner = require('inliner'),
    dirfile = fs.readFileSync(path.join(__dirname, 'build', 'index.html'));

new inliner(dirfile, function (html) {
    // compressed and inlined HTML page
    let cl = "";

    fs.writeFile(path.join(__dirname, 'build', 'index.html'), cl, (err) => { 
        if (err) 
            console.log(err); 
        else { 
            console.log("Cleared original build.\n"); 
        } 
    });
    
    fs.writeFile(path.join(__dirname, 'build', 'index.html'), html, (err) => { 
        if (err) 
            console.log(err); 
        else { 
            console.log("File written successfully\n"); 
            console.log("The written has the following contents."); 
        } 
    }); 

});