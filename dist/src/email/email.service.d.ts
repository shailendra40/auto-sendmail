import { UserService } from '../user/user.service';
export declare class EmailService {
    private userService;
    private readonly logger;
    constructor(userService: UserService);
    private sendEmail;
    sendEmailsAt1055PM(): Promise<void>;
    sendEmailsAt1059PM(): Promise<void>;
    sendEmailsAt1100PM(): Promise<void>;
    sendEmailsAt1106PM(): Promise<void>;
}
