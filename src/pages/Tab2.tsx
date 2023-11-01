import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../estudante/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Títulos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Títulos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='c'>
          <h2>Acompanhe a trajetória do colorado </h2>
          <p>Mundial de Clubes: 1992, 1993, 2005</p>
          <p>Copa Libertadores da América: 1992, 1993, 2005</p>
          <p>Copa Sul-Americana: 2012</p>
          <p>Supercopa da Libertadores da América: 1993</p>
          <p>Recopa Sul-Americana: 1993, 1994</p>
          <p>Copa Conmebol: 1994</p>
          <p>Copa Master da Conmebol: 1996</p>
          <div className="img2"></div>
                            <img src="https://1.bp.blogspot.com/-P8p2ZG3sxew/XcHwMg6spZI/AAAAAAAAoVo/L0AT1pHP1QwQA71KHTZSDSAwe6901MENwCLcBGAsYHQ/s1600/trofeus%2Bda%2Blibertadores%2B2006%2Be%2B2010%2Be%2Bmundial%2Bde%2Bclubes%2B2006%2Binternacional%2Brs.jpg"></img>
                                
        </div>
        <ExploreContainer name="Títulos" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

