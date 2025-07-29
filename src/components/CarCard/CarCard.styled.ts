import styled from "styled-components";

export const Card = styled.div`
  width: 380px;
  border: 1px solid darkgray;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

export const Thumb = styled.div`
  width: 380px;
  height: 240px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 24px;
  color: #ffff;
  background-color: #ff0c6f;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
`;