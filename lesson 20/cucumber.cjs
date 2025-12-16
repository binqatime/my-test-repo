// export default {
//     loader: ['ts-node/esm'],
//     format: ['@cucumber/pretty-formatter', 'html: ./reports/cucumber-embedded.html'],
//     formatOptions: {
//         snippetInterface: 'async-await'
//     },
//     import: ['src/**/*.ts'],
//     retry: 1
// };

const common = {
    loader: ['ts-node/esm'],
    format: ['@cucumber/pretty-formatter'],
    formatOptions: {
        snippetInterface: 'async-await'
    },
    import: ['src/**/*.ts'],
    tags: 'not @skip'
};

const ci = {
    ...common,
    format: [...common.format, 'json:./reports/cucumber.json', 'html:./reports/cucumber-embedded.html', 'junit:./reports/cucumber.xml'],
    formatOptions: {
        ...common.formatOptions
    },
    retry: 3
};

const local = {
    ...ci,
    retry: 0
};

module.exports = {
    default: common,
    ci: ci,
    local: local
};
