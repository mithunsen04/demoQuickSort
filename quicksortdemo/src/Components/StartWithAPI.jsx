



import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FcAbout,
  FcAssistant,
  FcViewDetails,
  FcDonate,
  FcManager,
} from 'react-icons/fc';

import {
  AiFillFileText
} from 'react-icons/ai';


interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function StartWithAPI() {
  return (<>
  <br/>
  <br/>
  <br/>
  <br/>
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
        EXPLORE OUR API's
        </Heading>
        <Text color={'gray.400'} fontSize={{ base: 'sm', sm: 'lg' }}>
        Get a hands on with our production ready API's and start <br/>
        building your products with AI today
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Text Summarisation'}
            icon={<Icon as={AiFillFileText} w={10} h={10} />}
            description={
              'Summarize large texts in seconds with our Summary Generating API.'
            }
            href={'#'}
          />
          <Card
            heading={'Headline Generation'}
            icon={<Icon as={AiFillFileText} w={10} h={10} />}
            description={
              'Get attention-grabbing headlines with ease using our Headline Generating API.'
            }
            href={'#'}
          />
          <Card
            heading={'Sentiment Analysis'}
            icon={<Icon as={AiFillFileText} w={10} h={10} />}
            description={
              'Understand the sentiment of your audience with our Sentiment Analysis API.'
            }
            href={'#'}
          />
          <Card
            heading={'Tags Generation'}
            icon={<Icon as={AiFillFileText} w={10} h={10} />}
            description={
              'Automate your content tagging process with our Tags Generating API.'
            }
            href={'#'}
          />
          <Card
            heading={'Question Answering'}
            icon={<Icon as={AiFillFileText} w={10} h={10} />}
            description={
              'ummarize large texts in seconds with our Summary Generating API.'
            }
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
    </>
  );
}