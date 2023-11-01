import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import './Tab3.css';
import ExploreContainer from '../estudante/ExploreContainer';

const Tab3: React.FC = () => {
    const [dadosDaAPI, setDadosDaAPI] = useState<any>(null);
  
    useEffect(() => {
      buscarDadosDaAPI();
    }, []);
    
  
    const buscarDadosDaAPI = async () => {
      try {
        const resposta = await fetch('https://picsum.photos/200/300?grayscale');
        
        const imagemBlob = await resposta.blob();
        const urlImagem = URL.createObjectURL(imagemBlob); 
        setDadosDaAPI({ url: urlImagem });
      } catch (erro) {
        console.error('Erro ao buscar dados da API:', erro);
      }
    };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonTitle>Fotos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="container">
          
          <h1>Confira as fotografias realizadas por nosso fotógrafo colorado.</h1>
          <div className="imagem"/>
                            
                           
          
          {dadosDaAPI && (
            <div className="dados-da-api">
              <img src={dadosDaAPI.url} alt="Imagem aleatória" />
            </div>
          )}
          <IonButton id="botaoAPI" onClick={buscarDadosDaAPI}>
            Próxima foto
          </IonButton>
        </IonContent>
      </IonPage>
    );
};

export default Tab3;