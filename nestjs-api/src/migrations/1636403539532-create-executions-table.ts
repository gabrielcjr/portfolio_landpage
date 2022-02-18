import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createExecutionsTable1636403539532 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'executions',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'projectId',
            type: 'int',
          },
          {
            name: 'associateId',
            type: 'int',
          },
          {
            name: 'Inicio',
            type: 'date',
          },
          {
            name: 'Fim',
            type: 'date',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
