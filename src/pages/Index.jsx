import { Container, Input, VStack, HStack, Box, Image, Text, Flex, IconButton } from "@chakra-ui/react";
import { FaSearch, FaMicrophone, FaCamera } from "react-icons/fa";

const categories = ["Anime", "Background", "Art", "Drawing", "Pokemon", "Car", "Logo", "Galaxy", "Dragon", "Wolf", "Girl"];

const images = [
  { src: "https://via.placeholder.com/150", title: "Cool Wallpapers", source: "Adobe Stock" },
  { src: "https://via.placeholder.com/150", title: "Cool av Kidz Collection", source: "Posterlounge" },
  { src: "https://via.placeholder.com/150", title: "Cool Wallpapers", source: "Adobe Stock" },
  { src: "https://via.placeholder.com/150", title: "Konstnärliga illustrationer", source: "Europosters.se" },
  { src: "https://via.placeholder.com/150", title: "Super Cool Wallpaper", source: "Wallpapers.com" },
  { src: "https://via.placeholder.com/150", title: "Super Cool Wallpaper", source: "Wallpapers.com" },
  { src: "https://via.placeholder.com/150", title: "Cool Wallpapers", source: "Adobe Stock" },
  { src: "https://via.placeholder.com/150", title: "Cool Cat with sunglasses", source: "Europosters.se" },
  { src: "https://via.placeholder.com/150", title: "Cool Wallpapers", source: "Adobe Stock" },
  { src: "https://via.placeholder.com/150", title: "Cool Background", source: "Pngtree" },
  { src: "https://via.placeholder.com/150", title: "Cool iPhone 11 Wallpaper", source: "Pinterest" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <HStack spacing={2} justify="center">
          <Input placeholder="Search" size="lg" />
          <IconButton aria-label="Search" icon={<FaSearch />} size="lg" />
          <IconButton aria-label="Voice Search" icon={<FaMicrophone />} size="lg" />
          <IconButton aria-label="Image Search" icon={<FaCamera />} size="lg" />
        </HStack>
        <HStack spacing={4} overflowX="auto" py={2}>
          {categories.map((category) => (
            <Box key={category} p={2} bg="gray.200" borderRadius="md" whiteSpace="nowrap">
              {category}
            </Box>
          ))}
        </HStack>
        <Flex wrap="wrap" justify="space-between">
          {images.map((image, index) => (
            <Box key={index} p={2} width={["100%", "48%", "31%"]} mb={4}>
              <Image src={image.src} alt={image.title} borderRadius="md" />
              <Text fontSize="sm" color="gray.500">{image.source}</Text>
              <Text fontSize="md">{image.title}</Text>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;