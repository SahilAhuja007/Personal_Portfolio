const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

// =============================
// MAIL QUEUE IMPLEMENTATION
// =============================
let mailQueue = [];
let personalmailQueue = [];
let isProcessing = false;
let usermail = null;
// Gmail transporter

const sahilmailpassword = "qmnj sine zljw fgvu";
const sahilmail = "ahujasahil9172@gmail.com";
const mohitmail = "mohitjeswani74@gmail.com";
const mohitpassword = "hjey hzlj fvwm mful";
const rahulmail = "dhnvnvcd@gmail.com";
const rahulpassword = "apor mmmn hutj jbbh";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: parseInt("587"),
  auth: {
    user: "connectwithsahilandmohit@gmail.com",
    pass: "ctod yyqz rthy nclu",
  },
});
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: parseInt("587"),
  auth: {
    user: sahilmail,
    pass: sahilmailpassword,
  },
});

const transpor = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: parseInt("587"),
  auth: {
    user: mohitmail,
    pass: mohitpassword,
  },
});

const transporter1 = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: parseInt("587"),
  auth: {
    user: rahulmail,
    pass: rahulpassword,
  },
});

// Function to send mail sequentially
const sendMailFromQueue = async () => {
  if (
    isProcessing ||
    (mailQueue.length === 0 && personalmailQueue.length === 0)
  ) {
    return;
  }

  isProcessing = true;

  try {
    if (mailQueue.length > 0) {
      const current = mailQueue.shift();
      await transporter.sendMail(current.mailOptions);
      console.log(`✅ Mail sent successfully to: ${current.mailOptions.to}`);
    }

    if (personalmailQueue.length > 0) {
      const cu = personalmailQueue.shift();
      if (cu.mailOptions.from === sahilmail) {
        await transport.sendMail(cu.mailOptions);
      } else if (cu.mailOptions.from === mohitmail) {
        await transpor.sendMail(cu.mailOptions);
      } else {
        await transporter1.sendMail(cu.mailOptions);
      }
      console.log(`✅ Mail sent successfully to: ${cu.mailOptions.to}`);
    }
  } catch (error) {
    console.error("❌ Error sending mail:", error);
  }

  isProcessing = false;

  if (mailQueue.length > 0 || personalmailQueue.length > 0) {
    setTimeout(sendMailFromQueue, 1000);
  }
};

// =============================
// API ENDPOINT
// =============================
app.post("/send-message", upload.none(), async (req, res) => {
  const { mainName, email } = req.body;
  console.log("req body:-", req.body);

  // Choose resume based on name
  let resumePath = null;

  const normalizedName = mainName.trim().toLowerCase();
  if (normalizedName.includes("sahil")) {
    resumePath = path.resolve("./sahilresume.pdf");
    usermail = sahilmail;
  } else if (normalizedName.includes("mohit")) {
    resumePath = path.resolve("./mohitresume.pdf");
    usermail = mohitmail;
  } else {
    resumePath = path.resolve("./rahulresume.pdf");
    usermail = rahulmail;
  }

  console.log("resumepath:- ", resumePath);
  console.log("usermail:- ", usermail);
  // Create email template
  const htmlTemplate = `
    <div style="margin:0;padding:0;background-color:#f8f9fb;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color:#f8f9fb; padding:20px 0;">
        <tr>
          <td align="center">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="95%" style="max-width:700px; background:#ffffff; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.08); overflow:hidden;">
              
              <tr>
                <td style="background:linear-gradient(135deg,#6A5ACD,#836FFF); color:white; padding:25px 30px;">
                  <h2 style="margin:0;font-size:22px;">👋 Greetings from ${mainName}</h2>
                  <p style="margin:5px 0 0;font-size:14px;">Full Stack Developer | MERN Enthusiast</p>
                </td>
              </tr>

              <tr>
                <td style="padding:25px 30px; color:#333;">
                  <p>Dear Recruiter,</p>
                  <p>
                    I hope this message finds you well. I’m <strong>${mainName}</strong>, and I truly appreciate your time reviewing my profile.
                    I’ve attached my <strong>resume</strong> below for your consideration.
                  </p>

                  <p>
                    I’m passionate about <strong>Full Stack Development</strong> and have hands-on experience
                    building scalable applications using <strong>React, Node.js, Express, and MongoDB</strong>.
                    My focus is on clean, efficient, and maintainable code.
                  </p>

                  <p>
                    I’d love to connect and discuss how I can contribute to your team or organization.
                  </p>

                  <div style="background:#f3f4f6; padding:15px 20px; border-left:4px solid #6A5ACD; font-style:italic; border-radius:6px; margin-top:20px;">
                    “The best way to predict the future is to create it.” — Peter Drucker
                  </div>

                  <p style="margin-top:25px;">Thank you for taking the time to review my profile. I look forward to hearing from you.</p>

                  <p style="font-weight:bold; color:#6A5ACD; margin-top:20px;">Best Regards,</p>
                  <p><strong>${mainName}</strong><br>
                  <span style="font-size:13px; color:gray;">Full Stack Developer</span></p>
                </td>
              </tr>

              <tr>
                <td style="background:#fafafa; border-top:1px solid #eee; text-align:center; font-size:12px; color:#888; padding:12px;">
                  This email was automatically sent from the portfolio of <strong>${mainName}</strong>.
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </div>
  `;

  const attachments = [];
  if (resumePath && fs.existsSync(resumePath)) {
    attachments.push({
      filename: path.basename(resumePath),
      path: resumePath,
    });
  }
  console.log("attachments:-", attachments);

  const mail =
    mainName === "sahil"
      ? sahilmail
      : mainName === "mohit"
      ? mohitmail
      : rahulmail;

  console.log("mail:- ", mail);
  const mailOptions = {
    from: mail,
    to: email,
    subject: `Messege from ${mainName}`,
    html: htmlTemplate,
    attachments,
  };

  console.log("mailOptions:- ", mailOptions);
  // Add to queue
  personalmailQueue.push({ mailOptions });
  console.log(`📩 Added to queue. Queue length: ${mailQueue.length}`);

  // Start processing queue
  sendMailFromQueue();

  res
    .status(200)
    .json({ success: true, message: "Message added to queue successfully!" });
});

