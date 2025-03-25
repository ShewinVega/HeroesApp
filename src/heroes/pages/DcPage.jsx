import { HeroList } from '../components/HeroList';
import constants from '../../constants';

export const DcPage = () => {
    return (
        <>
            <h1>DC Comics</h1>
            <hr />

            <ul>
                <HeroList publisher={constants.DC_PUBLISHER} />
            </ul>
        </>
    )
}