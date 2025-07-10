import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import {includeIgnoreFile} from '@eslint/compat'
import {join} from "node:path";

export default tseslint.config(
    includeIgnoreFile(join(import.meta.dirname, '.gitignore')),
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'none',
                    varsIgnorePattern: '^_',
                    caughtErrors: 'none',
                    ignoreRestSiblings: true
                }
            ]
        }
    }
)
