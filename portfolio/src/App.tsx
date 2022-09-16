import React from 'react';
import { css } from 'aphrodite/no-important';
import styles from './Styles';


function App() {
  return (
    <div className={css(styles.app)}>

      <div className={css(styles.header)}>
        <h1 className={css(styles.headingBig)}>Mariia Denysenko</h1>
        <h2 className={css(styles.headingNormal)}>Film Production Designer</h2>
      </div>

      <div className={css(styles.row, styles.rowLargeText)}>
        <div className={css(styles.element)}>Kineton, Warks CV35 OHN</div>
        <div className={css(styles.separatorVertical)}>&nbsp;</div>
        <div className={css(styles.element)}>+07848888943</div>
        <div className={css(styles.separatorVertical)}>&nbsp;</div>
        <div className={css(styles.element)}>maria.Denysenko88@gmail.com</div>
      </div>

      <div className={css(styles.row)} >
        <div className={css(styles.separatorHorisontal)}>&nbsp;</div>
      </div>

      <div className={css(styles.row)} >
        <div className={css(styles.section)}>
          <h3 className={css(styles.sectionHeading)}>Profile Summary</h3>

          <div className={css(styles.element)}>
            Passionate and experienced Production Designer with a multifaceted background 
            in set design for stage productions and film. Adept in communicating with Directors 
            and other creative professionals to ensure their vision is fulfilled and enhanced 
            through extraordinary and pertinent set design. Bringing forth a commitment to 
            creating captivating set design that enhances productions, strengthens characters 
            with a help of the dramaturgy of the space, and entices viewers. 
          </div>
        </div>
      </div>

      <div className={css(styles.row)} >
        <div className={css(styles.separatorHorisontal)}>&nbsp;</div>
      </div>

      <div className={css(styles.row)} >
        <div className={css(styles.skillsSection)}>

        <div className={css(styles.skillColumn)}>
            <h3 className={css(styles.sectionHeading)}>Professional skills</h3>
            
            <div>
              <ul>
                <li>Design | Sketching</li>
                <li>Visual Awareness</li>
                <li>Creative</li>
                <li>Cinematic Lightning Techniques</li>
              </ul>
              <ul>
                <li>Interpersonal Skills</li>
                <li>Art Directing</li>
                <li>Set Design</li>
                <li>Visual Storytelling</li>
                <li>Critical Thinking</li>
              </ul>
            </div>
          </div>

        <div className={css(styles.skillColumn)}>
          <h3 className={css(styles.sectionHeading)}>Technical skills</h3>
          
          <div>
            <ul>
              <li>Graphic Design</li>
              <li>Technical Drawing</li>
              <li>Storyboarding</li>
              <li>Budget Awareness</li>
            </ul>
            <ul>
              <li>Spatial Design</li>
              <li>Digital Painting</li>
              <li>Prop Design &nbsp; Modelling</li>
              <li>Sketching</li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      <div className={css(styles.row)} >
        <div className={css(styles.separatorHorisontal)}>&nbsp;</div>
      </div>

      <div className={css(styles.row)} >
        <div className={css(styles.section)}>
          <h3 className={css(styles.sectionHeading)}>Software skills</h3>
        
          <div>
            Adobe Photoshop, Adobe Illustrator, Adobe InDesign, ProCreate, SketchUp, Blender, Microsoft Word, Microsoft Excel. 
          </div>
        </div>
      </div>

      <div className={css(styles.row)} >
        <div className={css(styles.separatorHorisontal)}>&nbsp;</div>
      </div>
        
      <div className={css(styles.row)} >
        <div className={css(styles.section)}>
          <h3 className={css(styles.sectionHeading)}>Education</h3>

          <div>2013-2015</div> <div>Kyiv State Institute of Decorative and Applied Art and Design named after Mykhailo Boychuk (Textile Art)</div>
          <div>2015-2017</div> <div>National Academy of Fine Arts and Architecture Film and Set Design - Bachelor Degree (Film &nbsp; Set Design)</div>
        </div>
      </div>

      <div className={css(styles.row)} >
        <div className={css(styles.separatorHorisontal)}>&nbsp;</div>
      </div>

      <div className={css(styles.row)} >
        <div className={css(styles.section)}>
          <h3 className={css(styles.sectionHeading)}>Work experience</h3>



        </div>
      </div>

    
    </div>
  );
}

export default App;
