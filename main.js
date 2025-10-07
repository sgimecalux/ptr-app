const { app, BrowserWindow, session } = require('electron');
const path = require('path');

function createWindow(){
  const win = new BrowserWindow({
    width: 1200, height: 800, backgroundColor: '#0f172a',
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true }
  });

  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission === 'media') return callback(true); // permite câmera/microfone
    return callback(false);
  });

  win.loadFile(path.join(__dirname, 'app', 'index.html'));
  win.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
