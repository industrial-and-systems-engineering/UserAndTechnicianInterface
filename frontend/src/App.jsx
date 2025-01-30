import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Button, Center, VStack, Box, HStack } from '@chakra-ui/react';
import CompletedPage from './pages/CompletedPage';
import Create from './pages/Create';
import Technician from './pages/Technician';
import User from './pages/User';
import OpeningWindow from './pages/OpeningWindow';
import UserPortal from './pages/UserPortal';
import TechPortal from './pages/TechPortal';


const App = () => {

  return (
    <Box minH="100vh">
      <Routes>
        <Route path="*" element={<OpeningWindow />} />
        <Route path="/user" element={<UserPortal />}>
          <Route index element={<User />} />
          <Route path="/user/completed" element={<CompletedPage />} />
          <Route path="/user/create" element={<Create />} />
        </Route>
        <Route path="/technician" element={<TechPortal />}>
          <Route index element={<Technician />} />
          <Route path="/technician/completed" element={<CompletedPage />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;