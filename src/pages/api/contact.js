import handler from "./handler";
var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;

var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.API_KEY;
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
// var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

const transEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

handler.post(async (req, res) => {
  const sender = {
    email: "contact.withfahad247@gmail.com",
  };
  const receiver = [
    {
      email: "fahad288ali@gmail.com",
    },
  ];

  const data = await transEmailApi
    .sendTransacEmail({
      sender,
      to: receiver,
      subject: `Message from ${req.body.name} ${req.body.email}`,
      textContent: `
        ${req.body.message}
        `,
      htmlContent: `
        <h1>New Message</h1>
        Message from ${req.body.name}
        ${req.body.email}
        </br>
        ${req.body.message}
                `,
      params: {
        role: "Frontend",
      },
    })
    .catch(console.log);
    // .then(console.log)
  console.log(data);
  res.json(data);
});

export default handler.handler();
