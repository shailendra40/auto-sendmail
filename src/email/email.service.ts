// // src/email/email.service.ts
// import { Injectable, Logger } from '@nestjs/common';
// import { Cron } from '@nestjs/schedule';
// import { UserService } from '../user/user.service';
// import * as nodemailer from 'nodemailer';

// @Injectable()
// export class EmailService {
//   private readonly logger = new Logger(EmailService.name);
//   // private currentStep = 0; // To track the current email step

//   constructor(private userService: UserService) {}

//   private async sendEmail(to: string, subject: string, text: string) {
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: +process.env.EMAIL_PORT,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//   try {
//     await transporter.sendMail({
//       from: `"No Reply" <${process.env.EMAIL_FROM}>`,
//       to,
//       subject,
//       text,
//     });
//     this.logger.log(`Email sent to ${to}`);
//     } catch (error) {
//       this.logger.error(`Failed to send email to ${to}`, error.stack);
//     }
//   }

//   // Schedule tasks to send emails at different times of the day
//   // @Cron('0 6 * * *') // Send emails at 6 AM
//   // @Cron('* * * * *')  // Send emails every minute
//   // @Cron('*/1 * * * *')  // Send emails every 1 minute
//   @Cron('*/3 * * * *')  // Trigger every 3 minutes
//   // @Cron('*/2 * * * *') // Send emails every 2 minutes
//   async sendMorningEmails() {
//     // this.logger.log('Running sendTestEmails cron job');
//     const users = await this.userService.getAllUsers();
//     users.forEach(user => {
//       this.sendEmail(user.email, 'Good Morning', 'Good Morning!');
//     });
//   }

//   // // Cron job to run every minute for testing purposes
//   // @Cron('* * * * *')
//   // async sendTestEmails() {
//   //   this.logger.log('Running sendTestEmails cron job');
//   //   const users = await this.userService.getAllUsers();
//   //   users.forEach(user => {
//   //     this.sendEmail(user.email, 'Test Email', 'This is a test email!');
//   //   });
//   // }

//   // @Cron('0 12 * * *') // Send emails at 12 PM
//   // @Cron('*/2 * * * *') // Send emails every 2 minutes
//   @Cron('*/6 * * * *') // Send emails every 2 minutes
//   async sendAfternoonEmails() {
//     // this.logger.log('Running sendEmailsEvery2Minutes cron job');
//     const users = await this.userService.getAllUsers();
//     users.forEach(user => {
//       this.sendEmail(user.email, 'Good Afternoon', 'Good Afternoon!');
//     });
//   }

//   // @Cron('0 18 * * *') // Send emails at 6 PM
//   // @Cron('*/3 * * * *') // Send emails every 3 minutes
//   @Cron('*/9 * * * *') // Send emails every 3 minutes
//   async sendEveningEmails() {
//     // this.logger.log('Running sendEmailsEvery3Minutes cron job');
//     const users = await this.userService.getAllUsers();
//     users.forEach(user => {
//       this.sendEmail(user.email, 'Good Evening', 'Good Evening!');
//     });
//   }

//   // @Cron('0 22 * * *') // Send emails at 10 PM
//   // @Cron('*/4 * * * *') // Send emails every 4 minutes
//   @Cron('*/12 * * * *') // Send emails every 4 minutes
//   async sendNightEmails() {
//     // this.logger.log('Running sendEmailsEvery4Minutes cron job');
//     const users = await this.userService.getAllUsers();
//     users.forEach(user => {
//       this.sendEmail(user.email, 'Good Night', 'Good Night!');
//     });
//   }
// }




// ////  E V E R Y 3MIN. ALL MESSAGE SEND THIS CODE -----USING SWITCH CASE ------------>>

// import { Injectable, Logger } from '@nestjs/common';
// import { Cron } from '@nestjs/schedule';
// import { UserService } from '../user/user.service';
// import * as nodemailer from 'nodemailer';

// @Injectable()
// export class EmailService {
//   private readonly logger = new Logger(EmailService.name);
//   private currentStep = 0; // To track the current email step

//   constructor(private userService: UserService) {}

