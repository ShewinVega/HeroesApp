import React from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

import { getHeroesByPublicher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher  }) => {

  const heroes = useMemo(() => getHeroesByPublicher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {
        heroes.map(hero => (
          <HeroCard
            key={hero.id}
            {...hero}
          />
        ))
      }
    </div>
  )

}

HeroList.propTypes = {
  publisher: PropTypes.string,
}
