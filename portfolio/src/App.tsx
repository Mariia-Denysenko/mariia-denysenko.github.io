import React from 'react';
import { css } from 'aphrodite/no-important';
import styles from './appStyles';
import * as data from './Data';
import Movies from './Movies';

import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cv />
  },
  {
    path: "/#/movie/:id",
    element: <MoviePage />
  }
]);

function MoviePage() {
  return (
    <div className={css(styles.element)}>
      Here will be movie
    </div>
  );
}


function App() {
  return (
    <div className={css(styles.app)}>
      <RouterProvider router={router} />
    </div>
  );
}

function Education() {
  return <div className={css(styles.row)} >
    <div className={css(styles.section)}>
      <h3 className={css(styles.sectionHeading)}>Education</h3>
      <div className={css(styles.educationRow, styles.text)}>
        <div className={css(styles.educationColumn, styles.columnYear)}>2013 - 2015</div> 
        <div className={css(styles.educationColumn, styles.education)}>
          <p>Kyiv State Institute of Decorative and Applied Art and Design named after Mykhailo Boychuk&nbsp;</p>
          <p className={css(styles.lightText)}>(Textile Art)</p>
        </div>
      </div>
      <div className={css(styles.educationRow, styles.text)}>
        <div className={css(styles.educationColumn, styles.columnYear)}>2015 - 2017</div> 
        <div className={css(styles.educationColumn, styles.education)}>
          <p>National Academy of Fine Arts and Architecture Film and Set Design - Bachelor Degree&nbsp;</p>
          <p className={css(styles.lightText)}>(Film & Set Design)</p>
        </div>
      </div>
    </div>
  </div>
}

function Separator() {
  return <div className={css(styles.row)}>
    <div className={css(styles.separatorHorisontal)}>&nbsp;</div>
  </div>
}

function Skills() {
  return <div className={css(styles.row)} >
    <div className={css(styles.skillsSection)}>

    <div className={css(styles.skillColumn)}>
        <h3 className={css(styles.sectionHeading)}>Professional skills</h3>
        
        <div>
          <ul>
            <li className={css(styles.text)}>Design | Sketching</li>
            <li className={css(styles.text)}>Visual Awareness</li>
            <li className={css(styles.text)}>Creative</li>
            <li className={css(styles.text)}>Cinematic Lightning Techniques</li>
          </ul>
          <ul>
            <li className={css(styles.text)}>Interpersonal Skills</li>
            <li className={css(styles.text)}>Art Directing</li>
            <li className={css(styles.text)}>Set Design</li>
            <li className={css(styles.text)}>Visual Storytelling</li>
            <li className={css(styles.text)}>Critical Thinking</li>
          </ul>
        </div>
      </div>

    <div className={css(styles.skillColumn)}>
      <h3 className={css(styles.sectionHeading)}>Technical skills</h3>
      
      <div>
        <ul>
          <li className={css(styles.text)}>Graphic Design</li>
          <li className={css(styles.text)}>Technical Drawing</li>
          <li className={css(styles.text)}>Storyboarding</li>
          <li className={css(styles.text)}>Budget Awareness</li>
        </ul>
        <ul>
          <li className={css(styles.text)}>Spatial Design</li>
          <li className={css(styles.text)}>Digital Painting</li>
          <li className={css(styles.text)}>Prop Design & Modelling</li>
          <li className={css(styles.text)}>Sketching</li>
        </ul>
      </div>
    </div>
    </div>
  </div>
}

function TechnicalSkills() {
  return <div className={css(styles.row)} >
    <div className={css(styles.section)}>
      <h3 className={css(styles.sectionHeading)}>Software skills</h3>
    
      <div className={css(styles.text)}>
        Adobe Photoshop, Adobe Illustrator, Adobe InDesign, ProCreate, SketchUp, Blender, Microsoft Word, Microsoft Excel. 
      </div>
    </div>
  </div>
}

function Cv() {
  return <div>
    <div className={css(styles.header)}>
      <h1 className={css(styles.headingBig)}>Mariia Denysenko</h1>
      <h2 className={css(styles.headingNormal)}>Film Production Designer</h2>
    </div>

    <div className={css(styles.row, styles.rowLargeText)}>
      <div className={css(styles.element)}>Kineton, Warks CV35 OHN</div>
      <div className={css(styles.separatorVertical)}>&nbsp;</div>
      <div className={css(styles.element)}>+07848888943</div>
      <div className={css(styles.separatorVertical)}>&nbsp;</div>
      <div className={css(styles.element)}>maria.denysenko88@gmail.com</div>
    </div>

    <Separator />

    <div className={css(styles.row)} >
      <div className={css(styles.section)}>
        <h3 className={css(styles.sectionHeading)}>Profile Summary</h3>

        <div className={css(styles.element, styles.text)}>
          Passionate and experienced Production Designer with a multifaceted background 
          in set design for stage productions and film. Adept in communicating with Directors 
          and other creative professionals to ensure their vision is fulfilled and enhanced 
          through extraordinary and pertinent set design. Bringing forth a commitment to 
          creating captivating set design that enhances productions, strengthens characters 
          with a help of the dramaturgy of the space, and entices viewers. 
        </div>
      </div>
    </div>

    <Separator />
    <Education />
    <Separator />

    <div className={css(styles.row)} >
      <div className={css(styles.section)}>
        <h3 className={css(styles.sectionHeading)}>Work experience</h3>

        <Movies movies={data.movies} />
      </div>
    </div>

    <Separator />
    <Skills />
    <Separator />
    <TechnicalSkills />
    <Separator />
  </div>
}

export default App;
