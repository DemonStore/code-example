import { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

type EmailData = {
  email: string
  message: string
}

const { MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD, MAIL_RECIPIENT, MAIL_COPY_RECIPIENT } = process.env;
const MAIL_SUBJECT = 'Сообщение в форме на сайте example.com'

function getText(email: string, message: string) {
  return `Email отправителя: ${email}\nТекст сообщения: ${message}`;
}

async function sendMail(data: EmailData) {
  const transporter = createTransport({
    host: MAIL_HOST,
    port: Number(MAIL_PORT),
    secure: true,
    auth: {
      user: MAIL_USERNAME,
      pass: MAIL_PASSWORD
    }
  })

  await transporter.sendMail({
    from: MAIL_USERNAME,
    replyTo: data.email,
    to: MAIL_RECIPIENT,
    cc: MAIL_COPY_RECIPIENT,
    subject: MAIL_SUBJECT,
    text: getText(data.email, data.message),
  })
}

function validate(data: EmailData): boolean {
  const email = data.email?.trim()
  const message = data.message?.trim()

  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) && !!message
}

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { body, method } = req

  if (method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${method} Not Allowed`)
  }

  if (!validate(body)) {
    return res.status(400).end('Validation failed')
  }

  await sendMail(body)
  res.status(200).end('Success')
}

export default handler
