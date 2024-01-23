import { createTransport } from "nodemailer";

export default class MailService {
    transport = createTransport({
        host: "smtp.gmail.com",
        port: 587,
        service: "gmail",
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
    });

    async sendActivationMail(to: string, link: string) {
        const newMail = {
            from: process.env.SMTP_USER,
            to,
            subject: 'Activation account on ' + process.env.API_URL,
            text: 'underText',
            html:
                `<div>` +
                `<h1>` +
                `<a href="${link}">` + link + `</a>` +
                `</h1>` +
                `</div>`
        };
        await this.transport.sendMail(newMail);
    }
}