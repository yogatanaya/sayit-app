import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonRouterLink } from '@ionic/react';
import Brand from '../components/Brand';
import './Styles.css';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='container'>

          <Brand/>

          <IonButton shape='round' fill='outline' size='large' color="danger" routerLink='/confession'>Lihat Pengakuan Mereka</IonButton>
          <IonButton shape='round' size='large' color="danger" routerLink='/make-confession'>Mau Confess :)</IonButton>

          <div className='text-center' style={{ marginTop: '4em'}}>
            <p>
              Project terinspirasi dari <a href="https://pengakuanterlarang.com/" target='_blank' rel='noopener noreferrer'>
              pengakuanterlarang.com
              </a>
            </p>
            <IonRouterLink routerLink='/terms'>Terms & Agreement</IonRouterLink>&nbsp; <br/>
            <small>Copyright &copy; 2023 - <a href="https://imgn-creative.com" target='_blank' rel='noopener noreferrer'>imgn creative</a></small>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
