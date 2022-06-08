import { Slideshow } from "../components/slide-show.jsx"
import { Menu } from "../components/navigation.jsx"

export default function Home() {
    return(

        <page>
            <header className="page-header">
                <Menu/>
            </header>

            <Slideshow/>

            <section id="cards">

                <h3 className="w-100 text-center my-4">
                    Vantagens de utilizar o cartão <br/> 
                    CriciumaCard: 
                </h3>
                
                <div className="card-container">


                </div>

            </section>
        </page>

    )
}   