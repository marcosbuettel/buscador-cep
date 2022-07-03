import { AdressInfoStyled } from './AdressInfoStyled';
import { useEffect, useState } from 'react';

const AdressInfo = (props) => {
  const cepDataInfo =
    props.cepInfo &&
    props.cepInfo.map((cep) => {
      return (
        <tbody key={cep.cep}>
          <tr>
            <td>{cep.cep}</td>
            <td>{cep.uf}</td>
            <td>{cep.localidade}</td>
            <td>{cep.bairro}</td>
            <td>{cep.logradouro}</td>
          </tr>
        </tbody>
      );
    });

  const showTableHeader = props.tableHeader && (
    <thead>
      <tr>
        <th>CEP</th>
        <th>Estado</th>
        <th>Cidade</th>
        <th>Bairro</th>
        <th>Rua</th>
      </tr>
    </thead>
  );

  return (
    <AdressInfoStyled>
      {showTableHeader}
      {cepDataInfo}
    </AdressInfoStyled>
  );
};

export default AdressInfo;
