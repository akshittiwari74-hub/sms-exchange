const nodemailer = require('nodemailer');

async function testSmtp() {
  console.log("Creating transporter with smtpout.secureserver.net:465...");
  const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465,
    secure: true, // SSL/TLS
    auth: {
      user: 'admin@namxtelecom.site',
      pass: '@mAn9034424020',
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    console.log("Verifying SMTP connection credentials...");
    await transporter.verify();
    console.log("SUCCESS! SMTP connection verified.");

    console.log("Sending test email...");
    const info = await transporter.sendMail({
      from: '"NAMX Telecom" <admin@namxtelecom.site>',
      to: 'akshittiwari74@gmail.com, admin@namxtelecom.site',
      subject: 'NAMX Telecom - Live SMTP Verification',
      text: 'Hello, this is a test email sent directly via GoDaddy Secureserver SMTP (smtpout.secureserver.net:465) using admin@namxtelecom.site.',
      html: '<h3>NAMX Telecom SMTP Live Verification</h3><p>This email confirms that direct SMTP routing from <strong>admin@namxtelecom.site</strong> via <code>smtpout.secureserver.net</code> is fully working!</p>'
    });

    console.log("Email sent successfully! MessageId:", info.messageId);
    console.log("Response:", info.response);
  } catch (error) {
    console.error("SMTP Error:", error);
  }
}

testSmtp();
