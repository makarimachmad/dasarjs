function Mail() {
    this.from = 'pengirim@dicoding.com';
};
 
Mail.prototype.sendMessage = function n(msg, to) {
  console.log(`you send: ${msg} to ${to} from ${this.from}`);
};
// pemanggilan
 
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');
 
/**
output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
    }
    sendMessage(msg, to, from) {
        console.log(`you send: ${msg} to ${to} from ${from}`);
        // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        this.contacts.push(to);
    };
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');

/**
you send: hallo to penerima@dicoding.com from aku@gmail.com
**/