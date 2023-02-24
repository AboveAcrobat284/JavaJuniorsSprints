import '../../assets/styles/tabs.css'
import { Link } from "react-router-dom";
import Ptab from '../atoms/Ptab';
import Ptext from '../atoms/Ptext';
import RegisterTabs from '../atoms/RegisterTabs';
import Imgtabs from '../atoms/Imgtabs';

function SecctionTabs() {

    return (
        <>

            <section class="tabs">


                <div class="container">


                    <div id="tab-1" class="tab-item tab-border">
                        <Ptab class="hide-sm">¿Qué somos?</Ptab>
                    </div>


                    <div id="tab-2" class="tab-item">
                        <Ptab class="hide-sm">¿Qué ofrecemos?</Ptab>
                    </div>


                    <div id="tab-3" class="tab-item">
                        <Ptab class="hide-sm">¿Quienes somos?</Ptab>
                    </div>


                </div>


            </section>

            <section class="tab-content">

                <div class="container">
                    <div id="tab-1-content" class="tab-content-item show">


                        <div class="tab-1-content-inner">


                            <div>

                                <Ptext class="text-lg">Somos la mejor herramienta para aquellos autodidactas
                                    amantes de la programación.</Ptext>
                                <Link to="/"><RegisterTabs type={"btn btn-lg"} value={"¡Registrarse es gratis!"}></RegisterTabs></Link>


                            </div>

                            <Imgtabs src="\src\assets\img\Captura de pantalla 2022-11-03 230857.png"></Imgtabs>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default SecctionTabs;