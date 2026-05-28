import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, location, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields. Name, email, and message are required.',
      });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address format.' });
    }

    const { data, error } = await resend.emails.send({
      from: 'K3M Excavation <hello@k3mexcavation.com>',
      to: ['k3mllc@hotmail.com'],
      replyTo: email,
      subject: `New Project Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #111111; padding: 32px; text-align: center;">
            <h1 style="color: #AD3432; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 4px; font-style: italic;">
              New Project Request
            </h1>
            <p style="color: #999999; margin: 8px 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">
              K3M Excavation LLC — Contact Form Submission
            </p>
          </div>

          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #AD3432; font-weight: bold; width: 140px; vertical-align: top;">
                  Full Name
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px; font-weight: bold; color: #111111;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #AD3432; font-weight: bold; vertical-align: top;">
                  Email
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px; color: #111111;">
                  <a href="mailto:${email}" style="color: #AD3432; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #AD3432; font-weight: bold; vertical-align: top;">
                  Phone
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px; color: #111111;">
                  <a href="tel:${phone}" style="color: #111111; text-decoration: none;">${phone}</a>
                </td>
              </tr>` : ''}
              ${location ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #AD3432; font-weight: bold; vertical-align: top;">
                  Location
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px; color: #111111;">
                  ${location}
                </td>
              </tr>` : ''}
              ${service ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #AD3432; font-weight: bold; vertical-align: top;">
                  Service Type
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px; color: #111111;">
                  ${service}
                </td>
              </tr>` : ''}
              <tr>
                <td style="padding: 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #AD3432; font-weight: bold; vertical-align: top;">
                  Project Details
                </td>
                <td style="padding: 12px 0; font-size: 15px; color: #111111; line-height: 1.6;">
                  ${message}
                </td>
              </tr>
            </table>
          </div>

          <div style="background: #f8f8f8; padding: 20px 32px; text-align: center; border-top: 2px solid #AD3432;">
            <p style="color: #999999; font-size: 11px; margin: 0; text-transform: uppercase; letter-spacing: 1px;">
              Reply directly to this email to respond to ${name}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error. Please try again later.' });
  }
}
