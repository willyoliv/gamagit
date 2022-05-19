import React, { useEffect, useState } from "react";
import * as S from './styled';
import { useNavigate } from "react-router-dom";

export default function Repositories() {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if (repositoriesName != null) {
      repositoriesName = JSON.parse(repositoriesName);
      setItems(repositoriesName);
    } else {
      navigate('/');
    }
  }, [navigate]);

  async function setItems(repositoriesName) {
    await setRepositories(repositoriesName);
    localStorage.clear();
  }

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        { repositories.map(repository => {
          return (
            <S.ListItem key={repository}>Repositório: {repository}</S.ListItem>
          )
        }) }
        <S.LinkHome to="/">Voltar</S.LinkHome>
      </S.List>
    </S.Container>
  );
}