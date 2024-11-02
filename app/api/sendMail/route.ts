import transporter from "@/lib/transporter";
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest){
  const { name, email, subject, message } = await req.json();
  // console.log({ name, email, subject, message });
  const myEmail = process.env.MY_EMAIL;

  try {
    const mailOptions = {
      from: `${name} <${email}>`,
      to: myEmail,
      subject: subject,
      html: `
      <html>
        <body>
          <p>${message}</p>
          <br/>
          <br/>
          <p>Regards,</p>
          <p>${name}</p>
        </body>
      </html>
      `,
    };
  
    // send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json({ message: "Email not sent" }, { status: 500 });
  }
};