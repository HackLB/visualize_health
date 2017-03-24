var data = {
    "labels": [
        "Pharmaceuticals/Health Products", 
        "Insurance", 
        "Electric Utilities", 
        "Business Associations", 
        "Electronics Mfg & Equip", 
        "Oil & Gas", 
        "Misc Manufacturing & Distributing", 
        "Education", 
        "Hospitals/Nursing Homes", 
        "Telecom Services", 
        "Securities & Investment", 
        "Real Estate", 
        "Civil Servants/Public Officials", 
        "Health Professionals", 
        "Air Transport", 
        "Misc Issues", 
        "Defense Aerospace", 
        "Automotive", 
        "Health Services/HMOs", 
        "TV/Movies/Music"
    ],
    "datasets": [
        {
            "data": [
                3515091778, 
                2420777769, 
                2183268654, 
                2015257992, 
                2006622646, 
                1900998075, 
                1552500796, 
                1514194951, 
                1450514056, 
                1410117480, 
                1407011840, 
                1365525210, 
                1328514989, 
                1312333848, 
                1251399940, 
                999713055, 
                994671141, 
                984213735, 
                983256640, 
                942648229
            ],
        }]
};

$( document ).ready(function() {
    console.log( "ready2!" );

    pieGraph(data);

});


function pieGraph(data) {
    console.log('starting');
    var ctx = $("#myChart");

    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            animation:{
                animateScale:true
            }
        }
    });
}