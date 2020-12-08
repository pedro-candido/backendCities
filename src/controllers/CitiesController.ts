import { create } from 'domain';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Cities from '../entities/City';

export default {
    async index(request: Request, response: Response) {
        console.log(request)
        const citiesRepository = getRepository(Cities);

        const cities =  await citiesRepository.find()

        return response.json(cities)
    },

    async create(request: Request, response: Response){
        const citiesRepository = getRepository(Cities)
        const { cityName, uf } = request.body;

        citiesRepository.insert({cityName, uf})

        return response.json({cityName, uf})
    },

    async delete(request: Request, response: Response){
        console.log(request.params)
        return response.json('Salve o mundo')
    }
};
