import {v4 as uuidv4} from 'uuid';

const mariia = "Mariia Denysenko";

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

const rolePriority = [
    Role.ProductionDesigner,
    Role.ProductionDesignersAssistant,
    Role.PropsMaster,
    Role.PropsAssistant,
    Role.CostumeDesigner,
]

const compareRoles = (a: Role, b: Role) => {
    return rolePriority.indexOf(a) - rolePriority.indexOf(b);
}

class Person {
    id: string = uuidv4();
    roles: Array<Role>
    name: string
    isBoss: boolean = false

    constructor(
        roles: Array<Role>,
        name: string,
        isBoss: boolean = false
    ) {
        this.roles = roles;
        this.name = name;
        this.isBoss = isBoss;
    }

}

class Award {
    id: string = uuidv4();
    name: string

    constructor(name: string) {
        this.name = name;
    }

}

class Movie {
    name: string
    type: string
    startYear: number
    endYear: number | null
    crew: Array<Person>
    awardsWon: Array<Award>

    constructor(
        name: string,
        type: string,
        startYear: number,
        endYear: number | null,
        crew: Array<Person>,
        awardsWon: Array<Award> = [],
    ) {
        this.name = name;
        this.type = type;
        this.startYear = startYear;
        this.endYear = endYear;
        this.crew = crew;
        this.awardsWon = awardsWon;
    }

    mariasRoleIs(roles: Array<Role>): boolean {
        return roles.some( role => 
            this.crew
                .filter((person: Person) => person.name == mariia)
                .flatMap((person: Person) => person.roles)
                .includes(role)
        )
    }

}

class Play {
    name: string
    year: number
    crew: Array<Person>

    constructor(
        name: string,
        year: number,
        crew: Array<Person>,
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
            new Person([Role.ProductionDesigner], mariia),
        ]
    ),
    new Movie(
        "Escape",
        MovieType.Short,
        2017, 2017,
        [
            new Person([Role.Director], "Magdalena Jaroszewicz"),
            new Person([Role.ProductionDesigner], mariia),
        ]
    ),
    new Movie(
        "Mandelstam",
        MovieType.Short,
        2017, 2017,
        [
            new Person([Role.Director], "Dmitro Tverdokhlibov"),
            new Person([Role.ProductionDesigner], mariia),
        ]
    ),
    new Movie(
        "Walk on the water",
        MovieType.Short,
        2018, 2018,
        [
            new Person([Role.Director], "Solomiya Tomaschuk"),
            new Person([Role.CostumeDesigner], mariia),
        ]
    ),
    new Movie(
        "Atlantis",
        MovieType.Feature,
        2018, 2018,
        [
            new Person([Role.Director], "Valentin Vasianovych"),
            new Person([Role.ProductionDesigner], "Vlad Odudenko", true),
            new Person([Role.PropsAssistant], mariia),
        ]
    ),
    new Movie(
        "We are here. We are close",
        MovieType.Feature,
        2019, 2019,
        [
            new Person([Role.Director], "Roman Balayan"),
            new Person([Role.ProductionDesigner], "Vlad Odudenko", true),
            new Person([Role.PropsAssistant], mariia),
        ]
    ),
    new Movie(
        "Between the Frames",
        MovieType.Feature,
        2019, 2019,
        [
            new Person([Role.Director], "Anastasia Tykha", true),
            new Person([Role.ProductionDesigner], mariia),
        ]
    ),
    new Movie(
        "Shchedryk",
        MovieType.Feature,
        2020, 2020,
        [
            new Person([Role.Director], "Olesya Morhuency-Isaenko"),
            new Person([Role.ProductionDesigner], "Vlad Odudenko", true),
            new Person([Role.ProductionDesignersAssistant], mariia),
        ]
    ),
    new Movie(
        "Maria",
        MovieType.Short,
        2019, 2019,
        [
            new Person([Role.Director], "Vlad Odudenko"),
            new Person([Role.ProductionDesigner], mariia),
        ]
    ),
    new Movie(
        "Siasia",
        MovieType.Music,
        2020, 2020,
        [
            new Person([Role.Director], "Maksym Kotskiy"),
            new Person([Role.ProductionDesigner], mariia),
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
            new Person([Role.ProductionDesignersAssistant], mariia),
            new Person([Role.PropsMaster], mariia),
        ],
    ),
    new Movie(
        "Territory",
        MovieType.Short,
        2021, 2021,
        [
            new Person([Role.Director], "MIshel Lades"),
            new Person([Role.ProductionDesigner], mariia),
        ]
    ),
    new Movie(
        "Xiaomi Cinemagic",
        MovieType.Commercial,
        2021, 2021,
        [
            new Person([Role.Director], "Antonio Lukich"),
            new Person([Role.ProductionDesigner], mariia),
        ]
    ),
    new Movie(
        "Black Mountain",
        MovieType.TV,
        2022, null,
        [
            new Person([Role.Director], "Oleksiy Daruga"),
            new Person([Role.ProductionDesigner], mariia),
        ],
    ),
    new Movie(
        "You are universe",
        MovieType.Feature,
        2022, 2022,
        [
            new Person([Role.Director], "Pavlo Ostrikov"),
            new Person([Role.ProductionDesigner], "Vlad Odudenko"),
            new Person([Role.ProductionDesignersAssistant], mariia),
        ]
    ),
    new Movie(
        "Villi Vorona",
        MovieType.Short,
        2022, 2022,
        [
            new Person([Role.Director], "Gayane Dzhaginian"),
            new Person([Role.ProductionDesigner], mariia),
        ]
    )
]

var plays = [
    new Play(
        "How to spend a million, which you don't have",
        2017,
        [
            new Person([Role.Director], "Ihor Tikhomyrov"),
            new Person([Role.CostumeDesigner], mariia),
        ]
    ),
    new Play(
        "Tales of Common Insanity",
        2018,
        [
            new Person([Role.Director], "Katheryna Bashkina"),
            new Person([Role.Scenographer, Role.StageDesigner], mariia),
        ]
    ),
    new Play(
        "Only love, nothing personal",
        2018,
        [
            new Person([Role.Director], "Ihor Tikhomyrov"),
            new Person([Role.Scenographer, Role.StageDesigner], mariia),
        ]
    )
]

export { movies, plays, Movie, Play, Person, Role, Award, MovieType, mariia, compareRoles }