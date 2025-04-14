import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './context/Auth';

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </AuthProvider>,
)
