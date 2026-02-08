# JR Marketing Pvt Ltd - POS & ERP System Demo

A professional, modern Point of Sale (POS) and Enterprise Resource Planning (ERP) system demo built with React, TypeScript, and Vite.

## 🚀 Features

### Authentication & Access
- Secure login with role-based access (Admin, Staff, Ref)
- Password visibility toggle
- Forgot password functionality

### Dashboard
- Real-time business metrics overview
- Date range filtering
- Alert system with priority levels
- Sales, purchase, and expense tracking

### User Management
- Create and manage users
- Role-based permissions
- User activity tracking

### Contact Management
- Customer and supplier management
- Bulk import via Excel
- Balance tracking

### Product Management
- Product catalog with categories
- Stock level monitoring
- Price management
- Low stock alerts
- Bulk import capability

### Sales Management
- Complete sales transaction tracking
- Invoice generation
- Payment status monitoring (Paid, Due, Partial, Overdue)
- Multiple payment methods
- Draft sales support
- Sales returns processing

### Purchase Management
- Purchase order tracking
- Supplier payment management
- Purchase returns

### Expense Management
- Expense recording and categorization
- Payment method tracking
- Expense reports

### Reports & Analytics
- Profit & Loss reports
- Sales and purchase reports
- Stock reports
- Trending products analysis
- Activity reports

### System Settings
- Company information management
- Notification preferences
- SMS template configuration

## 🛠️ Tech Stack

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **React Router** - Navigation
- **Lucide React** - Icons
- **CSS3** - Styling

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd jr-marketing-pvt-ltd

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment to Netlify

### Option 1: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

### Option 2: Deploy via Netlify Dashboard

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://app.netlify.com/)

3. Drag and drop the `dist` folder to deploy

### Option 3: Connect Git Repository

1. Push your code to GitHub/GitLab/Bitbucket

2. Go to [Netlify](https://app.netlify.com/)

3. Click "New site from Git"

4. Connect your repository

5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

6. Click "Deploy site"

## 🔐 Demo Credentials

- **Username:** admin
- **Password:** admin123

## 📁 Project Structure

```
src/
├── components/        # Reusable components
│   ├── Login.tsx
│   ├── Layout.tsx
│   └── ...
├── pages/            # Page components
│   ├── Dashboard.tsx
│   ├── Sales.tsx
│   ├── Products.tsx
│   └── ...
├── data/             # Mock data
│   └── mockData.ts
├── types/            # TypeScript types
│   └── index.ts
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## 🎨 Features Showcase

- ✅ Modern, responsive UI design
- ✅ Mobile-friendly interface
- ✅ Professional color scheme
- ✅ Intuitive navigation
- ✅ Real-time data filtering
- ✅ Alert notification system
- ✅ Comprehensive data tables
- ✅ Role-based access control

## 📝 User Stories Implemented

All 27 user stories from the requirement document have been implemented:
- Authentication (Stories 1-2)
- Dashboard (Stories 3-5)
- User Management (Story 6)
- Contacts Management (Stories 7-9)
- Product Management (Stories 10-14)
- Purchase Management (Stories 15-16)
- Sales Management (Stories 17-20)
- Expenses Management (Stories 21-22)
- Reports (Stories 23-25)
- Notifications & Settings (Stories 26-27)

## 🔧 Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` directory.

## 📄 License

This project is created as a demonstration for JR Marketing Pvt Ltd.

## 🤝 Support

For support and questions, please contact the development team.

---

**Note:** This is a front-end demo application with mock data. For production use, connect to a backend API and database.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
