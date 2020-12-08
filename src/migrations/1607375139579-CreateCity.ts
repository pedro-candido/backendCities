import { timeStamp } from 'console';
import { query } from 'express';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCity1607375139579 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Cities',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'cityName',
                        type: 'varchar'
                    },
                    {
                        name: 'uf',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamptz'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamptz'
                    }
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Cities');
    }
}
