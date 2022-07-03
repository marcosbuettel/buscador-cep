import { URL_BASE } from '../../constants/URL_BASE';
import { useState, useEffect } from 'react';
import { useRequestData } from '../../hooks/useRequestDada';
import { HomeStyled, InputBoxStyled, InputInfoCep } from './HomeStyled';
import AdressInfo from '../AdressInfo/AdressInfo';

const Home = () => {
  const [url, setUrl] = useState('');
  const [url2, setUrl2] = useState('');

  const [inputRuaBuscada, setInputRuaBuscada] = useState('');
  const [inputCidadeBuscada, setInputCidadeBuscada] = useState('');
  const [inputEstadoBuscado, setInputEstadoBuscado] = useState('');

  const [inputCep, setInputCep] = useState('');
  const [inputRua, setInputRua] = useState('');
  const [inputBairro, setInputBairro] = useState('');
  const [inputCidade, setInputCidade] = useState('');
  const [inputEstado, setInputEstado] = useState('');

  const [cepData] = useRequestData(url2);
  const [cepInfo, setCepInfo] = useState([]);

  const [adressData] = useRequestData(url);

  const [tableHeader, setTableHeader] = useState(false);

  const changeInputCep = (event) => {
    setInputCep(event.target.value);
  };

  const changeInputEstado = (event) => {
    setInputEstadoBuscado(event.target.value);
  };

  const changeInputCidade = (event) => {
    setInputCidadeBuscada(event.target.value);
  };

  const changeInputRua = (event) => {
    setInputRuaBuscada(event.target.value);
  };

  const buscarCep = () => {
    setUrl(`${URL_BASE + inputCep}/json`);
  };

  const buscarEndereco = () => {
    setUrl2(
      `${
        URL_BASE + inputEstadoBuscado
      }/${inputCidadeBuscada}/${inputRuaBuscada}/json`,
    );
  };

  useEffect(() => {
    if (url2) {
      setCepInfo(cepData);
      setTableHeader(true);
    }
  }, [cepData]);

  useEffect(() => {
    if (url) {
      adressData && setInputRua(adressData.logradouro);
      adressData && setInputCidade(adressData.localidade);
      adressData && setInputBairro(adressData.bairro);
      adressData && setInputEstado(adressData.uf);
    }
  }, [adressData]);

  return (
    <HomeStyled>
      <div>
        <h2>Busque o endereço pelo cep:</h2>
        <InputBoxStyled>
          <div>
            <input type="text" value={inputCep} onChange={changeInputCep} />
            <button onClick={buscarCep}>Pesquisar</button>
          </div>

          <InputInfoCep>
            <div>
              <label>Rua:</label>
              <input type="text" value={inputRua} readOnly />
            </div>

            <div>
              <label>Bairro:</label>
              <input type="text" value={inputBairro} readOnly />
            </div>

            <div>
              <label>Cidade:</label>
              <input type="text" value={inputCidade} readOnly />
            </div>

            <div>
              <label>Estado:</label>
              <input type="text" value={inputEstado} readOnly />
            </div>
          </InputInfoCep>
        </InputBoxStyled>
      </div>

      <div>
        <h2>Busque o cep pelo endereço:</h2>
        <InputBoxStyled>
          <InputInfoCep>
            <div>
              <label>Estado:</label>
              <br />
              <input
                type="text"
                value={inputEstadoBuscado}
                onChange={changeInputEstado}
              />
            </div>

            <div>
              <label>Cidade:</label>
              <br />
              <input
                type="text"
                value={inputCidadeBuscada}
                onChange={changeInputCidade}
              />
            </div>

            <div>
              <label>Rua:</label>
              <br />
              <input
                type="text"
                value={inputRuaBuscada}
                onChange={changeInputRua}
              />
            </div>
          </InputInfoCep>
          <button onClick={buscarEndereco}>Pesquisar</button>

          <AdressInfo cepInfo={cepInfo} tableHeader={tableHeader} />
        </InputBoxStyled>
      </div>
    </HomeStyled>
  );
};

export default Home;
