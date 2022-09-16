
import { StyleSheet } from 'aphrodite/no-important';

import CantarellFont from './assets/Cantarell-Regular.ttf';

const Cantarell = {
  fontFamily: "Cantarell",
  fontStyle: "normal",
  fontWeight: "normal",
  src: `url(${ CantarellFont }) format('truetype')`
};

export default StyleSheet.create({
  element: {
    display: 'flex',
  },
  app: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    fontFamily: [Cantarell, "sans-serif"],
    display: 'flex',
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: "96pt 0",
  },
  headingBig: {
    fontSize: "48pt",
    textTransform: "uppercase", 
    letterSpacing: "0.09em",
  },
  headingNormal: {
    fontSize: "34.3pt",
    textTransform: "uppercase", 
    marginTop: "26pt",
    letterSpacing: "0.045em",
  },
  row: {
    display: 'flex',
    flexFlow: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowLargeText: {
    fontSize: "23pt",
    letterSpacing: "4px"
  },
  separatorVertical: {
    display: 'flex',
    borderRight: "1px solid black",
    width: 3,
    margin: "0px 20pt", 
    padding: "12pt 0px",
  },
  separatorHorisontal: {
    display: 'flex',
    borderBottom: "1px solid black",
    height: 1,
    width: "1410px",
    margin: "44pt 0px", 
  },

  section: {
    justifyContent: "center",
    width: "1400px",
    alignItems: "center",
    fontSize: "20pt",
  },

  sectionHeading: {
    fontFamily: [Cantarell, "sans-serif"],
    display: 'flex',
    fontSize: "34.3pt",
    letterSpacing: "0.045em",
    textTransform: "uppercase",
    alignItems: "center",
    padding: "20px 0px",
  },

  skillColumn: {
    flexGrow: 1
  },
  
  skillsSection: {
    display: 'flex',
    width: "1400px",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: "20pt",
  }

});
