'use client'
import React from 'react';
import { CldUploadWidget } from "next-cloudinary";

const Homecover = () => {
    return (
        <div>
            {/* Section Vidéo */}
            <div className='container__homecover'>
                {/* La vidéo */}
                <video
                    autoPlay
                    loop
                    controls
                    className='background__video__cover'
                >
                    <source src="https://res.cloudinary.com/dahc6jmn4/video/upload/c_fill,h_1920,w_1800/v1745529405/Affiche_A4_Nous_serons_ferme%CC%81s_Professionnel_E%CC%81le%CC%81gant_Beige_Blanc_n0jne0.mp4"
                        type='video/mp4' 
                    />
                </video>

                {/* Titre et dsecription */}
                <div className='container__homecover__content'>
                    <h1>Head Spa</h1>
                    <p>Améliorer votre santé capillaire et mentale</p>
                </div>
            </div>

            {/* Section Logo */}
            <div className='container__homecover__content__logo__container'>
                <div className='container__homecover__content__logo'>
                    {/* Logo 1 */}
                    <div className='container__homecover__content__logo__container'>
                        <div>
                            <img src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1715789459/Home/SpaMakedaCandleIcon-removebg-preview_wvsavx.svg"
                                alt="Energie intérieure"
                            />
                        </div>
                        <div>Réveillez votre énegrie<br />intérieure</div>
                    </div>
                    {/* Logo 2 */}
                    <div className='container__homecover__content__logo__container'>
                        <div>
                            <img src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1715789531/Home/SpaMakedaServietteIcon-removebg-preview_ag6tcb.svg"
                                alt="Bien être"
                            />
                        </div>
                        <div>Fleurissez votre bien être<br />et ressourcez votre esprit</div>
                    </div>
                    {/* Logo 3 */}
                    <div className='container__homecover__content__logo__container'>
                        <div>
                            <img src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1715789449/Home/SpaMakedaFaceIcon-removebg-preview_k8dzyv.svg"
                                alt="Reposez vous"
                            />
                        </div>
                        <div>Reposez vous, nous<br />prenons soin de tout</div>
                    </div>
                    {/* Logo 4 */}
                    <div className='container__homecover__content__logo__container'>
                        <div>
                            <img src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1715789426/Home/SpaMakedaOilIcon-removebg-preview_kimjlp.svg"
                                alt="Sérenité parfumée"
                            />
                        </div>
                        <div>Plongez dans un océan de<br />sérénité parfumée</div>
                    </div>
                </div>
            </div>

            {/* Section conseil */}
            <div className='container__homecover__conseil'>
                <div>
                    <span>* Hydratez-vous généreusement avant et après !</span>
                </div>
                <div>
                    <span>* Rester bien hydraté est essentiel. Votre peau vous remerciera avec éclat !</span>
                </div>
            </div>
        </div>
    )
}

export default Homecover