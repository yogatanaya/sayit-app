import React, { useState, useEffect, useRef } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonLabel,
  IonPage, 
  IonItem,
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent, 
  IonText, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonButton,
  IonRefresher,
  IonRefresherContent,
  IonBadge
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

        <Brand/>

        <div className='container'>

          <IonGrid fixed={true} style={{
            maxHeight: '80vh',
            marginTop: '180px',
            overflowY: 'auto'
          }}>
            {loading && <IonText>Tunggu Ya...</IonText>}
            {error && <IonText>{error.message}</IonText>}

            {snapshots && snapshots.map((snapshot: any) => (
              <IonCard color="light" key={snapshot.key} mode="ios">
                  <IonCardHeader>
                  
                    <IonCardTitle>
                      <IonItem color='light' style={{ marginLeft: '-20px' }}>
                        <IonBadge slot='start' color='tertiary' mode="ios">From</IonBadge>
                        <IonLabel>{snapshot.val().from}</IonLabel>
                      </IonItem>
                      <IonItem color='light' style={{ marginLeft: '-20px' }}>
                        <IonBadge slot='start' color='danger' mode="ios">To</IonBadge>
                        <IonLabel>{snapshot.val().to}</IonLabel>
                      </IonItem>

                    </IonCardTitle>

                  </IonCardHeader>
                  <IonCardContent>
                    <IonText mode="ios">
                      <p style={{ textAlign: 'left', fontWeight: '100' }}>
                        {snapshot.val().message}
                      </p>
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
