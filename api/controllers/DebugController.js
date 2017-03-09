module.exports = {

    //Remplie la base de donnée de données tests
    displayDatabase: function(req, res) {

        UserServices.fillDataBase(function(result) {

            var _users;
            var _logins;
            var _interests;

            User.find().exec(function(err, userResults) {
                _users = userResults;
                Login.find().exec(function(err, loginsResults) {
                    _logins = loginsResults;
                    Interest.find().exec(function(err, interestsResults) {
                        _interests = interestsResults;
                        res.view('debug/database', {users: _users, logins: _logins, interests: _interests});
                    });
                });
            });
        });
    }
};
