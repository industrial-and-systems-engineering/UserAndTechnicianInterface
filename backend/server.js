import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import equipmentRoutes from './routes/equipmentRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', equipmentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    connectDB();
});
