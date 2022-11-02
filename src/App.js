import { Heading, IconButton, useColorMode, Icon, Flex, Text, Stack, Spacer, Box, Link } from '@chakra-ui/react'
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';
import Swal from 'sweetalert2';
import { CiCloudSun } from 'react-icons/ci'
import 'animate.css';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [ cities, setCities ] = useState([])
  const API_KEY = '2a0f6ccc6dc7df17f067ba9c53a23a03';
  
  async function onSearch(newCity) {
    try {
      await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric&appid=${API_KEY}`)
        .then((r) => r.json())
        .then((data) => {
          const newCity = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            temp: Math.round(data.main.temp),
            feelsLike: data.main.feels_like,
            humidity: data.humidity,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon,
          };
          cities.find((e) => e.name === newCity.name)
            ? Swal.fire({
                title: "Oops...",
                text: "You've already searched for that city!",
                icon: "warning",
                confirmButtonText: "Ok",
                confirmButtonColor: "#319795",
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              })
            : setCities((allCities) => [...allCities, newCity]);
        });
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        text: "The city was not found.",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#319795",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  }

  function onClose(id){
    setCities ((allCities) => allCities.filter( c => c.id !== id))
  }


  return (
    <>
      <Stack p={4} pb={2}>
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound={true}
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
        <Flex alignItems="center" justifyContent="flex-start" wrap="wrap">
          {" "}
          <Icon as={CiCloudSun} w={16} h={16} color="teal.400" />
          <Box>
            <Heading
              size="2xl"
              fontWeight="extrabold"
              bgGradient="linear(to-r, teal.400, blue.400)"
              bgClip="text"
            >
              Weather App
            </Heading>
            <Text
              pl={4}
              bgGradient="linear(to-r, teal.400, blue.400)"
              fontWeight="extrabold"
              bgClip="text"
            >
              <Link href="https://www.linkedin.com/in/paula-kunning" isExternal>
                Made by Paula Kunning{" "}
              </Link>{" "}
            </Text>
          </Box>
          <Spacer />
          <Box alignSelf="center" paddingEnd="10">
            <SearchBar onSearch={onSearch} />
          </Box>
        </Flex>
      </Stack>
      <Cards cities={cities} onClose={onClose} />
    </>
  );
}

export default App;