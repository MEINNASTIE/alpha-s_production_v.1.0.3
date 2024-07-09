import { h, Fragment } from 'preact';
import './main.css';
import { FooterAlpha } from '../../layout/Footer_main';
import { HeaderAlpha } from '../../layout/Header_main';
import { MainNav } from '../../layout/Main_Nav';
import { SecondaryNav } from '../../layout/Secondary_Nav';
import useNavStore from '../../store/navStore';
export function Statistic() {
    const { setActiveNav } = useNavStore();
  
    const handleNavChange = (navItem) => {
      console.log('Navigation changed to:', navItem);
      setActiveNav(navItem);
    }

    return (
        <>
       <HeaderAlpha />
        <div className="alpha_main">
        <MainNav onNavChange={handleNavChange} />
        <SecondaryNav/>
        <div className="alpha_status_table">
        <div class="table_actual_statistic">
            {/* actual data fetch here */}
            <table>
                <tbody>
                <tr>
                    <td>&#8709;Rn &#40;1h&#41;</td>
                    <td>437&#177;45</td>
                    <td>Bq/m&#179;</td>
                </tr>
                <tr>
                    <td>&#8709; Rn &#40;1h&#41;</td>
                    <td>415&#177;22</td>  
                    <td>Bq/m&#179;</td>
                </tr>
                <tr>
                    <td>&#8709; Rn &#40;On&#41;</td>
                    <td>419&#177;11</td> 
                    <td>Bq/m&#179;</td>
                </tr>
                </tbody>
            </table>
        </div>
        </div>
        </div>
        <FooterAlpha />
        </>
    )
}