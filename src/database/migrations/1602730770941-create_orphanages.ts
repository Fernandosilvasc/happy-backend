import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602730770941 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, // it's makes start from positive number
                    isPrimary: true, // it's a locator key
                    isGenerated: true, // it's makes auto create 
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 2,
                    precision: 10
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 2, // it's basically define how much number will show before comma,
                    precision: 10 // ... after comma
                },
                {
                    name: 'about',
                    type: 'text'
                },
                {
                    name: 'instructions',
                    type: 'text'
                },
                {
                    name: 'opening_hours',
                    type: 'varchar'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                },

            ]
        }))
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages');
    }

}
