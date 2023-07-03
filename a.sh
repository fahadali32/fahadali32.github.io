curl --request POST \
     --url https://api.brevo.com/v3/smtp/email \
     --header 'accept: application/json' \
     --header 'api-key: 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' \
     --header 'content-type: application/json' \
     --data '
{
  "sender": {
    "name": "Mary from MyShop",
    "email": "no-reply@myshop.com",
    "id": 2
  },
  "to": [
    {
      "email": "jimmy98@example.com",
      "name": "Jimmy"
    }
  ],
  "bcc": [
    {
      "email": "helen9766@example.com",
      "name": "Helen"
    }
  ],
  "cc": [
    {
      "email": "ann6533@example.com",
      "name": "Ann"
    }
  ],
  "htmlContent": "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>",
  "textContent": "Please confirm your email address by clicking on the link https://text.domain.com",
  "subject": "Login Email confirmation",
  "replyTo": {
    "email": "ann6533@example.com",
    "name": "Ann"
  },
  
  "scheduledAt": "2022-04-05T12:30:00+02:00",
  "batchId": "5c6cfa04-eed9-42c2-8b5c-6d470d978e9d"
}
'
