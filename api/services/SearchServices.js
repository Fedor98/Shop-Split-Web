module.exports = {

    //Jamais utilisée, suppression possible
    findUsersResult: function( _list ) {
        var users = [];

        for (var i = 0; i < _list.length; ++i)
        {
            console.log( _list[i].userId);
            User.findOne({id: _list[i].userId}).exec(function(err, result) {
                users.push(result);
            });
        }

        return users;
    },

};
