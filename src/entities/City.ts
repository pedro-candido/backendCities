import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

// Nome da tabela
@Entity('Cities')
export default class City{
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({})
    cityName!: string;

    @Column({})
    uf!: string;
}