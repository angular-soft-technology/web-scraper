import React, {Component} from 'react';
import DeveloperCard from './DeveloperCard';
import echipa from './echipa';

class DeveloperTeam extends Component{
    render(){
        return(
            <section className="DeveloperTeam">
                <h2 className="Team-name">Echipa Angular Soft Technology</h2>
                <div className='Developers-area'>
                    {echipa.map(dev => <DeveloperCard name={dev.name} info={dev.info}/>)}
                </div>
                <div className="Team-description">
                    <h2>Descrierea produsului</h2>
                    <p>Angular Soft Technology a dat startul primului produs propriu. Acest produs se imparte in doua componente:</p>
                    <p>Componenta SERVER - agregatorul de date (Scraper) si componenta CLIENT - cel mai mare Mall online in care se vor gasi toate produsele care se vand online din Romania. Aceast produs inglobeaza date importante despre TOATE produsele in Romania.</p>
                    <p>Informatia colectata va fi stocata, prelucrata si folosita in scop propriu generand date importante despre vanzari, produse, tranduri, preturi etc</p>
                </div>
            </section>
        );
    }
}

export default DeveloperTeam;