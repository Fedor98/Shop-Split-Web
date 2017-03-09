/**
 * MailsControllerController
 *
 * @description :: Server-side logic for managing Mailscontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var moment = require('moment');

module.exports = {
	//Controller pour afficher la boite de réception d'un utilisateur
    mailbox: function(req, res) {
        var userId = req.session.user.id;
        var messagesList = [];
        Receivers.find({receiverId: userId}).exec(function(err, results) {
            findMails( results, [], 0, res, req );
        });
    },
    
    //Affiche la boite des messages envoyés d'un utilisateur
    sendBox: function(req, res) {
        var userId =  req.session.user.id;
        Mails.find({senderId: userId}).exec(function(err, results) {
            findSendedMails(results, [], 0, res, req);
        });
    },
    
    //Affiche la page pour rédiger un nouveau message
    //Le parametre 'to' correspond à l'id du desinataire
    new_message: function(req, res) {
        var userId = req.session.user.id;
        var receiver = req.param('to');
        
        res.view("messagerie/rediger_message", {user: req.session.user, userTo: receiver} );
    },
    
    //Envoie le message à l'utilisateur correspondant à l'id 'to'
    sendMessage: function(req, res) {
        var subject = req.param('subject');
        var message = req.param('message');
        var receiver = req.param('to');
        
        console.log("RECEIVER : " + subject + " " + message + " " + receiver);
        
        var user = req.session.user;
        
        Mails.create({senderId: user.id,
                      date: new Date(),
                      title: subject,
                      content: message}).exec(function(err, mail) {
            if (err) {
                console.log("Erreur mails");
                console.log(err);
                return;
            }
            
            Receivers.create({messageId: mail.id,
                              receiverId: receiver}).exec(function(err, result) {
                if (err) {
                    console.log("Erreur receivers");
                    console.log(err);
                    return;
                }
                res.send(200, {user: req.session.user});
            })
        })
        
        
    },
    
    //Affiche un message sélectionné que ce soit depuis la boite de réception ou la boite de messages envoyés
    readMessage: function(req, res) {
        var id = req.param('id');
        
        Mails.findOne({id: id}).exec(function(err, result){
            User.findOne({id: result.senderId}).exec(function(err, resultUser) {
                res.view("messagerie/lire", {user: req.session.user,senderName: resultUser.firstName + " " + resultUser.lastName, mail: result});
            });
        });
    },
    
    //Controller pour répondre à un message
    answerMessage: function(req, res) {
        var idMail = req.param('id');
        
        Mails.findOne({id: idMail}).exec(function(err, result) {
            res.view("messagerie/rediger_message", {user: req.session.user, userTo: result.senderId, subject: "Re: " + result.title} );
        });
    }
};

//Crée une liste de tout les messages reçus d'un utilisateur
var findMails = function( _receivers, _mails, _index, _res, _req )
{
    if (_receivers.length <= _index )
        return _res.view("messagerie/messagerie", {user: _req.session.user, mails: _mails});
    
    Mails.findOne({id: _receivers[_index].messageId}).exec(function(err, resultMail) {
        User.findOne({id: resultMail.senderId}).exec(function(err, resultUser){
            _mails.push({mail: resultMail, user: resultUser.firstName + " " + resultUser.lastName});
            findMails( _receivers, _mails, _index + 1, _res, _req ); 
        });
    });
}

//Crée une liste de tout les messages envoyés d'un utilisateur
var findSendedMails = function( _sendedMails, _mails, _index, _res, _req )
{
    if (_sendedMails.length <= _index )
        return _res.view("messagerie/envoye", {user: _req.session.user, mails: _mails});
    
    Receivers.findOne({messageId: _sendedMails[_index].id}).exec(function(err, resultReceiver) {
        
        User.findOne({id: resultReceiver.receiverId}).exec(function(err, resultUser){
            
            _mails.push({mail: _sendedMails[_index], user: {name: resultUser.firstName + " " + resultUser.lastName, id: resultUser.id}});
                         
            findSendedMails( _sendedMails, _mails, _index + 1, _res, _req ); 
        });
    });
}