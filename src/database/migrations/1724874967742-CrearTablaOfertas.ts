import { MigrationInterface, QueryRunner } from 'typeorm';

export class CrearTablaOfertas1724874967742 implements MigrationInterface {
  db = process.env.DB_NAME;
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`${this.db}\`.\`categorias\` 
      (\`cat_id\` int NOT NULL AUTO_INCREMENT,
      \`cat_nombre\` varchar(255),
      PRIMARY KEY (\`cat_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`${this.db}\`.\`libros\` 
      (\`lib_id\` int NOT NULL AUTO_INCREMENT,
      \`lib_titulo\` varchar(255),
      \`lib_descripcion\` varchar(255),
      \`lib_edicion\` varchar(255),
      \`lib_stock\` int NOT NULL,
      \`lib_imagen\` varchar(255),
      \`lib_estado\` varchar(255),
      \`cat_id\` int NOT NULL,
      PRIMARY KEY (\`lib_id\`),
      CONSTRAINT FK_libros_cat FOREIGN KEY (\`cat_id\`) REFERENCES \`${this.db}\`.\`categorias\`(\`cat_id\`)
      ) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS \`${this.db}\`.\`departamentos\` 
      (\`dept_cod\` int NOT NULL AUTO_INCREMENT,
      \`dept_nombre\` varchar(255),
      PRIMARY KEY (\`dept_cod\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS \`${this.db}\`.\`ciudades\` 
      (\`ciud_cod\` int NOT NULL AUTO_INCREMENT,
      \`ciud_nombre\` varchar(255),
      \`dept_cod\` int NOT NULL,
      PRIMARY KEY (\`ciud_cod\`),
      CONSTRAINT FK_ciudades_departamnetos FOREIGN KEY (\`dept_cod\`) REFERENCES \`${this.db}\`.\`departamentos\`(\`dept_cod\`)
      ) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`${this.db}\`.\`ciudades\``);
    await queryRunner.query(`DROP TABLE \`${this.db}\`.\`departamentos\``);
  }
}
