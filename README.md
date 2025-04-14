# 🦸‍♂️ heroesApp

Aplicación web construida con **React** que permite explorar héroes del universo de **Marvel** y **DC**. Incluye funcionalidades de búsqueda, detalle por héroe y control de rutas públicas y privadas mediante un sistema básico de autenticación.

## 🚀 Tecnologías utilizadas

- React
- JavaScript
- Bootstrap
- Tailwind CSS (con configuración personalizada)
- ESLint

## ✨ Funcionalidades principales

- 🔐 **Autenticación básica**: Validación de usuario con datos quemados directamente en el código. Su propósito es demostrar el control de rutas privadas/públicas.
- 📋 **Listado de héroes**: Puedes navegar entre los héroes de **Marvel** y **DC**.
- 🔍 **Buscador**: Busca héroes por nombre.
  - Estado inicial: "Busca el héroe".
  - Resultado no encontrado: "Héroe no encontrado".
  - Resultado exitoso: Lista de héroes que coinciden con la búsqueda.
- 📄 **Detalle de héroe**: Accede a información específica de un héroe haciendo clic sobre él.
- 🔒 **Rutas protegidas**: Acceso restringido a páginas internas mediante rutas privadas, visible solo si el usuario está "loggeado".

## 🗺️ Estructura de rutas

```jsx
<Routes>
  <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />

  <Route path="/*" element={<PrivateRoute />}>
    <Route path="marvel" element={<MarvelPage />} />
    <Route path="dc" element={<DcPage />} />
    <Route path="hero/:id" element={<HeroPage />} />
    <Route path="search" element={<SearchPage />} />
  </Route>

  <Route path="*" element={<LoginPage />} />
</Routes>
