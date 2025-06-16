/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import { NAV_DELAY, LOADER_DELAY } from '@lib/constants';
import { StyledHeroSection, StyledBigTitle } from './styles';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Welcome, I&apos;m</h1>;
  const two = <StyledBigTitle>Hai Le Huynh Long.</StyledBigTitle>;
  const three = <StyledBigTitle slate>I am an Automation Test Engineer .</StyledBigTitle>;
  const four = (
    <p>
      Hello! I&apos;m Hai, a Automation Tester based in Ho Chi Minh City, Vietnam.
      Here are a few technologies I&apos;ve been working with recently
    </p>
  );
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={LOADER_DELAY}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
