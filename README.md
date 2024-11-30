## Overview
This project implements sorting, searching, and pagination and shows pokemon details. The main objective is to allow users to:

- Fetch and display a list of pokemon with pagination
- Sort the Pokemon data alphabetically (A-Z, Z-A).
- Search Pokemon by name.
- Paginate results, showing 20 Pokemon per page, and navigate through them.

## Tech stack

- **Language & Library**: [Next.js](https://nextjs.org/)  
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API calls**: [Axios](https://axios-http.com/docs/intro)
- **Data fetching and caching**: [React Query](https://tanstack.com/query/v3/docs/framework/react/quick-start)

## Approach
#### 1. Data Fetching
All Pokemon data is initially fetched without pagination constraints, allowing for flexible sorting across the entire dataset.

#### 2. Sorting Logic
Sorting is performed on the full dataset (after fetching all records), rather than just the current page of results

#### 3. Sorting Options
Users can choose from the following sorting options:
- Default: No sorting applied.
- A-Z: Sort ascending order.
- Z-A: Sort descending order.

#### 4. Handling Search
Search bar allows users to filter Pokemon by name

#### 5. Displaying Sorted Data
Once the sorting and searching logic is applied, the dataset is paginated, showing 20 Pokemon per page

#### 6. Details of pokemon
User can show details of every pokemon, Include pokemon name, image, type(s), abilities, and stats (HP, Attack, Defense, Special-attack, Special-defense, Speed).

## Setup Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/devdignesh/Pok-mon-explorer-app.git
```

#### 2. Install Dependencies

We are using `pnpm` for package management. If you haven't installed `pnpm` yet, you can install it globally by running:

```bash
npm install -g pnpm
```

Once you have `pnpm` installed, run:

```bash
pnpm install
```

#### 3. Running the App

To start the development server, run:

```bash
pnpm dev
```
