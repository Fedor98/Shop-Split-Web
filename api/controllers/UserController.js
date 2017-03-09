/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
   //Enregistre un profil utilisateur, que ce soit à l'inscription ou lorsque des informations sont modifiées 
    saveProfile: function(req, res){
        console.log("Saving profile");
        var userId = req.session.user.id;
        
        var _firstname = req.param('firstname');
        var _lastname = req.param('lastname');
        var _age = req.param('age');
        var _address = req.param('address');
        var _zipcode = req.param('zipcode');
        var _city = req.param('city');
        var _country = req.param('country');
        var _phoneNumber = req.param('phone');
        
        var userUpdated;
        
	//Ce bloc était censé géocoder une adresse
        if ( _address !== req.session.user.address
             || _zipcode !== req.session.user.zipcode
             || _city !== req.session.user.city
             || _country !== req.session.user.country ) {
        }
        
        User.update({id: userId}, {firstName: _firstname,
                                   lastName : _lastname,
                                   age      : _age,
                                   address  : _address,
                                   zipcode  : _zipcode,
                                   city     : _city,
                                   country  : _country,
                                   phone    : _phoneNumber}).exec(function afterwards(err, updated){
            if (err) {
                return;
            }
            else {
                req.session.user = updated[0];
                console.log("ici " + req.session.user.firstName);
                userUpdated = updated[0];
            }
        });
        
        var _countriesId = req.param('countries');
        var _sites = req.param('sites');
        var _interests = req.param('interests');

        console.log("Looking for id : " + userId + " saving countries : " + _countriesId);
        // console.log("TEST DE CREATION :" + test);
        Interest.update({userId: userId}, {countries: _countriesId, sites: _sites, interest: _interests}).exec(function afterwards(err, updated){
           if (err) {
                return;
            }
            else {
                console.log("Update countries : " + updated[0].countries + "id : " + updated[0].userId + " " + updated[0].id);
                res.send(200, {user: userUpdated, countries: updated[0].countries, sites: updated[0].sites, interests: updated[0].interest});
            }
        });
    },
    
    //Affiche la page de profil d'un membre
    displayUser: function(req, res) {
        var _countries;
        var _sites;
        Interest.findOne({userId: req.session.user.id}).exec(function(err, result) {
            if (!result)
            {
                _countries = result;
                
                res.view('current_user', {user: req.session.user, countries: ""});
            }
            else
            {
                _countries = result.countries;
                _sites = result.sites;
                _interests = result.interest;

                res.view('current_user', {user: req.session.user, email: req.session.email, countries: CountriesServices.convertIdToCountry(_countries), sites: SitesServices.convertSitesToArray(_sites), interests: InterestsServices.convertInterestsToArray(_interests)});
            }
        });
        
    },
    
    //Affiche la page de profil de l'utilisateur courrant
    displayProfPage: function(req, res) {
        var userId = req.param('idUser');
        
        User.findOne({id: userId}).exec(function(err, result) {
            Interest.findOne({userId: result.id}).exec(function(err, _result) {
                if (!_result)
                {
                    res.view('current_user', {user: result, countries: ""});
                }
                else
                {
                    _countries = _result.countries;
                    _sites = _result.sites;
                    _interests = _result.interest;

                    res.view('user', {user: req.session.user, otherUser: result, countries: CountriesServices.convertIdToCountry(_countries), sites: SitesServices.convertSitesToArray(_sites), interests: InterestsServices.convertInterestsToArray(_interests)});
                }
            });
        });
    },
    
    //Affiche la page pour éditer les informations du profil
    editProfile: function(req, res) {
        User.findOne({id: req.session.user.id}).exec(function(err, result) {
                if (err)
                    return res.serverError(500, {error: "Bdd erreur"});
                else if (!result)
                    res.send(404, {error: "Aucun compte ne correspond aux identifiants fournis"});
                else {
                    Interest.findOne({userId: req.session.user.id}).exec( function(err, resultInt) {
                        console.log("Modify profile");
                        req.session.user = result;
                        res.view('modify_profile', {user: req.session.user, 
                                                    countriesId: CountriesServices.getCountries(),
                                                    countries: CountriesServices.getIdArray(resultInt.countries),
                                                    sites: SitesServices.convertSitesToArray(resultInt.sites),
                                                    interests: InterestsServices.convertInterestsToArray(resultInt.interest),
                                                    fullInterest: resultInt});
                    });
                    
                }
            });
    }
};

