# Email Campaign Builder

Web Application that allows users to create a custom email marketing campaigns through a RESTful API and a modern front-end UI.

#### Tech Stack

- **Frontend**: Next.js, React, React-Hook-Form, React-Quill, Axios, Classnames
- **Backend**: Next.js API Routes, Node.js
- **Validation**: Zod
- **Database**: SQLite
- **ORM**: Prisma
- **Styling**: Tailwind, DaisyUI
- **Others**: Husky, Jest, React-Testing-Library, Eslint, Prettier

#### Folder Structure

```
email-campaign-builder/
├── public/          # Static assets
├── Prisma/          # ORM folder
├── src/
│   ├── app/         # All Next.js pages and api routes
│   ├── components/  # All reusable components
│   ├── constants/   # Shared constants
│   ├── containers/  # Container components of each page
│   ├── hooks/       # Custom React hooks
│   ├── services/    # Service functions
│   ├── tests/       # Setup test files
│   ├── types/       # Shared types
│   ├── utilities/   # Helper functions and utilities
└── package.json     # Project metadata and dependencies
```

#### Pre-install

- **[node.js](https://nodejs.org/en/download)**
- **[yarn](https://classic.yarnpkg.com/lang/en/docs/install)**

#### Installation

Follow these steps to get started with the project:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/wintory/email-campaign-builder.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd email-campaign-builder
   ```

3. **Install dependencies**:

   ```bash
   yarn install
   ```

4. **Setup database (SQLite)**:

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the development server**:

   ```bash
   yarn dev
   ```

6. **Start Database server (Optional)**:

   ```bash
   npx prisma studio
   ```

Open your browser and visit `http://localhost:3000` to view the application and `http://localhost:5555` to view the database.
