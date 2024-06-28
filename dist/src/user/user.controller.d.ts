import { UserService } from './user.service';
import { CreateBulkUserDto, CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
    createBulkUsers(createUserDtos: CreateBulkUserDto): Promise<{
        id: number;
        name: string;
        email: string;
    }[]>;
    getAllUsers(): Promise<{
        id: number;
        name: string;
        email: string;
    }[]>;
}
