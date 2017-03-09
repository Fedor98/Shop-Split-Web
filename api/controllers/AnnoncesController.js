/**
 * AnnoncesController
 *
 * @description :: Server-side logic for managing Annonces
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    //Affiche la page pour créer une nouvelle annonce
    createAd: function(req, res) {
        res.view('annonce/publier', {user: req.session.user});
    },
    
    //Enregistre l'annonce dans la base de donnée
    saveAd: function (req, res) {
        var title = req.param('title');
        var description = req.param('desc');
        var location = req.param('location');
        
        Annonces.create({userId: req.session.user.id,
                         title: title,
                         descr: description,
                         location: location,
                         creationDate: new Date(),
                         countView: 0}).exec(function(err, result) {
            if (err)
                console.log(err);
            else
                console.log("shit");
            console.log(result);
            res.send(200, {user: req.session.user});
        })
    },
    
    //Appelle la fonction pour construire les résultats d'une recherche d'annonces
    displayAds: function(req, res) {
        Annonces.find({userId: req.session.user.id}).exec(function(err, results){
            console.log(err);
            console.log(results);
            buildAdsresult(results, 0, [], res, req);
        })
    },
    
    //Récupère l'annonce avec l'id indiqué et renvoie la page pour afficher l'annonce
    showAd: function(req, res) {
        var id = req.param('id');
        
        Annonces.findOne({id: id}).exec(function(err, result) {
            var ad = {title: result.title,
                      descr: result.descr,
                      location: result.location};
            
            User.findOne({id: result.userId}).exec(function(err, resultUser) {
                var author = {name: resultUser.firstName + " " + resultUser.lastName, id: resultUser.id};
                res.view("annonce/afficher_annonce", {ad: ad, author: author, user: req.session.user}); 
            });
        });
    }
};


//Crée une liste d'annonce pour les afficher dans une page
//La fonction est appelée par displayAds
var buildAdsresult = function( _list, _index, _result, _res, _req )
{
    if (_list.length <= _index ) {
        return _res.view("annonce/liste_annonces", {user: _req.session.user, ads: _result})
    }
    
    _result.push({id: _list[_index].id,
                  title: _list[_index].title,
                  short: _list[_index].descr.substring(0, 150),
                  location: _list[_index].location,
                  creationDate: _list[_index].creationDate,
                  countView: _list[_index].countView});
    
    buildAdsresult( _list, _index + 1, _result, _res, _req );
}