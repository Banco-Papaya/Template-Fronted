module.exports = {
    root: true,
    env: {
        "browser": true,
        "es2021": true,
        "node": true
    },

    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:nuxt/recommended",
        "plugin:prettier/recommended",
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        paser: "@typescript-eslint/parser"
    },
    plugins: [
        "vue",
        "@typescript-eslint"
    ],
    rules: {
        'vue/script-setup-no-uses-vars': 'off'
    }
}