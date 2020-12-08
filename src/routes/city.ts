import express, { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import City from '../entities/City';
const routeCity = express.Router();

routeCity.get('/cities', async (request: Request, response: Response) =>{
    const cities = await getConnection()
        .createQueryBuilder()
        .select("cityName")
        .from(City, "Cities")

    return response.json({
        message: cities
    })
})

routeCity.post('/cities', (request: Request, response: Response) => {
    let { cityName, uf } = request.body;
    getConnection()
        .createQueryBuilder()
        .insert()
        .into(City)
        .values({
            cityName: cityName,
            uf: uf,
        })
        .execute();

    return response.json({
        cityName, uf
    })
});

export default routeCity