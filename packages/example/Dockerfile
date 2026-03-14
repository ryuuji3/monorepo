# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10 --activate

# Copy workspace files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY tsconfig.base.json nx.json ./
COPY packages/example ./packages/example

# Install dependencies
RUN pnpm install --frozen-lockfile --filter @monorepo/example...

# Build
RUN pnpm exec nx build @monorepo/example

# Production stage
FROM node:24-alpine AS production

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10 --activate

# Copy built artifact
COPY --from=builder /app/dist/packages/example ./dist

# Copy package.json for the package
COPY --from=builder /app/packages/example/package.json ./package.json

RUN pnpm install --prod

CMD ["node", "dist/index.js"]
