import styled from 'styled-components';
import vi from '../imagens/vi.jpg';
import './recomendado.css';
import onepiece from '../imagens/onepiece.jpg';
import vanitas from '../imagens/vanitas.jpg';
import bleach from '../imagens/bleach.jpg';

const Recomendado = ()=>{
    return(
        <>
            <div class="centro">
                                
                <div class="img">
                    <ImagemVi src={vi}/>    
                <div class="desc">Arcane Netflix</div>
                </div>

                <div class="img">
               
                    <ImagemVi src={onepiece}/>    
                
                <div class="desc">One Piece</div>
                </div>

                <div class="img">
               
                    <ImagemVi src={bleach}/>    
                
                <div class="desc">Bleach</div>
                </div>

                <div class="img">
               
                    <ImagemVi src={vanitas}/>        
                
                <div class="desc">Vanitas no Carte</div>
                </div>
            </div>
        </>
    );
}

export default Recomendado;

const ImagemVi = styled.img`
    width: 612px;
    height: 512px;
`;