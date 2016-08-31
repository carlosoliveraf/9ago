var nodemailer = require('nodemailer');

// O primeiro passo é configurar um transporte para este
// e-mail, precisamos dizer qual servidor será o encarregado
// por enviá-lo:
var transporte = nodemailer.createTransport({
  service: 'Gmail', // Como mencionei, vamos usar o Gmail
  auth: {
    user: 'tibiacharactermonitor@gmail.com', // Basta dizer qual o nosso usuário
    pass: '1Q2w3E4r'             // e a senha da nossa conta
  } 
});

// Após configurar o transporte chegou a hora de criar um e-mail
// para enviarmos, para isso basta criar um objeto com algumas configurações
// var email = {
//   from: 'tibiacharactermonitor@gmail.com', // Quem enviou este e-mail
//   to: 'carlosedof@gmail.com', // Quem receberá
//   subject: 'Node.js ♥ unicode',  // Um assunto bacana :-) 
//   html: 'E-mail foi enviado do <strong>Node.js</strong>' // O conteúdo do e-mail
// };

// Pronto, tudo em mãos, basta informar para o transporte
// que desejamos enviar este e-mail

// transporte.sendMail(email, function(err, info){
//   if(err)
//     throw err; // Oops, algo de errado aconteceu.

//   console.log('Email enviado! Leia as informações adicionais: ', info);
// });

var send = function(mail){
   transporte.sendMail(mail, function(err, info){
   if(err)
     throw err; // Oops, algo de errado aconteceu.

   console.log('Email enviado! Leia as informações adicionais: ', info);
 });
}

exports.teste = function(){
  console.log("teste");

};


exports.welcomeMail = function(user){
  var mail = {
  from: 'tibiacharactermonitor@gmail.com',
  to: user.email,
  subject: 'Welcome to Tibia Character Monitor',
  html: 'Hello '+user.name+'! Thanks for signing in! We are glad to have you on <strong>Tibia Character Monitor</strong><br/>Your username is: '+user.username
};
  send(mail);


};