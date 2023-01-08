import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';

import { useStore } from 'effector-react';
import { $currentCategory } from './store/CurrentCategory';

const Messages = React.lazy(() => import(/* webpackChunkName: "Messages" */ './pages/Mail'));
const Message = React.lazy(() => import(/* webpackChunkName: "Message" */ './pages/CurrentMessage'));

const App = () => {
  const currentCategory = useStore($currentCategory);

  const [searchParams, setSearchParams] = useSearchParams({ category: currentCategory });

  const category = searchParams.get('category');

  useEffect(() => {
    setSearchParams({ category: currentCategory });
  }, [currentCategory]);
  return (
    <Suspense fallback={'loading'}>
      <Routes>
        <Route path="/Mail" element={<Messages />} />
        <Route path="/Mail/:category/:message/:id" element={<Message />} />
      </Routes>
    </Suspense>
  );
};

export default App;
