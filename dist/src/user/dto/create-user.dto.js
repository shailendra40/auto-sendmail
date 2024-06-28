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
exports.CreateBulkUserDto = exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Shailendra', description: 'The name of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ysly305@gmail.com' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
class CreateBulkUserDto {
}
exports.CreateBulkUserDto = CreateBulkUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        title: 'users',
        example: [
            {
                name: 'Shailendra',
                email: 'ysly305@gmail.com',
            },
            {
                name: 'Shailendra Ydv',
                email: 'yshailendra216@gmail.com',
            },
            {
                name: 'Prakash Kr.',
                email: 'pydv1415@gmail.com',
            },
            {
                name: 'Nirdesh Pokhrel ',
                email: 'nirdeshpokhrel29@gmail.com',
            },
        ],
        type: [CreateUserDto],
    }),
    __metadata("design:type", Array)
], CreateBulkUserDto.prototype, "users", void 0);
//# sourceMappingURL=create-user.dto.js.map