module.exports = {
    //Renvoie un tableau d'id à partir d'une string de la forme : ;15;18;110;
    convertInterestsToArray: function(interests) {
        var interestsList = interests.split(";");
        var result = [];

        for (i = 1; i < interestsList.length - 1; ++i)
        {
            result.push(interestsList[i]);
        }

        return result;
    }


}
