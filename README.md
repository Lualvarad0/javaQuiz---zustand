# Quiz JavaScript con Vite + React (Última Versión) 🌟

**Este proyecto** es un _quiz_ interactivo de JavaScript creado con la última versión de Vite+React y la librería de gestión de estados **Zustand**.

---

## 🚀 Características Principales

- **Vite + React (v5.x)**: Configuración rápida y moderna con Hot Module Replacement (HMR).
- **Zustand**: Gestión de estado sencilla y escalable para manejar preguntas, respuestas y puntuaciones.
- **TypeScript**: Tipos seguros para mayor robustez.
- **ESLint & Prettier**: Código limpio y consistente.
- Diseño responsivo y accesible.

---

## 📦 Instalación y Manejo de Dependencias

Este proyecto utiliza **pnpm** para la gestión de dependencias. Si no lo tienes instalado, sigue las [instrucciones oficiales](https://pnpm.io/installation).

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/quiz-js-zustand.git
cd quiz-js-zustand

# Instalar dependencias con pnpm
pnpm install
# o con npm
npm install
# o con Yarn
yarn install
````

---

## ⚙️ Uso

```bash
# Iniciar el servidor de desarrollo
npm run dev
# Compilar para producción
npm run build
# Previsualizar build localmente
npm run preview
```

Luego, abre tu navegador en `http://localhost:5173` para comenzar a jugar.

---

## 🏗️ Estructura del Proyecto

```text
quiz-js-zustand/
├── public/           # Archivos públicos
├── src/
│   ├── assets/       # Componentes React (Pregunta, Resultado, etc.)
|   ├── hooks/ 
│   ├── services/     # Estado global con Zustand
|   ├── store/ 
│   ├── App.tsx       # Componente raíz
│   └── main.tsx      # Punto de entrada de Vite
├── .eslintrc.js      # Configuración ESLint
├── tsconfig.json     # Configuración TypeScript
├── vite.config.ts    # Configuración Vite
└── README.md         # Documentación del proyecto
```

---

## 🔧 Tecnologías y Dependencias

| Tecnología          | Versión |
| ------------------- | ------- |
| Vite                | ^6.5.3  |
| React               | ^18.2.0 |
| TypeScript          | ^5.0.0  |
| Zustand             | ^4.4.0  |
| MUI / @mui/material | ^5.13.0 |
| ESLint              | ^8.0.0  |
| Prettier            | ^2.0.0  |

---

## 🗂️ Gestión de Estado con Zust

Utilizamos **Zustand** para controlar:

* Estado de preguntas y respuestas.
* Puntuación y avance del usuario.
* Reset del quiz.

```ts
// ejemplo store/src/store/quizStore.ts
import { create } from 'zustand';

interface QuizState {
  current: number;
  score: number;
  questions: Question[];
  next: () => void;
  answer: (correct: boolean) => void;
  reset: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  current: 0,
  score: 0,
  questions: [],
  next: () => set((state) => ({ current: state.current + 1 })),
  answer: (correct) => set((state) => ({ score: state.score + (correct ? 1 : 0) })),
  reset: () => set({ current: 0, score: 0 }),
}));
```

---

## 🎨 Estilos y Accesibilidad

El proyecto usa CSS modular y componentes accesibles:

* Contraste adecuado.
* Focus states visibles.
* Navegación por teclado.

---

## 📄 Licencia

Este proyecto está licenciado bajo la [MIT](LICENSE) License.

---

> ¡Disfruta aprendiendo JavaScript con este quiz interactivo! 🚀

```
```
