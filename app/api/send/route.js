import nodemailer from "nodemailer";


export async function POST(req) {
    try {
        const body = await req.json();
        const { firstname, lastname, email, subject, message } = body;

        // transporter untuk kirim email lewat smtp
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // format email

        await transporter.sendMail({
            from: `"${firstname} ${lastname}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `New Message from ${firstname} ${lastname}: ${subject}`,
            html: `
                <h2> Ada Yang Tertarik Portofolio Mu Nih </h2>
                <p><strong>Nama:</strong> ${firstname} ${lastname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Pesan:</strong></p>
                <p>${message}</p>
                `
        });

        return new Response(JSON.stringify({succes: true}), {status: 200});
    } catch (err) {
        console.error("Send Message Error:", err);
        return new Response(JSON.stringify({succes: false, error: err.message}), {status: 500});
    }
}