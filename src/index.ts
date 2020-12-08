import { getConnection } from 'typeorm';
import City from './entities/City';

getConnection()
    .createQueryBuilder()
    .insert()
    .into(City)
    .values({
        cityName: 'São paulo',
        uf: 'São Paulo',
    })
    .execute();
