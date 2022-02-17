import styled from 'styled-components';
import vi from '../imagens/vi.jpg';
import './recomendado.css';
import onepiece from '../imagens/onepiece.jpg';

const Recomendado = ()=>{
    return(
        <>
            <div class="centro">
                                
                <div class="img">
                <a target="_blank" href="fjords.jpg">
                    
                <ImagemVi src={vi}/>    
                    
                </a>
                <div class="desc">Arcane Netflix</div>
                </div>

                <div class="img">
                <a target="_blank" href="forest.jpg">
                    <img src="forest.jpg" alt="Forest" width="300" height="200"/>
                </a>
                <div class="desc">One Piece</div>
                </div>

                <div class="img">
                <a target="_blank" href="lights.jpg">
                    <img src="lights.jpg" alt="Northern Lights" width="300" height="200"/>
                </a>
                <div class="desc">Add a description of the image here</div>
                </div>

                <div class="img">
                <a target="_blank" href="mountains.jpg">
                    <img src="mountains.jpg" alt="Mountains" width="300" height="200"/>
                </a>
                <div class="desc">Add a description of the image here</div>
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