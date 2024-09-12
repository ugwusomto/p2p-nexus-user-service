import * as bcrypt from 'bcrypt';


interface IResponse<T> {
    status: boolean;
    message: string;
    data?: T;
    error?: string;
}

export function successResponse<T>(data: T, message: string = 'Success') {
    return {
        status: true,
        message,
        data,
    };
}

export async function hash(data: string): Promise<string> {
    return bcrypt.hash(data, bcrypt.genSaltSync(10, "a"));
}

export async function getSalt(data: string): Promise<string> {
    return await bcrypt.hash(data, bcrypt.genSaltSync(10, "a"));
}

export function compareHash(nonHashedValue: string, hashedValue: string): boolean {
    return bcrypt.compareSync(nonHashedValue, hashedValue);
}
