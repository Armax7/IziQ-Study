import { useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
const getComments = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      body: 'Great website! Keep up the good work.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      body: 'I found a bug in your website. The contact form is not working properly.'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bobjohnson@example.com',
      body: 'Your website is amazing! I especially love the design.'
    }
  ];

const CommentsDashboard = () => {
  const [comments, setComments] = useState([]);



  return (
    <Box>
      <Heading size="lg" mb={4}>Comentarios</Heading>
      {getComments.map((comment) => (
        <Box key={comment.id} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
          <Text fontSize="lg" fontWeight="bold">{comment.name}</Text>
          <Text fontSize="md" color="gray.500">{comment.email}</Text>
          <Text fontSize="md" mt={2}>{comment.body}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default CommentsDashboard;
