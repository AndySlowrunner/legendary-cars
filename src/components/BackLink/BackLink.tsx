import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { StyledLink } from './BackLink.styled';

type Props = {
    to: string
}

export const BackLink = ({to}: Props) => {
    return (
      <>
        <StyledLink to={to}>
          <ArrowBackIcon />
          <p>Return</p>
        </StyledLink>
      </>
    );
}