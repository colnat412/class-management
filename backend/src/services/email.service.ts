import { transporter } from '../configs';

export const sendEmailCode = async (
  email: string,
  code: string,
  html: string
) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Your verification code',
    html,
  });
};
