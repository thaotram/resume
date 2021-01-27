module.exports = {
    ...require('@culur/prettier-config'),
    overrides: [
        {
            files: [
                // alphabetical order
                '.babelrc',
                '.czrc',
                '.releaserc',
                '.stylelintrc',
                '*.code-workspace',
            ],
            options: { parser: 'json' },
        },
        {
            files: [
                // alphabetical order
                'package.json',
                'package-lock.json',
                '*.md',
                '*.yml',
            ],
            options: { tabWidth: 2 },
        },
    ],
};
