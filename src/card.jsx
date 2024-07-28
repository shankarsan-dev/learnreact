
import pp from './assets/pp2.jpg';
 
function Card() {
    return (<>
    
        <div className="card">
            <img src={pp} alt="image not loaded" className='card-image'/>
            <h2 className='card-title'>Shankarsan Thapa</h2>
            <p className='card-description'>I create musical content and play piano</p>

        </div>

    </>);
}
 
export default Card;