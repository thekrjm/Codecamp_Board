module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "propject":["./tsconfig.json"],
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/semi": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "spaced-comment": "off",
        "@typescript-eslint/no-misused-promises": "off"
        
    }
}
