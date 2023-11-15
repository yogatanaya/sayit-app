import React, { useState, useEffect } from 'react';
import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonCardHeader, 
    IonCardContent, 
    IonText, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonButton,
    IonItem,
    IonIcon,
    IonInput
} from '@ionic/react';
import { sendOutline } from 'ionicons/icons';
import Brand from '../components/Brand';
import './Styles.css';

import { useList } from 'react-firebase-hooks/database';
import { getDatabase, ref, push } from 'firebase/database';
import { confessionsRef } from '../Firebase';
import { useHistory } from 'react-router';

const MakeConfession: React.FC = () => {

    const history = useHistory();

    const [ from, setFromSender ] = useState('');
    const [ to, setToSender ] = useState('');
    const [ message, setMessageSender ] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log('Form values:', { from, to, message });

        const db = getDatabase();
        await push(confessionsRef, {
            from,
            to,
            message: message
        });

        setFromSender('');
        setToSender('');
        setMessageSender('');

        alert('Makasih udah submit! ^_^')
        history.push('/');

    }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='container'>

          <Brand/>

          <IonButton color='danger' fill='outline' routerLink='/' shape='round'>Kembali</IonButton>

          <IonGrid fixed={true}>
            <IonCol size='12'>
                <form onSubmit={handleSubmit}>
                    <IonItem>
                        <IonInput label="Dari Siapa" labelPlacement="stacked" placeholder="Tulis nama kamu, anonim gpp :)"
                        onIonInput={(e) => setFromSender(e.detail.value!)}
                        ></IonInput>
                    </IonItem>
                    <br/>
                    <IonItem>
                        <IonInput label="Untuk Siapa" labelPlacement="stacked" placeholder="Tulis pesan buat siapa"
                        onIonInput={(e) => setToSender(e.detail.value!)}
                        ></IonInput>
                    </IonItem>
                    <br/>
                    <IonItem>
                        <IonInput label="Pesannya" labelPlacement="stacked" placeholder="Tulis pesan"
                        onIonInput={(e) => setMessageSender(e.detail.value!)}
                        ></IonInput>
                    </IonItem>
                    <br/>
                    <IonButton shape='round' type='submit'
                    >
                        Kirim&nbsp;
                        <IonIcon icon={sendOutline}></IonIcon>
                    </IonButton>
                </form>
            </IonCol>
          </IonGrid>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default MakeConfession;
