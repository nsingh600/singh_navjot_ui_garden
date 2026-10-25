import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHero = styled.div<{ $bgImage: string; $height: string }>`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$bgImage}) no-repeat center center/cover;
  height: ${(props) => props.$height || '400px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  padding: 20px;
  width: 100%;
`;

const HeroTitle = styled.h1`
  font-size: 36px;
  margin: 0 0 10px 0;
  font-weight: 700;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin: 0;
  max-width: 600px;
`;

export const HeroImage: React.FC<HeroImageProps> = ({ bgImage, title, subtitle, height = '400px' }) => {
  return (
    <StyledHero $bgImage={bgImage} $height={height} data-testid="hero-image">
      <HeroTitle>{title}</HeroTitle>
      {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
    </StyledHero>
  );
};