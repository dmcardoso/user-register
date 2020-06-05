import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export default class CreateUsers1591043338419 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
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
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'gender',
                        type: 'enum',
                        isNullable: false,
                        enum: ['male', 'female', 'other'],
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'country_id',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'newsletter',
                        type: 'boolean',
                        isNullable: false,
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

        await queryRunner.createForeignKey(
            'users',
            new TableForeignKey({
                name: 'UserCountry',
                columnNames: ['country_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'countries',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('users', 'UserCountry');
        await queryRunner.dropTable('users');
    }
}