//   private async sendEmail(to: string, subject: string, text: string) {
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: +process.env.EMAIL_PORT,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     try {
//       await transporter.sendMail({
//         from: `"No Reply" <${process.env.EMAIL_FROM}>`,
//         to,
//         subject,
//         text,
//       });
//       this.logger.log(`Email sent to ${to}`);
//     } catch (error) {
//       this.logger.error(`Failed to send email to ${to}`, error.stack);
//     }
//   }

//   @Cron('*/3 * * * *') // Trigger every 3 minutes
//   async sendEmailsInSequence() {
//     const users = await this.userService.getAllUsers();

//     switch (this.currentStep) {
//       case 0:
//         this.logger.log('Sending Good Morning emails');
//         users.forEach(user => {
//           this.sendEmail(user.email, 'Good Morning', 'Good Morning!');
//         });
//         break;
//       case 1:
//         this.logger.log('Sending Good Afternoon emails');
//         users.forEach(user => {
//           this.sendEmail(user.email, 'Good Afternoon', 'Good Afternoon!');
//         });
//         break;
//       case 2:
//         this.logger.log('Sending Good Evening emails');
//         users.forEach(user => {
//           this.sendEmail(user.email, 'Good Evening', 'Good Evening!');
//         });
//         break;
//       case 3:
//         this.logger.log('Sending Good Night emails');
//         users.forEach(user => {
//           this.sendEmail(user.email, 'Good Night', 'Good Night!');
//         });
//         break;
//     }

//     // Update the step to the next one, and wrap around if needed
//     this.currentStep = (this.currentStep + 1) % 4;
//   }
// }




///////////         S  P  E  C  I  F  I  C TIME DENOTES///====================>>

// src/email/email.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as nodemailer from 'nodemailer';
import { UserService } from '../user/user.service';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(private userService: UserService) {}

  private async sendEmail(to: string, subject: string, text: string) {
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
    } catch (error) {
      this.logger.error(`Failed to send email to ${to}`, error.stack);
    }
  }

  // @Cron('55 22 * * *') // Send emails at 10:55 PM
  @Cron('43 13 * * *') // Send emails at 10:55 PM
  // @Cron('*/1 * * * *') // Send emails at 10:55 PM
  async sendEmailsAt1055PM() {
    this.logger.log('Running sendEmailsAt1055PM cron job');
    const users = await this.userService.getAllUsers();
    users.forEach(user => {
      // this.sendEmail(user.email, 'Email at 10:55 PM', 'This email is sent at 10:55 PM.');
      // this.sendEmail(user.email, 'Good Morning', `Good Morning, ${user.name}!`);
      this.sendEmail(user.email, 'Good Morning', `Hi ${user.name}\nGood Morning!`);
      // const greetings = [
      //   "Wake up and smell the success,",
      //   "Rise and shine,",
      //   "Good morning sunshine,",
      //   "Another day, another opportunity,",
      //   // "Bonjour,",
      //   // "Guten Morgen,",
      //   // "Buongiorno,",
      //   "Top of the morning to you,",
      // ];
      
      // const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      
      // const emailContent = `${randomGreeting} Hi ${user.name}!\nHope you have a fantastic day ahead!`;
      
      // this.sendEmail(user.email, 'Good Morning', emailContent);      

    });
  }

  // @Cron('59 22 * * *') // Send emails at 10:59 PM
  @Cron('32 13 * * *') // Send emails at 10:59 PM
  async sendEmailsAt1059PM() {
    this.logger.log('Running sendEmailsAt1059PM cron job');
    const users = await this.userService.getAllUsers();
    users.forEach(user => {
      // this.sendEmail(user.email, 'Email at 10:59 PM', 'This email is sent at 10:59 PM.');
      this.sendEmail(user.email, 'Good Morning', `Hi ${user.name}\nGood Afternoon!`);
      // const greetings = [
      //   "Good afternoon,",
      //   "Afternoon delight,",
      //   "Hope your afternoon is going well,",
      // ];
      // const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      
      // const emailContent = `${randomGreeting} ${user.name}!\nHope you have a fantastic day ahead!`;
      
      // this.sendEmail(user.email, 'Good Afternoon', emailContent);
    });
  }

  // @Cron('0 23 * * *') // Send emails at 11:00 PM
  @Cron('34 13 * * *') // Send emails at 11:00 PM
  async sendEmailsAt1100PM() {
    this.logger.log('Running sendEmailsAt1100PM cron job');
    const users = await this.userService.getAllUsers();
    users.forEach(user => {
      // this.sendEmail(user.email, 'Email at 11:00 PM', 'This email is sent at 11:00 PM.');
      // this.sendEmail(user.email, 'Good Evening', 'Good Evening!');
      this.sendEmail(user.email, 'Good Morning', `Hi ${user.name}\nGood Evening!`);
      // const greetings = [
      //   "Good evening,",
      //   "Evening all,",
      //   "Hey there,",
      //   "Hope your evening is relaxing,",
      //   "Sweet dreams begin,",
      // ];
      // const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      
      // const emailContent = `${randomGreeting} ${user.name}!\nHope you have a fantastic day ahead!`;
      
      // this.sendEmail(user.email, 'Good Evening', emailContent);
    });
  }

  // @Cron('6 23 * * *') // Send emails at 11:06 PM
  @Cron('36 13 * * *') // Send emails at 11:06 PM
  async sendEmailsAt1106PM() {
    this.logger.log('Running sendEmailsAt1106PM cron job');
    const users = await this.userService.getAllUsers();
    users.forEach(user => {
      // this.sendEmail(user.email, 'Email at 11:06 PM', 'This email is sent at 11:06 PM.');
      // this.sendEmail(user.email, 'Good Night', 'Good Night!');
      this.sendEmail(user.email, 'Good Morning', `Hi ${user.name}\nGood Night!`);

      // const greetings = [
      //   "Good night,",
      //   "Nighty night,",
      //   "Sweet dreams,",
      //   "Sleep tight,",
      //   "Dream big, sleep well,",
      // ];
      // const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      
      // const emailContent = `${randomGreeting} ${user.name}!\nHope you have a fantastic day ahead!`;
      
      // this.sendEmail(user.email, 'Good Night', emailContent);
    });
  }
}













