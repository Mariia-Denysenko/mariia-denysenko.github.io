import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import colors from './colors';

import { Movie, Role, mariia } from './Data';
import { Lexend } from './font';

const styles = StyleSheet.create({
  lightText: {
    color: colors.grey,
  },
  movie: {
    display: 'flex',
    flexDirection: "row",
    flex: "1 1 50%",
    padding: "10px 0",
    
  },
  movieBody: {
    display: 'flex',
    flexDirection: "column",
    flex: 1,
  },
  movieRow: {
    display: 'flex',
    flexDirection: "row",
    textTransform: "capitalize",
  },
  movieYear: {
    width: "60px", 
  },
  movies: {
    fontFamily: [Lexend, "sans-serif"],
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    minHeight: "500px",
    alignContent: "flex-start",
  },
  buttons: {
    fontFamily: [Lexend, "sans-serif"],
    display: "flex",
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    margin: "0 0 10px 0",
  },
  buttonPushed: {
    ":hover": {
      color: colors.white,
      backgroundColor: colors.darkGrey,
    },
    backgroundColor: colors.grey,
    borderRadius: "3px",
    margin: "0 3px",
    color: colors.white,
    textTransform: "capitalize",
  },
  button: {
    ":hover": {
      color: colors.white,
      backgroundColor: colors.darkGrey,
    },
    borderRadius: "3px",
    margin: "0 3px",
    textTransform: "capitalize",
  },
  filterElement: {
    padding: "3px 6px",
  }

})

type MyProps = {
    movies: Array<Movie>;
};

const Movies: React.FC<MyProps> = props => { 
  const [state, setState] = React.useState({
    selectedRoles: new Array<Role>(),
  });

  React.useEffect(() => {
    
    const finishLoading = () => {
      setState({
        ...state,
      });
    }

    // state.video.current && 
      // state.video.current.addEventListener('canplay', finishLoading)


    return function cleanup() {
      // state.video.current && 
        // state.video.current.removeEventListener('canplay', finishLoading);
    };

  });


  const roles = Array.from(new Set<Role>(props.movies
    .flatMap(movie => 
      movie.crew
        .filter(person => person.name === mariia)
        .flatMap(person => person.roles)
    )));

  const toggleFilter = (role: Role | null = null) => {
    if (role == null) {
      state.selectedRoles = [];
    } else if (state.selectedRoles.indexOf(role) >= 0) {
      state.selectedRoles = [];
    } else {
      state.selectedRoles = [role];
    }
    
    setState({...state})
  }


  return (
    <div>      
        <div className={css(styles.buttons)}>
          <div className={css(styles.filterElement)}>filter by role:&nbsp;</div>
          <div key="all"
                className={css(styles.filterElement, state.selectedRoles.length == 0 ? styles.buttonPushed : styles.button)}
                onClick={ () => toggleFilter()}>All</div>
          {
            roles.sort().map((role: Role) => {
              const buttonStyle = state.selectedRoles.indexOf(role) >= 0
                ? styles.buttonPushed
                : styles.button

              return <div key={role} 
                className={css(styles.filterElement, buttonStyle)}
                onClick={ () => toggleFilter(role)}>
                  {role}
                </div>
            })
          }
        </div>
        <div className={css(styles.movies)}>
          {
            props.movies
              .filter( movie => state.selectedRoles.length > 0 ? movie.mariasRoleIs(state.selectedRoles) : true )
              .map(
                (movie: Movie) =>  
                <div key={movie.name} className={css(styles.movie)}>
                  <div className={css(styles.movieYear)}> 
                    { 
                      (movie.startYear != movie.endYear) 
                        ? movie.startYear + ' - ' + ( movie.endYear ? movie.endYear : 'present' )
                        : movie.startYear 
                    }
                  </div>
                  <div className={css(styles.movieBody)}>
                    <div className={css(styles.movieRow)}>
                      <p>{movie.name}</p>&nbsp;<p className={css(styles.lightText)}>({movie.type})</p>
                    </div>
                    
                    {
                      movie.crew.map(
                        person => 
                          <div key={person.id} className={css(styles.movieRow)}>
                            <p>{person.roles.join("/")}:</p>&nbsp;<p>{person.name}</p>
                          </div>
                        )
                    }
                    
                    {
                      movie.awardsWon.map(
                        award => 
                          <div key={award.id} className={css(styles.movieRow)}>
                            <p className={css(styles.lightText)}>{award.name}</p>
                          </div>
                      )
                    }
                  </div>
                </div>
            )
          }
        </div>
    </div>
  )
}

export default Movies;