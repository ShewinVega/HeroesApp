import { HeroList } from '../components/HeroList';
import constants from '../../constants';

export const MarvelPage = () => {
    return (
        <>
            <h1>
            Marvel Comics
            </h1>

            <ul>
                <HeroList publisher={constants.MARVEL_PUBLISHER} />
            </ul>
        </>
    )
}