import { heroes } from '../data/heroes';
import constants from '../../constants';

export const getHeroesByPublicher = ( publisher ) => {

  const validPublishers = [constants.DC_PUBLISHER,constants.MARVEL_PUBLISHER];

  if(!validPublishers.includes(publisher)) {
    throw new Error(`This ${publisher} does not exist!`);
  }



  return heroes.filter(hero => hero.publisher === publisher);

}