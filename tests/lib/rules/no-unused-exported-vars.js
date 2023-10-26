/**
 * @fileoverview Find out exported but unused variables
 * @author no-unused-exported-vars
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-unused-exported-vars"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-unused-exported-vars", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "\"export const x = 1;\"",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
