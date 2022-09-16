
enum MovieType {
    Short = "short film",
    Feature = "feature film",
    Music = "music video",
    Commercial = "commercial",
    TV = "TV series",
}

enum Role {
    Director = "director",
    ProductionDesigner = "production designer",
    PropsAssistant = "props assistant",
    PropsMaster = "props master",
    CostumeDesigner = "costume designer",
    ProductionDesignersAssistant = "production designers assistant",
    Scenographer = "scenographer",
    StageDesigner = "stage designer",
}

class Person {

    constructor(
        private roles: Array<Role>,
        private name: string,
        private isBoss: boolean = false
    ) {
        this.roles = roles;
        this.name = name;
    }

}

class Award {

    constructor(private name: string) {
        this.name = name;
    }

}

class Movie {

    constructor(
        private name: string,
        private type: string,
        private startYear: number,
        private endYear: number | null,
        private crew: Array<Person>,
        private awardsWon: Array<Award> = [],
    ) {
        this.name = name;
        this.type = type;
        this.startYear = startYear;
        this.endYear = endYear;
        this.crew = crew;
    }

}

class Play {

    constructor(
        private name: string,
        private year: number,
        private crew: Array<Person>,
    ) {
        this.name = name;
        this.year = year;
        this.crew = crew;
    }

}


var movies = [
    new Movie(
        "Another",
        MovieType.Short,
        2017, 2017,
        [
            new Person([Role.Director], "Victoria Zchukova"),
            new Person([Role.ProductionDesigner], "Maria Denysenko"),
        ]
    ),
    new Movie(
        "Escape",
        MovieType.Short,
        2017, 2017,
        [
            new Person([Role.Director], "Magdalena Jaroszewicz"),
            new Person([Role.ProductionDesigner], "Maria Denysenko"),
        ]
    ),
    new Movie(
        "Mandelstam",
        MovieType.Short,
        2017, 2017,
        [
            new Person([Role.Director], "Dmitro Tverdokhlibov"),
            new Person([Role.ProductionDesigner], "Maria Denysenko"),
        ]
    ),
    new Movie(
        "Walk on the water",
        MovieType.Short,
        2018, 2018,
        [
            new Person([Role.Director], "Solomiya Tomaschuk"),
            new Person([Role.CostumeDesigner], "Maria Denysenko"),
        ]
    ),
    new Movie(
        "Atlantis",
        MovieType.Feature,
        2018, 2018,
        [
            new Person([Role.Director], "Valentin Vasianovych"),
            new Person([Role.ProductionDesigner], "Vlad Odudenko", true),
            new Person([Role.PropsAssistant], "Maria Denysenko"),
        ]
    ),
    new Movie(
        "We are here. We are close",
        MovieType.Feature,
        2019, 2019,
        [
            new Person([Role.Director], "Roman Balayan"),
            new Person([Role.ProductionDesigner], "Vlad Odudenko", true),
            new Person([Role.PropsAssistant], "Maria Denysenko"),
        ]
    ),
    new Movie(
        "Between the Frames",
        MovieType.Feature,
        2019, 2019,
        [
            new Person([Role.Director], "Anastasia Tykha", true),
            new Person([Role.ProductionDesigner], "Maria Denysenko"),
        ]
    ),
    new Movie(
        "Shchedryk",
        MovieType.Feature,
        2020, 2020,
        [
            new Person([Role.Director], "Olesya Morhuency-Isaenko"),
            new Person([Role.ProductionDesigner], "Vlad Odudenko", true),
            new Person([Role.ProductionDesignersAssistant], "Maria Denysenko"),
        ]
    ),
    new Movie(
        "Maria",
        MovieType.Short,
        2019, 2019,
        [
            new Person([Role.Director], "Vlad Odudenko"),
            new Person([Role.ProductionDesigner], "Maria Denysenko"),
        ]
    ),
    new Movie(
        "Siasia",
        MovieType.Music,
        2020, 2020,
        [
            new Person([Role.Director], "Maksym Kotskiy"),
            new Person([Role.ProductionDesigner], "Maria Denysenko"),
        ]
    ),
    new Movie(
        "Klondike",
        MovieType.Feature,
        2020, 2022,
        [
            new Person([Role.Director], "Maryna Er Horbach"),
            new Person([Role.ProductionDesigner], "Maria Denysenko"),
        ],
        [
            new Award("Sundance Film Festival - World Cinema - Dramatic - Directing Award 2022"),
            new Award("Berlin Internatinal Film Festival - Panorama - Prize Ecumenacal Jury 2022"),
        ]
    ),
    new Movie(
        "La Palisada",
        MovieType.Feature,
        2021, null,
        [
            new Person([Role.Director], "Philip Sotnychenko"),
            new Person([Role.ProductionDesigner], "Rita Kulik"),
            new Person([Role.ProductionDesignersAssistant, Role.PropsMaster], "Maria Denysenko"),
        ],
    ),
    new Movie(
        "Territory",
        MovieType.Short,
        2021, 2021,
        [
            new Person([Role.Director], "MIshel Lades"),
            new Person([Role.ProductionDesigner], "Maria Denysenko"),
        ]
    ),
    new Movie(
        "Xiaomi Cinemagic",
        MovieType.Commercial,
        2021, 2021,
        [
            new Person([Role.Director], "Antonio Lukich"),
            new Person([Role.ProductionDesigner], "Maria Denysenko"),
        ]
    ),
    new Movie(
        "Black Mountain",
        MovieType.TV,
        2022, null,
        [
            new Person([Role.Director], "Oleksiy Daruga"),
            new Person([Role.ProductionDesigner], "Maria Denysenko"),
        ],
    ),
    new Movie(
        "You are universe",
        MovieType.Feature,
        2022, 2022,
        [
            new Person([Role.Director], "Pavlo Ostrikov"),
            new Person([Role.ProductionDesigner], "Vlad Odudenko"),
            new Person([Role.ProductionDesignersAssistant], "Maria Denysenko"),
        ]
    ),
    new Movie(
        "Villi Vorona",
        MovieType.Short,
        2022, 2022,
        [
            new Person([Role.Director], "Gayane Dzhaginian"),
            new Person([Role.ProductionDesigner], "Maria Denysenko"),
        ]
    )
]

var plays = [
    new Play(
        "How to spend a million, which you don't have",
        2017,
        [
            new Person([Role.Director], "Ihor Tikhomyrov"),
            new Person([Role.CostumeDesigner], "Maria Denysenko"),
        ]
    ),
    new Play(
        "Tales of Common Insanity",
        2018,
        [
            new Person([Role.Director], "Katheryna Bashkina"),
            new Person([Role.Scenographer, Role.StageDesigner], "Maria Denysenko"),
        ]
    ),
    new Play(
        "Only love, nothing personal",
        2018,
        [
            new Person([Role.Director], "Ihor Tikhomyrov"),
            new Person([Role.Scenographer, Role.StageDesigner], "Maria Denysenko"),
        ]
    )
]

export { movies, plays }