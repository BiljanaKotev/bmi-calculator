import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Details from './components/Details';
import Results from './components/Results';
import Cards from './components/Cards';
import mainImg from '../src/assets/images/image-man-eating.webp';
import iconEating from '../src/assets/images/icon-eating.svg';
import iconExercise from '../src/assets/images/icon-exercise.svg';
import iconSleep from '../src/assets/images/icon-sleep.svg';
import genderIcon from '../src/assets/images/icon-gender.svg';
import ageIcon from '../src/assets/images/icon-age.svg';
import muscleIcon from '../src/assets/images/icon-muscle.svg';
import pregnancyIcon from '../src/assets/images/icon-pregnancy.svg';
import raceIcon from '../src/assets/images/icon-race.svg';

function App() {
  return (
    <>
      <Header />
      <Details />
      <Results img={mainImg} alt='Man eating sushi' className='main-img'>
        <h2> What your BMI result means</h2>
        <p>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity
          and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </Results>
      <Results img={iconEating} alt='eating icon of a bowl of food' className='icon'>
        <h2> Healthy eating</h2>
        <p>Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
      </Results>
      <Results img={iconExercise} alt='exercixe icon of a dumbell' className='icon'>
        <h2>Regular exercise</h2>
        <p>Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.</p>
      </Results>
      <Results img={iconSleep} alt='sleep icon of moon and stars' className='icon'>
        <h2>Adequate sleep</h2>
        <p>Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.</p>
      </Results>
      <Results>
        <h2>Limitations of BMI</h2>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in
          certain cases, the measurement may not be beneficial to use.
        </p>
      </Results>

      {/* Cards section */}
      <Cards img={genderIcon} className='card-icon'>
        <h2>Gender</h2>
        <p>The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>
      </Cards>
      <Cards img={ageIcon} className='card-icon'>
        <h2>Age</h2>
        <p>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
      </Cards>
      <Cards img={muscleIcon} className='card-icon'>
        <h2>Muscle</h2>
        <p>BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.</p>
      </Cards>
      <Cards img={pregnancyIcon} className='card-icon'>
        <h2>Pregnancy</h2>
        <p>
          Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and
          child.
        </p>
      </Cards>
      <Cards img={raceIcon} className='card-icon'>
        <h2>Race</h2>
        <p>
          Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or
          practice nurse.
        </p>
      </Cards>
    </>
  );
}

export default App;

