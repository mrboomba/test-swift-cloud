
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "./src/components/**/*.{ts,tsx}",
  generates: {
    "src/generated/": {
      preset: "client",
      plugins: ['typescript',
        'typescript-operations',
        'typescript-react-apollo'],
      config: {
        withHooks: true
      }
    }
  }
};

export default config;
