import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Index from './apps';
import Todo from './apps/todo';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Layout>
  );
}

export default App;
