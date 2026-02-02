import { connectDB } from './config/db';
import { initializeDatabase } from './database';
import app from './app';

const PORT = process.env.PORT || 5000;

const startServer = async (): Promise<void> => {
  const isConnected = await connectDB();
  
  if (!isConnected) {
    console.error('❌ Server startup failed: Database connection required');
    process.exit(1);
  }
  
  await initializeDatabase();
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