// const userGreetings = {
//   morning: [
//     "Wake up and smell the success,",
//     "Rise and shine,",
//     "Good morning sunshine,",
//     "Another day, another opportunity,",
//     "Bonjour,",
//     "Guten Morgen,",
//     "Buongiorno,",
//     "Top of the morning to you,",
//   ],
//   afternoon: [
//     "Good afternoon,",
//     "Afternoon delight,",
//     "Hey there,",
//     "Hope your afternoon is going well,",
//     "Hola,",
//     "Ciao,",
//     "Bonjour,",
//     "Buona giornata,",
//   ],
//   evening: [
//     "Good evening,",
//     "Evening all,",
//     "Hey there,",
//     "Hope your evening is relaxing,",
//     "Hola,",
//     "Bonsoir,",
//     "Buonasera,",
//     "Sweet dreams begin,",
//   ],
//   night: [
//     "Good night,",
//     "Nighty night,",
//     "Sweet dreams,",
//     "Sleep tight,",
//     "Bonne nuit,",
//     "Gute Nacht,",
//     "Buonanotte,",
//     "Dream big, sleep well,",
//   ],
// };

// function getRandomGreeting(greetingsArray) {
//   return greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
// }

// const timeOfDay = new Date().getHours();
// let greetingType, greetingsArray;

// if (timeOfDay >= 5 && timeOfDay < 12) {
//   greetingType = 'morning';
// } else if (timeOfDay >= 12 && timeOfDay < 17) {
//   greetingType = 'afternoon';
// } else if (timeOfDay >= 17 && timeOfDay < 21) {
//   greetingType = 'evening';
// } else {
//   greetingType = 'night';
// }

// greetingsArray = userGreetings[greetingType];
// const randomGreeting = getRandomGreeting(greetingsArray);

// const emailContent = `${randomGreeting} ${user.name}!\nHope you have a fantastic ${greetingType}!`;

// this.sendEmail(user.email, `Good ${greetingType.charAt(0).toUpperCase() + greetingType.slice(1)}`, emailContent);
