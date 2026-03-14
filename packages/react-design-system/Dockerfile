# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10 --activate

# Copy workspace files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY tsconfig.base.json nx.json ./
COPY packages/react-design-system ./packages/react-design-system

# Install dependencies
RUN pnpm install --frozen-lockfile --filter @monorepo/react-design-system...

# Build
RUN pnpm exec nx build @monorepo/react-design-system

# Production stage
FROM node:24-alpine AS production

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10 --activate

# Copy built artifact
COPY --from=builder /app/dist/packages/react-design-system ./dist

# Copy package.json for the package
COPY --from=builder /app/packages/react-design-system/package.json ./package.json

RUN pnpm install --prod

CMD ["node", "-e", "require('./dist/src/index.js'); console.log('Build OK')"]
