import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const {
    refId,
    timestamp,
    name,
    company,
    email,
    phone,
    countryCode,
    isWhatsapp,
    isTelegram,
    country,
    product,
    volume,
    message
  } = req.body || {};

  const fullPhone = `${countryCode || ''} ${phone || ''} [WA: ${isWhatsapp ? 'Yes' : 'No'} | TG: ${isTelegram ? 'Yes' : 'No'}]`.trim();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtpout.secureserver.net',
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: true,
    auth: {
      user: process.env.SMTP_USER || 'admin@namxtelecom.site',
      pass: process.env.SMTP_PASS || '@mAn9034424020',
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailSubject = `[Inquiry ${refId || 'Lead'}] ${company ? `${company} - ` : ''}${name || 'New Client'} (${product || 'Wholesale SMS'})`;

  const htmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background: #ffffff;">
      <div style="background: #0f172a; padding: 24px; color: #ffffff;">
        <h2 style="margin: 0 0 6px 0; font-size: 20px; color: #38bdf8;">NAMX Telecom — Consultation Inquiry</h2>
        <p style="margin: 0; color: #94a3b8; font-size: 14px;">Reference ID: <strong>${refId || 'N/A'}</strong> · Received: ${timestamp || new Date().toLocaleString()}</p>
      </div>

      <div style="padding: 24px;">
        <h3 style="margin-top: 0; margin-bottom: 16px; font-size: 16px; color: #1e293b; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Contact Information</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 12px; background: #f8fafc; width: 35%; font-weight: 600; color: #475569;">Full Name:</td>
            <td style="padding: 8px 12px; color: #0f172a;">${name || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #ffffff; font-weight: 600; color: #475569;">Company Name:</td>
            <td style="padding: 8px 12px; color: #0f172a;">${company || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f8fafc; font-weight: 600; color: #475569;">Business Email:</td>
            <td style="padding: 8px 12px; color: #0284c7; font-weight: 600;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email || 'Not provided'}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #ffffff; font-weight: 600; color: #475569;">Phone & Messengers:</td>
            <td style="padding: 8px 12px; color: #0f172a;">${fullPhone || 'Not provided'}</td>
          </tr>
        </table>

        <h3 style="margin-top: 0; margin-bottom: 16px; font-size: 16px; color: #1e293b; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Project Parameters</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 12px; background: #f8fafc; width: 35%; font-weight: 600; color: #475569;">Target Country:</td>
            <td style="padding: 8px 12px; color: #0f172a;">${country || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #ffffff; font-weight: 600; color: #475569;">Interested Solution:</td>
            <td style="padding: 8px 12px; color: #0f172a; font-weight: 600;">${product || 'Wholesale Messaging'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f8fafc; font-weight: 600; color: #475569;">Estimated Volume:</td>
            <td style="padding: 8px 12px; color: #0f172a;">${volume || 'Not specified'}</td>
          </tr>
        </table>

        ${message ? `
          <h3 style="margin-top: 0; margin-bottom: 12px; font-size: 16px; color: #1e293b; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Client Message & Route Specs</h3>
          <div style="background: #f8fafc; border-left: 4px solid #38bdf8; padding: 16px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</div>
        ` : ''}
      </div>

      <div style="background: #f1f5f9; padding: 16px 24px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
        Direct transmission from <strong>NAMX Telecom Website</strong> (https://www.namxtelecom.site)<br/>
        Dispatched via secure SMTP relay (smtpout.secureserver.net)
      </div>
    </div>
  `;

  try {
    const info = await transporter.sendMail({
      from: '"NAMX Telecom Portal" <admin@namxtelecom.site>',
      to: 'admin@namxtelecom.site, akshittiwari74@gmail.com, namxtelecom@gmail.com',
      replyTo: email || 'admin@namxtelecom.site',
      subject: mailSubject,
      text: `NAMX Telecom Inquiry [${refId}]\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${fullPhone}\nCountry: ${country}\nProduct: ${product}\nVolume: ${volume}\nMessage:\n${message}`,
      html: htmlContent,
    });

    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (err) {
    console.error('SMTP Delivery Error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
