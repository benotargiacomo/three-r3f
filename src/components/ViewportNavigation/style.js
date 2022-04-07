import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 2rem;
  top: 1rem;
  z-index: 2;
  `;

export const Button = styled.button`
  background: #e6e6e6;
  height: 1.2rem;
  padding: 0.1rem;
  margin-top: 0.2rem;
`;

export const AutoRotate = styled(Button)`
  background: ${(props) => (props.autoRotate ? '#e6e6e6' : '#ff3300')};
`;

export const Perspective = styled(Button)`
  
`;

export const Front = styled(Button)`
  
`;

export const Side = styled(Button)`
  
`;