app.post("/send-personal-message", upload.none(), async (req, res) => {
  console.log("req body :- ", req.body);
  const { mainname, username, email, message } = req.body;
  if (!mainname || !username || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all the details" });
  }
  // Create email template
  const htmlTemplate = `
  <div style="margin:0;padding:0;background-color:#f4f6f8;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif; background-color:#f4f6f8; padding:20px 0;">
      <tr>
        <td align="center">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="95%" style="max-width:700px; background:#ffffff; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.07); overflow:hidden;">
            
            <tr>
              <td style="background:linear-gradient(135deg,#6A5ACD,#8A2BE2); color:white; padding:20px 30px;">
                <h2 style="margin:0; font-size:22px;">💬 New Message from Your Portfolio</h2>
              </td>
            </tr>

            <tr>
              <td style="padding:25px 30px; color:#333;">
                <p><strong>Hello ${mainname},</strong></p>
                <p>You’ve received a new message through your portfolio site 🎉</p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:20px 0;">
                  <tr>
                    <td style="width:120px; padding:5px 0; font-weight:bold;">👤 Name:</td>
                    <td>${username.trim().toUpperCase()}</td>
                  </tr>
                  <tr>
                    <td style="width:120px; padding:5px 0; font-weight:bold;">📧 Email:</td>
                    <td><a href="mailto:${email}" style="color:#6A5ACD;">${email}</a></td>
                  </tr>
                </table>

                <div style="background:#f7f7ff; border-left:5px solid #6A5ACD; padding:18px; border-radius:6px; line-height:1.6; color:#333;">
                  <strong>💬 Message:</strong><br>
                  ${message}
                </div>

                <p style="margin-top:25px;">You can respond directly to the sender via their provided email address.</p>

                <hr style="border:none; border-top:1px solid #eee; margin:25px 0;">

                <p style="font-weight:bold; color:#6A5ACD;">Best Regards,</p>
                <p>${username.trim().toUpperCase()}<br>
                <span style="font-size:13px; color:gray;">Portfolio Visitor</span></p>
              </td>
            </tr>

            <tr>
              <td style="background:#fafafa; border-top:1px solid #eee; text-align:center; font-size:12px; color:#888; padding:10px;">
                This message was automatically sent from your portfolio site.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
`;

  const mail = mainname.toLowerCase().includes("sahil") ? sahilmail : mohitmail;
  console.log("mail:- ", mail);
  const mailOptions = {
    from: "connectwithsahilandmohit@gmail.com",
    to: mail,
    subject: `New Portfolio Message from ${username.trim().toUpperCase()}`,
    html: htmlTemplate,
  };

  // Add to queue
  mailQueue.push({ mailOptions });
  console.log(`📩 Added to queue. Queue length: ${mailQueue.length}`);

  // Start processing queue
  sendMailFromQueue();

  res
    .status(200)
    .json({ success: true, message: "Message added to queue successfully!" });
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
