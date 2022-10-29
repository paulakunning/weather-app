import { Heading, VStack, IconButton, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import SearchBar from './components/SearchBar';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton 
      icon={ colorMode === 'light' ? <FaSun/> : < FaMoon />} 
      isRound= {true} 
      size='lg' 
      alignSelf='flex-end' 
      onClick={toggleColorMode} />
      <Heading mb='8' 
      fontWeight='extrabold' 
      bgGradient='linear(to-r, teal.400, blue.400)'
      bgClip='text' > 
        Weather App 
      </Heading>
      <SearchBar/>
    </VStack>
    
  );
}

export default App;
