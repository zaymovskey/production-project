import { type FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'app/providers/AppRouter';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter: FC = () => {
  return (
    <Routes>
      {Object.values(RouteConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className='page-wrapper'>{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
