var t = 0,
material = ['SAND', 'DUST', 'LEAVES', 'PAPER', 'TIN', 'ROOTS', 'BRICK', 'STONE', 'DISCARDED CLOTHING', 'GLASS', 'STEEL', 'PLASTIC', 'MUD', 'BROKEN DISHES', 'WOOD', 'STRAW', 'WEEDS'],
place = ['IN A GREEN, MOSSY TERRAIN', 'IN AN OVERPOPULATED AREA', 'BY THE SEA', 'BY AN ABANDONED LAKE', 'IN A DESERT', 'IN A DESERTED FACTORY', 'IN DENSE WOODS', 'IN JAPAN', 'AMONG SMALL HILLS', 'IN SOUTHERN FRANCE', 'AMONG HIGH MOUNTAINS', 'ON AN ISLAND', 'ON OPEN GROUND', 'IN A COLD, WINDY CLIMATE', 'IN A PLACE WITH BOTH HEAVY RAIN AND BRIGHT SUN', 'IN A DESERTED AIRPORT', 'IN A HOT CLIMATE', 'INSIDE A MOUNTAIN', 'ON THE SEA', 'IN MICHIGAN', 'IN HEAVY JUNGLE UNDERGROWTH', 'BY A RIVER', 'AMONG OTHER HOUSES', 'IN A DESERTED CHURCH', 'IN A METROPOLIS', 'UNDERWATER'],
light_source = ['CANDLES', 'SUNLIGHT', 'ELECTRICITY', 'NATURAL LIGHT'],
inhabitants = ['NIGHT-OWLS', 'VEGETARIANS', 'DIONYSUS', 'DREAMERS', 'PENGUINS IN RED', 'CHILDREN', 'SHARKS AND OWLS', 'LOVERS', 'WOLVES', 'COLLECTORS OF ALL TYPES', 'FRIENDS AND ENEMIES', 'PEOPLE WHO STAY ASLEEP', 'VERY TALL PEOPLE', 'AMERICAN INDIANS', 'LITTLE BOYS', 'FORTUNE TELLERS', 'COLORFUL MEN', 'FRIENDS', 'THE FRENCH AND GERMAN', 'FISHERMEN AND SAILORS', 'PEOPLE WHO LOVE TO READ'];

function rand_range(maximum) {
    "use strict";
    return Math.floor(Math.random() * (maximum + 1));
}
function choose(array) {
    "use strict";
    return array[rand_range(array.length - 1)];
}
function stanza() {
    "use strict";
    return 'A HOUSE OF ' + choose(material) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + choose(place) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USING ' + choose(light_source) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INHABITED BY ' + choose(inhabitants);
}
function litany() {
    "use strict";
    var last, text, main = document.getElementById('main');
    if (6 > t) {
        t += 1;
    } else {
        main.removeChild(document.getElementById('main').firstChild);
    }
    last = document.createElement('div');
    last.innerHTML = stanza();
    main.appendChild(last);
}
function produce_litany() {
    "use strict";
    litany();
    setInterval(litany, 5000);
}