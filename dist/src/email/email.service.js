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
var EmailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const nodemailer = require("nodemailer");
const user_service_1 = require("../user/user.service");
let EmailService = EmailService_1 = class EmailService {
    constructor(userService) {
        this.userService = userService;
        this.logger = new common_1.Logger(EmailService_1.name);
    }
    async sendEmail(to, subject, text) {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: +process.env.EMAIL_PORT,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        try {
            await transporter.sendMail({
                from: `"No Reply" <${process.env.EMAIL_FROM}>`,
                to,
                subject,
                text,
            });
            this.logger.log(`Email sent to ${to}`);
        }
        catch (error) {
            this.logger.error(`Failed to send email to ${to}`, error.stack);
        }
    }
    async sendEmailsAt1055PM() {
        this.logger.log('Running sendEmailsAt1055PM cron job');
        const users = await this.userService.getAllUsers();
        users.forEach(user => {
            this.sendEmail(user.email, 'Good Morning', `Hi ${user.name}\nGood Morning!`);
        });
    }
    async sendEmailsAt1059PM() {
        this.logger.log('Running sendEmailsAt1059PM cron job');
        const users = await this.userService.getAllUsers();
        users.forEach(user => {
            this.sendEmail(user.email, 'Good Morning', `Hi ${user.name}\nGood Afternoon!`);
        });
    }
    async sendEmailsAt1100PM() {
        this.logger.log('Running sendEmailsAt1100PM cron job');
        const users = await this.userService.getAllUsers();
        users.forEach(user => {
            this.sendEmail(user.email, 'Good Morning', `Hi ${user.name}\nGood Evening!`);
        });
    }
    async sendEmailsAt1106PM() {
        this.logger.log('Running sendEmailsAt1106PM cron job');
        const users = await this.userService.getAllUsers();
        users.forEach(user => {
            this.sendEmail(user.email, 'Good Morning', `Hi ${user.name}\nGood Night!`);
        });
    }
};
exports.EmailService = EmailService;
__decorate([
    (0, schedule_1.Cron)('43 13 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmailService.prototype, "sendEmailsAt1055PM", null);
__decorate([
    (0, schedule_1.Cron)('32 13 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmailService.prototype, "sendEmailsAt1059PM", null);
__decorate([
    (0, schedule_1.Cron)('34 13 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmailService.prototype, "sendEmailsAt1100PM", null);
__decorate([
    (0, schedule_1.Cron)('36 13 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmailService.prototype, "sendEmailsAt1106PM", null);
exports.EmailService = EmailService = EmailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], EmailService);
//# sourceMappingURL=email.service.js.map