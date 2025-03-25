import { Link } from 'react-router';
import PropTypes from 'prop-types';

//  just for separate the logic of the view
const CharactersByHero = ({ characters, alter_ego }) => {

  if(alter_ego === characters) {
    return <></>;
  }

  return <p>{ characters }</p>;

}

 
export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {


  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  // console.log(publisher);	

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={ heroImageUrl } className="card-img" alt={ superhero } />
          </div>
          <div className="col-8">

            <div className="card-body">
              <h5 className="card-title">{ superhero }</h5>
              <p className="card-text">
                  { alter_ego }
              </p>
              
              <CharactersByHero
                characters={ characters }
                alter_ego={ alter_ego }
              />

              <p className="card-text">
                <small className="text-muted">
                  { first_appearance }
                </small>
              </p>

              <Link to={`/hero/${id}`}>
                Más...
              </Link>

            </div>

          </div>
        </div>
      </div>
    </div>
  )

}



HeroCard.propTypes = {
  id: PropTypes.string,
  superhero: PropTypes.string,
  publisher: PropTypes.string,
  alter_ego: PropTypes.string,
  first_appearance: PropTypes.string,
  characters: PropTypes.string,
}

CharactersByHero.propTypes = {
  characters: PropTypes.string,
  alter_ego: PropTypes.string,
}