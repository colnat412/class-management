import { transporter } from '../configs';
import { html } from '../utils';

export const sendEmailCode = async (email: string, code: string) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Your verification code',
    html: html(code),
  });
};
