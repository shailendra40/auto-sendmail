import { PrismaService } from '../prisma/prisma.service';
import { CreateBulkUserDto, CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createBulkUsers(createUserDtos: CreateBulkUserDto): Promise<{
        id: number;
        name: string;
        email: string;
    }[]>;
    createUser(data: CreateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
    getAllUsers(): Promise<{
        id: number;
        name: string;
        email: string;
    }[]>;
}
