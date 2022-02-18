import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAssociatesTable1636136093732 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'associates',
        // eslint-disable-next-line prettier/prettier
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isUnique: true,
            generationStrategy: 'increment',
          },
          {
            name: 'Nome',
            type: 'varchar',
          },
          {
            name: 'Cargo',
            type: 'varchar',
          },
          {
            name: 'Admissão',
            type: 'date',
          },
          {
            name: 'Ativo',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('associates');
  }
}
