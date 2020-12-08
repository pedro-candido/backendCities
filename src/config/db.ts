import { createConnection } from 'typeorm';

export const connectDb = async () => {
    const connection = await createConnection();
    console.log('DB Conectado');
    
    process.on('SIGINT', () => {
        connection.close().then(() => {
            console.log('Closed');
        });
    });
};
