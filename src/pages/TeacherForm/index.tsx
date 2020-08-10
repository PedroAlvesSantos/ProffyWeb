import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' },
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    return (
        <div id='page-teacher-form' className='container'>
            <PageHeader
                title='Que incrível que voce que dar aulas.'
                description='O primeiro passo é preencher esse formulário de inscrição.'    
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/>
                    <Textarea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Maquiagem', label: 'Maquiagem' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Artes', label: 'Artes' }
                        ]}
                    />

                    <Input name="cost" label="Custo da sua aula por hora"/>

                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    name="subject"
                                    label="Matéria"
                                    options={[
                                        { value: 'Maquiagem', label: 'Maquiagem' },
                                        { value: 'Biologia', label: 'Biologia' },
                                        { value: 'Matemática', label: 'Matemática' },
                                        { value: 'Química', label: 'Química' },
                                        { value: 'Artes', label: 'Artes' }
                                    ]}
                                />
                                <Input name="from" label="Das" type="time"/>
                                <Input name="to" label="Até" type="time"/>
                            </div>
                        )
                    })}
                    
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;