"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBulkUsers(createUserDtos) {
        const createdUsers = await this.prisma.user.createMany({
            data: createUserDtos.users,
            skipDuplicates: true,
        });
        const users = await this.prisma.user.findMany({
            where: {
                email: {
                    in: createUserDtos.users.map((user) => user.email),
                },
            },
        });
        return users;
    }
    async createUser(data) {
        const { name, email } = data;
        console.log('Email:', email);
        const userExists = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (userExists) {
            throw new common_1.ConflictException('User with this email already exists');
        }
        const user = await this.prisma.user.create({
            data: {
                name,
                email,
            },
        });
        return user;
    }
    async getAllUsers() {
        return this.prisma.user.findMany();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map