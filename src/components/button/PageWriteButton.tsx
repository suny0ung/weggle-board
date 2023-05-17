import { useNavigate } from 'react-router-dom';
import { Center, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

const PageWriteButton = () => {
  const navigate = useNavigate();

  const goToWrite = () => {
    navigate('/write');
  };

  return (
    <Center>
      <WriteButton onClick={goToWrite} colorScheme="facebook" variant="solid">
        글쓰기
      </WriteButton>
    </Center>
  );
};

export default PageWriteButton;

const WriteButton = styled(Button)`
  width: 20vw;
`;
