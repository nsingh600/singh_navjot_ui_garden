import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImage = styled.img<{ width?: string; height?: string; $borderRadius?: string }>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  border-radius: ${(props) => props.$borderRadius || '0px'};
  object-fit: cover;
`;

export const Img: React.FC<ImgProps> = ({ src, alt, width, height, borderRadius }) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      $borderRadius={borderRadius}
      data-testid="img"
    />
  );
};