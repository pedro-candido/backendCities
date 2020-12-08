import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Customers')
export class Customer {
    @PrimaryColumn('increment')
    id!: number;

    @Column({})
    name!: string;

    @Column({})
    sex!: string

    @Column({})
    birth!: Date

    @Column({})
    age!: number

    @Column({})
    cityName!: string
}
