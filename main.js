const {app, BrowserWindow} = require('electron');

const createWindow = ({width=400, height=400, node=true, file='index.html'}) => {
    const win = new BrowserWindow({
        width,
        height,
        webPreferences : {
            nodeIntegration : node
        }
    });

    win.loadFile(file);
}

app.whenReady().then(()=> createWindow({
    height: 400,
    width : 400,
    file : 'index.html',
    node : true
}));

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin') {
        app.quit()
    }

    app.on('activate', ()=>{
        if (BrowserWindow.getAllWindows().length === 0){
            createWindow()
        }
    })
})