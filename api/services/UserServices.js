module.exports = {
    
    //Crée un utilisateur vide dans la base de donnée
    createNewUser: function (data) {
        var moment = require('moment');
        User.create({id: data.id,
                     dateSubscript: new Date()
                    }).exec(function(err, created){
            if (!err){
                return true;
            }
            else {
                console.log(err);
                return false;
            }
        });
        
        Interest.create({userId: data.id, countries: "", interest:"", sites:""}).exec(function(err, created) {
            if (!err) {
                return true;
            }
            else {
                console.log(err);
                return false;
            }
        });
    },
    
    //Rempli la base de donnée de données tests
    fillDataBase: function(callback) {
        var moment = require('moment');
        
        if ( sails.config.globals.isAlreadyLoaded == true)
          return callback();

        sails.config.globals.isAlreadyLoaded = true;

        Login.create({email: 'louis.k@noos.fr', password: 'super'}, function(err, record){
            User.create({id: record.id,
                         firstName: 'Kamel',
                         lastName: 'Benhaman',
                         age: '35',
                         address: '8 boulevard Austerlitz',
                         zipcode: '75013',
                         city: 'Paris',
                         country: 'France',
                         phone: '0145789612',
                         dateSubscript: new Date()}).exec(function(err, record){});
            
            Interest.create({userId: record.id,
                             countries: ';10;54;44;',
                             sites: ';http://www.musique.fr;',
                             interest: ';musique;écriture;planche à voile;'
            }).exec(function(err, record){});
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Ikea',
                          content: 'On commande ensemble sur ikea du coup ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 1}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id +5}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 7}).exec(function(err, rec){});
            });
        });
        Login.create({email: 'ariane@salp.fr', password: 'super'}, function(err, record){
            User.create({id: record.id,
                         firstName: 'Ariane',
                         lastName: 'Salp',
                         age: '22',
                         address: '5 rue de Milan',
                         zipcode: '84456',
                         city: 'Milan',
                         country: 'Italie',
                         phone: '33568462',
                         dateSubscript: new Date()}).exec(function(err, record){});
            
            Interest.create({userId: record.id,
                             countries: ';66;',
                             sites: ';http://www.ebay.fr;http://www.ikea.fr;',
                             interest: ';équitation;'
            }).exec(function(err, record){});
            
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 6}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 5}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 4}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 3}).exec(function(err, rec){});
            });
        });
        Login.create({email: 'hermine.hermine@project.fr', password: 'super'}, function(err, record){
            User.create({id: record.id,
                         firstName: 'Hermine',
                         lastName: 'Plhc',
                         age: '20',
                         address: '123 boulevard de Stalingrad',
                         zipcode: '94400',
                         city: 'Vitry sur seine',
                         country: 'France',
                         phone: '0678451232',
                         dateSubscript: new Date()}).exec(function(err, record){});
            
            Interest.create({userId: record.id,
                             countries: ';125;36;1;',
                             sites: ';http://www.ikea.com;http://www.facebook.fr;',
                             interest: ';natation;photo;'
            }).exec(function(err, record){});
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 4}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 3}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 2}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 1}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 1}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 2}).exec(function(err, rec){});
            });
        });
        Login.create({email: 'l.k@k.l', password: 'super'}, function(err, record){
            User.create({id: record.id,
                         firstName: 'Pierre',
                         lastName: 'Sarazin',
                         age: '53',
                         address: '87 rue berlioz',
                         zipcode: '78451',
                         city: 'Rouen',
                         country: 'France',
                         phone: '0123456789',
                         dateSubscript: new Date()}).exec(function(err, record){});
            
            Interest.create({userId: record.id,
                             countries: ';42;72;73;',
                             sites: ';http://www.musique.fr;https://www.skinautique.com;',
                             interest: ';photo;foot;surf;'
            }).exec(function(err, record){});
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 5}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 1}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 1}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 2}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?',
                          openDate: new Date()}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 4}).exec(function(err, rec){});
            });
        });
        Login.create({email: 'super@cest.moi', password: 'super'}, function(err, record){
            User.create({id: record.id,
                         firstName: 'Super',
                         lastName: 'Cestmoi',
                         age: '42',
                         address: '1 rue du fromage',
                         zipcode: '45612',
                         city: 'Le saut du postillon',
                         country: 'France',
                         phone: '0465123694',
                         dateSubscript: new Date()}).exec(function(err, record){});
            
            Interest.create({userId: record.id,
                             countries: ';13;166;',
                             sites: ';http://www.facebook.fr;internet.fr;',
                             interest: ';informatique;randonnées;'
            }).exec(function(err, record){});
            
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 6}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 5}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 4}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 3}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 2}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 1}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 1}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 2}).exec(function(err, rec){});
            });
            
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 3}).exec(function(err, rec){});
            });
        });
        Login.create({email: 'user@me.me', password: 'super'}, function(err, record){
            User.create({id: record.id,
                         firstName: 'User',
                         lastName: 'Me',
                         age: '18',
                         address: '1 rue de trois',
                         zipcode: '1234',
                         city: 'Palavas les flots',
                         country: 'France',
                         phone: '4512365421',
                         dateSubscript: new Date()}).exec(function(err, record){});
            
            Interest.create({userId: record.id,
                             countries: ';187;0;64;',
                             sites: ';http://missnumerique.com;http://www.fnac.com;',
                             interest: ';danse;natation;'
            }).exec(function(err, record){});
            
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 7}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 6}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 5}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 4}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 3}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 2}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 1}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 1}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 2}).exec(function(err, rec){});
            });
        });
        Login.create({email: 'utilisateur.france@inde.pk', password: 'super'}, function(err, record){
            User.create({id: record.id,
                         firstName: 'Nicolas',
                         lastName: 'Croizet',
                         age: '20',
                         address: '40 rue Emile',
                         zipcode: '94200',
                         city: 'Thiais',
                         country: 'France',
                         phone: '0687542135',
                         dateSubscript: new Date()}).exec(function(err, record){});
            
            Interest.create({userId: record.id,
                             countries: ';26;98;58;',
                             sites: ';http://www.cheval.fr;http://www.ikea.fr;',
                             interest: ';équitation;lecture;'
            }).exec(function(err, record){});
            
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 7}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 6}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 5}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 4}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 3}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 2}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 1}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id + 1}).exec(function(err, rec){});
            });
        });
        Login.create({email: 'abc@abc.de', password: 'super'}, function(err, record){
            User.create({id: record.id,
                         firstName: 'Hadrien',
                         lastName: 'Pierre',
                         age: '21',
                         address: '12 rue charles infroit',
                         zipcode: '12345',
                         city: 'Brest',
                         country: 'France',
                         phone: '9512368740',
                         dateSubscript: new Date()}).exec(function(err, record){});
            
            Interest.create({userId: record.id,
                             countries: '',
                             sites: ';http://leboisfrancais.fr;http://www.montagnard.com;',
                             interest: ';maçonnerie;randonnées;'
            }).exec(function(err, record){
                return callback();
            });
            
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 8}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 7}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 6}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 5}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 4}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 3}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 2}).exec(function(err, rec){});
            });
            Mails.create({senderId: record.id,
                          date: new Date(),
                          title: 'Photo',
                          content: 'Tu peux m\'envoyer cette photo dont tu me parlais stp ?'}).exec(function (err, mail){
                Receivers.create({messageId: mail.id, receiverId: record.id - 1}).exec(function(err, rec){});
            });
        });

    }
};
