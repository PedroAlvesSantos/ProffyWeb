import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://instagram.fgyn1-1.fna.fbcdn.net/v/t51.2885-15/e35/69522181_390920674914494_6745624413229961550_n.jpg?_nc_ht=instagram.fgyn1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=JjyKHb2_OTcAX8w2s-_&oh=0cb200e0c3a3811a8e7db8558f9218cf&oe=5F53911E" alt="Isabella Lagazzi"/>
                <div>
                    <strong>Isabella Lagazzi</strong>
                    <span>Maquiagem</span>
                </div>
            </header>

            <p>
                21, Barra Bonita - SP
                <br/> <br/>
                As vezes faço umas makes
            </p>

            <footer>
                <p>
                    Valor/Hora
                    <strong>R$50,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>

        </article>
    )
}

export default TeacherItem;