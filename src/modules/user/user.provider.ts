import { DataSource } from "typeorm";
import { INJECTION_TOKENS } from "src/constants/index.constant";
import User from "src/entities/user.entity";

const UserProvider = [
    {
        provide:INJECTION_TOKENS.USER_REPOSITORY,
        useFactory: (dataSource:DataSource) => (dataSource.getRepository(User)),
        inject:[INJECTION_TOKENS.DATA_SOURCE]
    }
];

export default UserProvider;