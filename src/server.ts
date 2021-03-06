import app from './app';
import dotenv from 'dotenv';
dotenv.config({
  path: __dirname + '/.env',
});

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION! shutting down...');

  process.exit(1);
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err);
  console.log('UNHANDLED REJECTION! shutting down...');

  server.close(() => {
    process.exit(1);
  });
});
