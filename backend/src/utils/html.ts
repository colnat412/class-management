export const html = (code: string) => `
    <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 24px; border-radius: 8px; max-width: 400px; margin: auto; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <h2 style="color: #2d7ff9; margin-bottom: 16px;">Sign in to Class Management App</h2>
        <p style="font-size: 16px; color: #333;">Your login code is:</p>
        <div style="font-size: 32px; font-weight: bold; color: #2d7ff9; letter-spacing: 4px; margin: 16px 0;">
            ${code}
        </div>
        <p style="font-size: 14px; color: #888;">Please don't share this code with anyone.</p>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #bbb;">If you didn't request this code, please ignore this email.</p>
    </div>
  `;
