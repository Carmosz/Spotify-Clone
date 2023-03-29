import './style.css';
import fav from "./img/fav.png";
import logo from "./img/logo.png";
import home from "./img/home.png";
import love from "./img/love.png";
import lupa from "./img/lupa.png";
import add from "./img/add.png";
import album from "./img/album.png";
import ferrugem from "./img/ferrugem.jpg";
import james from "./img/james.jpg";
import jeg from "./img/jeg.jpg";
import joao from "./img/joao.jpg";
import marilia from "./img/marilia.jpg";
import mek from "./img/mek.jpg";
import mek2 from "./img/mek2.jpg";
import top from "./img/top.jpg";
import anaevi from "./img/anaevi.jpg";
import bruno from "./img/bruno.jpg";
import coldplay from "./img/coldplay.jpg";
import deive from "./img/deive.jpg"

alert('Olá, seja bem vindo ao meu Clone do Spotify, realizado no React!');

export function Spotify() {

    return (
        <>
            <nav>
                <a href='https://open.spotify.com/'><img id='logo' src={logo} /></a>

                <div>
                    <div className='menu'>
                        <a href=''><img className='icone' src={home} />Inicio</a>
                    </div>

                    <div className='menu'>
                        <a href=''><img className='icone' src={lupa} />Buscar</a>
                    </div>

                    <div className='menu'>
                        <a href=''><img className='icone' src={album} />Sua Biblioteca</a>
                    </div>

                </div>

                <div>
                    <div className='menu'>
                        <a href=''><img className='icone' src={add} />Criar Playlist</a>
                    </div>

                    <div className='menu'>
                        <a href=''><img className='icone' src={love} />Músicas Curtidas</a>
                    </div>

                </div>
                <hr />
                <div id='play'>
                    <a href=''>Playlist 1</a>
                    <a href=''>Playlist 2</a>
                </div>

            </nav>

            <section>
                <header>
                    <a className='upgrade' href='https://www.spotify.com/br-pt/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade&ref=web_loggedin_upgrade_button'>Faça Upgrade</a>
                </header>

                <main>
                    <h1>Olá, usuário!</h1>

                    <div id='ordem'>
                        <a href='https://open.spotify.com/artist/4JNo6Q5KdcRf1vtSX9mB0S?si=5jBmTHILQMS5dOoKU_lJJA'>
                            <div className='recentes'>
                                <img id='capa' src={joao} />
                                <h3>This is João Gomes</h3>
                            </div>
                        </a>

                        <a href='https://open.spotify.com/artist/2Z0lRIqr997lIUiPtrpKCr?si=6gMsqQpPS8W_uHNfoWnhTA'>
                            <div className='recentes'>
                                <img id='capa' src={mek} />
                                <h3>This is Matheus e Kauan</h3>
                            </div>
                        </a>

                        <a href='https://open.spotify.com/artist/1yR65psqiazQpeM79CcGh8?si=QXuQS0Q_QpWBWWJ3ZFlLWQ'>
                            <div className='recentes'>
                                <img id='capa' src={marilia} />
                                <h3>This is Marilia Mendonça</h3>
                            </div>
                        </a>

                    </div>

                    <div id='ordem'>
                        <a href='https://open.spotify.com/artist/5ZfBThYiIIhL7jHMG8gDB2?si=TbWCiKRWSwC6dbglUDIcPQ'>
                            <div className='recentes'>
                                <img id='capa' src={ferrugem} />
                                <h3>This is Ferrugem</h3>
                            </div>
                        </a>

                        <a href='https://open.spotify.com/artist/1elUiq4X7pxej6FRlrEzjM?si=g6WcasXTS7yVkyu6DXE06Q'>
                            <div className='recentes'>
                                <img id='capa' src={jeg} />
                                <h3>This is Jorge e Matheus</h3>
                            </div>
                        </a>

                        <a href='https://open.spotify.com/artist/4IWBUUAFIplrNtaOHcJPRM?si=PnjA_1-0Rpur7C1HQyTZFQ'>
                            <div className='recentes'>
                                <img id='capa' src={james} />
                                <h3>This is James Arthur</h3>
                            </div>
                        </a>
                    </div>

                    <div id='linha'>
                        <h2>Tocados Recentemente</h2>
                        <a href=''>Mostrar tudo</a>
                    </div>

                    <div id='ordem'>

                        <a href='https://open.spotify.com/artist/2Z0lRIqr997lIUiPtrpKCr?si=6gMsqQpPS8W_uHNfoWnhTA'>
                            <div className='albuns'>
                                <img id='album' src={mek2} />
                                <div>
                                    <h4>Matheus e Kauan</h4>
                                    <p>Ouça os grandes sucessos da dupla!</p>
                                </div>
                            </div>
                        </a>

                        <a href='https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU?si=QoIv25GNTwmQ_8oRXI7pGw'>
                            <div className='albuns'>
                                <img id='album' src={coldplay} />
                                <div>
                                    <h4>Coldplay</h4>
                                    <p>As melhores do momento</p>
                                </div>
                            </div>
                        </a>

                        <a href='https://open.spotify.com/artist/1sPg5EHuQXTMElpZ4iUgXe?si=58xeUs6VRbiCTo7RZ2--BQ'>
                            <div className='albuns'>
                                <img id='album' src={anaevi} />
                                <div>
                                    <h4>ANAVITORIA</h4>
                                    <p>Ouça os grandes sucessos da dupla!</p>
                                </div>
                            </div>
                        </a>

                        <a href='https://open.spotify.com/artist/0du5cEVpyTK9QJze8zA0C?si=SyuKbz7zTS6V8qswQqBk_w'>
                            <div className='albuns'>
                                <img id='album' src={bruno} />
                                <div>
                                    <h4>Bruno Mars</h4>
                                    <p>As melhores do momento</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div id='linha'>
                        <h2>Suas músicas estão com saudade</h2>
                        <a href=''>Mostrar tudo</a>
                    </div>

                    <div id='ordem'>

                        <a href='https://open.spotify.com/artist/1elUiq4X7pxej6FRlrEzjM?si=g6WcasXTS7yVkyu6DXE06Q'>
                            <div className='albuns'>
                                <img id='album' src={jeg} />
                                <div>
                                    <h4>Jorge e Matheus</h4>
                                    <p>Ouça os grandes sucessos da dupla!</p>
                                </div>
                            </div>
                        </a>

                        <a href='https://open.spotify.com/artist/4IWBUUAFIplrNtaOHcJPRM?si=PnjA_1-0Rpur7C1HQyTZFQ'>
                            <div className='albuns'>
                                <img id='album' src={james} />
                                <div>
                                    <h4>James Arthur</h4>
                                    <p>As melhores do momento</p>
                                </div>
                            </div>
                        </a>

                        <a href='https://open.spotify.com/playlist/37i9dQZF1DX0FOF1IUWK1W?si=3d2dccade0ab4722'>
                            <div className='albuns'>
                                <img id='album' src={top} />
                                <div>
                                    <h4>Top Brasil</h4>
                                    <p>MC Kevin o Chris e os maiores hits do país. O que tá bombando tá aqui.</p>
                                </div>
                            </div>
                        </a>

                        <a href='https://open.spotify.com/artist/2yXSYL4govoGkKNqq6BJQW?si=Jma-ib1LQAWRsyZJI05Bhg'>
                            <div className='albuns'>
                                <img id='album' src={deive} />
                                <div>
                                    <h4>Deive Leonardo</h4>
                                    <p>As melhores do momento</p>
                                </div>
                            </div>
                        </a>
                    </div>

                </main>
            </section>





        </>
    )
}