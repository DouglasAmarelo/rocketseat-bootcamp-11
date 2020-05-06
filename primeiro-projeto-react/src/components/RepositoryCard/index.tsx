import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import * as S from './styles';

interface RepositoryCard {
  fullName: string;
  description?: string;
  link: string;
  image?: string;
  login?: string;
}

const RepositoryCard = ({
  fullName,
  description,
  link,
  image,
  login,
}: RepositoryCard): React.ReactElement => (
  <S.CardContainer>
    <Link to={link}>
      {image && <img src={image} alt={login} />}

      <div>
        <strong>{fullName}</strong>
        <p>{description}</p>
      </div>

      <FiChevronRight size={20} />
    </Link>
  </S.CardContainer>
);

export default RepositoryCard;
