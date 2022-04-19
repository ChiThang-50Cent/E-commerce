const sgMail = require("@sendgrid/mail");
const handlebars = require("handlebars");

const { readHTMLFile } = require("../helpers/reader.helper");
const environment = require("../environments/environment.local");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const mailConfirmationAccount = (account) => {
};

const mailResetPassword = (account) => {
};

module.exports = { mailConfirmationAccount, mailResetPassword };
