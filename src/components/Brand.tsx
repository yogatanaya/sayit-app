import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonRouterLink, IonButtons, IonBackButton, useIonRouter } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import { useLocation } from 'react-router';

const Brand: React.FC = () => {

  const router = useLocation();

  const isMakeConfessionPage = router.pathname === '/make-confession' || router.pathname === '/confession';

  return (
    <IonHeader translucent={true} mode='md'>
      <IonToolbar className="ion-padding">
        {isMakeConfessionPage && (
        <IonButtons slot='start'>
          <IonBackButton defaultHref='/' icon={chevronBackOutline}/>
        </IonButtons>
        )}
        <IonTitle>
          <h3 id='title' style={{ color: '#DC758F', textAlign: 'center' }}>Say<span id='title-b' style={{ color: '#000' }}>It</span></h3>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    );
};

export default Brand;
