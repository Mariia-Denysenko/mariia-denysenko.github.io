
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
    padding: "45pt 0 45pt 0",
  },
  headingBig: {
    fontSize: "24pt",
    textTransform: "uppercase", 
    letterSpacing: "0.09em",
  },
  headingNormal: {
    fontSize: "16pt",
    textTransform: "uppercase", 
    marginTop: "12pt",
    letterSpacing: "0.09em",
  },
  row: {
    display: 'flex',
    flexFlow: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowLargeText: {
    fontSize: "11pt",
    letterSpacing: "2px",
    paddingBotton: "12pt",
  },
  separatorVertical: {
    display: 'flex',
    borderRight: "1px solid black",
    width: 3,
    margin: "0px 20px", 
    padding: "6pt 0px",
  },
  separatorHorisontal: {
    display: 'flex',
    borderBottom: "1px solid black",
    height: 1,
    width: "860px",
    margin: "24pt 0px", 
  },

  section: {
    justifyContent: "center",
    width: "860px",
    alignItems: "center",
    fontSize: "10pt",
    lineHeight: "1.5em",
  },

  sectionHeading: {
    fontFamily: [Cantarell, "sans-serif"],
    display: 'flex',
    fontSize: "16pt",
    letterSpacing: "0.045em",
    textTransform: "uppercase",
    alignItems: "center",
    paddingBottom: "16pt",
  },

  skillColumn: {
    flexGrow: 1
  },
  
  skillsSection: {
    display: 'flex',
    width: "860px",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: "11pt",
    lineHeight: "1.5em",
  }

});
