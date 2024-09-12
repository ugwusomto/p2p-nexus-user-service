import { DataSource } from "typeorm";
import {ConfigService} from "@nestjs/config"
import { INJECTION_TOKENS } from "src/constants/index.constant";

type DB_TYPE = "mysql" | "mariadb" | "postgres";

export const DataBaseProviders = [
    {
        provide: INJECTION_TOKENS.DATA_SOURCE,
        useFactory: async (configService:ConfigService) => {
            const dataSource = new DataSource({
                type: configService.get<DB_TYPE>("DB_TYPE") as DB_TYPE,
                host: configService.get<string>("DB_HOST"),
                port: configService.get<number>("DB_PORT"),
                username: configService.get<string>("DB_USERNAME"),
                password: configService.get<string>("DB_PASSWORD"),
                database: configService.get<string>("DB_NAME"),
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: configService.get<string>("NODE_ENV") == "production" ? false : true,
            });
            return dataSource.initialize()
        },
        inject:[ConfigService]
    }
];

export default DataBaseProviders;