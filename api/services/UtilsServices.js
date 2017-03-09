module.exports = {

    //Crée une string pour affiche un tableau dans la console
    printArray: function(array) {
        var output = "[";
        for (var i = 0; i < array.length - 1; ++i)
            output += array[i] + ", ";
        output += array[array.length - 1] + "]";
        
        return output;
    },
    
    //Jamais utilisée, suppression possible
    getDateJMA: function( _date ) {
        var date = "";
        
        date += parseInt(_date.getMinutes());
        date += ":";
        date += parseInt(_date.getHours());
        
        date += " - ";
        
        date += parseInt(_date.getDate());
        date += "/";
        date += parseInt(_date.getMonth() + 1);
        date += "/";
        date += parseInt(_date.getFullYear);
    }
};

var getFrenchDay = function( index ){
    switch( index ){
        case 0:
            return "Lundi";
        break;
        case 1:
            return "Mardi";
        break;
        case 2:
            return "Mercredi";
        break;
        case 3:
            return "Jeudi";
        break;
        case 4:
            return "Vendredi";
        break;
        case 5:
            return "Samedi";
        break;
        case 6:
            return "Dimanche";
        break;
        default:
            return "";
    }
}
