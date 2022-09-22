
import { StyleSheet } from 'aphrodite/no-important';

import colors from './colors';
import { Lexend, Cantarell } from './font';

export default StyleSheet.create({
  lightText: {
    color: colors.grey,
  },
  element: {
    display: 'flex',
    fontFamily: [Cantarell, "sans-serif"],
    fontSize: '13px',
    color: colors.white,
  },
  app: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    background: colors.black,
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
    color: colors.white
  },
  headingNormal: {
    fontSize: "16pt",
    textTransform: "uppercase", 
    marginTop: "12pt",
    letterSpacing: "0.09em",
    color: colors.grey,
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
    borderRight: `2px solid ${colors.brown}`,
    width: 0,
    margin: "0px 20px", 
    padding: "6pt 0px",
  },
  separatorHorisontal: {
    display: 'flex',
    borderBottom: `1pt solid ${colors.brown}`,
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
    color: colors.brown,
  },

  text: {
    fontFamily: [Cantarell, "sans-serif"],
    fontSize: "14px",
    color: colors.white

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
  },
  educationRow: {
    display: 'flex',
    flexDirection: "row",
  },
  educationColumn: {
    display: 'flex',
    textAlign: "left",
    flexWrap: "wrap",
  },
  education: {
    flex: "1",
  },
  columnYear: {
    width: "150px",
  },
  
});
