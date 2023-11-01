import { IonButton, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../estudante/ExploreContainer';
import './Tab1.css';
import { home } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inicio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel class="ion-text-wrap">
            <section className="secao-1">
            <h1>Bem vindos ao Portal do Colorado</h1>
            <p>Tornar-se um sócio do nosso clube é embarcar em uma jornada incrível, repleta de benefícios exclusivos e oportunidades únicas. Clique no botão a baixo e conheça todos os benefícios</p>
            <p><strong><i></i></strong><IonButton target="_blank" rel="noopener noreferrer" href="https://socio.internacional.com.br/">Clique Aqui</IonButton></p>
           
            <IonImg
            className="img"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Escudo_do_Sport_Club_Internacional.svg"

            > 
            </IonImg>
                                
                        
            </section>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
