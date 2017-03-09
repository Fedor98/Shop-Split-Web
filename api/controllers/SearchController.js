/**
 * SearchController
 *
 * @description :: Server-side logic for managing Search
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    //Affiche la page de recherche des membres
    displaySearchMember: function(req, res){
        var countries = CountriesServices.getCountries();
        res.view('recherche/rechercher_membre', {user: req.session.user, countriesId: countries});
    },
    
    //Affiche la page de recherche d'une annonce
    displaySearchAd: function(req, res){
        res.view('recherche/rechercher_annonce', {user: req.session.user});
    },

    //Exécute la recherche des membres
    processSearchMember: function(req, res) {
        var _countries;
        var _sites;
        var _interests;
        
        if (req.param('_countries') != "")
            _countries = CountriesServices.convertIdToArray(req.param('_countries'));
        
        if (req.param('_sites') != "")
            _sites = SitesServices.convertSitesToArray(req.param('_sites'));
        
        if (req.param('_interests') != "")
            _interests = InterestsServices.convertInterestsToArray(req.param('_interests'));
        
        console.log("RECHERCHE :");
        console.log("    " + UtilsServices.printArray(_countries));
        console.log("    " + UtilsServices.printArray(_sites)); 
        console.log("    " + UtilsServices.printArray(_interests));
        console.log("FIN RECHERCHE");
        
        var query = Interest.find();
        
	//La requête est construite par étape pour simuler un 'ET'
        for (var i = 0; i < _countries.length; ++i)
            query.where({ countries: {contains: ";" + _countries[i] + ";"}});
            
        for (var i = 0; i < _sites.length; ++i)
            query.where({ sites: {contains: _sites[i]}});
            
        for (var i = 0; i < _interests.length; ++i)
            query.where({ interest: {contains:  _interests[i]}});
            
        query.exec(function (err, results) {
            if (err)
                console.log(err);
            if (results) {
                console.log("RESULTATS : ");
                for (var i = 0; i < results.length; ++i)
                    console.log(results[i]);
                console.log("FIN RESULTATS");
                
                var users = [];
                
                findUsers( results, 0, users, res, req );
            }
        });
    },
    
    //Exécute la recherche des annonces
    processSearchAds: function(req, res) {
        var _keywords;
        
        if (req.param('_keywords') != "")
            _keywords = InterestsServices.convertInterestsToArray(req.param('_keywords'));
        
        console.log("RECHERCHE ANNONCE:");
        console.log("FIN RECHERCHE ANNONCE");
        
        var query = Annonces.find();
        
        
        for (var i = 0; i < _keywords.length; ++i)
            query.where({ or:[ {title: {contains:  _keywords[i]} }, {descr:{contains:_keywords[i]} } ]});
        
        query.exec(function (err, results) {
            if (err)
                console.log(err);
            if (results) {
                console.log("RESULTATS : ");
                for (var i = 0; i < results.length; ++i)
                    console.log(results[i]);
                console.log("FIN RESULTATS");
                res.view("recherche/resultats_annonce", {user: req.session.user, myAds: results});
            }
        });
    },
};

//Construit une liste d'utilisateurs utilisables par une vue
var findUsers = function( _list, _index, _result, _res, _req)
{
    if ( _list.length == _index ) {
        return _res.view("recherche/resultats_membre", {user: _req.session.user, users: _result} );
    }

    User.findOne({id: _list[_index].userId}).exec(function(err, result) {
        _result.push(result);
        findUsers( _list, _index + 1, _result, _res, _req );
    });
}
