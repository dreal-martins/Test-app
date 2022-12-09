import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Flex,
  Hero,
  HeroText,
  Input,
  MovieBox,
  MovieSection,
  PTag,
  TitleText,
  Typography,
} from '../styles/styles';

export default function MovieWrapper() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get('http://www.omdbapi.com/?i=tt3896198&apikey=ed8a5a6e')
      .then((res) => {
        console.log(res);
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <Box>
        <PTag>Search</PTag>
        <Input />
      </Box>
      <Box>
        <MovieSection>{datas.Genre}</MovieSection>
      </Box>
      <Box>
        <Flex>
          <MovieBox>
            <Typography>{datas.Title}</Typography>
          </MovieBox>
          <MovieBox>
            <Typography>{datas.Title}</Typography>
          </MovieBox>
          <MovieBox>
            <Typography>{datas.Title}</Typography>
          </MovieBox>
          <MovieBox>
            <Typography>{datas.Title}</Typography>
          </MovieBox>
          <MovieBox>
            <Typography>{datas.Title}</Typography>
          </MovieBox>
        </Flex>
      </Box>
      <Box>
        <MovieSection>{datas.Genre}</MovieSection>
      </Box>
      <Box>
        <Flex>
          <MovieBox>
            <Typography>{datas.Title}</Typography>
          </MovieBox>
          <MovieBox>
            <Typography>{datas.Title}</Typography>
          </MovieBox>
          <MovieBox>
            <Typography>{datas.Title}</Typography>
          </MovieBox>
          <MovieBox>
            <Typography>{datas.Title}</Typography>
          </MovieBox>
          <MovieBox>
            <Typography>{datas.Title}</Typography>
          </MovieBox>
        </Flex>
      </Box>
    </Container>
  );
}
