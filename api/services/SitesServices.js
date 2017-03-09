module.exports = {

    //Converti une string de la forme : ;site.fr;http://google.fr;
    // en : [site.fr, http://google.fr]
    convertSitesToArray: function(sites) {
        var sitesList = sites.split(";");
        var result = [];

        for (i = 1; i < sitesList.length - 1; ++i)
        {
            result.push(sitesList[i]);
        }

        return result;
    }


}
