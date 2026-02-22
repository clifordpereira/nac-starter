# nuxt-auto-crud Minimal Starter

## Installation

```bash
npx nuxi init -t gh:clifordpereira/nac-starter my-app
cd my-app
```

## Generate migrations

```bash
nuxt db generate
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
nuxt dev
```

## Experiment with sample schema

You may use `curl` or any API client (such as `postman` or `rapid api`) to experiment with these endpoints.

| Action | HTTP Method | Endpoint | Example Result |
| --- | --- | --- | --- |
| **Fetch All** | `GET` | `/api/_nac/users` | List of all users (paginated) |
| **Create** | `POST` | `/api/_nac/users` | New user record added |
| **Fetch One** | `GET` | `/api/_nac/users/1` | Details of user with `id: 1` |
| **Update** | `PATCH` | `/api/_nac/users/1` | Partial update to user `1` |
| **Delete** | `DELETE` | `/api/_nac/users/1` | User `1` hard deleted from DB |


## Add more schemas

You can add more schemas in `server/db/schema.ts` or `server/db/schema/index.ts` file.
Please remember to run `nuxt db generate` after adding new schema.

## AutoCrud Configuration

Example AutoCrud configuration is provided in `nuxt.config.example.ts` file. You can copy the necessary configuration from it to `nuxt.config.ts` and modify it as per your requirements.

## Thank You
Best wishes for you coding career.
Please feel free to give your valuable feedback.