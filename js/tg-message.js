const TOKEN = '5977675073:AAGRZsFwWksh60DfRFB9lV5iLRPzee8r1fM';
      const CHAT_ID = '-1001790959821';
      const URL = `https://api.telegram.org/bot${TOKEN}/SendMessage`

document.getElementById('tg-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e);
    let message = `<b>Заявка з сайта</b>\n`;
    message += `<b>Ім'я </b> ${this.name.value}\n`;
    message += `<b>Email </b> ${this.email.value}\n`;
    message += `<b>Phone </b> ${this.tel.value}\n`;
    console.log(message);

    axios.post(URL, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
    })
})