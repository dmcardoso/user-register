import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import countries from '../seeds/countries';

export default class CreateCountries1591043338418
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'countries',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );

        await queryRunner.manager.insert('countries', countries);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('countries');
    }
}
