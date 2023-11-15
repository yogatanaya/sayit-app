import React, { useState, useEffect, useRef } from 'react';
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
  IonRefresher,
  IonRefresherContent
} from '@ionic/react';
import Brand from '../components/Brand';
import './Styles.css';

import { useList } from 'react-firebase-hooks/database';
import { confessionsRef } from '../Firebase';

const Confession: React.FC = () => {

  const [ snapshots, loading, error ] = useList(confessionsRef);
  const refresherRef = useRef<HTMLIonRefresherElement | null>(null);

  const doRefresh = async (event: CustomEvent) => {
    setTimeout(() => {
      event.detail.complete();
    }, 1000)
  }


  return (
    <IonPage>
      <IonContent fullscreen>
          
          <IonRefresher ref={refresherRef}
          slot='fixed'
          onIonRefresh={doRefresh}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>

        <div className='container'>

          <Brand/>

          <IonButton color='danger' fill='outline' routerLink='/' shape='round'>Kembali</IonButton>

          <IonGrid fixed={true} style={{
            maxHeight: '500px',
            overflowY: 'auto'
          }}>
            {loading && <IonText>Tunggu Ya...</IonText>}
            {error && <IonText>{error.message}</IonText>}

            {snapshots && snapshots.map((snapshot: any) => (
              <IonCard color="light" key={snapshot.key}>
                  <IonCardContent>
                    <IonText className='caption'>
                      <span className='bold'>From:</span> {snapshot.val().from}
                    </IonText><br/>
                    <IonText className='caption'>
                      <span className='bold'>To:</span> {snapshot.val().to}
                    </IonText><br/>
                    <IonText class='caption'>
                      <span className='bold'> Message:</span> {snapshot.val().message}
                    </IonText>
                  </IonCardContent>
                </IonCard>
            ))}
    

          </IonGrid>


        </div>
      </IonContent>
    </IonPage>
  );
};

export default Confession;
