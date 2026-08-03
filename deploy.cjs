const { Client } = require('ssh2');

const conn = new Client();

conn.on('ready', () => {
  console.log('Terhubung ke server via SSH...');
  const cmd = 'cd web-profile && git fetch && git checkout feature/experimental-ui && git pull origin feature/experimental-ui && docker compose up -d --build';
  
  conn.exec(cmd, (err, stream) => {
    if (err) {
      console.error('Error eksekusi:', err);
      return conn.end();
    }
    
    stream.on('close', (code, signal) => {
      console.log('Selesai dengan kode: ' + code);
      conn.end();
    }).on('data', (data) => {
      process.stdout.write(data);
    }).stderr.on('data', (data) => {
      process.stderr.write(data);
    });
  });
}).on('error', (err) => {
  console.error('Koneksi Error:', err);
}).connect({
  host: '10.13.8.86',
  port: 22,
  username: 'heathcliff01',
  password: '@sphyx1a',
  readyTimeout: 20000
});
