// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.plaindatetime.prototype.daysinweek
description: Custom calendar tests for daysInWeek().
includes: [compareArray.js]
features: [Temporal]
---*/

let calls = 0;
class CustomCalendar extends Temporal.Calendar {
  constructor() {
    super("iso8601");
  }
  daysInWeek(...args) {
    ++calls;
    assert.compareArray(args, [pdt], "daysInWeek arguments");
    return "7";
  }
}

const calendar = new CustomCalendar();
const pdt = new Temporal.PlainDateTime(1830, 8, 25, 20, 0, 0, 0, 0, 0, calendar);
const result = pdt.daysInWeek;
assert.sameValue(result, "7", "result");
assert.sameValue(calls, 1, "calls");
