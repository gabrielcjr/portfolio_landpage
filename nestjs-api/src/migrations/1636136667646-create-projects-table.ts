import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProjectsTable1636136667646 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'projects',
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
            isUnique: true,
          },
          {
            name: 'Descrição',
            type: 'varchar',
          },
          {
            name: 'Início',
            type: 'date',
          },
          {
            name: 'Fim',
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

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
