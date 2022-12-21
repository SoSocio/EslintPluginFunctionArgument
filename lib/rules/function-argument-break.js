/**
 * @fileoverview Enforce line breaks between arguments of a function declaration/call or arrow function
 * @author Gain John
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'layout', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Enforce line breaks between arguments of a function declaration/call or arrow function",
      category: 'Stylistic Issues', // 'Best Practices', 'Stylistic Issues', 'Variables'
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    const severity = context.options[0] || 'error';

    return {
      // visitor functions for different types of nodes
      FunctionDeclaration(node) {
        checkParams(node.params);
      },
      ArrowFunctionExpression(node) {
          checkParams(node.params);
      },
      CallExpression(node) {
          checkParams(node.arguments);
      },
    };
    function checkParams(params) {
      for (let i = 0; i < params.length - 1; i++) {
          const param = params[i];
          const nextParam = params[i + 1];
          if (param.loc.end.line === nextParam.loc.start.line) {
              context.report({
                  node: param,
                  message: 'There should be a line break between function arguments',
                  severity,
                  fix(fixer) {
                      return fixer.insertTextAfter(param, '\n');
                  },
              });
          }
      }
    }
  },
};
