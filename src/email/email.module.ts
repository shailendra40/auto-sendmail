// src/email/email.module.ts
import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { UserModule } from '../user/user.module'; // Assuming you have a UserModule

@Module({
  imports: [UserModule],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
