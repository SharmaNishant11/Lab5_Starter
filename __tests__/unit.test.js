// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// unit.test.js

import * as functions from '../code-to-unit-test/unit-test-me.js';

// isPhoneNumber tests
test('isPhoneNumber returns true for a valid phone number with dashes', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns true for a valid phone number with parentheses', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns false for a number with too few digits', () => {
  expect(functions.isPhoneNumber('123-456')).toBe(false);
});

test('isPhoneNumber returns false for a number with letters', () => {
  expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail tests
test('isEmail returns true for a valid email address', () => {
  expect(functions.isEmail('test@example.com')).toBe(true);
});

test('isEmail returns true for a valid email with underscores', () => {
  expect(functions.isEmail('my_email@domain.org')).toBe(true);
});

test('isEmail returns false for an email missing the @ symbol', () => {
  expect(functions.isEmail('invalidemail.com')).toBe(false);
});

test('isEmail returns false for an email missing the domain', () => {
  expect(functions.isEmail('test@')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword returns true for a valid password starting with a letter', () => {
  expect(functions.isStrongPassword('Hello123')).toBe(true);
});

test('isStrongPassword returns true for a valid password with underscores', () => {
  expect(functions.isStrongPassword('abc_def')).toBe(true);
});

test('isStrongPassword returns false for a password starting with a number', () => {
  expect(functions.isStrongPassword('1invalid')).toBe(false);
});

test('isStrongPassword returns false for a password that is too short', () => {
  expect(functions.isStrongPassword('abc')).toBe(false);
});

// isDate tests
test('isDate returns true for a valid date in MM/DD/YYYY format', () => {
  expect(functions.isDate('12/25/2023')).toBe(true);
});

test('isDate returns true for a valid date with single digit month and day', () => {
  expect(functions.isDate('1/1/2023')).toBe(true);
});

test('isDate returns false for a date with wrong year length', () => {
  expect(functions.isDate('12/25/23')).toBe(false);
});

test('isDate returns false for a date with letters', () => {
  expect(functions.isDate('mm/dd/yyyy')).toBe(false);
});

// isHexColor tests
test('isHexColor returns true for a valid 6-character hex color', () => {
  expect(functions.isHexColor('#ff5733')).toBe(true);
});

test('isHexColor returns true for a valid 3-character hex color without #', () => {
  expect(functions.isHexColor('fff')).toBe(true);
});

test('isHexColor returns false for a hex color with invalid characters', () => {
  expect(functions.isHexColor('#gggggg')).toBe(false);
});

test('isHexColor returns false for a hex color with wrong length', () => {
  expect(functions.isHexColor('#12345')).toBe(false);
});
